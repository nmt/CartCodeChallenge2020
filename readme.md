# Developer notes

## How to preview the app
[Preview on Netlify](https://jolly-feynman-1d340e.netlify.app/)!

## How to run the app locally
- `npm run start`
- In your browser, navigate to [http://localhost:3000](http://localhost:3000)

## To-do

### MVP
- ~~Basic page~~
- ~~Components~~
- ~~Interactive components functionality~~
    - ~~Profile select~~
    - ~~Cart quantities and subtotal~~
    - ~~Grand total~~
    - ~~Profile special pricing~~
- ~~UI tests~~
- Logic/functionality tests
- ~~Basic styling~~
---
### Make it spicy 🌶
- Add product listings and 'separate' cart
- ~~Fix up `TODO`s~~
- Better styling
    - [Seek Style Guide](http://seek-oss.github.io/seek-style-guide/)
    - [seek-style-guide GitHub page](https://github.com/seek-oss/seek-style-guide)
- Product listings populate from a JSON of products

## Future improvements
- Special pricing rules
    - What if the 'BOGO' type rule can be applied across products, e.g.: 'Buy 2 Classic Ads, get 1 Stand Out Ad free'?
- Reassess cart totals including discounts before updating state

## Resources
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
    - Quick and basic React app setup
- [Adding Typescript to CRA](https://create-react-app.dev/docs/adding-typescript/)
- Solving issues with using TS with React
    - ['No overload matches this call'](https://stackoverflow.com/questions/58449813/react-typescript-error-no-overload-matches-this-call)
        - The component must have an interface that includes the prop being passed
    - ['Property 'value' does not exist on type 'Readonly<{}>'](https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly)
        - The App's class definition needs to include default types for state and props
        - Bad: `React.Component`
        - Good: `React.Component<{}, {profile: string}>`
- [Updating a value in an array of objects](https://medium.com/javascript-in-plain-english/react-updating-a-value-in-state-array-7bae7c7eaef9)
- [Formatting a number as currency](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

### Styling
- [Medium article on the Seek design system](https://medium.com/seek-blog/sketching-in-the-browser-33a7b7aa0526)
- [Seek Style Guide](http://seek-oss.github.io/seek-style-guide/)
- [seek-style-guide GitHub page](https://github.com/seek-oss/seek-style-guide)
- ["support for the experimental syntax jsx isn't currently enabled"](https://stackoverflow.com/a/64434905)
