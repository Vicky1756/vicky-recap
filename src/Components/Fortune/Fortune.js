import React, { useState } from "react";
import "./Fortune.css";
import fortuneImage from "../../Assets/fortune.png";

function Fortune() {
  const [fortuneMessage, setFortuneMessage] = useState("");

  const displayMessage = () => {
    const messages = [
      "You will discover the true meaning of 'Netflix and chill',spoiler alert: it involves lots of snacks.",
      "Beware of overly enthusiastic squirrels. They might be plotting against your stash of nuts.",
      "In the quest for happiness. Remember: a pizza a day keeps the grumpiness away.",
      "Your laundry will develop magical powers and learn to fold itself. Just kidding, invest in a good folding technique instead.",
      "A wise man once said nothing at all. Be that wise person during your next family gathering.",
      "You will be granted the ability to find missing socks. Unfortunately, it won't extend to finding your car keys.",
      "Buckle up! Your next adventure involves singing in the shower. Your shampoo bottle is your biggest fan.",
      "Avoid taking life too seriously. Remember, even the mighty oak was once a nut.",
      "You're about to become the world champion of parallel parking. Get ready for applause from confused pedestrians.",
      "Embrace your inner child. Play with Lego, build a fort, and blame it on nostalgia when someone questions your choices.",
      "Good news: Your phone battery will last forever. Bad news: You'll still manage to misplace it daily.",
      "You will gain the superpower of turning red lights green by staring at them intensely. Use it wisely, or cause traffic chaos!",
      "Expect the unexpected. Like finding a pen that actually works on the first try.",
      "Your talent for making perfect microwave popcorn. Will make you the envy of movie nights everywhere.",
      "Beware of falling coconuts. They're nature's way of testing your dodgeball skills.",
      "Your love life is like a pizza delivery.it might take longer than expected, but it's totally worth the wait.",
      "Prepare for a romantic dinner with your one true love: your bed. Netflix and chill, solo edition.",
    ];
    const num = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[num].replace(/\./g, ".\n");
    console.log(selectedMessage);
    setFortuneMessage(selectedMessage);
  };

  const handleFortuneClick = () => {
    const image = document.getElementById("fortuneImage");
    image.classList.add("shake-animation");

    setTimeout(() => {
      image.classList.remove("shake-animation");
      displayMessage();
    }, 500);
  };
  return (
    <div className="fortune-content" id ="fortune">
      <div className="fortune-heading">
        <h1>Wonder what is your future?</h1>
        <h3>Click the Fortune sticks now!</h3>
      </div>
      <div
        className="fortuneStick"
        id="fortuneStick"
        onClick={handleFortuneClick}
      >
        <img
          src={fortuneImage}
          alt="Fortune stick"
          width="400px"
          id="fortuneImage"
        />
        <div id="fortuneStickMessage" className="fortuneStickMessage">
          {fortuneMessage}
        </div>
      </div>
      <div className="iframe-container">
        {" "}
        <iframe
          title="Embedded Spotify Track"
          className="iframe-style"
          src="https://open.spotify.com/embed/track/7GVUmCP00eSsqc4tzj1sDD?utm_source=generator"
          height="60%"
          width="452"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
export default Fortune;
