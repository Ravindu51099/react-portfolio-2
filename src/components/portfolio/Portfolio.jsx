import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/greenworld.png";
import IMG3 from "../../assets/escapade.png";
import IMG4 from "../../assets/slviki.png";
import IMG5 from "../../assets/portfolio1.png";
import IMG6 from "../../assets/greenworld.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Simple React Portfolio Template",
    github: "https://github.com/dasunsucharith/react-simple-portfolio",
    demo: "https://dasunsucharith.github.io/resportfo/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Green World Trust One Page Website",
    github: "https://github.com/dasunsucharith/react-simple-portfolio",
    demo: "https://dasunsucharith.github.io/resportfo/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Escapade.lk Toursim Website",
    github: "https://github.com/dasunsucharith/react-simple-portfolio",
    demo: "https://escapade.lk/",
  },
  {
    id: 4,
    image: IMG4,
    title: "SLVIKI My Personal Blog",
    github: "https://github.com/dasunsucharith/react-simple-portfolio",
    demo: "https://slviki.org/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Simple React Portfolio Template",
    github: "https://github.com/dasunsucharith/react-simple-portfolio",
    demo: "https://dasunsucharith.github.io/resportfo/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Simple React Portfolio Template",
    github: "https://github.com/dasunsucharith/react-simple-portfolio",
    demo: "https://dasunsucharith.github.io/resportfo/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        {/* <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="portfolio_1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="portfolio_1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="portfolio_1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="portfolio_1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="portfolio_1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>   */}
      </div>
    </section>
  );
}

export default Portfolio;
