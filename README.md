# GitHub Trending API

Is your repo trending on GitHub?

![Web page to UI](https://github.com/user-attachments/assets/c8b97cf1-21ba-4d14-b573-8501aa693d7a)

## API endpoints

### Requests

For today's trending repos:

- `/daily`
- `/weekly`
- `/monthly`

Using a specific date:

- `/daily?2024-09-13`
- `/weekly?2024-09-13`
- `/monthly?2024-09-13`

### Responses

GET `/daily?2024-09-13`

```json
[
  {
    "id": 1,
    "type": "daily",
    "name": "/nvm-sh/nvm",
    "message": "102 stars today",
    "trendingStars": 102,
    "language": "Shell",
    "stars": 78897,
    "forks": 7900,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 3,
    "type": "daily",
    "name": "/CorentinTh/it-tools",
    "message": "126 stars today",
    "trendingStars": 126,
    "language": "Vue",
    "stars": 20809,
    "forks": 2496,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 28,
    "type": "daily",
    "name": "/fishaudio/fish-speech",
    "message": "638 stars today",
    "trendingStars": 638,
    "language": "Python",
    "stars": 9244,
    "forks": 727,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 31,
    "type": "daily",
    "name": "/vllm-project/vllm",
    "message": "137 stars today",
    "trendingStars": 137,
    "language": "Python",
    "stars": 26629,
    "forks": 3902,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 32,
    "type": "daily",
    "name": "/protocolbuffers/protobuf",
    "message": "22 stars today",
    "trendingStars": 22,
    "language": "C++",
    "stars": 65160,
    "forks": 15441,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 30,
    "type": "daily",
    "name": "/gojue/ecapture",
    "message": "428 stars today",
    "trendingStars": 428,
    "language": "C",
    "stars": 10194,
    "forks": 1038,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 33,
    "type": "daily",
    "name": "/expressjs/express",
    "message": "102 stars today",
    "trendingStars": 102,
    "language": "JavaScript",
    "stars": 65001,
    "forks": 15514,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 34,
    "type": "daily",
    "name": "/AmruthPillai/Reactive-Resume",
    "message": "92 stars today",
    "trendingStars": 92,
    "language": "TypeScript",
    "stars": 22485,
    "forks": 2375,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 43,
    "type": "daily",
    "name": "/dair-ai/ML-YouTube-Courses",
    "message": "60 stars today",
    "trendingStars": 60,
    "language": "",
    "stars": 15366,
    "forks": 1827,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 45,
    "type": "daily",
    "name": "/krahets/hello-algo",
    "message": "131 stars today",
    "trendingStars": 131,
    "language": "Java",
    "stars": 95046,
    "forks": 12065,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 7,
    "type": "daily",
    "name": "/RSSNext/Follow",
    "message": "495 stars today",
    "trendingStars": 495,
    "language": "TypeScript",
    "stars": 7749,
    "forks": 301,
    "createdAt": "2024-09-13T00:00:00.000Z"
  },
  {
    "id": 35,
    "type": "daily",
    "name": "/jgraph/drawio-desktop",
    "message": "62 stars today",
    "trendingStars": 62,
    "language": "JavaScript",
    "stars": 49658,
    "forks": 4950,
    "createdAt": "2024-09-13T00:00:00.000Z"
  }
]
```

## Requirements

- nodejs
- postgres

## Project setup

```bash
$ npm ci
```

## Compile and run the project

```bash
# setup db
npm run db:migrate:dev

# watch mode
$ npm run start:dev
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
