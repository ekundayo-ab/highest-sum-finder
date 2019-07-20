# Highest Sum Finder
An application for calculating the highest sum of an array of integer values, in finding this sum, pair of items in the array can be multiplied together and added to the remaining items in the array.

This application provides functionality for entering the array integer values as comma separated inputs in a text box and submitting the form to see the generated highest sum. View it live here https://highest-sum-finder.netlify.com/

### Requirements
- NodeJS and NPM

### Installation
- Clone this repository `git clone git@github.com:ekundayo-ab/react-highest-sum-finder.git`
- `cd` into project directory on the terminal `cd react-highest-sum-finder`
- Install dependencies `npm install`

### Running the Application
- To run project do `npm start`
- To build for production do `npm run build`

### Testing
The unit test for the `findHighestSum` function has different datasets used in testing to ensure that the function works as expected. To run tests, ensure you are in the project directory in the terminal and execute `npm test` or `npm run test`
NB: After running `npm test` or `npm run test` if test results is not generated press `a` and it should be generated in the terminal.

See tests shots run below
![Unit test](screenshots/unit_tests.png?raw=true "Unit Test")

### Screenshots
![Default State](screenshots/default_state.png?raw=true "Default State")
![Sum Generated](screenshots/sum_generated.png?raw=true "Sum Generated")
![No Inputs](screenshots/no_inputs.png?raw=true "No Inputs")
![Invalid Inputs](screenshots/invalid_inputs.png?raw=true "Invalid Inputs")
