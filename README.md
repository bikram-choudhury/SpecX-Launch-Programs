# SpecX Launch Programs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<p align="center">
    <img src="https://github.com/bikram-choudhury/SpecX-Launch-Programs/blob/master/assets/desktop-view.PNG" alt="Desktop View" width="900" height="400">
</p>
<p align="center">
    <img src="https://github.com/bikram-choudhury/SpecX-Launch-Programs/blob/master/assets/tablet-view.PNG" alt="Tablet View" width="450" height="500">
    <img src="https://github.com/bikram-choudhury/SpecX-Launch-Programs/blob/master/assets/mobile-view.PNG" alt="Tablet View" width="350" height="500">
</p>


**What's included:**
- [Redux](https://redux.js.org/) for state management
- React Router
- CSS Modules, Scss, and autoprefixer 
- Responsive
- Runtime type checking for React props with [prop-types](https://github.com/facebook/prop-types)
- [ESLint](https://eslint.org/docs/rules/) run on commit
- [Jest](https://jestjs.io/en/) and [Enzyme](https://enzymejs.github.io/enzyme/docs/guides/jest.html) to run unit testcases
- Dev server with hot reloading styles

## Initial setup

- `npm install`

## Development

- `npm start`
  - Start the dev server at [http://localhost:3000](http://localhost:3000)
- `npm run test:watch`
  - Run `jest` in watch mode
- `npm run test:coverage`
  - Run `jest` and produce the coverage report for all files

## Production

- `npm run build`
  - Bundle the JSX files into `build` directory

## General architecture

This app has entrypoint for the code `src/index.js` first checks if the current browser needs to be polyfilled and then defers to src/main.js to hydrate the React application. These two files are only ever called on the client, so you can safely reference any browser APIs here without anything fancy. The rest of the client code is a React application. You can edit/modify everything inside src/ and make it your own.

This app has been develpoed with all latest react hooks like: `useEffect(), useCallback(), memo(), useHistory()`. 

## Test Report

<p align="center">
    <img src="https://github.com/bikram-choudhury/SpecX-Launch-Programs/blob/master/assets/test-coverage.PNG" alt="Tablet View" width="850" height="380">
</p>

## Lighthouse

<p align="center">
    <img src="https://github.com/bikram-choudhury/SpecX-Launch-Programs/blob/master/assets/lighthouse-report.PNG" alt="Tablet View" width="850" height="380">
</p>

### See in details
- [Mobile](https://github.com/bikram-choudhury/SpecX-Launch-Programs/blob/master/assets/mobile-lighthouse-report.pdf)
- [Browser](https://github.com/bikram-choudhury/SpecX-Launch-Programs/blob/master/assets/desktop-lighthouse-report.pdf)


[👉 See the Website](https://specx-launch-programs.netlify.app)
