import styles from './ProjectsStyles.module.css';
import foa from '../../assets/flipkart-order-analyzer.png';
import game2048 from '../../assets/2048.png';
import blogImage from '../../assets/manish-image.png';
import ProjectCard from '../../common/ProjectCard';

const projects = [
  {
    src: foa,
    link: 'https://chromewebstore.google.com/detail/mcpflafdobpbfojllbpbciphhgknnjje?authuser=0&hl=en-GB',
    h3: 'Order Analyzer',
    p: 'Flipkart orders analyzer',
  },
  {
    src: blogImage,
    link: 'https://blog-manish-shivhare.onrender.com/',
    h3: 'Blog site',
    p: 'Personal blog site using MERN',
  },
  {
    src: game2048,
    link: 'https://manish-shivhare-2048.netlify.app/',
    h3: '2048-Game',
    p: 'Famous 2048 Game Clone',
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
