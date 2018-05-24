## Strategic Machines

## API Test runner microservices

A test runner for trigger API calls against micromachine, the developer workbench for composing microservices

## Usage

Getting the app running on your local machine takes only a few steps:

1. clone the project - `git clone https://github.com/strategicmarket/apimachine.git`
3. Update configuration parameters. A .env file with port=3100 is needed
4. start the app - npm run start

Runs on port 3100

The platform is configured to start a nodejs server and execute a sequence of tests using ava

One of the tests in the sequence will fire an api request to the micromachine server. If the server is not running, the test will fail and terminate this nodejs process

Postman can also be used to construct multiple tests:
1. simple http get transaction: localhost:3100/status  > renders a status object
2. http post transaction: Localhost:3100/signup   > include an payload object (raw, application/json) with email and pswd
3. simple http transaction - localhost:3100/api/ship > renders a reply object (this replicates the automated test of ava)

## License and Use
 [LICENSE](./LICENSE.txt)

## Contributing
 [contributing](.github/CONTRIBUTING.md)

Strategic Machines and affiliates
