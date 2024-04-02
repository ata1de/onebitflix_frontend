import Link from 'next/link'
import React from 'react'
import { Button, Container } from 'reactstrap'
import styles from './styles.module.scss'
import { CourseType } from '@/src/services/courseService'

const FeatureCard = ({id, name, thumbnailUrl ,synopsis }: CourseType) => {
    const cardStyle: React.CSSProperties = {
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASEURL}/${thumbnailUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
  return (
    <div>
        <Container style={cardStyle}>
                <p className={styles.title}>{name}</p>
                <p className={styles.description}>{synopsis}</p>
                <Link href={`/courses/${id}`}>
                    <Button outline color="light" className={styles.button}>
                    ACESSE AGORA!
                        <img src="/buttonPlay.svg" alt="buttonImg" className={styles.buttonImg}/>
                    </Button>
                </Link>
        </Container>
    </div>
  )
}

export default FeatureCard