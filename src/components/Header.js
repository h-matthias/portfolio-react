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
			<div className='sideBar'>
				<div className='sideBar__brand'>
					<h1>Hi, I am Matthias</h1>
					<h2>A web developer web Javascript</h2>
				</div>

				<nav className={ toggleNav ? "nav active" : "nav" }>
					<ul className='nav__group-link'>
						<a
							onClick={toggleLinkFalse}
							href='#home'
							className='nav__group-link__item'
						>
							<li>Home</li>
						</a>
						<a
							onClick={toggleLinkFalse}
							href='#skill'
							className='nav__group-link__item'
						>
							<li>Skill</li>
						</a>
						<a
							onClick={toggleLinkFalse}
							href='#project'
							className='nav__group-link__item'
						>
							<li>Project</li>
						</a>
					</ul>
				</nav>
			</div>
            {checkWidth < 900 &&
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
            }
		</>
	);
}
