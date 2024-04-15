import { useRouter } from "next/router";
import styles from "../../../styles/episodePlayer.module.scss";
import Head from "next/head";
import HeaderGeneric from "@/src/components/common/headerGeneric";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseService";
import PageSpinner from "@/src/components/common/spinner";
import { Container } from "reactstrap";
import ReactPlayer from "react-player";

const EpisodePlayer = function () {
    const router = useRouter()

    const episodeOrder = parseFloat(router.query.id?.toString() || "");
    const courseId = router.query.courseid?.toString() || "";

    const [course, setCourse] = useState<CourseType>();

    const getCourse = async function () {
      if (typeof courseId !== "string") return;
  
      const res = await courseService.getEpisodes(courseId);
      if (res.status === 200) {
        setCourse(res.data);
      }
    };
  
    useEffect(() => {
      getCourse();
    }, [courseId]);

    if (course?.episodes == undefined) return <PageSpinner />;

    return (
        <>
        <Head>
            <title>Onebitflix - {course.episodes[episodeOrder].name}</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <HeaderGeneric logoUrl="/home" btnContent={`Voltar para o curso`} btnUrl={`/courses/${courseId}`} />
            <Container className="d-flex flex-column align-items-center pt-3 gap-3">
                <p className={styles.episodeTitle}>
                    {course.episodes[episodeOrder].name}
                </p>

                {typeof window == "undefined" ? null : (
                    <ReactPlayer
                    className={styles.player}
                    url={`${
                        process.env.NEXT_PUBLIC_BASEURL
                    }/episodes/stream?videoUrl=${
                        course.episodes[episodeOrder].videoUrl
                    }&token=${sessionStorage.getItem("onebitflix-token")}`}
                        controls
                    />
                )}
            </Container>
        </main>
        </>
    );
};

export default EpisodePlayer;