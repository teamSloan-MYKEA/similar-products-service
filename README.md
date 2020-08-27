# Project Name

> This is Team O'Malley's Front End Capstone project detailing an items page from IKEA. Each member of the team was tasked to build part of the page using React components and persistent data that mimic the website. This microservice will render 12 unique similar products viewable in a carousel.

## Related Projects

  - https://github.com/hrr47-fec-omalley/main-title-pictures-service
  - https://github.com/hrr47-fec-omalley/add-to-bag-service
  - https://github.com/hrr47-fec-omalley/reviews-service
  - https://github.com/hrr47-fec-omalley/similar-products-service


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node

### Installing Dependencies

From within the root directory:

npm install
npm install -g nodemon

## Development

From the root directory:

  # Seed to database
  npm run seed
  # Testing
  npm run test
  # Start webpack
  npm run client
  # Start server
  npm run server

## Endpoints

### GET - /:id/similar/:id
Getting pictures with ID

### POST - /:id/similar/:id
Create records with id, name, description, stars, price, photo1, and photo2

### PUT - /:id/similar/:id
Create records with id and name

### DELETE - /:id/similar/:id
Delete records with id


