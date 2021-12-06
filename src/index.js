const ReactDOM = require("react-dom");
const { default: App } = require("./app");




const rootElement = document.getElementById('root');

ReactDOM.render(
    <App />,
    rootElement
)
