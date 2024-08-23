import styles from './ProjectsStyles.module.css';
import foa from '../../assets/flipkart-order-analyzer.png';
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
        
      </div>
    </section>
  );
}

export default Projects;
