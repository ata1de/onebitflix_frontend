import courseService from '@/src/services/courseService';
import React from 'react'
import useSWR from 'swr';
import SlideComponent from '../../common/slideComponent';
import styles from '../../../../styles//slideSection.module.scss'

const FeaturedCategory = () => {
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);
    console.log(`data do featured category ${data}`)
    console.log(data)

    if (error) return error;
    if (!data) return <p>Loading...</p>;
  return (
    <div>
        <p className={styles.titleCategory}>EM DESTAQUE</p>
        <SlideComponent courses={data.data}/>
    </div>
  )
}

export default FeaturedCategory