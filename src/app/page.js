import Image from "next/image";
import styles from "./page.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consequat.</p>
        <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image className="brand" src="/brands.png" alt="img" fill />
        </div>
      </div>
      <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="img" fill />
      </div>
    
    </div>
  );
}

export default HomePage;
