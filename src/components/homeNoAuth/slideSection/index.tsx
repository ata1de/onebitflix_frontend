import React from 'react'
import { Button, Container } from 'reactstrap'
import styles from './atyles.module.scss'
import SlideComponent from '../../common/slideComponent'
import { CourseType } from '@/src/services/courseService'
import Link from 'next/link'

interface props {
    newestCourses: CourseType[]
}

const SlideSection = ({ newestCourses }: props) => {
  return (
    <div>
        <Container fluid className='d-flex flex-column align-items-center py-5'>
            <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
            <SlideComponent courses={newestCourses}/>
            <Link href='/register'>
                <Button outline color='light' className={styles.slideSectionBtn}>Se cadastre aqui</Button>
            </Link>
        </Container>
    </div>
  )
}

export default SlideSection