
  

## Installation

  

```bash

$  npm  install

```

  

## Running the app

  

```bash

# development

$  npm  run  start

  

# watch mode

$  npm  run  start:dev

  

# production mode

$  npm  run  start:prod

```

  

## Test

  

```bash

# unit tests

$  npm  run  test

  

# e2e tests

$  npm  run  test:e2e

  

# test coverage

$  npm  run  test:cov

```

### HOW TO USE

 - CLONE THE REPOSITORY
 - CHANGE THE DB PASSWORD TO YOUR OWN DB PASSWORD
 - RUN `npm install`
 - RUN `npm run start:dev`
 
### WHERE TO ADD WHAT
 - SQL QUERIES IN CONTROLLER & SERVICES(Better to write in services for separation of concern)
 - Controllers guide the routes
 - Analytics is hidden from plain user. So only specific user can access /analytics route
