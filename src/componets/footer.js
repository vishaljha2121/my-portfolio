import React from "react";
import "./footer.css";
import { Button } from "./button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-contact">
          <p className="footer-contact-heading">
            Feel free to contact me for any work related stuff.
          </p>
          <p className="footer-contact-text">
            I'll revert back as soon as possible.
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <Button buttonStyle="btn--outline">Contact.</Button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          {/* <div className="footer-links-wrapper">
            <div className="footer-link-item">
              <h2>Contact me</h2>
              <Link to="/">For projects</Link>
              <Link to="/">For internships</Link>
            </div>
            <div className="footer-link-item">
              <h2>SOCIAL MEDIA</h2>
              <Link to="/">Instagram</Link>
              <Link to="/">LinkdIn</Link>
              <Link to="/">Github</Link>
            </div>
          </div> */}
        </div>
        <section class="social-media">
          <div class="social-media-wrapper">
            <div class="footer-logo">
              <Link to="/" class="social-logo">
                VISHAL JHA
              </Link>
            </div>
            <small className="website-rights">VISHAL JHA © 2020</small>
            <div class="social-icons">
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link github"
                to="/"
                target="_blank"
                aria-label="Github"
              >
                <i class="fab fa-github" />
              </Link>
              <Link
                class="social-icon-link linkdin"
                to="/"
                target="_blank"
                aria-label="LinkdIn"
              >
                <i class="fab fa-linkdin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
