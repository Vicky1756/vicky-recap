import React, { useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const sections = document.querySelectorAll(".sections section");

    const toggleNavbarVisibility = () => {
      if (window.scrollY > 0) {
        navbar.classList.add("navbar-hidden");
      } else {
        navbar.classList.remove("navbar-hidden");
      }
    };

    const handleNavClick = (event) => {
      event.preventDefault();
      const targetSectionId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (targetSectionId !== "home") {
        navbar.classList.add("navbar-hidden");
      }

      window.scrollTo({
        top: targetSection.offsetTop , 
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", toggleNavbarVisibility);

    document.querySelectorAll("nav a").forEach(function (link) {
      link.addEventListener("click", handleNavClick);
    });

    sections.forEach(function (section) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            window.location.hash = "#" + entry.target.id;
          }
        });
      });

      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", toggleNavbarVisibility);
      document.querySelectorAll("nav a").forEach(function (link) {
        link.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  return (
    <header className="navbar-body" ref={navbarRef}>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#fortune">Fortune</a>
        <a href="#bingo">Bingo</a>
        <a href="#js">JS</a>
      </nav>
      <div className="scroller">
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Navbar;
