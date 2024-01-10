import React, { useState } from "react";
import "./About.css";

function About() {
  const [magic8Message, setMagic8Message] = useState("");

  const displayMessage = () => {
    const messages = [
      "Nope. Not worth it.",
      "Yes! This will happen!",
      "Are you sure you want to do this?",
      "I see troubles ahead. Beware!",
      "I see a dark void inside your head. You should get that fixed.",
      "I wouldn't bother if I were you.",
      "So... much... haze... try again later.",
      "You can but I wouldn't.",
      "Let me crack open this fortune cookie first... your lucky number is 8!",
      "Poke me like that again and your future will be very grim!",
      "I see nothing... oh wait! Never buy a pigeon.",
      "This will end poorly for you.",
      "Your heart will break. Sorry.",
      "A fool and his money will soon be parted. Leave $10 and go away.",
      "I'd predicate something nice for you but let's be reasonable.",
      "I can but you shouldn't.",
      "This is your lucky day! Do it!",
      "I feel an energy buzzing about you. This is your day!",
    ];
    const num = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[num];
    console.log(selectedMessage);
    setMagic8Message(selectedMessage);
  };

  return (
    <div>
      <h1 className="about-content">Letter to you</h1>
      <div className="letter">
        <h1>Dear Boom</h1>
        <p>I hope you find what you're looking for out there.</p>
        <p>
          I hope you find the kind of happiness that exists on your own terms. I
          hope you truly take the time to figure out what moves you,what
          encorages your soul, what you deeply crave from life,and I hope you
          have the courage to chase that. I hope you have the courage to believe
          that you are deserving of everything you desire, that you are capable
          and worthy of curating the kind of life for youself that sparks
          something within you.You have a fire inside of you--I hope you never
          let convenience, or comfort,or the easiness of standing still put it
          out.I hope you show the world what you can do with all of that passion
          inside of you.
        </p>
        <p>
          I hope you find the kind of love that maakes you a softer person.The
          kind of love that makes you want to be a better man,the kind of love
          that believes in you and supports you, that stands by your side.I hope
          you find someone who quickly becomes your favourite thing --someone
          who makes the fall less fearful,someone you cant help but choose every
          single day. I hope you find someone who shows you just how deeply you
          can feel,just how deeply you can love. I hope you find something
          real,because nothing is more beautiful than loving someone who loves
          you back.Nothing is more beautiful than loving someone who builds you
          a home in their heart.
        </p>
      </div>
      <div className="iframe-container">
        {" "}
        <iframe
          title="Embedded Spotify Track"
          className="iframe-style"
          src="https://open.spotify.com/embed/track/7GVUmCP00eSsqc4tzj1sDD?utm_source=generator"
          width="50%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <div className="ball-content">
        <div className="ball-heading">
          <h1>Seeking Advice?</h1>
          <h3>Click the Magic 8 Ball now!</h3>
        </div>
        <div className="magic8Ball" id="magic8Ball">
          <img
            src="https://dl.dropboxusercontent.com/s/3s8proa5ixmgq5k/8ball.png"
            alt="An eight ball"
            width="400px"
            onClick={displayMessage}
          />
          <div id="magic8ballMessage" className="magic8ballMessage">
            {magic8Message}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
