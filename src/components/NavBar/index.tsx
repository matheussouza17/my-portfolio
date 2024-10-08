// components/NavBar.tsx
import React from 'react';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <button onClick={() => scrollToSection('about')}>Sobre</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('projects')}>Projetos</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('footer')}>Contato</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
