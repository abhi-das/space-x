
## Feature tags

- Next
- Typescript
- React Hook
- Firebase database
- Server Side Rendering
- CSS Module Support
- SCSS Support
- Dockerise Support
- CI/CD with Github Actions
- Prettier
- eslint
- Mobile First Approach
- Progressive Web App

## Installation

- `git clone https://github.com/abhi-das/space-x.git`
- `cd packages/space-x`
- See other installation instructions below ...
- `yarn install`
- `yarn dev`
- Visit http://localhost:3000/


## Scripts

```sh
yarn format
yarn lint
```


## Firebase Data Source
[Space-X](https://space-lauch-default-rtdb.firebaseio.com/spaceX.json)


## .github/workflows/space-x-deploy.yml

```sh
name: spaceX

on:
  push:
    branches: [ master ]
    paths:
      - 'packages/space-x/**'

defaults:
  run:
    working-directory: packages/space-x

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

## Running Docker

```sh
cd infra/k8s


```

## VS codebase settings.json

```sh
{
    "git.ignoreLimitWarning": true,
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

## About Testcafe and Execution Testcase
TestCafe excels where other end-to-end testing solutions fall short. TestCafe does not depend on Selenium or other testing software. TestCafe runs on the popular Node.js platform, and makes use of the browsers that you already have. TestCafe is distributed for free under the MIT license.

```sh

yarn testcafe

```

## Performace Testing
![Screenshot](./public/others/performaceStatus.png)


## Why ESLint is Awesome
This is awesome because not only does ESLint identify ways to make code better, but if you don’t need or don’t agree with certain rules, they can be changed or ignored (either for the line, for the whole file, or for the whole project).

None of the rules depend on each other, they all function independently, and some rules can even fix the code themselves to fall in line with the prescribed rules.

## Author

[Abhishek Das](https://github.com/abhi-das)


## Inspired by

[Nextjs Typescript Official Site](https://nextjs.org/)


### License

Licensed under the [MIT license](./LICENSE). 
