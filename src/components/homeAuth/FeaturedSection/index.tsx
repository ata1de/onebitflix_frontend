import useSWR from "swr";
import courseService, { CourseType } from "../../../services/courseService";
import HeaderAuth from "../HeaderAuth";
import styles from './styles.module.scss'
import FeatureCard from "./FeatureCard";

const FeaturedSection = function () {
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

    if (error) return error;
    if (!data) return <p>Loading...</p>;

  return (
    <div>
        {
        data.data?.map((course: CourseType)=>(
            <div key={course.id} style={{
              backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '480px'
            }}>
                <HeaderAuth />
                <FeatureCard id={course.id} name={course.name} synopsis={course.synopsis} thumbnailUrl={course.thumbnailUrl}/>
            </div>
        ))[0]}
    </div>
  )
}

export default FeaturedSection