import React from 'react'
import styles from '../../../../styles/slideSection.module.scss'
import SlideComponent from '../../common/slideComponent'
import useSWR from 'swr';
import courseService from '@/src/services/courseService';
import PageSpinner from '../../common/spinner';

const FavoritesCategory= () => {
    const { data, error } = useSWR("/favorites", courseService.getFavoritesCourses);
    // console.log(`data do favorites category ${data}`)

    if (error) return error;
    if (!data) return <PageSpinner/>;
  return (
    <div>
        <p className={styles.titleCategory}>MINHA LISTA</p>
        {data.data.courses.length >= 1 ? (
            <SlideComponent courses={data.data.courses} auth={true}/>
        ) : (
        <p className="h5 text-center pt-3">
            <strong>Você não tem nenhum curso na lista</strong>
        </p>
        )}
    </div>
  )
}

export default FavoritesCategory