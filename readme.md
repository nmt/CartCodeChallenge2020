# Developer notes

## How to preview the app
...

## How to run the app locally
- `npm run start`
- In your browser, navigate to [http://localhost:3000](http://localhost:3000)

## To-do

### MVP
- ~~Basic page~~
- ~~Components~~
- Interactive components functionality
    - ~~Profile select~~
    - Cart quantities and ~~subtotal~~
    - ~~Grand total~~
    - Profile special pricing
- Basic styling
---
### Make it spicy 🌶
- Better styling
- Add product listings and 'separate' cart
- Product listings populate from a JSON of products

## Future improvements
...

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
