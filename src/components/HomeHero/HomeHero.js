import React, { useState } from "react";
import "./HomeHero.scss";

export default function HomeHero() {

	const [modal, setModal] =useState(false)

	const modalView = () => {
		setModal(!modal)
	}

	return (
		<section id='home' className='hero'>
			<div className='container'>
				<h3 className='title'>
					Bonjour
					<br />
					Je suis Matthias Hoarau
				</h3>
				<p>
					Passionné par l'informatique depuis longtemps, j'ai décidé de
					m'orienter vers une formation de développeur web avec Openclassrooms.
				</p>
				{/* affiche modal diplome */}
				<button onClick={modalView} className='btn'>
					Voir le diplôme
				</button>

				<p>
					Au court de cettte formation, j'ai développé 7 projets dont une veille
					technologique.
				</p>

				<p>
					Je suis à la recherche d'un poste en alternance en tant que
					développeur d'application - Javascript React pour un titre RNCP niveau
					6 (bac+3/4).
				</p>
				<p>
					Rythme de l'alternance : 4 jours entreprise, 1 jour formation.
					<br />
					Durée de 24 mois en contrat de professionnalisation
				</p>
				<div className='containerBtn'>
					<a href='#project' className='btn btn-marginright'>
						Voir mon portfolio
					</a>

					<a
						href='/cv/CV-dev-app-alternance.pdf'
						download='Matthias Hoarau développeur web Javascript CV.pdf'
						className='btn'
					>
						Télécharger mon cv
					</a>
				</div>
			</div>

			<div className={modal ? "modal" : "not-visible"}>
				<div onClick={modalView} className="overlay"></div>
				<div className="certif" >
					<button onClick={modalView} className="close" >X</button>
					<img src="./certificat-RNPC-5.jpg" alt="certification Openclassrooms développeur web"/>	
				</div>
			</div>
		</section>
	);
}
