"use client";
import styles from "./page.module.scss";
import Image from "next/image";

import everything from "../../public/we/everything.jpg";
import color from "../../public/we/color.jpg";

import red from "../../public/set/red.jpg";
import car from "../../public/set/car.jpg";
import gas from "../../public/set/gas.jpg";
import work from "../../public/set/work.jpg";
//import wall from '../../public/set/wall.jpg'
import cross from "../../public/set/cross.jpg";
import sit from "../../public/set/sit.jpg";
//import sit2 from '../../public/set/sit2.jpg'
//import dog from '../../public/set/dog.jpg'
//import stand from '../../public/set/stand.jpg'
import scroll from "../../public/set/scroll.jpg";
import pond from "../../public/set/pond.jpg";
//import road from '../../public/set/road.jpg'
import signs from "../../public/set/signs.jpg";
//import signs2 from '../../public/set/sign2.jpg'
import polls from "../../public/set/polls.jpg";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  const doublehw = 1444;
  const doublehh = 508;

  const doublevw = 1444;
  const doublevh = 1076;

  const singlew = 1444;
  const singleh = 980;

  const imageData = [
    { src: red, alt: "Red colored object", order: 1, caption: "Lights" },
    { src: car, alt: "Picture of a car", order: 2, caption: "Tracks" },
    { src: polls, alt: "Polls", order: 3, vert: true, caption: "Untitled" },
    { src: gas, alt: "Gas station", order: 4, caption: "Work1" },
    { src: work, alt: "People working", order: 5, caption: "Work2" },
    {
      src: sit,
      alt: "Sitting",
      order: 6,
      vert: true,
      caption: "Untitled / Untitled",
    },
    {
      src: signs,
      alt: "Various road signs",
      order: 7,
      vert: true,
      caption: "Untitled",
    },
    { src: cross, alt: "Crosswalk", order: 8, caption: "Untitled" },
    {
      src: scroll,
      alt: "Picture of a car near the train tracks",
      order: 9,
      caption: "Scroll",
    },
    { src: pond, alt: "Various road signs", order: 10, caption: "Untitled" },
  ].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* New full-screen intro section */}
        <section className={styles.intro + " " + styles.altbg}>
          <div className={styles.introText}>
            <h1 className={styles.heading}>Inspired</h1>
          </div>
        </section>
        <section className={styles.intro + " " + styles.altbg}>
          <div className={styles.introText}>
            <h2 className={styles.heading}>A rebellious spirit</h2>
            <p>
              William Eggleston (b. 1939) is a groundbreaking photographer based
              in the South, known for his dapper Southern style, love of music
              and whisky, and is curt as his photographs... often shooting just
              one frame per subject, trusting his instinct. He describes his
              process as a “democratic vision,” giving equal weight to the
              ordinary and overlooked. His images, like his life, are rich with
              precision, tension, and mystery.
            </p>
          </div>
        </section>
        <section className={styles.intro + " " + styles.altbg}>
          <div className={styles.introText}>
            <h2 className={styles.heading}>&ldquo;The worst show of the year&rdquo;</h2>

            <p>
              In 1976, Eggleston made history with the first solo color
              photography exhibit at the Museum of Modern Art in New York,
              helping to establish color photography as a legitimate form of
              fine art. The show challenged the long-standing dominance of
              black-and-white in the art world. The New York Times notoriously
              called it “the worst show of the year,” and even Ansel Adams wrote
              a letter expressing his disdain. Yet Eggleston’s lush dye-transfer
              prints brought emotional depth and cinematic weight to everyday
              scenes. Some claim he is one of the most influential photographers of
              the latter half of the 20th century.
            </p>
          </div>
        </section>

        <section className={styles.section + " " + styles.fullHeight + " " + styles.whitebg}>
          <div>
            <h2>Color in the Everyday</h2>
            <p>
              He used vivid color and a democratic eye to capture the beauty and
              strangeness of everyday life. His photos are rich and vivid, yet
              never tip into artificial or exaggerated hyperrealism.
            </p>
            <div className={styles.image}>
              <Image
                src={color}
                alt="Picture of a car near the train tracks"
                width={doublehw}
                height={doublehh}
                priority
                unoptimized
              />
            </div>
            <span className={styles.caption}>
              <span style={{width: "40%"}}>
                <em>Greenwood, Mississippi (Red Ceiling)</em>
              </span>
               <span style={{width: "20%"}}>
                <em>Untitled</em>
              </span>
              <span style={{width: "40%"}}>
                <em>Untitled (The Outlands)</em>
              </span>
            </span>
          </div>
        </section>

        <section
          className={styles.section + " " + styles.fullHeight + " " + styles.altbg}        >
          <div>
            <h2>Everything Matters</h2>
            <p>
              Eggleston’s approach reshaped our sense of what’s worth
              photographing. His disregard for conventional composition and
              deliberate use of unusual cropping produced images that feel both
              spontaneous and iconic.
            </p>

            <div className={styles.image}>
              <Image
                src={everything}
                alt="Picture of a car near the train tracks"
                width={doublehw}
                height={doublehh}
                priority
                unoptimized
              />
            </div>
            <span className={styles.caption}>
              <span style={{width: "40%"}}>
                <em>Untitled (Tricycle and Memphis)</em>
              </span>
              <span style={{width: "20%"}}>
               <em>Untitled</em>
              </span>
              <span style={{width: "40%"}}>
                <em>Untitled (Louisiana/Green Car, Green Xox)</em>
                
              </span>
            </span>
          </div>
        </section>
        <section className={styles.intro}>
          <div className={styles.introText}>
            <h2 className={styles.heading}>A response by Gregory Noack</h2>
            <p>
              I’m drawn to how Eggleston finds beauty in the mundane. In
              these images, I’ve tried to echo his eye for color and his
              unflinching attention to the everyday.
            </p>
          </div>
        </section>

        {imageData.map((item, index) => (
          <section className={styles.section} key={index}>
            <div>
              <div className={styles.imageVert}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.vert ? doublevw : singlew}
                  height={item.vert ? doublevh : singleh}
                />
              </div>
              {/* <span className={styles.caption}>
                <span>
                  <em>{item.caption}</em>
                </span>
              </span> */}
            </div>
          </section>
        ))}
        <section className={styles.intro + " " + styles.nobg}>
          <div className={styles.introText}>
            <h2>Thank you</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
