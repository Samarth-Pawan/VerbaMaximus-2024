import Head from "next/head";
import React from "react";
import { useState, useEffect, useRef } from "react";
const EventsPage = () => {
  const [eventShown, setEventShown] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({
    title: "",
    time: "",
    desc: "",
    venue: "",
  });
  const showEvent = (selectedEventPassed) => {
    // setSelectedEvent(selectedEvent);
    setSelectedEvent({
      title: selectedEventPassed.title || "No Title",
      time: selectedEventPassed.time || "No Time",
      desc: selectedEventPassed.desc || "No Description",
    });

    console.log(selectedEvent);
    console.log(selectedEventPassed);
    setEventShown(true);
  };

  const headlinerEvents = [
    {
      title: "Dante's Inferno",
      desc: `Embark on a riveting journey through the circles of Dante's Inferno at our Fiery Debate event. Contestants select a chit, revealing a character's gripping tale, from their entanglement in forbidden desires to moments of moral turbulence. The stage becomes a battlefield as participants ardently defend their assigned sins, only to seamlessly switch perspectives under the moderator's command. The grand finale awaits the debater who skillfully navigates conviction, wit, and Dantean inspiration, earning the coveted title of Fiery Orator and a sinfully delightful reward. Engage the audience, confront your sins, and seek redemption in this unique journey through words!
            `,
      time: "Offline",
      venue: "offline",
    },
    {
      title: "Alternate Reality Game (ARG)",
      desc: `Are you a fan of hunting down clues and uncovering the hidden lore? Do you love the art of decoding ciphers and figuring out mystery deducing clues and uncovering the truth behind the Internet's deepest and darkest secrets? Alternate Reality Game is an event where you curate the ultimate internet goose chase with clues and ciphers whilst making a tantalizing storyline with twists and turns at every corner.
A fan of the mystery-detective genre? ARG is your dreams come true.
`,
      time: "Online",
      venue: "offline",
    },
    {
      title: "Sherlocked",
      desc: `There has been a murder on campus. In this evolving case involving 8 individuals, confusion has been the only constant. You are the only shot we have at solving this murder mystery. Interrogate the 8 suspects and help us crack the case.`,
      time: "Sun: 4pm F105",
      venue: "offline",
    },
  ];

  const elasEvents = [
    {
      title: "JAM",
      desc: `Descend into the depths of language mastery with JAM, where your words shape destiny. Can you withstand the pressure, navigating the fiery challenges of speech? Embrace the inferno and seize the best minute of your life.
            `,
      time: "Offline",
    },
    {
      title: "Shipwrecked",
      desc: `Embark on a unique challenge with 'Shipwreck,' where participants find themselves on a sinking ship, embodying characters as diverse as the high seas themselves. From donuts to cunning villains these characters can be anything and everything! It's a mixed bowl to play around satire, wit, banter, pop culture references and beyond. In this test of persuasion and spontaneity, the coveted life jacket becomes the focal point, and individuals must articulate why they stand as the most deserving passenger.`,
      time: "Offline",
    },
    {
      title: "Devil's Advocate",
      desc: `Do you often find yourself questioning the rationale behind mainstream morality? Do you feel you can force society to rethink their principles purely through argumentation? Put your convincing and speaking skills to the test by defending the indefensible and advocating for the most morally reprehensible opinions across geopolitics, culture, science and art with Devil’s Advocate.`,
      time: "Offline",
    },
    {
      title: "Slam poetry",
      desc: `Slam Poetry is an art form that blends the elements of performance, writing, and competition. Whether it's the rhythm of rhyming verses or the flow of non-rhyming narratives, poets have the freedom to express themselves in their unique style. It's captivating one's raw unsaid emotions through poetry and giving them a rhythmic outlet. If poetry holds a special place in your heart, this event is for you.`,
      time: "Offline",
    },
    {
      title: "Salva Veritate",
      desc: `Debating is an art which leads us to bring out the zenith of our creative skills. It enhances our views and makes us deliver what we want to deliver rather than what the world expects us to deliver. Salva Veritate is a 3v3 debate with theme-based topics where you can push your mental faculties to the extreme and really test the depths of reason.
            `,
      time: "Offline",
    },
    {
      title: "Picture Perspective",
      desc: `A lens captures the layers of a place by acting as a window to its soul while writing is the perfect key to decode these layers. Picture Perspective is a writing event where participants will be given certain pictures and they will be required to express their perspective through stories, essays.... absolutely no boundary.
            `,
      time: "Hybrid",
    },
    {
      title: "Symphonies of the soul",
      desc: `Debating is an art which leads us to bring out the zenith of our creative skills. It enhances our views and makes us deliver what we want to deliver rather than what the world expects us to deliver. Salva Veritate is a 3v3 debate with theme-based topics where you can push your mental faculties to the extreme and really test the depths of reason.
            `,
      time: "Offline",
    },
  ];

  const collabEvents = [
    {
      title: "Lit Quiz",
      desc: ``,
      time: "Offline",
    },
    {
      title: "Bollywood Trivia",
      desc: ``,
      time: "Offline",
    },
    {
      title: "Chakravyuham",
      desc: ``,
      time: "Offline",
    },
    {
      title: "Decipher the script",
      desc: ``,
      time: "Offline",
    },
    {
      title: "Bamboozled",
      desc: ``,
      time: "Offline",
    },
    {
      title: "Gita Spardha",
      desc: ``,
      time: "Offline",
    },
    {
      title: "Handout Handcraft",
      desc: ``,
      time: "Offline",
    },
    {
      title: "Bullseye",
      desc: ``,
      time: "Offline",
    },
  ];

  return (
    <div>
      <Head>
        <title>Verba Maximus 2024</title>
        <meta name="description" content="Official website for VM '24" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="events">
        <div className="landing-events" id="events">
          <div className="sub-heading-title">HEADLINER EVENTS</div>
          {eventShown && (
            <EventDetail
              name={selectedEvent.title}
              desc={selectedEvent.desc}
              time={selectedEvent.time}
              setEventShown={setEventShown}
              onClickOutside={() => setEventShown(false)}
            ></EventDetail>
          )}
          <div className="landing-cards">
            {headlinerEvents.map((event, i) => {
              return (
                <div
                  className="landing-card"
                  onClick={() => showEvent(event)}
                  key={i}
                >
                  <div className="card-title">{event.title}</div>
                  <div className="card-time">
                    <b>TIME</b>: {event.time}
                  </div>
                  <div className="card-desc">
                    {event.desc.toString().slice(0, 100)}...
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sub-heading-title">ELAS EVENTS</div>
          {eventShown && (
            <EventDetail
              name={selectedEvent.title}
              desc={selectedEvent.desc}
              time={selectedEvent.time}
              setEventShown={setEventShown}
              onClickOutside={() => setEventShown(false)}
            ></EventDetail>
          )}
          <div className="landing-cards">
            {elasEvents.map((event, i) => {
              return (
                <div
                  className="landing-card"
                  onClick={() => showEvent(event)}
                  key={i}
                >
                  <div className="card-title">{event.title}</div>
                  <div className="card-time">
                    <b>TIME</b>: {event.time}
                  </div>
                  <div className="card-desc">
                    {event.desc.toString().slice(0, 100)}...
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sub-heading-title">COLLAB EVENTS</div>
          {eventShown && (
            <EventDetail
              name={selectedEvent.title}
              desc={selectedEvent.desc}
              time={selectedEvent.time}
              setEventShown={setEventShown}
              onClickOutside={() => setEventShown(false)}
            ></EventDetail>
          )}
          <div className="landing-cards">
            {collabEvents.map((event, i) => {
              return (
                <div
                  className="landing-card"
                  onClick={() => showEvent(event)}
                  key={i}
                >
                  <div className="card-title">{event.title}</div>
                  <div className="card-time">
                    <b>TIME</b>: {event.time}
                  </div>
                  <div className="card-desc">
                    {event.desc.toString().slice(0, 100)}...
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

const EventDetail = ({
  name = "",
  time = "",
  desc = "",
  setEventShown,
  onClickOutside,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);
  return (
    <div ref={ref} className="event-detail-card">
      <div className="detail-title">{name.toUpperCase()}</div>
      <div className="detail-time">
        <b>TIME : </b>
        {time}
      </div>
      <div className="detail-desc">{desc}</div>
      <button
        className="exit"
        onClick={(e) => {
          e.preventDefault();
          setEventShown(false);
        }}
      >
        CLOSE
      </button>
    </div>
  );
};

export default EventsPage;
