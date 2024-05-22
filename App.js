import React from "react";
import ReactDom from "react-dom";

var htmlRoot = document.getElementById("root");
var rootReact = ReactDom.createRoot(htmlRoot);
const Header=() => (<p>Header</p>);
const Body=() => (Body);
const Footer=() => (Footer);

const RootComponent =() => (<><Header/><Body/><Footer/></>);

rootReact.render(<RootComponent/>);