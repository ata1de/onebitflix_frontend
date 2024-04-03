import courseService from '@/src/services/courseService';
import React from 'react'
import useSWR from 'swr';
import SlideComponent from '../../common/slideComponent';
import styles from '../../../../styles//slideSection.module.scss'

const NewestCategory = () => {
    const { data, error } = useSWR("/newest", courseService.getNewestCourses)

    if (error) return error;
    if (!data) return <p>Loading...</p>;
  return (
    <div>
        <p className={styles.titleCategory}>LANÇAMENTOS</p>
        <SlideComponent courses={data.data}/>
    </div>
  )
}

export default NewestCategory