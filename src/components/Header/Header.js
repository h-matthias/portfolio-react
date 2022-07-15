import React, { useState, useEffect } from "react";
import "./Header.scss";

export default function Header() {
	const [toggleNav, setToggleNav] = useState(false);

	const [checkWidth, setCheckWidth] = useState(window.innerWidth);

	const checkWidthFunc = () => {
		setCheckWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", checkWidthFunc);

		return () => {
			window.removeEventListener("resize", checkWidthFunc);
		};
	}, []);

	const toggleNavFunc = () => {
		setToggleNav(!toggleNav);
	};
	const toggleLinkFalse = () => {
		setToggleNav(false);
	};

	return (
		<>
			<div className='marginTop'></div>
			<div className='sideBar'>
				<div className='sideBar__brand'>
					<h1>Hi, I am Matthias</h1>
					<h2>A web developer web Javascript</h2>
				</div>

				<nav className={toggleNav ? "nav active" : "nav"}>
					<ul className='nav__group-link'>
						<li onClick={toggleLinkFalse} className='nav__group-link__item'>
							<a href='#home'>Home</a>
						</li>
						<li onClick={toggleLinkFalse} className='nav__group-link__item'>
							<a href='#skill'>Skill</a>
						</li>
						<li onClick={toggleLinkFalse} className='nav__group-link__item'>
							<a href='#project'>Project</a>
						</li>
						<li onClick={toggleLinkFalse} className='nav__group-link__item'>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</nav>
			</div>
			{checkWidth < 900 && (
				<button
					onClick={toggleNavFunc}
					type='button'
					aria-label='toggle navigation'
					className={toggleNav ? "nav-toggler active" : "nav-toggler"}
				>
					<span className='line l1'></span>
					<span className='line l2'></span>
					<span className='line l3'></span>
				</button>
			)}
		</>
	);
}
