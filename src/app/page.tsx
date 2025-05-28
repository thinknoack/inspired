"use client";
import styles from "./page.module.scss";
import Image, { StaticImageData } from "next/image";

import everything from '../../public/we/everything.jpg'
import color from '../../public/we/color.jpg'


import red from '../../public/set/red.jpg'
import car from '../../public/set/car.jpg'
import gas from '../../public/set/gas.jpg'
import work from '../../public/set/work.jpg'
import wall from '../../public/set/wall.jpg'
import cross from '../../public/set/cross.jpg'
import sit from '../../public/set/sit-work.jpg'
import sit2 from '../../public/set/sit.jpg'
import dog from '../../public/set/dog.jpg'
import stand from '../../public/set/stand.jpg'
import scroll from '../../public/set/scroll.jpg'
import pond from '../../public/set/pond.jpg'
import road from '../../public/set/road.jpg'
import signs from '../../public/set/signs.jpg'
import polls from '../../public/set/polls.jpg'



// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
const doublehw = 1444;
const doublehh = 508;

const doublevw = 1444;
const doublevh = 1076;

  const singlew = 5749
  const singleh = 3900
  
const imageData = [
  { src: red, alt: "Red colored object", order: 1 },
  { src: car, alt: "Picture of a car", order: 2 },
  { src: gas, alt: "Gas station", order: 3 },
  { src: work, alt: "People working", order: 4 },
  { src: wall, alt: "Wall with graffiti", order: 5 },
  { src: cross, alt: "Crosswalk", order: 6 },
  { src: sit, alt: "Picture of a car near the train tracks", order: 7 },
  { src: signs, alt: "Various road signs", order: 8 },
  { src: polls, alt: "Polling station", order: 9 },
  { src: dog, alt: "People working", order: 10 },
  { src: sit2, alt: "Wall with graffiti", order: 11 },
  { src: stand, alt: "Crosswalk", order: 12 },
  { src: scroll, alt: "Picture of a car near the train tracks", order: 13 },
  { src: pond, alt: "Various road signs", order: 14 },
  { src: road, alt: "Polling station", order: 15 }
].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* New full-screen intro section */}
        <section className={styles.intro}>
          <div className={styles.introText}>
            <h1 className={styles.heading}>Inspired by William Eggleston</h1>
            <p>
              William Eggleston (b. 1939) is a groundbreaking American
              photographer who helped establish color photography as fine art.
              He is still alive and based in the American South.
            </p>
            <p>
              In 1976, he made history with the first solo color photography
              exhibit at MoMA, challenging black-and-white’s dominance in art
              photography. His rich dye-transfer prints gave ordinary scenes
              emotional depth and cinematic weight.
            </p>
          </div>
        </section>

       <section className={styles.section}>
          <div>
            <h2>Color in the Everyday</h2>
            <p>
              He used vivid color and a democratic eye to capture the beauty and
              strangeness of everyday life.
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
          </div>
        </section>

        <section className={styles.section}  style={{ paddingBottom: '100px' }}>
          <div>
            <h2>Everything Matters</h2>
            <p>
              Eggleston’s equal treatment of all subjects—from tricycles to
              sidewalks—helped redefined what’s worth photographing.
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
        </div>
        </section>
        <section className={styles.intro}>
          <div className={styles.introText}>
            <h2 className={styles.heading}>A response by Gregory Noack</h2>
            <p>
              I’m drawn to the way William Eggleston finds beauty in the
              mundane. In the following images, I’ve tried to echo his color sensibility and unflinching
              attention to the everyday.
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
          width={doublevw}
          height={doublevh}
        />
      </div>
    </div>
  </section>
))}
        <section className={styles.intro} >
          <div className={styles.introText}>
            <h2>Thank you</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
