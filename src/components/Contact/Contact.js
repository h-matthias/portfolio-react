import React from "react";
import "./contact.scss";

export default function Contact() {
	const link = [
		{
			name: "linkedin",
			href: "https://www.linkedin.com/in/mhoarau/",
		},
		{
			name: "github",
			href: "https://github.com/h-matthias",
		},
		{
			name: "twiter",
			href: "https://twitter.com/HoarauMatthias",
		},
		{
			name:"email",
			href: "mailto:h.matthias@live.fr"
		}
	];
	return (
		<section id='contact' className='container-contact'>
			<h2>Pour me contacter</h2>

			<div className='container-social'>
				<h3 className='title'>Vous pouvez me contacter avec les moyens suivants :</h3>
				{link.map((item, index) => {
					return (
						<a key={index}
							className='link-social'
							href={item.href}
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								className='link-social--img'
								src={`./stack/${item.name}.svg`}
								alt={`lien vers mon ${item.name}`}
							/>
						</a>
					);
				})}
			</div>

		</section>
	);
}
