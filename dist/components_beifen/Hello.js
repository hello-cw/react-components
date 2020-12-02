import React from 'react';
var Hello = function (props) {
    return React.createElement("h2", null, props.message);
};
Hello.defaultProps = {
    message: 'Hello World'
};
export default Hello;
