import React from 'react'
import styles from './styles.module.scss'
import { CourseType } from "../../../services/courseService";

interface props {
  course: CourseType;
  auth?: boolean;
}

const SlideCard = ({ course, auth }: props) => {
  return (
    <div>
        <div className={styles.slide}>
            <img className={styles.slideImg} src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name} />
            {auth ? (
              <div className={styles.sectionTitle}>
                <p className={styles.slideTitle}>{course.name}</p>
                <img
                  src="/course/iconAddFav.svg"
                  alt="IconAddFav"
                  className={styles.favoriteIcon}
                />
              </div>
            ) : (
              <p className={styles.slideTitle}>{course.name}</p>
      )}
            <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
    </div>
  )
}

export default SlideCard