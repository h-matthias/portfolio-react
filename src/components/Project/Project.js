import React from "react";
import "./Project.scss";
import projectData from "./db.json";

export default function Project() {
	return (
		<section id='project' className='container-project'>
			<h2>Mes projets</h2>
			{projectData.map((item) => {
				return (
					<div className='card'>
						<h3 className='card__project'>{item.projetNum}</h3>
						<h4 className='card__title'>{item.title}</h4>
						<p className='title-list'>Objectifs: </p>
						<ul className='list-obj'>
							{item.objectif.map((objectif) => {
								return <li className='list-obj__item'>{objectif}</li>;
							})}
						</ul>
						{item.stack && (
							<>
								<p className='title-list'>Stacks:</p>
								<ul className='list-stack'>
									{item.stack.map((techno) => {
										return (
											<li className='list-stack__item'>
												<img
													className='list-stack__item--img'
													src={`./stack/${techno}.svg`}
													alt={`${techno} icon`}
												/>
											</li>
										);
									})}
								</ul>
							</>
						)}
						{item.link && (
							<>
								<div className='container-btn'>
									{item.link.prod && (
										<a
											className='btn'
											href={item.link.prod}
											target='_blank'
											rel='noreferrer'
										>
											Lien Live
										</a>
									)}
									{item.link.github && (
										<a
											href={item.link.github}
											target='_blank'
											rel='noreferrer'
											className='btn--github'
										>
											<img
												className='btn--github--img'
												src='./stack/github.svg'
												alt='icon github in link'
											/>
										</a>
									)}
								</div>
							</>
						)}
					</div>
				);
			})}
		</section>
	);
}
