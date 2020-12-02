import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
var App = function () {
    // const [ show, setShow ] = useState(true);
    // const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
    // const dogResult = data as IShowResult;
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Button, null, "Hello"),
            React.createElement(Button, { btnType: ButtonType.Primary, size: ButtonSize.Large }, "Hello"),
            React.createElement(Button, { btnType: ButtonType.Link, href: "www.baidu.com", disabled: true }, "Baidu"))));
};
export default App;
