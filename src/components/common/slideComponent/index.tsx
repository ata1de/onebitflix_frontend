import React from 'react'
// @ts-ignore bevause the lib splide hasn't type
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import { CourseType } from '@/src/services/courseService';
import SlideCard from '../slideCard';

// options of slide
const slideOptions: any = {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    pagination: false,
}

interface props {
  course: CourseType[];
}
const SlideComponent = function ({ course }: props) {
  return (
    <>
      <div>
        <Splide options={{slideOptions}}>

          {course?.map((course) => (
            <SplideSlide key={course.id}>
              <SlideCard course={course} />
            </SplideSlide>
          ))}
          
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;