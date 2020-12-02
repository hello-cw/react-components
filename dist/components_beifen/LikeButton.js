import React, { useState, useEffect, useRef } from 'react';
var LikeButton = function () {
    var _a = useState(0), like = _a[0], setLike = _a[1];
    var _b = useState(true), on = _b[0], setOn = _b[1];
    var likeRef = useRef(0);
    var didMountRef = useRef(false);
    var domRef = useRef(null);
    useEffect(function () {
        console.log('document title effect is running');
        document.title = "\u70B9\u51FB\u4E86\u591A\u5C11\u6B21" + like;
    }, [like]);
    useEffect(function () {
        if (didMountRef.current) {
            console.log('this is update');
        }
        else {
            didMountRef.current = true;
        }
    });
    useEffect(function () {
        if (domRef && domRef.current) {
            domRef.current.focus();
        }
    });
    function handleAlertClick() {
        setTimeout(function () {
            alert('you clicked on' + likeRef.current);
        }, 3000);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "text", ref: domRef }),
        React.createElement("button", { onClick: function () { setLike(like + 1); likeRef.current++; } },
            like,
            " \uD83D\uDC4D"),
        React.createElement("button", { onClick: handleAlertClick }, "Alter")));
};
export default LikeButton;
