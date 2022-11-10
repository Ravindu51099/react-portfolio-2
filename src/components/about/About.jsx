import React from "react";
import "./About.css";
import Me from "../../assets/Ravindu.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>

          <p>
            I am an adaptable college student (Bachelor of Science in Software
            Engineering) currently attending International College of Business
            and Technology. During the course of my academic career, I also
            managed to accrue nearly 2 Years of work experience. I had the
            privilege of working for Sterling BPO solutions in a web developer
            role in my free time, where I learned valuable professional skills
            such as web design, programming and web page content. In both my
            academic and professional life, I have been consistently praised as
            results-oriented by my professors and peers. Whether working on
            academic, extracurricular, or professional projects, I apply proven
            teamwork, creative thinking and communication skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
