import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.instagram.com/the25thwanderer/">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://twitter.com">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/lma1992/">
        <FaLinkedinIn />
      </a>
    </div>
  </div>
);

export default SocialMedia;
