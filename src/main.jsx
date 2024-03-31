import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#container"));

const Header = () => {
    return <p> Hello there, this is the header</p>;
};

const Main = () => {
    return (
        <div className="mainContainer">
            <div className="card1"> Card 1</div>
            <div className="card2">Card 2</div>
            <div className="card3">Card 3</div>
        </div>
    );
};

root.render(
    <React.StrictMode>
        <Header />
        <Main />
    </React.StrictMode>
);
