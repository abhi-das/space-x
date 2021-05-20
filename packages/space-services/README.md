
## space-services API End Points

```sh

GOAL: Get all space-x launches
path: /launches
method: GET
body: -
query: {
  limit=100
  launch_success=true
  land_success=false
}

GOAL: Create mission
path: /launches
method: POST
body: { missionId, missionName, launch_success, land_success, launch_year }
params: -

GOAL: Get launch by id
path: /launches/:{id}/launch
method: GET
body: -
params: -
query: {id}

```

## EndPoints

```sh
GET:
http://{host}:{PORT}/{version}/launches
http://localhost:8011/v3/launches?limit=5&landing_successful=true
http://{host}:{PORT}/{version}/launches?limit=1&landing_successful=true&launch_successful=false
http://{host}:{PORT}/{version}/launches/{id}/launch


POST:
http://{host}:{PORT}/{version}/login
http://{host}:{PORT}/{version}/launches
```
Note: JWT token would be required to get the URL working. Login endpoint will be generating JWT token.

## Protected API Endpoints using JWT Middleware

```sh

jwt.sign( payload, secretKey, options )
jwt.verify( token, secretKey)

```

## .github/workflows/space-x-api-deploy.yml

```sh
name: spaceServices

on:
  push:
    branches: [ master ]
    paths:
      - 'packages/space-services/**'

defaults:
  run:
    working-directory: packages/space-services

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '15'
      - run: npm install -g yarn
      - run: yarn install --frozen-lockfile
      - run: yarn build

```

## Jest Test case Enabled

```sh

yarn jest

```

## ESlint

```sh

yarn lint

```

## Prettier

```sh

yarn format

```

## Morgan Package for Application Logger
## Environment NPM Package for secrets

## Authors

[Abhishek Das](https://github.com/abhi-das)