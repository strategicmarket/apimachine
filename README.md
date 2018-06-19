## Strategic Machines

## API Test runner microservices

A test runner for trigger API calls against micromachine, the developer workbench for composing microservices

## Usage

Getting the app running on your local machine takes only a few steps:

1. clone the project - `git clone https://github.com/strategicmarket/apimachine.git`
3. Update configuration parameters. A .env file with port=3100 is needed
4. start the app and execute the set of ava tests- npm run start

Runs on port 3100

The platform is configured to start a nodejs server and execute a sequence of tests using ava

One of the tests in the sequence will fire an api request to the micromachine server. If the server is not running, the test will fail and terminate this nodejs process

Postman can also be used to construct multiple tests:
1. simple http get transaction: localhost:3100/status  > renders a status object
2. http post transaction: Localhost:3100/signup   > include an payload object (raw, application/json) with email and pswd
3. simple http transaction - localhost:3100/api/ship > renders a reply object (this replicates the automated test of ava)

Microservices are the core of an Agent's 'intelligent interaction'. The design of Strategic Machines is to integrate the use NLO, NLU, NLG and Machine Learning with pure functions (microservices) -- reducing complexity, cost and cycle time for the build, test and deployment of winsome virtual Agents for businesses. The architecture of the Machines platform presumes a separation of concerns between important entities involved in the composition of cognitive apps:

> platform services- The messaging platform is a low latency processing platform, integrating channels, state machines, and data services with every message before handing it to a microservice for response
> ai services - the platform leverages ai engines for intent, entity identification and other cognitive services as required
> microservices - pure functions which parse data objects received form the platform to compose responses with precision.

There are two servers that are helpful to developers who are building microservices for consumption by the Strategic Machines platform.

> the apimachine is a test server to send a web transaction with payload to the micromachine.
> the micromachine is a test server which processes the http transaction from micromachine and runs the microservice that it hosts. Essentially, the micromachine is emulates the execution of the microservice that would otherwise need to be deployed to AWS Lamda or OpenWhisk for testing

In addition to these two test servers, the developer also has access to a constructor which permits ready interrogation of the data object through a set of methods. See @machina/message for more information

## License and Use
 [LICENSE](./LICENSE.txt)

## Contributing
 [contributing](.github/CONTRIBUTING.md)

Strategic Machines and affiliates
