import React from "react";

const ChooseButton = ({text, choice, isActive, onClick}) => {

    let activeStyle = {};
    if(isActive) {
        activeStyle = {
            border: "10px solid red",
            background: "#fa5a5a"
        }
    }
  


    return (
        <button className={"WhoWeHelp__button"} onClick={() => onClick(choice)} style={activeStyle}>{text}</button>
    )
}
export default ChooseButton;