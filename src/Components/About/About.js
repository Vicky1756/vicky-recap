import React from "react";
import "./About.css";

function About() {
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
      </div>

    </div>
  );
}

export default About;
