import React from "react";
import Matter from "matter-js";
import "./Overrated.css";

function Overrated() {
  // module aliases
  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies;

  var engine;
  var render;

  // bodies
  var blocks = [];
  var walls = [];
  var ground;
  var ceiling;
  var xVel;

  // DOM elements
  var hBlocks = document.getElementsByClassName("anarchy");

  var pageWidth = 0;

  window.onload = function () {
    pageWidth = window.innerWidth;
  };

  window.onresize = function () {
    var newpageWidth = window.innerWidth;
    if (newpageWidth < pageWidth) {
      for (var i = 0; i < blocks.length; i++) {
        Body.setPosition(blocks[i].body, {
          x: newpageWidth / 2,
          y: window.innerHeight + 500 + 50 * i,
        });
      }
    }
    pageWidth = newpageWidth;
  };

  function Box(x, y, w, h) {
    var options = {
      density: 0.00005,
      friction: 0.5,
      restitution: 0,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    var xVel = 10 * Math.random() - 5;
    Body.setVelocity(this.body, { x: xVel, y: 0 });
    World.add(engine.world, [this.body]);
  }

  function Ball(x, y, r) {
    var options = {
      density: 0.00005,
      friction: 0.5,
      restitution: 0,
    };
    this.body = Bodies.circle(x, y, r, options);
  xVel = 10 * Math.random() - 5;
    Body.setVelocity(this.body, { x: xVel, y: 0 });
    World.add(engine.world, [this.body]);
  }

  function setup() {
    engine = Engine.create();
    engine.world.gravity.y = -0.5;

    render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        showAngleIndicator: true,
      },
    });
    Render.run(render);
    for (var i = 0; i < hBlocks.length; i++) {
      var startHeight = window.innerHeight;
      if (hBlocks[i].classList.contains("prio1")) {
        startHeight += 500;
      } else if (hBlocks[i].classList.contains("prio2")) {
        startHeight += 1500;
      } else if (hBlocks[i].classList.contains("prio3")) {
        startHeight += 2500;
      } else if (hBlocks[i].classList.contains("prio4")) {
        startHeight += 3500;
      } else if (hBlocks[i].classList.contains("prio5")) {
        startHeight += 4500;
      } else if (hBlocks[i].classList.contains("prio6")) {
        startHeight += 5500;
      } else {
        startHeight += 6500;
      }
      if (hBlocks[i].classList.contains("ball")) {
        blocks.push(
          new Ball(
            window.innerWidth / 2,
            startHeight,
            hBlocks[i].offsetWidth / 2
          )
        );
      } else if (hBlocks[i].classList.contains("block")) {
        blocks.push(
          new Box(
            window.innerWidth / 2,
            startHeight,
            hBlocks[i].offsetWidth,
            hBlocks[i].offsetHeight
          )
        );
      }
    }
    ground = Bodies.rectangle(10000, -50, 20000, 100, { isStatic: true });
    ceiling = Bodies.rectangle(10000, 40050, 20000, 100, { isStatic: true });
    walls[0] = Bodies.rectangle(-50, 20000, 100, 40000, { isStatic: true });
    walls[1] = Bodies.rectangle(window.innerWidth + 50, 20000, 100, 40000, {
      isStatic: true,
    });
  }

  function draw() {
    World.add(engine.world, [ground, ceiling, walls[0], walls[1]]);
  }

  setup();
  draw();

  (function render() {
    Engine.update(engine, 20);
    Body.setPosition(walls[1], { x: document.body.clientWidth + 50, y: 0 });
    for (var i = 0; i < blocks.length; i++) {
      var xTrans = blocks[i].body.position.x - hBlocks[i].offsetWidth / 2;
      var yTrans = blocks[i].body.position.y - hBlocks[i].offsetHeight / 2;
      hBlocks[i].style.transform =
        "translate(" +
        xTrans +
        "px, " +
        yTrans +
        "px) rotate(" +
        blocks[i].body.angle +
        "rad)";
      hBlocks[i].style.visibility = "visible";
    }
    window.requestAnimationFrame(render);
  })();

  return (
    <div className="overrated">
      <h1 className="anarchy block prio1">Bogtopia</h1>
      <h2 className="anarchy block prio1">2023</h2>
      <p id="intro" className="anarchy block prio1">
        Articles, code experiments and other non-work things.
      </p>
      <div className="anarchy ball photo prio1">
        <img
          alt="Andy Barefoot"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/twitterimg.jpg"
          title="Andy Barefoot"
        />
      </div>

      <ul className="collection" id="css">
        <li>
          <a
            href="https://codepen.io/andybarefoot/pen/ypPgod"
            target="stackedCubes"
          >
            <h3 className="anarchy block prio2">Stacked Cubes</h3>
          </a>
          <a
            href="https://codepen.io/andybarefoot/pen/ypPgod"
            target="stackedCubes"
          >
            <img
              alt="Stacked Cube"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/stackedCubes-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              A{" "}
              <a
                href="https://codepen.io/andybarefoot/pen/ypPgod"
                target="stackedCubes"
              >
                CodePen
              </a>{" "}
              experimenting with displaying many rows of content in an
              innovative way.
            </p>
            <p>
              Uses CSS Grid with transforms and ::before and ::after selectors
              to add a 3D effect to a list of images.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://codepen.io/andybarefoot/pen/ypXYVJ"
            target="horizScroll"
          >
            <h3 className="anarchy block smaller prio2">Horizontal grid</h3>
          </a>
          <a
            href="https://codepen.io/andybarefoot/pen/ypXYVJ"
            target="horizScroll"
          >
            <img
              alt="Horizontal grid"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/horizGrid-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              A{" "}
              <a
                href="https://codepen.io/andybarefoot/pen/ypXYVJ"
                target="horizScroll"
              >
                horizontal brick layout
              </a>{" "}
              using CSS Grid and vertical-lr writing mode to maintain an own
              then left right dense packing.
            </p>
            <p>
              Not a layout that would be recommended for desktop but works
              nicely as a horizontally scrolling mobile/tablet layout.
            </p>
          </div>
        </li>
        <li>
          <a href="https://codepen.io/andybarefoot/pen/MERBPx" target="isoGrid">
            <h3 className="anarchy block prio2">Isometric Layered Grid</h3>
          </a>
          <a href="https://codepen.io/andybarefoot/pen/MERBPx" target="isoGrid">
            <img
              alt="isoGrid"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/isoGrid-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              An experiment in overlaying CSS Grids to create an{" "}
              <a
                href="https://codepen.io/andybarefoot/pen/MERBPx"
                target="isoGrid"
              >
                isometric layout
              </a>
              . Three grids are skewed and rotated to provide an isometric
              framework
            </p>
            <p>
              Content is positioned on the 3 grids to give an overlapping 3D
              effect.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://codepen.io/andybarefoot/pen/wrXvLj"
            target="gridMask"
          >
            <h3 className="anarchy block prio2">CSS Grid as a mask</h3>
          </a>
          <a
            href="https://codepen.io/andybarefoot/pen/wrXvLj"
            target="gridMask"
          >
            <img
              alt="gridMask"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/mask-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              A CodePen that uses{" "}
              <a
                href="https://codepen.io/andybarefoot/pen/wrXvLj"
                target="gridMask"
              >
                CSS Grid as a mask
              </a>{" "}
              to recreate a design similar to{" "}
              <a
                href="https://media-s3-us-east-1.ceros.com/ceros-marketing/images/2016/10/24/ddad31747373bd0169a985ebbd60cad2/poster-full.jpg"
                target="poster"
              >
                this poster
              </a>
              .
            </p>
            <p>
              The grid contains many "filler" elements that only exist to
              obscure the background image from view.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://codepen.io/andybarefoot/pen/GMyREX"
            target="perspect"
          >
            <h3 className="anarchy block smaller prio2">
              Responsive Perspective layout
            </h3>
          </a>
          <a
            href="https://codepen.io/andybarefoot/pen/GMyREX"
            target="perspect"
          >
            <img
              alt="perspect"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/perspect-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              A{" "}
              <a
                href="https://codepen.io/andybarefoot/pen/GMyREX"
                target="perspect"
              >
                CSS Grid layout
              </a>{" "}
              using perspective and Y-rotation to give a 3D effect.{" "}
            </p>
            <p>
              JavaScript is used to make sure the item styling alternates
              correctly as the number of items on each row changes.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://codepen.io/andybarefoot/pen/WXpKJV"
            target="imageZoom"
          >
            <h3 className="anarchy block prio2">Image Squish with CSS Grid</h3>
          </a>
          <a
            href="https://codepen.io/andybarefoot/pen/WXpKJV"
            target="imageZoom"
          >
            <img
              alt="imageZoom"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/squash-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              A{" "}
              <a
                href="https://codepen.io/andybarefoot/pen/WXpKJV"
                target="imageZoom"
              >
                morphing grid experiment
              </a>{" "}
              using CSS Grid to provide the grid and dynamically changing the
              "grid-template-columns" and "grid-template-rows" attributes based
              on the mouse position.
            </p>
            <p>Based on a Flash experiment by Yugo Nakamura</p>
          </div>
        </li>
        <li>
          <a
            href="https://codepen.io/andybarefoot/full/GMvygq"
            target="booksPoster"
          >
            <h3 className="anarchy block smaller prio2">
              Rodchenko poster layout
            </h3>
          </a>
          <a
            href="https://codepen.io/andybarefoot/full/GMvygq"
            target="booksPoster"
          >
            <img
              alt="booksPoster"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/rodchenko-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              A CSS Grid layout experiment on{" "}
              <a
                href="https://codepen.io/andybarefoot/full/GMvygq"
                target="booksPoster"
              >
                CodePen
              </a>{" "}
              using CSS Grid and CSS transformations and perspective.
            </p>
            <p>
              The layout is based on the famous 1924 poster by Alexander
              Rodchenko for the Gosizdat publishing house.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://codepen.io/andybarefoot/full/MEbORa"
            target="animatedLizards"
          >
            <h3 className="anarchy block prio2">Animated lizard tiles</h3>
          </a>
          <a
            href="https://codepen.io/andybarefoot/full/MEbORa"
            target="animatedLizards"
          >
            <img
              alt="animatedLizards"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/lizards-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              An experiment on{" "}
              <a
                href="https://codepen.io/andybarefoot/full/MEbORa"
                target="animatedLizards"
              >
                CodePen
              </a>{" "}
              combining CSS Grid and SVG animation using D3.js.
            </p>
            <p>
              The tessellated lizard tiles are based on a painting by M. C.
              Escher.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://codepen.io/andybarefoot/full/QqGBro"
            target="cssgridDiamonds"
          >
            <h3 className="anarchy block prio2">Diamond Grid layout</h3>
          </a>
          <a
            href="https://codepen.io/andybarefoot/full/QqGBro"
            target="cssgridDiamonds"
          >
            <img
              alt="cssgridDiamonds"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/diamond-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              A CSS Grid layout on{" "}
              <a
                href="https://codepen.io/andybarefoot/full/QqGBro"
                target="cssgridDiamonds"
              >
                CodePen
              </a>{" "}
              with a diagonal grid that fills exactly the browser window and
              orders the items appropriately.
            </p>
            <p>
              The user can specify the total number of grid items and the number
              of items per row. JavaScript is used to resize the grid and place
              the items in the correct order.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://codepen.io/andybarefoot/pen/zdbVMm"
            target="cssgridMasonry"
          >
            <h3 className="anarchy block prio2">
              Masonry layout with CSS Grid
            </h3>
          </a>
          <a
            href="https://codepen.io/andybarefoot/pen/zdbVMm"
            target="cssgridMasonry"
          >
            <img
              alt="cssgridMasonry"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/masonry-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              CSS Grid makes laying out content in a grid much easier and does a
              good job of Masonry style layouts as long as you are able to
              specify the size of each grid item in advance.
            </p>
            <p>
              I wrote an example of how you can use a little bit of JavaScript
              to automatically resize the grid items to get a perfect{" "}
              <a
                href="https://codepen.io/andybarefoot/pen/zdbVMm"
                target="cssgridMasonry"
              >
                Masonry layout with CSS Grid
              </a>
              .
            </p>
          </div>
        </li>
        <li>
          <a href="http://www.andybarefoot.com/got/grid.html" target="gotgrid">
            <h3 className="anarchy block prio2">Grid of Thrones</h3>
          </a>
          <a href="http://www.andybarefoot.com/got/grid.html">
            <img
              alt="grid"
              className="anarchy ball prio2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/thronesGrid-300.jpg"
            />
          </a>
          <div className="anarchy block prio2">
            <p>
              The diligent and learned maesters at the excellent{" "}
              <a
                className="ext"
                href="http://gameofthrones.wikia.com/wiki/Game_of_Thrones_Wiki"
                target="got-wiki"
              >
                Game of Thrones wiki
              </a>{" "}
              have documented everything you could ever need to know about Game
              of Thrones. This includes every character who has appeared in the
              show. From Daenerys Tagaryen to Othell Yarwyck to "Dwarf Hunter
              2". If they speak a line or even if they are just an interesting
              corpse they will be on the site.
            </p>
          </div>
        </li>
      </ul>
      <ul className="collection" id="posts">
        <li>
          <a
            href="https://medium.com/@andybarefoot/stretching-the-grid-5-fun-ways-to-use-css-grid-5931166f467f"
            target="stretch"
          >
            <h3 className="anarchy block smaller prio3">
              Stretching the Grid - 6 fun ways to use CSS Grid
            </h3>
          </a>
          <a
            href="https://medium.com/@andybarefoot/stretching-the-grid-5-fun-ways-to-use-css-grid-5931166f467f"
            target="stretch"
          >
            <img
              alt="stretch"
              className="anarchy ball prio3"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/article06-300.png"
            />
          </a>
          <div className="anarchy block prio3">
            <p>
              Having spent a few months experimenting with CSS Grid layout I had
              a{" "}
              <a
                href="https://codepen.io/collection/DapBxW/"
                target="_blank"
                rel="noopener noreferrer"
              >
                collection of CodePens
              </a>{" "}
              that I thought were interesting and demonstrated techniques I
              hadn't seen elsewhere.
            </p>
            <p>
              With this in mind I wrote a Medium post listing some of these new
              techniques and layouts and included links to the CodePen examples.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb"
            target="masonrypost"
          >
            <h3 className="anarchy block prio3">
              Masonry style layout with CSS Grid
            </h3>
          </a>
          <a
            href="https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb"
            target="masonrypost"
          >
            <img
              alt="masonrypost"
              className="anarchy ball prio3"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/article05-300.png"
            />
          </a>
          <div className="anarchy block prio3">
            <p>
              A commonly asked question about CSS Grid is whether it can support
              a Masonry-style layout. The short answer is that it can't. However
              it has a lot of features that make creating a Masonry-style layout
              easier if you use a small amount of JavaScript and are willing to
              accept some minor limitations.
            </p>
            <p>
              I wrote a post on Medium explaining this approach and providing
              examples of various iterations of the final solution.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://codepen.io/andybarefoot/post/isometric-layout-with-css-grid"
            target="stretch"
          >
            <h3 className="anarchy block prio3">
              Isometric layout with CSS Grid
            </h3>
          </a>
          <a
            href="https://codepen.io/andybarefoot/post/isometric-layout-with-css-grid"
            target="stretch"
          >
            <img
              alt="stretch"
              className="anarchy ball prio3"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/article04-300.png"
            />
          </a>
          <div className="anarchy block prio3">
            <p>
              I had created an{" "}
              <a
                href="https://codepen.io/andybarefoot/pen/MERBPx"
                target="_blank"
                rel="noopener noreferrer"
              >
                example
              </a>{" "}
              on CodePen of how to lay out content in an Isometric display using
              CSS Grid.
            </p>

            <p>
              Responding to a tweet by{" "}
              <a
                href="https://twitter.com/rachsmithtweets"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rachel Smith
              </a>{" "}
              I wrote a CodePen post describing how I had created the isometric
              grid layout and how to place content within it.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://medium.com/@andybarefoot/d3-and-css-grid-with-expanding-content-3c8aaf783cb1"
            target="expandingpost"
          >
            <h3 className="anarchy block prio3">
              D3 and CSS Grid with expanding content
            </h3>
          </a>
          <a
            href="https://medium.com/@andybarefoot/d3-and-css-grid-with-expanding-content-3c8aaf783cb1"
            target="expandingpost"
          >
            <img
              alt="article 03"
              className="anarchy ball prio3"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/article03-300.png"
            />
          </a>
          <div className="anarchy block prio3">
            <p>
              Having started using CSS Grid I was interested in exploring its
              ability to lay out different size content blocks into a densely
              packed grid. For this I used all the characters from Game of
              Thrones that I had gathered for a data vis project.
            </p>
            <p>
              I then wanted to extend the functionality so that clicking on one
              of the grid elements would expand it to reveal more content
              without the element moving position within the grid. This article
              explains how this was achieved using the CSS Grid layout and
              JavaScript.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://medium.com/@andybarefoot/making-a-map-using-d3-js-8aa3637304ee"
            target="mappost"
          >
            <h3 className="anarchy block prio3">Making a map using D3.js</h3>
          </a>
          <a
            href="https://medium.com/@andybarefoot/making-a-map-using-d3-js-8aa3637304ee"
            target="mappost"
          >
            <img
              alt="mappost"
              className="anarchy ball prio3"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/article02-300.png"
            />
          </a>
          <div className="anarchy block prio3">
            <p>
              <a
                href="https://twitter.com/mbostock"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mike Bostock
              </a>
              's D3.js library makes use of SVG, HTML5 and CSS standards to
              create interactive data visualisations for the web. He has
              hundreds of examples of amazing visualisations created using this
              library.
            </p>
            <p>
              I had been using the library to make some data visualisations of
              my own and as part of this I wanted to create a simple and
              reusable world map template. The idea was that I would be able to
              use this standard map as a base for future visualisations so it
              should be possible to customise it very easily.
            </p>
          </div>
        </li>
        <li>
          <a
            href="https://medium.com/@andybarefoot/adding-instagram-photos-to-my-site-with-angularjs-a3eb2a436746"
            target="instagrampost"
          >
            <h3 className="anarchy block prio3">
              Adding Instagram photos to my site with AngularJS
            </h3>
          </a>
          <a
            href="https://medium.com/@andybarefoot/adding-instagram-photos-to-my-site-with-angularjs-a3eb2a436746"
            target="instagrampost"
          >
            <img
              alt="instagrampost"
              className="anarchy ball prio3"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/article01-300.png"
            />
          </a>
          <div className="anarchy block prio3">
            <p>
              An old article describing how I added my latest Instagram photos
              to my personal site using my own look and feel despite Instagram
              not really supporting this.
            </p>
            <p>
              Article describes scraping Instagram for my most recent content,
              saving the images locally and then implementing a Masonry layout
              using AngularJS
            </p>
          </div>
        </li>
      </ul>
      <ul className="collection" id="datavis">
        <li>
          <a
            href="http://www.andybarefoot.com/got/allegiances.html"
            target="gotmap"
          >
            <h3 className="anarchy block prio4">Game of Thrones Allies</h3>
          </a>
          <a
            href="http://www.andybarefoot.com/got/allegiances.html"
            target="gotmap"
          >
            <img
              alt="gotmap"
              className="anarchy ball prio4"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/thronesMap-300.jpg"
            />
          </a>
          <div className="anarchy block prio4">
            <p>
              To play the Game of Thrones you will need allies. But when those
              allies are Petyr Baelish, Roose Bolton or Alliser Thorne you will
              also need stab proof armour.
            </p>
            <p>
              This{" "}
              <a
                href="http://www.andybarefoot.com/got/allegiances.html"
                target="gotmap"
              >
                map
              </a>{" "}
              shows all the major houses and institutions of the Game of Thrones
              world with the many, many allegiances and connections to the
              hundreds of characters in the show.
            </p>
          </div>
        </li>
        <li>
          <a href="http://www.andybarefoot.com/art/" target="metcollection">
            <h3 className="anarchy block prio4">The Met Collection</h3>
          </a>
          <a href="http://www.andybarefoot.com/art/" target="metcollection">
            <img
              alt="metcollection"
              className="anarchy ball prio4"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/met-300.jpg"
            />
          </a>
          <div className="anarchy block prio4">
            <p>
              <a className="ext" href="http://www.metmuseum.org/" target="met">
                The Metropolitan Museum of Art
              </a>{" "}
              recently published to GitHub the{" "}
              <a
                className="ext"
                href="https://github.com/metmuseum/openaccess"
                target="metgithub"
              >
                details of 446,029 objects
              </a>{" "}
              from their collection.
            </p>
          </div>
        </li>
        <li>
          <a
            href="http://www.andybarefoot.com/football/world-champions.html"
            target="footballmap"
          >
            <h3 className="anarchy block prio4">UFWC Map</h3>
          </a>
          <a
            href="http://www.andybarefoot.com/football/world-champions.html"
            target="footballmap"
          >
            <img
              alt="footballmap"
              className="anarchy ball prio4"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/ufwcmap-300.jpg"
            />
          </a>
          <div className="anarchy block prio4">
            <p>
              Following on from my previous{" "}
              <a className="ext" href="/football/" target="football">
                UFWC data visualisation
              </a>{" "}
              I wanted to show the progress of the Unofficial World Football
              Championship using an{" "}
              <a
                href="http://www.andybarefoot.com/football/world-champions.html"
                target="footballmap"
              >
                animated interactive map
              </a>
              .
            </p>
            <p>
              The animation shows details of all 926 matches played so far as
              the map updates to show which teams have held or challenged for
              the title.
            </p>
          </div>
        </li>
        <li>
          <a
            href="http://www.andybarefoot.com/football/path.html"
            target="premier"
          >
            <h3 className="anarchy block prio4">Premier League</h3>
          </a>
          <a
            href="http://www.andybarefoot.com/football/path.html"
            target="premier"
          >
            <img
              alt="premier"
              className="anarchy ball prio4"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/premier-300.jpg"
            />
          </a>
          <div className="anarchy block prio4">
            <p>
              A{" "}
              <a
                href="http://www.andybarefoot.com/football/path.html"
                target="premier"
              >
                data visualisation
              </a>{" "}
              to show the distance travelled by each Premier League footballer
              to get to their current club. It shows the distance from the
              player's birthplace and the clubs they have been at along the way
              both individually and totalled for each club.{" "}
            </p>
            <p>
              See which clubs cast their nets the furthest and which rely on the
              largest number of journeymen.
            </p>
          </div>
        </li>
        <li>
          <a href="http://www.andybarefoot.com/football/" target="football">
            <h3 className="anarchy block prio4">UFWC</h3>
          </a>
          <a href="http://www.andybarefoot.com/football/" target="football">
            <img
              alt="football"
              className="anarchy ball prio4"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/uwc-300.jpg"
            />
          </a>
          <div className="anarchy block prio4">
            <p>
              The{" "}
              <a className="ext" href="http://www.ufwc.co.uk/" target="ufwc">
                Unofficial Football World Championships
              </a>{" "}
              is a project by Paul Brown that tracks the World Champions of
              football as if the title were decided in the same way as boxing,
              i.e a team remains champions until they lose a game.
            </p>
            <p>
              My{" "}
              <a href="http://www.andybarefoot.com/football/" target="football">
                data visualisation
              </a>{" "}
              shows all of the 918 "title decider" games that have been played
              so far showing how the title has jumped from nation to nation and
              continent to continent.
            </p>
          </div>
        </li>
        <li>
          <a href="http://www.andybarefoot.com/olympics/" target="olympics">
            <h3 className="anarchy block prio4">Olympics 2016</h3>
          </a>
          <a href="http://www.andybarefoot.com/olympics/" target="olympics">
            <img
              alt="olympics"
              className="anarchy ball prio4"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/olympics-300.jpg"
            />
          </a>
          <div className="anarchy block prio4">
            <p>
              A selection of data visualisations from the{" "}
              <a href="http://www.andybarefoot.com/olympics/" target="olympics">
                2016 Summer Olympics
              </a>
              .
            </p>
            <p>
              Data was either manually collected from wikipedia or scraped in
              real time from the BBC medal table and then stored in MySQL and
              formatted to CSV or JSON files.
            </p>
            <p>
              The visualisations were built using D3.js and JQuery using some of
              Mike Bostock's excellent{" "}
              <a
                className="ext"
                href="https://bl.ocks.org/mbostock"
                target="d3"
              >
                examples
              </a>{" "}
              as a starting point.
            </p>
          </div>
        </li>
        <li>
          <a href="http://www.andybarefoot.com/cocktails/" target="cocktails">
            <h3 className="anarchy block prio4">Cocktail Menu</h3>
          </a>
          <a href="http://www.andybarefoot.com/cocktails/" target="cocktails">
            <img
              alt="cocktails"
              className="anarchy ball prio4"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/cocktails-300.jpg"
            />
          </a>
          <div className="anarchy block prio4">
            <p>
              An exercise in using D3.js and SVG to create{" "}
              <a
                href="http://www.andybarefoot.com/cocktails/"
                target="cocktails"
              >
                data visualisations of cocktails
              </a>{" "}
              and their ingredients.
            </p>
            <p>
              Inspired by this{" "}
              <a
                className="ext"
                href="http://www.informationisbeautiful.net/visualizations/cocktails/"
                target="_blank"
                rel="noopener noreferrer"
              >
                original visualisation
              </a>{" "}
              by Tatjana Dubovina & David McCandless I wanted to make an
              entirely dynamically generated version.
            </p>
          </div>
        </li>
        <li>
          <a href="http://www.andybarefoot.com/got/" target="got">
            <h3 className="anarchy block prio4">Valar Morghulis</h3>
          </a>
          <a href="http://www.andybarefoot.com/got/" target="got">
            <img
              alt="got"
              className="anarchy ball prio4"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/thronesTree-300.jpg"
            />
          </a>
          <div className="anarchy block prio4">
            <p>
              Fans of Game of Thrones know that Valar Morghulis (all men must
              die) but when over 200 named characters have already gone to meet
              The Seven (or The Old Gods, or The Drowned God, or The Lord of
              Light, or The Many-Faced God of Death, or the Great Stallion,
              etc...) then it gets hard to keep track of the tragedy.
            </p>
            <p>
              Fortunately Maester Barefoot has created a comprehensive record of
              all these deaths, whether violent, very violent or extremely
              violent.
            </p>
          </div>
        </li>
      </ul>
      <ul className="collection" id="mobile">
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.GunterGames.SkiVR"
            target="skivr"
          >
            <h3 className="anarchy block prio5">Ski VR</h3>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.GunterGames.SkiVR"
            target="skivr"
          >
            <img
              alt="skivr"
              className="anarchy ball prio5"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/ski-300.jpg"
            />
          </a>
          <div className="anarchy block prio5">
            <p>
              Ski VR is a quick VR demo built for Google Cardboard but also
              playable without a headset.
            </p>
            <p>
              Slide gracefully down the mountain between trees and alpine
              chalets in a Virtual Reality winter wonderland.
            </p>
          </div>
        </li>
        <li>
          <a href="http://www.guntergames.com/colorhex" target="colorhex">
            <h3 className="anarchy block prio5">Color Hex</h3>
          </a>
          <a href="http://www.guntergames.com/colorhex" target="colorhex">
            <img
              alt="colorhex"
              className="anarchy ball prio5"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/colorhex-300.jpg"
            />
          </a>
          <div className="anarchy block prio5">
            <p>
              Color Hex is a mobile puzzle game for Android and iOS built and
              published using the Unity platform.
            </p>
            <p>
              The player must try and match patterns by mixing colors together
              on a hexagonal grid. As the patterns get more complicated, the
              puzzle becomes more difficult.
            </p>
            <p>There are 2 play modes with a combined total of 222 levels.</p>
          </div>
        </li>
        <li>
          <a href="http://www.guntergames.com/superdice" target="superdice">
            <h3 className="anarchy block prio5">Super Dice</h3>
          </a>
          <a href="http://www.guntergames.com/superdice" target="superdice">
            <img
              alt="superdice"
              className="anarchy ball prio5"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/dice-300.jpg"
            />
          </a>
          <div className="anarchy block prio5">
            <p>
              My first attempt at using the{" "}
              <a className="ext" href="https://unity3d.com/" target="_unity">
                Unity
              </a>{" "}
              platform to create a mobile game was a mobile version of the dice
              game Farkle.
            </p>
            <p>
              The game can be downloaded from the{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.andybarefoot.superdice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play store
              </a>{" "}
              or played{" "}
              <a
                href="http://www.guntergames.com/superdice/play/"
                target="_blank"
                rel="noopener noreferrer"
              >
                in browser
              </a>
              .
            </p>
          </div>
        </li>
      </ul>
      <ul className="collection" id="web">
        <li>
          <a
            href="http://www.andybarefoot.com/politics/mpcompare/"
            target="mp-compare"
          >
            <h3 className="anarchy block smaller prio6">MP CoMParison</h3>
          </a>
          <a
            href="http://www.andybarefoot.com/politics/mpcompare/"
            target="mp-compare"
          >
            <img
              alt="mp-compare"
              className="anarchy block prio6"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/mp-300.jpg"
            />
          </a>
          <div className="anarchy ball prio6">
            <p>
              The site{" "}
              <a
                className="ext"
                href="http://www.publicwhip.org.uk/"
                target="_whip"
              >
                the Public Whip
              </a>{" "}
              aggregates the data on how MPs in the UK parliament vote. They
              then group this by similar votes to provide an insight into how
              much each MP supports a particular policy.
            </p>
            <p>
              The site did not provide a tool to enable users to easily compare
              MPs and see their relative support for each issue.
            </p>
          </div>
        </li>
        <li>
          <a href="http://www.allthesneakers.com/" target="sneakers">
            <h3 className="anarchy block prio6">All The Sneakers</h3>
          </a>
          <a href="http://www.allthesneakers.com/" target="sneakers">
            <img
              alt="sneakers"
              className="anarchy ball prio6"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/sneakers-300.jpg"
            />
          </a>
          <div className="anarchy block prio6">
            <p>
              Demo search engine of sneakers collating and comparing sneakers
              from a number of eCommerce sites.
            </p>
            <p>
              Regularly spiders a number of sites and compares prices where
              identical sneakers appear on multiple sites.
            </p>
          </div>
        </li>
        <li>
          <a href="http://www.andybarefoot.com/winstagram" target="winstagram">
            <h3 className="anarchy block smaller prio6">Winstagram</h3>
          </a>
          <a href="http://www.andybarefoot.com/winstagram" target="winstagram">
            <img
              alt="winstagram"
              className="anarchy ball prio6"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/winst-300.jpg"
            />
          </a>
          <div className="anarchy block prio6">
            <p>
              More and more people are posting photos on their social web blogs.
              But most of them are not very good photographers. Or have poorly
              made cameras. The colours come out funny, the edges are all
              crackly and often some of the image is out of focus.
            </p>
            <p>
              I have developed an app to restore these poor quality photographs:{" "}
              <a
                href="http://www.andybarefoot.com/winstagram"
                target="winstagram"
              >
                Winstagram!
              </a>
            </p>
          </div>
        </li>
        <li>
          <a
            href="http://www.andybarefoot.com/politics/cameron.php"
            target="cameron"
          >
            <h3 className="anarchy block prio6">We can't go on like this</h3>
          </a>
          <a
            href="http://www.andybarefoot.com/politics/cameron.php"
            target="cameron"
          >
            <img
              alt="cameron"
              className="anarchy ball prio6"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/cameron-300.jpg"
            />
          </a>
          <div className="anarchy block prio6">
            <p>
              Good old David Cameron. He's so suave yet so caring. he just wants
              the best for the country. He says so in his lovely new{" "}
              <a
                className="ext"
                href="http://www.flickr.com/photos/conservatives/4244583668/sizes/l/in/photostream/"
                target="flickr-tory"
              >
                poster campaign
              </a>{" "}
              (NSFDuring lunch).
            </p>
            <p>
              Deface David's poster with your own words with{" "}
              <a
                href="http://www.andybarefoot.com/politics/cameron.php"
                target="cameron"
              >
                "Make your own David Cameron poster"
              </a>
              .
            </p>
          </div>
        </li>
        <li>
          <a
            href="http://www.andybarefoot.com/politics/tucker.php"
            target="tucker"
          >
            <h3 className="anarchy block prio6">Malcolm Tucker</h3>
          </a>
          <a
            href="http://www.andybarefoot.com/politics/tucker.php"
            target="tucker"
          >
            <img
              alt="tucker"
              className="anarchy ball prio6"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/tucker-300.jpg"
            />
          </a>
          <div className="anarchy block prio6">
            <p>
              Combines the{" "}
              <a
                href="http://www.andybarefoot.com/politics/cameron.php"
                target="cameron"
              >
                David Cameron poster generator
              </a>{" "}
              with the foul-mouthed tirades of Malcolm Tucker,{" "}
              <a
                className="ext"
                href="http://www.youtube.com/watch?v=LugJd6uGJqI"
                target="youtube-tucker"
              >
                sweary spin doctor
              </a>{" "}
              from The Thick of It.
            </p>
            <p>
              A random choice of blue bon-mot is substituted every time you
              click the "Tuckerise" button so{" "}
              <a
                href="http://www.andybarefoot.com/politics/tucker.php"
                target="tucker"
              >
                click away
              </a>
              . However, be warned. He is a very very rude man and if you don't
              like naughty words you probably won't like this.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Overrated;
