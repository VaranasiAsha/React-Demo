import React from "react";
import ReactDom from "react-dom";

var htmlRoot = document.getElementById("root");
var rootReact = ReactDom.createRoot(htmlRoot);
const Header=() => (
    <div className="header">
        <div className="logo">
            <img src="" alt="logo-image"/>
            <div className="nav-bar">
                <ul>
                    <li>HOME</li>
                    <li>SERVICE</li>
                    <li>CONTACT US</li>
                    <li>CARTS</li>
                </ul>
            </div>
        </div>
    </div>

);

const Body=() => (<p>Body</p>);
const Footer=() => (<p>Footer</p>);

const RootComponent =() => (<><Header/><Body/><Footer/></>);

rootReact.render(<RootComponent/>);
