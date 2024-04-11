import HeaderAuth from "@/src/components/homeAuth/HeaderAuth";
import styles from "../../styles/coursePage.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseService";
import { Button, Container } from "reactstrap";

const CoursePage = function () {
    const [ course, setCourse] = useState<CourseType>()
    const router = useRouter()
    const { id } = router.query

    const getCourse = async() => {
        if (typeof(id) !== 'string') return;

        const res = await courseService.getEpisodes(id)

        if (res.status == 200) {
            setCourse(res.data)
        }
    }

    useEffect(() => {
        getCourse()
    }, [id])

    return (
        <>
            <Head>
                <title>Onebitflix - {course?.name}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" /> 
            </Head>
            <main>
                <div style={{
                    backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),
                    url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "450px",
                }}>
                    <HeaderAuth />
                </div>
                    <Container className={styles.courseInfo}>
                        <p className={styles.courseTitle}>{course?.name}</p>
                        <p className={styles.courseDescription}>{course?.synopsis}</p>
                        <Button outline className={styles.courseBtn}>
                            ASSISTIR AGORA!
                            <img
                            src="/buttonPlay.svg"
                            alt="buttonImg"
                            className={styles.buttonImg}
                            />
                        </Button>
                    </Container>
                
            </main>
        </>
    );
};

export default CoursePage;