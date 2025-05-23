"use client";
import styles from "./page.module.scss";
import ParallaxImage from "./components/ParallaxImage";


const basePath =
  typeof window !== "undefined" &&
  window.location.pathname.startsWith("/inspired")
    ? "/inspired"
    : "";


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
                  src={`${basePath}/we/red.jpg`}
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
                  src={`${basePath}/we/car2.jpg`}
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
                  src={`${basePath}/we/bike.jpg`}
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
                  src={`${basePath}/we/car3.jpg`}
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
        {/* red */}
        <section className={styles.section}>
          <div>
            <div className={styles.image}>
              <ParallaxImage
                src={`${basePath}/red.jpg`}
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
        {/* sit */}
        <section className={`${styles.section} ${styles.double}`}>
          <div>
            <div className={styles.images}>
              <div className={styles.image}>
                <ParallaxImage
                  src={`${basePath}/sit.jpg`}
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
                  src={`${basePath}/zebra.jpg`}
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
                src={`${basePath}/car.jpg`}
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
        {/* work */}
        <section className={`${styles.section} ${styles.double}`}>
          <div>
            <div className={styles.images}>
              <div className={styles.image}>
                <ParallaxImage
                  src={`${basePath}/work1.jpg`}
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
                  src={`${basePath}/work2.jpg`}
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
        {/* signs */}
        <section className={`${styles.section} ${styles.double}`}>
          <div>
            <div className={styles.images}>
              <div className={styles.image}>
                <ParallaxImage
                  src={`${basePath}/sign1.jpg`}
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
                  src={`${basePath}/sign2.jpg`}
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
        {/* haul */}
        <section className={`${styles.section} ${styles.double}`}>
          <div>
            <div className={styles.images}>
              <div className={styles.image}>
                <ParallaxImage
                  src={`${basePath}/haul1.jpg`}
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
                  src={`${basePath}/haul2.jpg`}
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
                src={`${basePath}/wall.jpg`}
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
                  src={`${basePath}/polls1.jpg`}
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
                  src={`${basePath}/polls2.jpg`}
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

        {/* <section className={`${styles.section} ${styles.double}`}>
          <div>
            <div className={styles.images}>
            <div className={styles.image}>
              <ParallaxImage
                src={`${basePath}/self.jpg`}
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
                src={`${basePath}/leave.jpg`}
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
