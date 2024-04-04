import React, { useState } from 'react'
import styles from './styles.module.scss'
import { CourseType } from "../../../services/courseService";

interface props {
  course: CourseType;
  auth?: boolean;
}

const SlideCard = ({ course, auth }: props) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {

  setIsFavorited(!isFavorited);

  if (auth) {
    
  };

  }
  return (
    <div>
        <div className={styles.slide}>
            <img className={styles.slideImg} src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name} />
            {auth ? (
              <div className={styles.sectionTitle}>
                <p className={styles.slideTitle}>{course.name}</p>
                <img
                  src={isFavorited? "/course/iconFavorited.svg":"/course/iconAddFav.svg"}
                  alt="IconAddFav"
                  className={styles.favoriteIcon}
                  onClick={handleFavorite}
                />
              </div>
            ) : (
              <p className={styles.slideTitle} style={{ padding: '8px 16px' }}>{course.name}</p>
      )}
            <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
    </div>
  )
}

export default SlideCard