# Getting Started with Ília get Pokémons
This project was made to comply with the Ília front end test.

## 1. Clone the repo

`$ git clone git@github.com:ChristianBarreto/ilia-frontend-challenge.git`

## 2. Install dependencies

`$ yarn install`

## 3. How to run this project
This project runs on local environment. For that you can use the following script:

`$ yarn start`

## 4. How to run tests
This project supports automated unit tests with Jest, and Cypress for End to End tests.

### 4.1 To run unit tests, use the following script:

`$ yarn test` and press `q` to exit

### 4.2 To run E2E tests, use the following script:
To run the Cypress headless use:

`$ yarn cypress:test`
(make sure you are running the project on your local environment)

## 5. Project strategy
a. I'm delivering all requirements mentioned on the test Repo and email. As part of my strategy I decided to focus on the main functionalities and delivery a sample of usage of the side requirements.

b. To fetch the Pokemon TGC REST API I used pure Axios and useEffect to call the api once this is a simple project, but in more complex projects we can use OpenAPI to create the Axios request from yml files, and also use React Query to easilly access the database state and apply caching.

c. **NOTE:** Not all cards have all data required to be shown on details page (e.g ID: xy4-117 has no resistance, weaknesses, etc)

d. While installing i18-next for internationalization I faced issues with TypeScript version of the dependencies not having available time to properlly fix it, so I was forced to use Yarn as package managment, so NPM may not work.

e. Once TailwindCSS is a important requirement for this position I decided to implement this project using it. I also installed SASS and add to one component `<PokeballMenu />` as an example of usage.

f. If you search for the word "NOTE", you will find few comments that I did to explain why made some decisions.

## 6. Design patterns
I applied the Atomic design pattern to define the directory structure as far as this pattern matches with the atomicity React concept.

I also applied wildly the immutability concept to handle React states and context.

## 7. My contact
Please, feel free to discuss with me all the details about this project and why I took determined decisions.

**Christian Barreto**

christiannabasbarreto@gmail.com

(22) 98111-1706