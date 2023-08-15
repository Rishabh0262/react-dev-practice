# Getting Started with Create React App

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



















## listing commits

    1. Untill Lecture 24, LifeCycle Component

    2. Here we used the Table.js & Columns.js(as child component).
    
        But in child component 2 <td> can't be return in <div> tag... as it is a subcomponent of <table> tag.

        That's why, we need to use either <> ... </> OR <React.Fragment> ... <React.Fragment>

    3. Console warnings from the Column.js is resolved using wraping the elements into <> ... </>.

    4. Example of using 'key' attribute in <React.Fragment>...</React.Fragment>

    5. Restored App.js to to blank.

    6. Here we used PureComponent & RegularComponent comparision. 
        So console is showing re-rendering of with a buffer or 2 secs.

    7. rendered props in Child Component that is passed from Parent Component.

    8. used  ParentComponent as PureComponent. 
        Make sure to use the NEW array/object to show difference in prev. or curr. state/props.

    9. Memo is for Functional Component. (as same as PureComp for Class Component). 
        we export React.memo(functional-ComponentName).

    10. We do nothing but use 'React.memo(<name_of_functional_component>)' in 'export default' of 'MemoComp.js'.   
            This way it will help me avoiding unnecessary re-render of the Component in the web page.   
            [MemoComponent => rfce, PureComponent => rce].

    11. used  ParentComponent as PureComponent. 
            Make sure to use the NEW array/object to show difference in prev. or curr. state/props.

    12. Memo is for Functional Component. 
            (as same as PureComp for Class Component). 
            we export React.memo(functional-ComponentName).

    13. We do nothing but use 'React.memo(<name_of_functional_component>)' in 'export default' of 'MemoComp.js'.   
            This way it will help me avoiding unnecessary re-render of the Component in the web page.   
            [MemoComponent => rfce, PureComponent => rce]












