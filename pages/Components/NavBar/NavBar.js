import Link from "next/link";
import React from "react";
const NavBar = () => {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="navbar">
      <Link scroll={false} href="/" relative="path">
        <img src="/vmlogo.png" className="logo" onClick={scrollToTop} />
      </Link>
      <div className="headers">
        <div className="element" onClick={scrollToTop}>
          <Link scroll={false} href="/">
            Home
          </Link>
        </div>
        <div className="element">
          <Link scroll={false} href="/#events">
            Events
          </Link>
        </div>
        <div className="element">
          <Link scroll={false} href="/#pricing">
            Pricing
          </Link>
        </div>
        <div className="element">
          <Link scroll={false} href="/#contact">
            Contact Us
          </Link>
        </div>
        <div>
          <Link
            scroll={false}
            href="https://www.instagram.com/vm.bphc?igsh=c2Y3eTM0dWtxZW9p"
            relative="path"
            className="logo2"
          >
            <img width="100%" src="/instagram.png" />
          </Link>
        </div>
        <div>
          <Link
            scroll={false}
            href="https://www.facebook.com/verbamaximus?mibextid=ZbWKwL"
            relative="path"
            className="logo2"
          >
            <img width="100%" src="/facebook.png" />
          </Link>
        </div>
        <div className="element">
          <Link
            scroll={false}
            className="register"
            href="https://unstop.com/p/verba-maximus-24-bits-pilani-874729"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
