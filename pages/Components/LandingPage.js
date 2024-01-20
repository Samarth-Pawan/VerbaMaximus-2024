import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import { useState, useEffect, useRef } from "react";
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import EventsPage from "../events";

import instaLogo from "../../public/instagram.png";

("/Images/maxresdefault.jpg");
const LandingPage = () => {
  return (
    <div id="main" className="outermost-div">
      <section className="home-hero-page">
        <TitleComponent />
      </section>
      <section id="contact" style={{ height: "autod" }}>
        <div className="landing-contact" style={{ backgroundColor: "black" }}>
          <div
            className="sub-heading-title"
            style={{ fontSize: "8vh", color: "rgb(130,34,33)" }}
          >
            Contact Us
          </div>
          <div
            className="contact-us-inner-div"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
          >
            <div
              style={{
                backgroundImage: "url(/vmlogo.png) ",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                // filter: "invert(100%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexFlow: "wrap",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1%",
                height: "50vh",
              }}
              className="landing-cards"
            >
              <div
                className="landing-card"
                style={{ background: "none", color: "black" }}
              >
                <div
                  id="vanish-in-phone"
                  style={{ color: "red" }}
                  className="card-title"
                >
                  <b> ELAS BPHC</b>
                </div>
                <div className="card-time" style={{ color: "red" }}>
                  Email :{" "}
                  <a
                    style={{ color: "white" }}
                    href="mailto:elas@hyderabad.bits-pilani.ac.in"
                  >
                    elas@hyderabad.bits-pilani.ac.in
                  </a>
                </div>
                <div className="logoGroup">
                  <a href="https://www.instagram.com/vm.bphc?igsh=c2Y3eTM0dWtxZW9p">
                    <div
                      className="instaLogo"
                      style={{ backgroundImage: "url(/instagram.png)" }}
                    />
                  </a>
                  <a href="https://www.facebook.com/verbamaximus?mibextid=ZbWKwL">
                    <div
                      className="instaLogo"
                      style={{ backgroundImage: "url(/facebook.png)" }}
                    />
                  </a>
                </div>
                {/* <div className='card-desc'>
                                  Phone : <a style={{ opacity: 0.5, color: "black" }} href="phone:1234GETONTHEDANCEFLOOR">1234GETONTHEDANCEFLOOR</a>
                              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const TitleComponent = () => {
  const FadeUp = batch(Fade(), Move(), Sticky());
  const [isMobile, setMobile] = useState(false);
  const [lowHeight, setLowHeight] = useState(false);
  useEffect(
    () => setMobile(window.matchMedia("(max-width: 1024px)").matches),
    [window.matchMedia("(max-width: 1024px)").matches]
  );
  useEffect(
    () => setLowHeight(window.matchMedia("(max-height: 500px)").matches),
    []
  );
  return (
    <ScrollContainer>
      <section className="home-hero-page" style={{ padding: "" }}>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade())}>
            <div className="title-image" />
          </Animator>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -20))}>
            <div className="title">
              Vérba Maximus {!isMobile ? <></> : <br />}
            </div>
            <div className="title-dante-hero">
              Dante's Inferno {!isMobile ? <></> : <br />}2024
            </div>
          </Animator>

          <Animator
            animation={batch(
              Fade(),
              Sticky(50, !lowHeight ? 60 : 80),
              MoveOut(0, -20)
            )}
          >
            <div className="sub-title">Feb 10 - 11</div>
          </Animator>
        </ScrollPage>
      </section>

      <ScrollPage>
        {/* <Animator
          animation={batch(
            Fade(),
            Sticky(50, !lowHeight ? 60 : 80),
            MoveIn(0, -20)
          )}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <br />
            <br />
            <br />
            <br />
            <div
              className="theme-title"
              style={{ fontSize: !isMobile ? "7.4vw" : "7vh" }}
            >
              VERBA MAXIMUS
            </div>
            <div
              className="theme-description"
              style={{
                fontSize: !isMobile ? "1.5vw" : "2vh",
                marginTop: "6vh",
                textAlign: "center",
              }}
            >
              Verba Maximus is BITS Pilani, Hyderabad Campus‘ annual literary
              fest organized by the ambitious assembly of students from the
              English Language Activities Society (ELAS). 12 years since its
              inaugural edition in 2012, VM brings a myriad of events, tourneys
              and games to the table - pitting the brightest of literary minds
              against each other. VM also presents engrossing performances from
              the best artists across the country and promises troves of fun.
              This February, we return with the twelfth edition of this literary
              bonanza and welcome you to enter our realm and witness the
              spectacle unfold.
              <br />
              <br />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </Animator> */}
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <br />
            <br />
            <br />
            <br />
            <div
              className="theme-title"
              style={{ fontSize: !isMobile ? "7.4vw" : "7vh" }}
            >
              Dante&apos;s Inferno
            </div>
            <div
              className="theme-description"
              style={{
                fontSize: !isMobile ? "1.5vw" : "2vh",
                marginTop: "6vh",
                textAlign: "center",
              }}
            >
              Theme for the Annual English Language Activies Society&apos;s
              literary fest of the year here at <br /> BITS Pilani, Hyderabad
              Campus.
              <br />
              <br />
              <Link
                href="https://docs.google.com/spreadsheets/d/1Rbm5mTJiMnaydnvBmk2561Ob3HEP3uuOgECIM5DEWg8/edit?usp=sharing"
                style={{ color: "aqua" }}
              >
                Schedule
              </Link>{" "}
              |{" "}
              <Link
                href="https://unstop.com/creative-cultural-event/verba-maximus-23-complete-pass-verba-maximus-birla-institute-of-technology-science-bits-pilani-591176"
                style={{ color: "aqua" }}
              >
                Register
              </Link>
            </div>
          </div>
        </Animator>
      </ScrollPage>

      <section id="eventslanding">
        <EventsPage />
      </section>

      <div
        className="landing-events"
        id="pricing"
        style={{
          backgroundColor: "#822221",
        }}
      >
        <div className="sub-heading-title">PRICING AND REGISTRATION</div>
        <div className="landing-cards">
          <div className="landing-card">
            <div className="card-title">{"Mega Pass"}</div>
            <div className="card-time">{"Rs. 800/-"}</div>
            <div className="card-desc">
              {"\n\n(All Events + Proshow + Accomodation)"}
            </div>
          </div>

          <div className="landing-card">
            <div className="card-title">{"Events Pass"}</div>
            <div className="card-time">{"Rs. 700/-"}</div>
            <div className="card-desc">
              {"\n\n(Access to all events + proshow only)"}
            </div>
          </div>

          <div className="landing-card">
            <div className="card-title">{"Offline Events"}</div>
            <div className="card-time">{"Rs. 400/-"}</div>
            <div className="card-desc">
              {"\n\n(Access to all the Offline events only)"}
            </div>
          </div>

          <div className="landing-card">
            <div className="card-title">{"Online Events"}</div>
            <div className="card-time">{"Rs. 150/-"}</div>
            <div className="card-desc">
              {"\n\n(Access to all the online events only)"}
            </div>
          </div>
        </div>
        <Link
          scroll={false}
          className="register"
          href="https://unstop.com/creative-cultural-event/verba-maximus-23-complete-pass-verba-maximus-birla-institute-of-technology-science-bits-pilani-591176"
        >
          Register Now!!
        </Link>
        <br /> <br />
      </div>
    </ScrollContainer>
  );
};

export default LandingPage;
