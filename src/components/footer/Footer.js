import React from "react";

import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";

import { ExternalLink } from "react-external-link";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer__info">
      <h2>Book Finder App</h2>
      <section className="section__copyright">
        <p>Copyright 2022 Tiago Garbi</p>
        <p>All rights reserved</p>
      </section>
      <section className="social__contacts">
        <ExternalLink href="https://linkedin.com/in/tiago-garbi/">
          <img src={linkedin} alt="My personal linkedin" />
        </ExternalLink>
        <ExternalLink href="https://github.com/tiagogb21">
          <img src={github} alt="My personal github" />
        </ExternalLink>
      </section>
    </footer>
  );
}
