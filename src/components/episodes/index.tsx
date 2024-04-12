import { CourseType, EpisodeType } from '@/src/services/courseService';
import React from 'react'
import styles from './styles.module.scss'

interface props {
    episode: EpisodeType;
    course: CourseType;
  }
  

const EpisodeList = ({ episode, course} : props) => {

    const handleSecondsToMin = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
    
        const seconds = totalSeconds % 60;
    
        function toString(num: number) {
          return num.toString().padStart(2, "0");
        }
    
        const result = `${toString(minutes)}:${toString(seconds)}`;
    
        return result;
      };
  return (
    <div className={styles.episodeSection}>
        <div className={styles.episodeDivImg}>
            <img className={styles.episodeImg} src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}alt="Thumbnail do curso" />
        </div>
        <div className={styles.episodeCard}>
            <div className={styles.episodeOrderTime}>
                <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
                <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
            </div>
            <div className={styles.episodeTitleDescription}>
                <p className={styles.episodeTitle}>{episode.name}</p>
                <p className={styles.episodeDescription}>{episode.synopsis}</p>
            </div>
        </div>
    </div>
  )
}

export default EpisodeList