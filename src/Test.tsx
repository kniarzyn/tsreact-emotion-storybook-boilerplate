import * as React from "react";
import styled from 'react-emotion';

const H4 = styled<{}, "button">("button")({
    color: "red",
    fontSize: "20px",
});

export default () => (<H4>Takie tam: {Date.now()}</H4>);
