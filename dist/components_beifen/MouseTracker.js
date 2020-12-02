import React, { useState, useEffect } from 'react';
var MouseTracker = function () {
    var _a = useState({ x: 0, y: 0 }), positions = _a[0], setPositions = _a[1];
    useEffect(function () {
        console.log('add effect', positions.x);
        var updateMouse = function (e) {
            console.log('inner');
            setPositions({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('click', updateMouse);
        return function () {
            console.log('remove effect', positions.x);
            document.removeEventListener('click', updateMouse);
        };
    }, [positions]);
    console.log('before render', positions.x);
    return (React.createElement("p", null,
        "X: ",
        positions.x,
        ", Y: ",
        positions.y));
};
export default MouseTracker;
