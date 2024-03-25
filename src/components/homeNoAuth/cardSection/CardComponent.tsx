import React from 'react'
import styles from "./styles.module.scss";

type CardProps = {
    title: string;
    urlBackground: string;
    description: string
  };

const CardComponent = ({title, urlBackground, description}: CardProps) => {
    const cardStyle: React.CSSProperties = {
      backgroundImage: `url(${urlBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };

  return (
    <div>
        <div style={cardStyle} className={styles.card}>
          <p className={styles.cardTitle}>{title}</p>
          <p className={styles.cardDescription}>{description}</p>
		    </div>
    </div>
  )
}

export default CardComponent