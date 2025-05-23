"use client";
import styles from "./page.module.scss";
import ParallaxImage from "./components/ParallaxImage";

import wered from '../../public/we/red.jpg'
import wecar2 from '../../public/we/car2.jpg'
import webike from '../../public/we/bike.jpg'
import wecar3 from '../../public/we/car3.jpg'
import red from '../../public/red.jpg'
import sit from '../../public/sit.jpg'
import zebra from '../../public/zebra.jpg'
import car from '../../public/car.jpg'
import gas from '../../public/work1.jpg'
import work2 from '../../public/work2.jpg'
import sign1 from '../../public/sign1.jpg'
import sign2 from '../../public/sign2.jpg'
import haul1 from '../../public/haul1.jpg'
import haul2 from '../../public/haul2.jpg'
import wall from '../../public/wall.jpg'
import polls1 from '../../public/polls1.jpg'
import polls2 from '../../public/polls2.jpg'
// import self from '../../public/self.jpg'
// import leave from '../../public/leave.jpg'

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {

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

        <section className={`${styles.section} ${styles.double}`}>
          <div>
            <h2>Color in the Everyday</h2>
            <p>
              He used vivid color and a democratic eye to capture the beauty and
              strangeness of everyday life.
            </p>
            <div className={styles.images}>
              <div className={styles.image}>
                <ParallaxImage
                  src={wered}
                  alt="Tricycle placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                  priority={true}
                />
              </div>
              <div className={styles.image}>
                <ParallaxImage
                  src={wecar2}
                  alt="Sidewalk placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.double}`}>
          <div>
            <h2>Everything Matters</h2>
            <p>
              Eggleston’s equal treatment of all subjects—from tricycles to
              sidewalks—helped redefined what’s worth photographing.
            </p>
            <div className={styles.images}>
              <div className={styles.image}>
                <ParallaxImage
                  src={webike}
                  alt="Tricycle placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                />
              </div>
              <div className={styles.image}>
                <ParallaxImage
                  src={wecar3}
                  alt="Sidewalk placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                />
              </div>
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
        <section className={`${styles.section} ${styles.double}`}>
          <div>
            <div className={styles.images}>
              <div className={styles.image}>
                <ParallaxImage
                  src={sit}
                  alt="Tricycle placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                />
              </div>
              <div className={styles.image}>
                <ParallaxImage
                  src={zebra}
                  alt="Sidewalk placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                />
              </div>
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
                width={1600}
                height={1400}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>
        {/* signs */}
        <section className={`${styles.section} ${styles.double}`}>
          <div>
            <div className={styles.images}>
              <div className={styles.image}>
                <ParallaxImage
                  src={sign1}
                  alt="Tricycle placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                />
              </div>
              <div className={styles.image}>
                <ParallaxImage
                  src={sign2}
                  alt="Sidewalk placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Work */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={work2}
                alt="Picture of a car near the train tracks"
                width={1600}
                height={1400}
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
                width={1600}
                height={1400}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>
        
        {/* haul */}
        <section className={`${styles.section} ${styles.double}`}>
          <div>
            <div className={styles.images}>
              <div className={styles.image}>
                <ParallaxImage
                  src={haul1}
                  alt="Tricycle placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                />
              </div>
              <div className={styles.image}>
                <ParallaxImage
                  src={haul2}
                  alt="Sidewalk placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                />
              </div>
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
                width={1600}
                height={1400}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
          </div>
        </section>



        {/* polls */}
        <section className={`${styles.section} ${styles.double}`}>
          <div>
            <div className={styles.images}>
              <div className={styles.image}>
                <ParallaxImage
                  src={polls1}
                  alt="Tricycle placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                />
              </div>
              <div className={styles.image}>
                <ParallaxImage
                  src={polls2}
                  alt="Sidewalk placeholder"
                  width={1600}
                  height={1400}
                  yParallaxAmount={-200}
                  xParallaxAmount={0}
                  startViewportFromBottom={0}
                  endViewportFromTop={0}
                />
              </div>
            </div>
          </div>
        </section>
        {/* red */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={red}
                alt="Picture of a car near the train tracks"
                width={1600}
                height={1400}
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
                width={1600}
                height={1400}
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
                width={1600}
                height={1400}
                yParallaxAmount={-200}
                xParallaxAmount={0}
                startViewportFromBottom={0}
                endViewportFromTop={0}
              />
            </div>
            </div>
          </div>
        </section> */}

        <section className={styles.intro}>
          <div className={styles.introText}>
            <h2>Thank you</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
