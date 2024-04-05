import React, { useState } from 'react'
import styles from '../slideCard/styles.module.scss'
import courseService, { CourseType } from "../../../services/courseService";
import useSWR from 'swr';

interface props {
  course: CourseType;
}

const SlideCardNoAuth = ({ course }: props) => {  
  return (
    <div>
        <div className={styles.slide}>
            <img className={styles.slideImg} src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name} />
            <p className={styles.slideTitle} style={{ padding: '8px 16px' }}>{course.name}</p>
            <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
    </div>
  )
}

export default SlideCardNoAuth