import HeaderAuth from "@/src/components/homeAuth/HeaderAuth";
import styles from "../../styles/coursePage.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseService";
import { Button, Container } from "reactstrap";

const CoursePage = function () {
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [ course, setCourse] = useState<CourseType>()
    const router = useRouter()
    const { id } = router.query

    // função para o like
    const handleLikeCourse = async () => {
        if (typeof(id) !== 'string') return;

        if (liked === true) {
          await courseService.deleteLike(id);
        setLiked(false);
      } else {
          await courseService.postLike(id);
        setLiked(true);
      }
    };

    // função para o favorited
    const handleFavCourse = async () => {
        if (typeof(id) !== 'string') return;

        if (favorited === true) {
            await courseService.deleteFavorite(id);
            setFavorited(false);
      } else {
            await courseService.postAddFavorite(id);
            setFavorited(true);
        }
    };

    const getCourse = async() => {
        if (typeof(id) !== 'string') return;

        const res = await courseService.getEpisodes(id)

        if (res.status == 200) {
            setCourse(res.data)
            setLiked(res.data.liked);
            setFavorited(res.data.favorited);

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
                        <div className={styles.interactions}>
                        {liked === false ? (
                                <img
                                src="/course/iconLike.svg"
                                alt="likeImage"
                                className={styles.interactionImages}
                                onClick={handleLikeCourse}
                            />
                            ) : (
                                <img
                                src="/course/iconLiked.svg"
                                alt="likedImage"
                                className={styles.interactionImages}
                                onClick={handleLikeCourse}
                            />
                            )}
                            {favorited === false ? (
                                <img
                                onClick={handleFavCourse}
                                src="/course/iconAddFav.svg"
                                alt="addFav"
                                className={styles.interactionImages}
                            />
                            ) : (
                                <img
                                onClick={handleFavCourse}
                                src="/course/iconFavorited.svg"
                                alt="favorited"
                                className={styles.interactionImages}
                                />
                            )}
                        </div>
                    </Container>
                
            </main>
        </>
    );
};

export default CoursePage;