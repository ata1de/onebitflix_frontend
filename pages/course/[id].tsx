import HeaderAuth from "@/src/components/homeAuth/HeaderAuth";
import styles from "../../styles/coursePage.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseService";
import { Button, Container } from "reactstrap";
import EpisodeList from "@/src/components/episodes";
import Footer from "@/src/components/common/footer";
import PageSpinner from "@/src/components/common/spinner";
import Link from "next/link";

const CoursePage = function () {
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [ course, setCourse] = useState<CourseType>()
    const router = useRouter()
    const { id } = router.query
    const [loading, setLoading] = useState(true);

    const firstElement = course?.episodes?.[0];

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


    useEffect(() => {
        if (!sessionStorage.getItem("onebitflix-token")) {
        router.push("/login");
        } else {
        setLoading(false);
        }
    }, []);

    if (loading) {
        return <PageSpinner />;}

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
                        <Link href={`/course/episode/${firstElement?.order! - 1}?courseid=${course?.id}`} className="text-decoration-none">
                            <Button outline disabled={course?.episodes?.length == 0 ? true : false} className={styles.courseBtn}>
                                ASSISTIR AGORA!
                                <img
                                src="/buttonPlay.svg"
                                alt="buttonImg"
                                className={styles.buttonImg}
                                />
                            </Button>
                        </Link>
                        <div className={styles.interactions}>
                            <img
                                src={liked ? "/course/iconLiked.svg" :"/course/iconLike.svg"}
                                alt="likeImage"
                                className={styles.interactionImages}
                                onClick={handleLikeCourse}
                            />
                            <img
                                onClick={handleFavCourse}
                                src={favorited ? "/course/iconFavorited.svg" : "/course/iconAddFav.svg"}
                                alt="favorited"
                                className={styles.interactionImages}
                                />
                        </div>
                    </Container>
                    <Container className={styles.episodeInfo}>
                        <p className={styles.episodeDivision}>EPISODIOS</p>
                        <p className={styles.episodeLength}>{course?.episodes!.length == 1 ? `${course?.episodes?.length} episódio` : `${course?.episodes?.length} episódios`}</p>
                        {course?.episodes?.length === 0 ? (
                            <p>
                                <strong>Não temos episódios ainda, volte outra hora! &#x1F606;&#x1F918;</strong>
                            </p>
                        ) : (
                            course?.episodes?.map((episode) => (
                            <EpisodeList key={episode.id} episode={episode} course={course}/>
                        ))
                        )}

                    </Container>
                    <Footer />    
            </main>
        </>
    );
};

export default CoursePage;