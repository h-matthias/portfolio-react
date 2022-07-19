import React from "react";
import "./Skill.scss";
import skillData from "./skill.json";

export default function Skill() {

	return (
		<section id='skill' className='container-skill'>
			<h2 className="title">Mes Compétences</h2>
			<div className='skills'>
				<h3>Les langages</h3>
				<div className="container-svg">
					{skillData.skills.map((item) => {
						return (
							// <p>{item}</p>
							<img className='svg' src={`./stack/${item}.svg`} alt={item} />
						);
					})}
				</div>
			</div>
            <div className='skills'>
				<h3>Les outils</h3>
				<div className="container-svg">
					{skillData.tools.map((item) => {
						return (
							// <p>{item}</p>
							<img className='svg' src={`./stack/${item}.svg`} alt={item} />
						);
					})}
				</div>
			</div>

			<div className='tools'></div>
		</section>
	);
}
