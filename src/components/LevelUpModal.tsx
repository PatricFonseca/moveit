import { useContext } from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TwitterShareButton } from "react-share";

import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
	const { level, closeLevelUpModal } = useContext(ChallengesContext);

	const twitterIcon = (
		<FontAwesomeIcon className={styles.twitterIcon} icon={faTwitter} />
	);

	function shareOnTwitter() {
		window.open(
			`https://twitter.com/share?url=${window.location.href}&text=Novo level, to no foco!!!`
		);
		/* TODO: compartilhar a imagem do level up
		 pelo que vi, teria que tirar um print da tela
		 e compartilhar o link da imagem gerada
		*/
		// <a href="https://twitter.com/share?url=https://unsplash.com/photos/8se2FqykreI&text=This is awesome!">
		// 	tt
		// </a>;
	}

	return (
		<div className={styles.overlay}>
			<div className={styles.container}>
				<header>{level}</header>

				<strong>Parabéns</strong>
				<p>Você alcançou um novo level.</p>

				<button
					type="button"
					className={styles.closeButton}
					onClick={closeLevelUpModal}
				>
					<img src="/icons/close.svg" alt="Fechar modal" />
				</button>

				<button
					type="button"
					className={styles.shareTwitter}
					onClick={shareOnTwitter}
				>
					Compartilhar no twitter {twitterIcon}
					{/* <TwitterShareButton
						url=""
						title="Novo level, estou focado!!"
						//className={styles.shareTwitter}
					></TwitterShareButton> */}
				</button>
			</div>
		</div>
	);
}
