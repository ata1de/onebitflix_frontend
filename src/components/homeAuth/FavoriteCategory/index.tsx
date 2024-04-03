import React from 'react'
import styles from '../../../../styles/slideSection.module.scss'
import SlideComponent from '../../common/slideComponent'
import useSWR from 'swr';
import courseService from '@/src/services/courseService';

const FavoritesCategory= () => {
    const { data, error } = useSWR("/favorites", courseService.getFavoritesCourses);

    if (error) return error;
    if (!data) return <p>Loading...</p>;
  return (
    <div>
        <p className={styles.titleCategory}>MINHA LISTA</p>
        {data.data.courses.length >= 1 ? (
            <SlideComponent courses={data.data.courses} />
        ) : (
        <p className="h5 text-center pt-3">
            <strong>Você não tem nenhum curso na lista</strong>
        </p>
        )}
    </div>
  )
}

export default FavoritesCategory