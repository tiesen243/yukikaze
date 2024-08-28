# Yukikaze Repo

## Installation

```bash
git clone
cd yukikaze
bun install
```

## Usage

1. Start the postgres server with `docker`:

```bash
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres --name yukikaze-postgres postgres
```

2. Add the following environment variables to a `.env` file:

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/yukikaze-postgres
```

3. Run the application:

```bash
bun db:push
bun dev
```
