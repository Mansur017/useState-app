import React from "react";
import "./style.scss";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import Copyright from "./Copyright";


function Footer(){
return(
     <div className="footer-container">
        <FooterLogo/>
        <FooterMenu/>
        <Copyright/>
    </div>
)
}
export default Footer