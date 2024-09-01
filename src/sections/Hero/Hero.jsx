import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/manish-image.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Manish Shivhare"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Manish
          <br />
          Shivhare
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://github.com/manishshivhare" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/manish-shivhare" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <div className={styles.resumeBlogButtons}>
          <a
            href="https://drive.google.com/file/d/1qYCsOGq4y4CKKabR8nLRbfk2_-RA3vHG/view?usp=drive_link"
            target="_blank"
          >
            <button className="hover">Resume</button>
          </a>

          <a href="https://blog-manish-shivhare.onrender.com/" target="_blank">
            <button className="hover">Blog</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
