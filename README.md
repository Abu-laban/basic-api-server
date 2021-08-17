# basic-express-server

## LAB - 03

### Deployment Test

**Author: Tariq Abu-Laban**

- [tests report](https://github.com/Abu-laban/basic-api-server/actions).
- [back-end](https://basic-back-server.herokuapp.com/).
- [pull request](https://github.com/Abu-laban/basic-api-server/pull/1).

**Setup**

`.env` **requirements**

- `PORT` - Port Number

- `POSTGRES_URI` = Postgres DB

**Running the app**

- `npm start`

- Endpoint: `/food/2`

  - Returns Object

        {
        "foodName": "mansaf",
        }

**Tests**

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`

PASS **test**/server.test.js

    ● Console

    console.log
      Request LOGGER 📝 Request Methode: 👉 " GET " 😳 & Requset Path: 👉 " /food " 🧑

      at Object.<anonymous>.module.exports (src/middleware/logger.js:4:13)

    console.log
      Executing (default): SELECT "id", "foodName", "createdAt", "updatedAt" FROM "Food" AS "Food";

      at Sequelize.log (node_modules/sequelize/lib/sequelize.js:1177:15)

    console.log
      Request LOGGER 📝 Request Methode: 👉 " GET " 😳 & Requset Path: 👉 " /clothes " 🧑

      at Object.<anonymous>.module.exports (src/middleware/logger.js:4:13)

    console.log
      Executing (default): SELECT "id", "clothesName", "createdAt", "updatedAt" FROM "Clothes" AS "Clothes";

      at Sequelize.log (node_modules/sequelize/lib/sequelize.js:1177:15)

    console.log
      Request LOGGER 📝 Request Methode: 👉 " GET " 😳 & Requset Path: 👉 " /bad " 🧑

      at Object.<anonymous>.module.exports (src/middleware/logger.js:4:13)

    console.log
      Request LOGGER 📝 Request Methode: 👉 " GET " 😳 & Requset Path: 👉 " /notfound " 🧑

      at Object.<anonymous>.module.exports (src/middleware/logger.js:4:13)

PASS **test**/logger.test.js

-----------------------------------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------------------|---------|----------|---------|---------|-------------------
All files | 68.42 | 50 | 44.44 | 68.42 |
src | 88.89 | 100 | 33.33 | 88.89 |
server.js | 88.89 | 100 | 33.33 | 88.89 | 31-32
src/business | 22.22 | 100 | 20 | 22.22 |
clothesRoutes-implementations.js | 22.22 | 100 | 20 | 22.22 | 5-7,16-32
foodRoutes-implementations.js | 22.22 | 100 | 20 | 22.22 | 5-7,16-32
src/error-handlers | 100 | 50 | 100 | 100 |
404.js | 100 | 100 | 100 | 100 |
500.js | 100 | 50 | 100 | 100 | 4
src/middleware | 100 | 100 | 100 | 100 |
logger.js | 100 | 100 | 100 | 100 |
src/models | 100 | 100 | 100 | 100 |
clothes.js | 100 | 100 | 100 | 100 |
food.js | 100 | 100 | 100 | 100 |
index.js | 100 | 100 | 100 | 100 |
src/routes | 100 | 100 | 100 | 100 |
clothes.js | 100 | 100 | 100 | 100 |
food.js | 100 | 100 | 100 | 100 |
-----------------------------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total

Tests: 6 passed, 6 total

Snapshots: 0 total

Time: 0.629 s, estimated 1 s

Ran all test suites.
