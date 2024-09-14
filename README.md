# GitHub Trending API

Is your repo trending on GitHub?

## TASKS

- bi-daily cron job
- deploy

## API endpoints

For today's trending repos:

- `/daily`
- `/weekly`
- `/monthly`

Using a specific date:

- `/daily?2024-09-13`
- `/weekly?2024-09-13`
- `/monthly?2024-09-13`

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
