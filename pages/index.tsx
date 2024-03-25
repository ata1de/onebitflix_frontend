import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss" 
import { title } from "process";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import RepresentationSection from "@/src/components/homeNoAuth/representationSection";
import CardSection from "@/src/components/homeNoAuth/cardSection";


const HomeNotAuth = function () {
  return (
		<>
			<Head>
			 	<title>Onebitflix</title>
				<link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
				<meta property="og:title" content="Onebitflix" key={title}/>
				<meta name="description" content="tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!"/>
			</Head>
			<main>
				<div className={styles.sectionBackground}>
					<HeaderNoAuth/>
					<RepresentationSection/>
				</div>

				<CardSection/>
			</main>
		</>
)};

export default HomeNotAuth;