import Head from "next/head";
import React from "react";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";
import { ExperienceBar } from "../components/ExperienceBar/Index";
import { Profile } from "../components/Profile/Index";
import { Countdown } from "../components/Countdown/Index";
import { CompletedChallenges } from "../components/CompletedChallenges/Index";
import { ChallengeBox } from "../components/ChallengeBox/Index";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export default function Home(props: HomeProps) {
	return (
		<ChallengesProvider
			level={props.level}
			currentExperience={props.currentExperience}
			challengesCompleted={props.challengesCompleted}
		>
			<div className={styles.container}>
				<Head>
					<title>Inicio | moveit</title>
				</Head>

				<ExperienceBar />
				<CountdownProvider>
					<section>
						<div>
							<Profile />
							<CompletedChallenges />
							<Countdown />
						</div>
						<div>
							<ChallengeBox />
						</div>
					</section>
				</CountdownProvider>
			</div>
		</ChallengesProvider>
	);
}

//método renderizado no servidor nextjs, ele é renderizado primeiro, para os webcrawlers(Google, Yahooo)
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted),
		},
	};
};
