## Strategic Machines

## API Test runner microservices

A test runner for trigger API calls against micromachine, the developer workbench for composing microservices

## Usage

Getting the app running on your local machine takes only a few steps:

1. clone the project - `git clone https://github.com/strategicmarket/apimachine.git`
3. Update configuration parameters
4. start the app - npm run start

The platform is configured to start a nodejs server and execute a sequence of tests using ava

One of the tests in the sequence will fire an api request to the micromachine server. If the server us not running, the test will fail and terminate this nodejs process

## License and Use
 [LICENSE](./LICENSE.txt)

## Contributing
 [contributing](.github/CONTRIBUTING.md)

Strategic Machines and affiliates
