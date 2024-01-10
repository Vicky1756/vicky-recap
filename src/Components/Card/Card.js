import React from "react";
import "./Card.css";
function Card() {
  return (
    <div class="popup">
      <div class="popup-main">
        <div class="popup-heading">
          Message from <a href="mailto:auaiwan1756@gmail.com">auraiwan1756@gmail.com</a>
        </div>
        <div class="popup-message">
          <p>Hey Bog!</p>
          <p>
            Fascinating article and so relevant to the new era of human-machine
            networks. Relevant to the study group on "listening" to which I
            belong.
          </p>
          <p>Cheers.</p>
        </div>
      </div>
      <div class="popup-buttons noselect">
        <div class="button button-cancel">Cancel</div>
        <div class="button button-reply">Reply</div>
      </div>
    </div>
  );
}
export default Card;
