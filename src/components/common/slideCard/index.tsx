import React, { useState } from 'react'
import styles from './styles.module.scss'
import courseService, { CourseType } from "../../../services/courseService";
import useSWR from 'swr';

interface props {
  course: CourseType;
}

const SlideCard = ({ course }: props) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = async() => {
    try {
      await courseService.postAddFavorite(course.id);
      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error('Erro ao favoritar o curso:', error);
      // Trate o erro conforme necessário
    }
  };
  
  // const {data, error } = useSWR('/postFavorite', () => {
  //   return courseService.postAddFavorite(course.id)
  // })

  // if (error) return error;
  // if (!data) return <p>Loading...</p>;
  
  return (
    <div>
        <div className={styles.slide}>
            <img className={styles.slideImg} src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name} />
            <div className={styles.sectionTitle}>
                <p className={styles.slideTitle}>{course.name}</p>
                <img
                  src={isFavorited? "/course/iconFavorited.svg":"/course/iconAddFav.svg"}
                  alt="IconAddFav"
                  className={styles.favoriteIcon}
                  onClick={handleFavorite}
                />
              </div>
            <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
    </div>
  )
}

export default SlideCard