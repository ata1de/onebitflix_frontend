import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss" 
import { title } from "process";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import RepresentationSection from "@/src/components/homeNoAuth/representationSection";
import CardSection from "@/src/components/homeNoAuth/cardSection";
import SlideSection from "@/src/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/src/services/courseService";
import { ReactNode, useEffect } from "react";
import Footer from "@/src/components/common/footer";
import Aos from "aos";
import 'aos/dist/aos.css'

interface IndexPageProps {
	children?: ReactNode;
	courses: CourseType[];
}

const HomeNotAuth = function ({ courses }: IndexPageProps) {
	useEffect(() => {
		Aos.init()
	}, [])
  return (
		<>
			<Head>
			 	<title>Onebitflix</title>
				<link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
				<meta property="og:title" content="Onebitflix" key={title}/>
				<meta name="description" content="tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!"/>
			</Head>
			<main>
				<div className={styles.sectionBackground} data-aos='fade-zoom-in' data-aos-duration='1600'>
					<HeaderNoAuth/>
					<RepresentationSection/>
				</div>
					<div data-aos='fade-right' data-aos-duration='1200'>
						<CardSection />
					</div>
					<div data-aos='fade-up' data-aos-duration='1350'>
						<SlideSection newestCourses={courses}/>
					</div>
				<Footer/>
			</main>
		</>
)};

export const getStaticProps: GetStaticProps = async () => {
	const res = await courseService.getNewestCourses();
		return {
			props: {
				courses: res.data,
			},
			// forma de avaliar se os itens no backend foram modificados
			revalidate: 3600 * 24,
			};
};

export default HomeNotAuth;