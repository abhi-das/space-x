
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

## Local EndPoints

```sh
GET:
http://{host}:{PORT}/{version}/launches
http://{host}:{PORT}/{version}/launches?limit=5&landing_successful=true
http://{host}:{PORT}/{version}/launches?limit=1&landing_successful=true&launch_successful=false
http://{host}:{PORT}/{version}/launches/{id}/launch
http://{host}:{PORT}/{version}/launches/currentuser


POST:
http://{host}:{PORT}/{version}/signin
http://{host}:{PORT}/{version}/login
http://{host}:{PORT}/{version}/logout
http://{host}:{PORT}/{version}/launches
```

## Heroku EndPoints

```sh
GET:
https://space-x-apiv.herokuapp.com/{version}/launches
https://space-x-apiv.herokuapp.com/{version}/launches?limit=5&landing_successful=true
https://space-x-apiv.herokuapp.com/{version}/launches?limit=1&landing_successful=true&launch_successful=false
https://space-x-apiv.herokuapp.com/{version}/launches/{id}/launch
https://space-x-apiv.herokuapp.com/{version}/currentuser


POST:
https://space-x-apiv.herokuapp.com/{version}/signin
https://space-x-apiv.herokuapp.com/{version}/signup
https://space-x-apiv.herokuapp.com/{version}/signout
https://space-x-apiv.herokuapp.com/{version}/launches
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

## Mono Repo Project Deployment

First Time add heroku remote in local

```sh
heroku git:remote -a space-x-apiv
```

Run from root directory of the project.

```sh

heroku login
heroku git:clone -a <heroku project name>

git add .
git commit -m "comments"
git subtree push --prefix packages/space-services heroku master

OR

git push heroku `git subtree split --prefix packages/space-services master`:master --force

heroku logs

```
Always run `heroku logs` once deployment is done to check if DB is connected and required ENV variables are set on heroku properly.


## Morgan Package for Application Logger
## Environment NPM Package for secrets

## Authors

[Abhishek Das](https://github.com/abhi-das)