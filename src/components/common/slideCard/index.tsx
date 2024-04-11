import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import courseService, { CourseType } from "../../../services/courseService";
import useSWR from 'swr';
import Link from 'next/link';

interface props {
  course: CourseType;
}

const SlideCard = ({ course }: props) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [favorites , setFavorites] = useState<CourseType[]>([])

  // função para deixar o curso favorito
  const handleFavorite = async() => {
    try {
      if (isFavorited) {
        await courseService.deleteFavorite(course.id)
        setIsFavorited(false)
      } else {
        await courseService.postAddFavorite(course.id);
      }
    } catch (error) {
      console.error('Erro ao favoritar o curso:', error);
      // Trate o erro conforme necessário
    }
  };

  // função para receber os favoritos
  const getFavorites = async() => {
    const res = await courseService.getFavoritesCourses()
    setFavorites(res.data.courses)
  }

  // useEffect onde vai verificar se o curso ta ou não entre os favoritos
  useEffect(() => {
    getFavorites()
    {favorites?.map((courseFavorited) => {
      if (course.name === courseFavorited.name) {
        setIsFavorited(true)
      }
    })}
  }, [])

  // console.log(favorites)
  // if (course.name == "Liderança e Gestão de Equipes") {
  //   console.log(isFavorited)
  // }
  
  // const {data, error } = useSWR('/postFavorite', () => {
  //   return courseService.postAddFavorite(course.id)
  // })

  // if (error) return error;
  // if (!data) return <p>Loading...</p>;
  
  return (
    <div>
      <Link href={`/course/${course.id}`} >
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
      </Link>
    </div>
  )
}

export default SlideCard