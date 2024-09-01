import styles from './ProjectsStyles.module.css';
import foa from '../../assets/flipkart-order-analyzer.png';
import game2048 from '../../assets/2048.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={foa}
          link="https://chromewebstore.google.com/detail/mcpflafdobpbfojllbpbciphhgknnjje?authuser=0&hl=en-GB"
          h3="Order Analyzer"
          p="Flipkart orders analyzer"
        />
        <ProjectCard
          src='https://manish-shivhare.netlify.app/assets/manish-image-BMnFPNJG.png'
          link="https://blog-manish-shivhare.onrender.com/"
          h3="Blog site"
          p="Personal blog site using MERN"
        />
        <ProjectCard
          src={game2048}
          link="https://manish-shivhare-2048.netlify.app/"
          h3="2048-Game"
          p="Famous 2048 Game Clone"
        />
        
      </div>
    </section>
  );
}

export default Projects;
