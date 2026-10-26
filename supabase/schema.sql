create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.learning_paths (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.daily_tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'pending',
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  content text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  type text,
  url text,
  description text,
  source text,
  level text,
  language text,
  tags text[] default '{}',
  is_paid boolean not null default false,
  status text not null default 'draft',
  verified_at text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.study_stats (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  date date not null,
  tasks_completed integer not null default 0,
  study_minutes integer not null default 0,
  streak integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, date)
);

create index if not exists profiles_updated_at_idx on public.profiles(updated_at desc);
create index if not exists learning_paths_user_id_idx on public.learning_paths(user_id, created_at desc);
create index if not exists daily_tasks_user_id_idx on public.daily_tasks(user_id, due_date, status);
create index if not exists notes_user_id_idx on public.notes(user_id, updated_at desc);
create index if not exists resources_status_idx on public.resources(status, updated_at desc);
create index if not exists study_stats_user_id_idx on public.study_stats(user_id, date desc);

alter table public.profiles enable row level security;
alter table public.learning_paths enable row level security;
alter table public.daily_tasks enable row level security;
alter table public.notes enable row level security;
alter table public.resources enable row level security;
alter table public.study_stats enable row level security;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.email),
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create or replace trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create policy "Users can view their own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "Users can view their own learning paths"
on public.learning_paths
for select
using (auth.uid() = user_id);

create policy "Users can insert their own learning paths"
on public.learning_paths
for insert
with check (auth.uid() = user_id);

create policy "Users can update their own learning paths"
on public.learning_paths
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own learning paths"
on public.learning_paths
for delete
using (auth.uid() = user_id);

create policy "Users can view their own tasks"
on public.daily_tasks
for select
using (auth.uid() = user_id);

create policy "Users can insert their own tasks"
on public.daily_tasks
for insert
with check (auth.uid() = user_id);

create policy "Users can update their own tasks"
on public.daily_tasks
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own tasks"
on public.daily_tasks
for delete
using (auth.uid() = user_id);

create policy "Users can view their own notes"
on public.notes
for select
using (auth.uid() = user_id);

create policy "Users can insert their own notes"
on public.notes
for insert
with check (auth.uid() = user_id);

create policy "Users can update their own notes"
on public.notes
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own notes"
on public.notes
for delete
using (auth.uid() = user_id);

create policy "Anyone can view published resources"
on public.resources
for select
using (status = 'published');

create policy "Admins can manage resources"
on public.resources
for all
using (true)
with check (true);

create policy "Users can view their own stats"
on public.study_stats
for select
using (auth.uid() = user_id);

create policy "Users can insert their own stats"
on public.study_stats
for insert
with check (auth.uid() = user_id);

create policy "Users can update their own stats"
on public.study_stats
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own stats"
on public.study_stats
for delete
using (auth.uid() = user_id);

create or replace function public.update_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
before update on public.profiles
for each row execute function public.update_updated_at();

create trigger learning_paths_updated_at
before update on public.learning_paths
for each row execute function public.update_updated_at();

create trigger daily_tasks_updated_at
before update on public.daily_tasks
for each row execute function public.update_updated_at();

create trigger notes_updated_at
before update on public.notes
for each row execute function public.update_updated_at();

create trigger resources_updated_at
before update on public.resources
for each row execute function public.update_updated_at();

create trigger study_stats_updated_at
before update on public.study_stats
for each row execute function public.update_updated_at();

comment on table public.profiles is 'Application user profile information';
comment on table public.learning_paths is 'Course progression and roadmap metadata for each user';
comment on table public.daily_tasks is 'Daily task tracking for each user';
comment on table public.notes is 'Study notes and learning summaries';
comment on table public.resources is 'Curated learning resources catalog';
comment on table public.study_stats is 'Daily study data and progress counters';
