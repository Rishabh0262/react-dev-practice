# Getting Started with Create React App

1. ## `npx create-react-app <project name>` 
2. ## `cd hello-world`


## How to revise the React through this project efficiently

    1. come to "master" branch. Up to Lec. 24, all the files are present here.

    2. Open App.js file : Here all the the component-use hierarchy is given in segments. 
            Having Recent Lecture on top.

### Though you can check the 'import' list in the for true hierarchy order of components.
        
    3. Each segment shows, which "component" used first and which one at later. 
            From Up-to-Down


    4. Further Explanation is withing the Components.
    
    
## Extention :  ES7+ React/Redux/React-Native/JS snippets

































This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



























<!-- ********* Component Lifecycle method ********** -->


    Mounting(4) : Constructor, static getDerivedStateFromProps, render, componentDidMount

        constructor(props) : A special function that will get called whenever the  Component is created.
            USE          : Initialise state , Binding the event handler.
            DON'Ts       : do not cause side effects. Ex: HTTP request.
            KEEP IN MIND : super(props) , Directly overwrite this.state(only in here, elsewhere we'll need to use the setState().)

        static getDerivedStateFromProps(props, state) : When state ooff the component depends on the changes of props over time.
            USE    : set the State (when the prop is being passed to the state.)
            DON'Ts : do not cause side effects. Ex: HTTP request.

        render()    : Only required method in the RCE.
             USE    : Read props & state , return JSX
             DON'Ts : Do not change state or interact with DOM or make ajax calls.
             * Children components lifecycle methods are also executed. * 

        componentDidMount() : invoked immediately after a component & all its children component have been rendered to the DOM.
            USE : Cause side effect. Ex. Interact with the DOM or perform any ajax call to load the data.





    Updatding(5) : static getDerivedStateFromProps, shouldComponentUpdate, render,            getSnapshotBeforeUpdate, componentDidUpdate

        static getDerivedStateFromProps(props, state) : method is called everytime the component is re-rendered.  {rarely used method}
            USE    : set the State (when the prop is being passed to the state.)
            DON'Ts : do not cause side effects. Ex: HTTP request.

        shouldComponentUpdate(nextProps, nextState) : Dictates if the component should update or not.      {rarely used method}
            USE    : Performance Optimization
            DON'TS : do not cause side-effects.  Ex: HTTP request.  OR calling setState() method.
   
        render()    : Only required method in the RCE.
             USE    : Read props & state , return JSX
             DON'Ts : Do not change state or interact with DOM or make ajax calls.
             * Children components lifecycle methods are also executed. * 

        getSnapshotBeforeUpdate(nextProps, nextState) : called right before the changes from the virtual DOM are to be reflected in the DOM.
            USE    : capture some information from the DOM.
                    the method will either returns a value or null. Returnd value to be passed as 3rd parameter to the next method.

        componentDidUpdate(nextProps, nextState, snapshot) : called after the render is  finished in the re-render cycles.
            USE : cause side effects 




    Unmounting(1) : componentWillUnmount

    Updating(2) : static getDerivedStateFromError , componentDidCatch





