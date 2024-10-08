import React, { useState, useEffect } from 'react';
import styles from './CertificationsCarousel.module.scss';

const certifications = [
  { title: 'Outsystems Certified Associate Developer', year: 2021, image: '/certifications-images/outsystems-cert.png' },
  { title: 'Node.js Backend Developer Certification', year: 2020, image: '/certifications-images/nodejs-cert.png' },
  { title: 'AWS Certified Solutions Architect', year: 2022, image: '/certifications-images/aws-cert.png' },
  { title: 'Docker Certified Associate', year: 2021, image: '/certifications-images/docker-cert.png' },
  { title: 'Kubernetes Certified Developer', year: 2021, image: '/certifications-images/kubernetes-cert.png' },
];

const CertificationsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const autoScrollDelay = 3000; // Tempo de rotação automática (em milissegundos)

  const start = currentIndex * itemsPerPage;
  const end = start + itemsPerPage;

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < Math.ceil(certifications.length / itemsPerPage) - 1
        ? prevIndex + 1
        : 0 // Volta para o início quando chegar ao final
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1
        : Math.ceil(certifications.length / itemsPerPage) - 1 // Vai para o último quando estiver no início
    );
  };

  // Rotação automática
  useEffect(() => {
    const autoScroll = setInterval(() => {
      next();
    }, autoScrollDelay);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.navButton} onClick={prev}>
        &#9664;
      </button>

      <div className={styles.carousel}>
        {certifications.slice(start, end).map((cert, index) => (
          <div key={index} className={styles.certItem}>
            <img src={cert.image} alt={`${cert.title} image`} className={styles.certImage} />
            <h3>{cert.title}</h3>
            <p>{cert.year}</p>
          </div>
        ))}
      </div>

      <button className={styles.navButton} onClick={next}>
        &#9654;
      </button>

      <div className={styles.dots}>
        {Array(Math.ceil(certifications.length / itemsPerPage))
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

export default CertificationsCarousel;
