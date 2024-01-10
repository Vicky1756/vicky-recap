import React, { useEffect } from "react";
import "./Bingo.css";
import Catimg from "../../Assets/cat.gif";
import FlowerImg from "../../Assets/flower.jpeg";
const SQUARE_NAMES = [
  "Open floorplan",
  "Take down a wall",
  "Curb appeal",
  "Crown molding",
  "Farmhouse sink",
  "Farmhouse chandelier",
  "Rustic charm",
  "Add island to kitchen",
  "Chip breaks something",
  "Basket of crayons",
  'Something is an "easy fix"',
  "Load-bearing wall",
  "Double vanity",
  "Natural light",
  "Shiplap",
  "Backsplash",
  "Recessed lighting",
  "Buyers get house for under list",
  "Inspirational sign",
  "Babies",
  "Breakfast nook",
  "Built-ins",
  "Giant clock",
  'Talk about Chip"s glory days',
  "Unexpected expense",
  "Clint builds something",
  "Visit to the Farmhouse",
  "White cabinets",
];

function Bingo() {
  const [squares, setSquares] = React.useState(getSquares);
  const [showPopup, setShowPopup] = React.useState(false);
  const [showSecondPopup, setShowSecondPopup] = React.useState(false);

  useEffect(() => {
    const intervalId = setInterval(moveButton, 1000);

    return () => clearInterval(intervalId);
  }, []);
  function getSquares() {
    if (window.localStorage) {
      const savedGame = JSON.parse(
        window.localStorage.getItem("fixerUpperBingo")
      );
      if (savedGame) return savedGame;
      else {
        const newSquares = createNewSquares();
        window.localStorage.setItem(
          "fixerUpperBingo",
          JSON.stringify(newSquares)
        );
        return newSquares;
      }
    } else {
      return createNewSquares();
    }
  }

  function createNewSquares() {
    const sq = [];
    const text = shuffle(SQUARE_NAMES);
    for (let i = 0; i < 25; i++) {
      sq.push({ stamped: false, text: text[i], win: false });
    }
    sq[12].text = "Free Space";
    sq[12].stamped = true;
    return sq;
  }

  function handleClick(i) {
    const updatedSquares = [...squares];
    updatedSquares[i] = {
      ...updatedSquares[i],
      stamped: !updatedSquares[i].stamped,
    };
    updatedSquares.forEach((square) => {
      square.win = false;
    });

    const winLines = hasBingo(updatedSquares);
    if (winLines.length > 0) {
      togglePopup();
      winLines.forEach((line) => {
        line.forEach((j) => {
          updatedSquares[j].win = true;
        });
      });
    }

    setSquares(updatedSquares);

    if (window.localStorage) {
      window.localStorage.setItem(
        "fixerUpperBingo",
        JSON.stringify(updatedSquares)
      );
    }
  }

  function newGame() {
    const newSquares = createNewSquares();
    if (window.localStorage) {
      window.localStorage.setItem(
        "fixerUpperBingo",
        JSON.stringify(newSquares)
      );
    }
    setSquares(newSquares);
  }
  function togglePopup() {
    if (!showSecondPopup) {
      setShowPopup(!showPopup);
    } else {
      setShowPopup(false);
      setShowSecondPopup(false);
    }
  }

  return (
    <div className="card clearfix">
      <h1 className="board-heading">2023 BINGO</h1>
      <Board squares={squares} onClick={(i) => handleClick(i)} />
      <button className="new-game" onClick={newGame}>
        New Card
      </button>
      <div className={`popup ${showPopup ? "visible" : ""}`} id="popup">
        <div className="popup-inner">
          <div className="popup__text">
            
            <h3>Do you wanna go out with me huhu</h3>
            <img src={FlowerImg} alt="" className="flower-img" />
          </div>
          <div className="pop-buttons">
            <button
              className="pop"
              id="yesButton"
              onClick={() => setShowSecondPopup(true)}
            >
              Yes
            </button>
            <button className="pop-btn" id="noButton" onClick={togglePopup}>
              No
            </button>
          </div>
          <button className="popup__close" onClick={togglePopup}>
            X
          </button>
        </div>
      </div>
      <div className={`popup ${showSecondPopup ? "visible" : ""}`} id="popup2">
        <div className="popup-inner">
          <div className="popup__text">
            <img
              src={Catimg}
              alt=""
              className="cat-img"

            />
          </div>
          <button className="popup__close" onClick={togglePopup}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bingo;

function moveButton() {
  var button = document.getElementById("noButton");
  var x = Math.random() * (window.innerWidth - button.offsetWidth);
  var y = Math.random() * (window.innerHeight - button.offsetHeight);

  x = Math.max(0, x);
  y = Math.max(0, y);

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}
function Square(props) {
  return (
    <button
      className={`square ${props.value.stamped ? "stamped" : ""} ${
        props.value.win ? "win" : ""
      }`}
      onClick={props.onClick}
    >
      {props.value.text}
    </button>
  );
}

function Board(props) {
  const renderSquare = (i) => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        key={i}
      />
    );
  };

  let board = [];
  for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      row.push(renderSquare(j + i * 5));
    }
    board.push(
      <div key={i} className="board-row">
        {row}
      </div>
    );
  }

  return <div className="board">{board}</div>;
}

// Helpers
function shuffle(arr) {
  return arr.sort(() => 0.5 - Math.random());
}
function hasBingo(squares) {
  const lines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];

  return lines.filter(function (line) {
    return line.every(function (l) {
      return squares[l].stamped;
    });
  });
}
