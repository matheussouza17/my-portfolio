import React, { useState, useEffect } from 'react';
import styles from './ClientsCarousel.module.scss';

// Lista de clientes e breve descrição do trabalho realizado
const clients = [
  { name: 'Benfica', logo: '/images/benfica-logo.png', description: 'Developed custom Outsystems solutions for their operations.' },
  { name: 'Banco CTT', logo: '/images/banco-ctt-logo.png', description: 'Implemented banking workflows in Outsystems.' },
  { name: 'Fundação José Neves', logo: '/images/fjn-logo.png', description: 'Built educational platforms using Outsystems.' },
  { name: 'Mercer', logo: '/images/mercer-logo.png', description: 'Developed HR solutions with Outsystems.' },
  { name: 'CTT', logo: '/images/ctt-logo.png', description: 'Created logistical platforms in Outsystems.' },
  { name: 'Auchan', logo: '/images/auchan-logo.png', description: 'Streamlined retail operations with Outsystems.' },
];

const ClientsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const autoScrollDelay = 3000; // Tempo de rotação automática

  const start = currentIndex * itemsPerPage;
  const end = start + itemsPerPage;

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < Math.ceil(clients.length / itemsPerPage) - 1
        ? prevIndex + 1
        : 0 // Volta ao início quando chegar ao final
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1
        : Math.ceil(clients.length / itemsPerPage) - 1 // Vai para o último quando estiver no início
    );
  };

  // Rotação automática
  useEffect(() => {
    const autoScroll = setInterval(() => {
      next();
    }, autoScrollDelay);

    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.navButton} onClick={prev}>
        &#9664;
      </button>

      <div className={styles.carousel}>
        {clients.slice(start, end).map((client, index) => (
          <div key={index} className={styles.clientCard}>
            <img src={client.logo} alt={`${client.name} logo`} />
            <div className={styles.clientInfo}>
              <h3>{client.name}</h3>
              <p>{client.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.navButton} onClick={next}>
        &#9654;
      </button>

      <div className={styles.dots}>
        {Array(Math.ceil(clients.length / itemsPerPage))
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;
