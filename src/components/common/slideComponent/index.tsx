import React from 'react'
// @ts-ignore bevause the lib splide hasn't type
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import { CourseType } from '@/src/services/courseService';
import SlideCard from '../slideCard';
import SlideCardNoAuth from '../slideCardNoAuth';


interface props {
  courses: CourseType[];
  auth?: boolean
}

const SlideComponent = function ({ courses , auth}: props) {
  let slideCount = 0;

  if (courses.length > 4) {
    slideCount = 4;
  } else if (courses) {
    slideCount = courses.length;
  }
  return (
    <>
      <div className='d-flex flex-column align-items-center py-4'>
        <Splide options={{
            type: "loop",
            perPage: slideCount,
            perMove: 1,
            width: slideCount * 300,
            pagination: false,
            arrows: courses.length > 4 ? true : false,
            drag: courses.length > 4 ? true : false,
            breakpoints: {
              1200: {
              	perPage: slideCount >= 2 ? 2 : 1,
                width: slideCount >= 2 ? 640 : 300,
                arrows: courses.length > 2 ? true : false,
                drag: courses.length > 2 ? true : false,
              },
              640: {
                perPage: 1,
                width: 300,
                arrows: courses.length > 2 ? true : false,
                drag: courses.length > 2 ? true : false,
              },
              300: {
                width: 250,
              },
            },
          }}
          >

          {courses?.map((course) => (
            <SplideSlide key={course.id} >
              {auth? <SlideCard course={course}/> : <SlideCardNoAuth course={course} />}
            </SplideSlide>
          ))} 
          
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;