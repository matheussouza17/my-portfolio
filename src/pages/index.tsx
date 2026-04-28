import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import React, { useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar';
import CertificationsCarousel from './components/CertificationsCarousel';
import ClientsCarousel from './components/ClientsCarousel';
import ProjectsNodeCarousel from './components/ProjectsGeneralCarousel';

export default function Home() {
  const [isPortuguese, setIsPortuguese] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const browserLanguage = navigator.language?.toLowerCase() ?? '';
      setIsPortuguese(browserLanguage.startsWith('pt'));
    }
  }, []);

  const text = useMemo(() => {
    if (isPortuguese) {
      return {
        headline: 'Software Developer na askblue | .NET | OutSystems | SQL | Node',
        nav: {
          about: 'Sobre',
          projects: 'Projetos',
          certifications: 'Certificações',
        },
        aboutTitle: 'Sobre Mim',
        about: (
          <>
            Olá,<br /><br />
            Sou apaixonado por desenvolvimento de software e gosto de criar soluções com impacto real no dia a dia das pessoas.
            Tenho perfil voltado para inovação, novos desafios e evolução contínua, tanto técnica quanto pessoal.<br /><br />
            Atualmente atuo na askblue como Software Developer, com foco em OutSystems e também contribuindo em backend com Node.js, .NET e SQL.
            Estou cursando Ciência da Computação na PUC Goiás, unindo teoria acadêmica com prática em projetos reais.<br /><br />
            Em paralelo, sigo investindo em certificações e no inglês, com objetivo de fortalecer meu perfil para oportunidades internacionais.
            Fora do trabalho, valorizo tempo com a família e esportes, especialmente futebol.
          </>
        ),
        experienceTitle: 'Experiência',
        experience: (
          <>
            <strong>Consultant - askblue</strong> (Abr 2025 - Atual)<br />
            Desenvolvimento de software e consultoria, com foco em soluções OutSystems e fluxos corporativos.<br /><br />
            <strong>Junior Consultant - askblue</strong> (Nov 2023 - Abr 2025)<br />
            Desenvolvimento e manutenção de aplicações de negócio em OutSystems.<br /><br />
            <strong>Trainee - askblue</strong> (Nov 2022 - Nov 2023)<br />
            Início da trajetória profissional em desenvolvimento low-code e entrega de projetos.<br /><br />
            <strong>Experiências anteriores</strong>: Analista de Suporte na Core Tecnologia, Técnico em Eletrônica na Catec Goiânia e Repositor no Supermercado Mercegás.
          </>
        ),
        educationTitle: 'Formação',
        education: (
          <>
            <strong>Bacharelado em Ciência da Computação</strong><br />
            Pontifícia Universidade Católica de Goiás (2022 - 2026)<br /><br />
            <strong>Curso Técnico Integrado em Informática</strong><br />
            Instituto Federal Goiano - Campus Urutaí (fev de 2019 - jan de 2022)<br />
            Competências: Banco de dados e Programação (computação)
          </>
        ),
        clientsTitle: 'Clientes e Projetos com OutSystems',
        projectsTitle: 'Outros Projetos',
        certificationsTitle: 'Certificações',
        footer: 'Todos os direitos reservados a Matheus Henrique Souza',
      };
    }

    return {
      headline: 'Software Developer at askblue | .NET | OutSystems | SQL | Node',
      nav: {
        about: 'About',
        projects: 'Projects',
        certifications: 'Certifications',
      },
      aboutTitle: 'About Me',
      about: (
        <>
          Hello,<br /><br />
          I am passionate about software development and enjoy building meaningful solutions that simplify people&apos;s work and daily routines.
          I like innovation, new challenges, and continuous growth in both technical and personal skills.<br /><br />
          Today, I work at askblue as a Software Developer, focusing on OutSystems while also contributing with backend knowledge in Node.js, .NET, and SQL.
          I am currently studying Computer Science at PUC Goias, combining academic theory with practical experience from real projects.<br /><br />
          In parallel, I continue investing in certifications and English studies, always aiming to improve my profile for international opportunities.
          Outside of work, I value time with my family and sports, especially soccer.
        </>
      ),
      experienceTitle: 'Experience',
      experience: (
        <>
          <strong>Consultant - askblue</strong> (Apr 2025 - Present)<br />
          Software development and consulting, with focus on OutSystems solutions and enterprise workflows.<br /><br />
          <strong>Junior Consultant - askblue</strong> (Nov 2023 - Apr 2025)<br />
          Development and maintenance of business applications in OutSystems.<br /><br />
          <strong>Trainee - askblue</strong> (Nov 2022 - Nov 2023)<br />
          Start of professional path in low-code development and project delivery.<br /><br />
          <strong>Previous roles</strong>: Support Analyst at Core Tecnologia, Electronics Technician at Catec Goiania, and Retail Assistant at Supermercado Mercegas.
        </>
      ),
      educationTitle: 'Education',
      education: (
        <>
          <strong>Bachelor&apos;s in Computer Science</strong><br />
          Pontificia Universidade Catolica de Goias (2022 - 2026)<br /><br />
          <strong>Integrated Technical Course in Information Technology</strong><br />
          Federal Institute of Goiano - Urutai Campus (Feb 2019 - Jan 2022)<br />
          Skills: Databases and Programming (Computer Science)
        </>
      ),
      clientsTitle: 'Clients & Projects with Outsystems',
      projectsTitle: 'Other Projects',
      certificationsTitle: 'Certifications',
      footer: 'All rights reserved to Matheus Henrique Souza',
    };
  }, [isPortuguese]);

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <Image
          src="/general/Me.jpg"
          alt="Matheus Henrique Souza"
          className={styles.profileImage}
          width={150} 
          height={150} 
          priority 
        />
        <h1 className={styles.name}>Matheus Henrique Souza</h1>
        
        <div className={styles.redes}>
          <a href="https://www.linkedin.com/in/matheus-henrique-souza-a453a5231" target="_blank" rel="noopener noreferrer">
            <Image
              src="/general/Linkedin.png"
              alt="Linkedin"
              className={styles.socialIcon}
              width={50}
              height={50}
              priority 
            />
          </a>
          <a href="https://github.com/matheussouza17" target="_blank" rel="noopener noreferrer">
            <Image
              src="/general/GitHub.png"
              alt="GitHub"
              className={styles.socialIcon}
              width={50}
              height={50}
              priority 
            />
          </a>
          <a href="https://www.instagram.com/matheus_21_07/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/general/Instagram.png"
              alt="Instagram"
              className={styles.socialIcon}
              width={50}
              height={50}
              priority 
            />
          </a>
        </div>
        
        <p className={styles.title}>{text.headline}</p>
        <NavBar labels={text.nav} />
      </header>

      <section id="about" className={styles.about}>
        <h2>{text.aboutTitle}</h2>
        <p>
          {text.about}
        </p>
      </section>

      <section className={styles.about}>
        <h2>{text.experienceTitle}</h2>
        <p>
          {text.experience}
        </p>
      </section>

      <section className={styles.about}>
        <h2>{text.educationTitle}</h2>
        <p>
          {text.education}
        </p>
      </section>

      <section id="projects" className={styles.clients}>
        <h2>{text.clientsTitle}</h2>
        <ClientsCarousel />
      </section>

      <section id="projectsNode" className={styles.projects}>
        <h2>{text.projectsTitle}</h2>
        <ProjectsNodeCarousel />
      </section>

      <section id="certifications" className={styles.certifications}>
        <h2>{text.certificationsTitle}</h2>
        <CertificationsCarousel />
      </section>     

      <footer id="footer" className={styles.footer}>
        <p>{text.footer}</p>
      </footer>
    </div>
  );
}
