import React from 'react'
import styles from './styles.module.scss'
import { CourseType } from "../../../services/courseService";

interface props {
  course: CourseType;
}

const SlideCard = ({ course }: props) => {
  return (
    <div>
        <div>
            <img className={styles.slideImg} src={` ${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name} />
            <p className={styles.slideTitle}>{course.name}</p>
            <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
    </div>
  )
}

export default SlideCard