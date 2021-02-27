# React CSS Helper

- [React CSS Helper](#react-css-helper)
  - [Project Structure](#project-structure)
    - [Project made using simple create-react-app](#project-made-using-simple-create-react-app)
  - [Bit Dev Setup](#bit-dev-setup)
  - [Css Modules](#css-modules)
    - [Button Component using plain css module](#button-component-using-plain-css-module)
    - [Button Styled Component Pure Style Component exporting style](#button-styled-component-pure-style-component-exporting-style)
      - [Pure css components for style](#pure-css-components-for-style)
    - [Usage of Button Styled Component in the Sample Component](#usage-of-button-styled-component-in-the-sample-component)
    - [Usage of Button Styled Component after being pushed to bit.dev](#usage-of-button-styled-component-after-being-pushed-to-bitdev)
  - [Future Task](#future-task)

## Project Structure

### Project made using simple create-react-app

- App.js is the root of the Project
- Components folder ```src/components/*``` houses all the components
- All Components have a index.js from which the default function is exported
- The root components folder has ```index.js``` file which exports all the public members of the various components
- execute ```npm start``` to start the project


## Bit Dev Setup

- Please follow the bit dev setup guideline on the official link of bt.dev
- All components inside the ```src/components``` are tracked
- When new changes in component is made it is pushed to the bit repo
- The bit repo is also installed to demonstrate the css-style capability in the SampleComponent2 
- You can test SampleComponent and SampleComponent2 style differences by first looking making a change in the ButtonStyled css files and seeing it's behaviour in Samplecomponent and then pushing the changes to the bit repo from where the SampleComponent2 is inherting it.
- Test Cases Missing in the current Project
- The Bit.dev version is not-updated to latest to show the difference between the local styled component and the bit available component and I am picking the style from SampleComponent2 from the bit.dev and from the local export in the SampleComponent


## Css Modules

### Button Component using plain css module

### Button Styled Component Pure Style Component exporting style

#### Pure css components for style

### Usage of Button Styled Component in the Sample Component

### Usage of Button Styled Component after being pushed to bit.dev

## Future Task

- [ ] Theme Support
- [ ] Interoperable style setup (Web,Native)
- [ ] Supporting any css style
- [ ] React Native Support
- [ ] Babel plugin reeact-css-integration
  