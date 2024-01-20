import { useEffect, useState } from "react";
import "../styles/globals.css";
import "./Components/NavBar/NavBar.css";
import "./Components/LandingPage.css";
import "./Components/EventPage/event.css";
function MyApp({ Component, pageProps }) {
  const [windowAvailable, setWindow] = useState(true);
  useEffect(() => setWindow(false));
  return (
    <div
      style={{
        width: "100vw",
        scrollBehavior: "smooth",
      }}
      suppressHydrationWarning
    >
      {windowAvailable ? null : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
