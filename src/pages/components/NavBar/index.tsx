import React from 'react';
import styles from './NavBar.module.scss';

type NavBarProps = {
  labels: {
    about: string;
    projects: string;
    certifications: string;
  };
};

const NavBar: React.FC<NavBarProps> = ({ labels }) => {
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
          <button onClick={() => scrollToSection('about')}>{labels.about}</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('projects')}>{labels.projects}</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('certifications')}>{labels.certifications}</button>
        </li>
        {/* <li>
          <button onClick={() => scrollToSection('footer')}>Contact</button>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
