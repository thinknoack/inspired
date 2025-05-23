"use client";
import styles from "./page.module.scss";
import ParallaxImage from "./components/ParallaxImage";

import everything from '../../public/we/everything.jpg'
import color from '../../public/we/color.jpg'


import red from '../../public/set/red.jpg'
import car from '../../public/set/car.jpg'
import gas from '../../public/set/gas.jpg'
import work from '../../public/set/work.jpg'
import wall from '../../public/set/wall.jpg'
import cross from '../../public/set/cross.jpg'


import sit from '../../public/set/sit-work.jpg'
import signs from '../../public/set/signs.jpg'
import polls from '../../public/set/polls.jpg'



// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {

  const doublehw = 8192
  const doublehh = 2880

  const doublevw = 5699
  const doublevh = 4249

  const singlew = 5749
  const singleh = 3900

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* New full-screen intro section */}
        <section className={styles.intro}>
          <div className={styles.introText}>
            <h1>Inspired by William Eggleston</h1>
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
                  <ParallaxImage
                    src={color}
                    alt="Picture of a car near the train tracks"
                    width={doublehw}
                    height={doublehh}
                    yParallaxAmount={-200}
                    xParallaxAmount={0}
                    startViewportFromBottom={0}
                    endViewportFromTop={0}
                    priority={true}
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
                <ParallaxImage
                  src={everything}
                  alt="Picture of a car near the train tracks"
                  width={doublehw}
                  height={doublehh}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                  priority={true}
                />
              </div>
        </div>
        </section>
        <section className={styles.intro}>
          <div className={styles.introText}>
            <h2>A response by Gregory Noack</h2>
            <p>
              I’m drawn to the way William Eggleston finds beauty in the
              mundane. In the following images, I’ve tried to echo his color sensibility and unflinching
              attention to the everyday.
            </p>
          </div>
        </section>
        {/* sit */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={sit}
                alt="Picture of a car near the train tracks"
                width={doublevw}
                height={doublevh}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>
        {/* car */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={car}
                alt="Picture of a car near the train tracks"
                width={singlew}
                height={singleh}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>
        {/* signs */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={signs}
                alt="Picture of a car near the train tracks"
                width={doublevw}
                height={doublevh}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>
        
        {/* Work */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={work}
                alt="Picture of a car near the train tracks"
                width={singlew}
                height={singleh}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>
         {/* gas */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={gas}
                alt="Picture of a car near the train tracks"
                width={singlew}
                height={singleh}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>
        {/* cross */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={cross}
                alt="Picture of a car near the train tracks"
                width={singlew}
                height={singleh}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>

        {/* wall */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={wall}
                alt="Picture of a car near the train tracks"
                width={singlew}
                height={singleh}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>



        {/* polls */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={polls}
                alt="Picture of a car near the train tracks"
                width={doublevw}
                height={doublevh}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>
        {/* red */}
        <section className={styles.section} style={{ paddingBottom: '100px' }}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={red}
                alt="Picture of a car near the train tracks"
                width={singlew}
                height={singleh}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>




        {/* <section className={`${styles.section} ${styles.double}`}>
          <div>
            <div className={styles.images}>
            <div className={styles.image}>
              <ParallaxImage
                src={self}
                alt="Tricycle placeholder"
                width={singlew}
                height={4049}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
            <div className={styles.image}>
              <ParallaxImage
                src={leave}
                alt="Sidewalk placeholder"
                width={singlew}
                height={4049}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
            </div>
          </div>
        </section> */}

        <section className={styles.intro} >
          <div className={styles.introText}>
            <h2>Thank you</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
