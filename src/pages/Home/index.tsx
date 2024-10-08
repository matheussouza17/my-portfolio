import React from 'react';
import styles from './styles.module.scss'; // Estilos específicos da Home
import NavBar from '../../components/NavBar'; // Importando o novo NavBar
import '../../../styles/globals.scss'; // Importando estilos globais
import CertificationsCarousel from '../../components/CertificationsCarousel'; // Carrossel de Certificações
import ClientsCarousel from '../../components/ClientsCarousel'; // Carrossel de Clientes

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.name}>Matheus Henrique Souza</h1>
        <p className={styles.title}>Outsystems Developer & Backend Developer</p>
        <NavBar />
      </header>

      <section id="about" className={styles.about}>
        <h2>About Me</h2>
        <p>
          I'm a passionate developer specializing in Outsystems and backend development using Node.js. 
          I enjoy working on innovative projects and continuously expanding my skills.
        </p>
      </section>

      <section id="projects" className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectItem}>
          <h3>Inner Friend</h3>
          <p>A personal assistant AI project aiming to simulate conversations with a close friend.</p>
        </div>
        <div className={styles.projectItem}>
          <h3>Invoice Workflow</h3>
          <p>A workflow system for managing invoices and approvals with integrated AD support.</p>
        </div>
        <div className={styles.projectItem}>
          <h3>Pizzaria Backend</h3>
          <p>A backend project for managing a pizzeria's orders and customers. Check it out on <a href="https://github.com/matheussouza17/Pizzaria-BackEnd" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </div>
      </section>
       {/* Seção de Clientes */}
       <section id="clients" className={styles.clients}>
        <h2>Clients & Projects with Outsystems</h2>
        <ClientsCarousel />
      </section>

      {/* Seção de Certificações com Carrossel */}
      <section id="certifications" className={styles.certifications}>
        <h2>Certifications</h2>
        <CertificationsCarousel />
      </section>     

      <footer id="footer" className={styles.footer}>
        <p>Connect with me:</p>
        <a href="https://www.linkedin.com/in/matheus-henrique-souza-a453a5231" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/matheussouza17" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
};

export default Home;
