import React, { Fragment } from "react";
import logo from "../../../images/logo.png";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <div  className="bottom-footer"><MdCopyright/>  Copyright {year} CartZilla - All Rights Reserved </div>
    </Fragment>
  );
};

export default Footer;
