import React, { Component } from 'react'
import './Footer.css';
import { BsTelephoneFill } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { Link } from 'react-router-dom';
export class Footer extends Component {
	render() {
		return (
			<div>
				<footer class="footer-distributed">

					<div class="footer-left">

						<h3>Codify <span>Programming</span></h3>

						<p class="footer-links">
							<Link to="/" class="link-1">Home | </Link>
							<Link to="/about" class="link-1">About | </Link>
							<Link to="/blog" class="link-1">Blog | </Link>
							<Link to="/course" class="link-1">Courses | </Link>
							<Link to="/contactus" class="link-1">Contact</Link>
						</p>

						<p class="footer-company-name">Copyright © 2022 | Codify Programming</p>
					</div>

					<div class="footer-center">

						<div>
							<ImHome3 className='loc' />
							<p><span>309 Indra Colony </span> Muzaffarnagar, India</p>
						</div>

						<div>
							<BsTelephoneFill className='phone' />
							<p>+916398227479</p>
						</div>

						<div>
							<GrMail className='mail' />
							<p><a href="mailto:support@company.com">codifyprogramming@gmail.com</a></p>
						</div>

					</div>

					<div class="footer-right">

						<p class="footer-company-about">
							<span>About the company</span>

							Codify Programming website is all about creativity and innovative work in the field of Technology. We provide Programming in C++/C/Java/Python videos, web development courses videos, and articles.
						</p>

						<div class="footer-icons">

							<a href="https://www.facebook.com/pranav.tyagi.716/"><GrFacebook className='fb' /></a>
							<a href="https://www.instagram.com/_pranavtyagi_/"><GrInstagram className='insta' /></a>
							<a href="https://www.linkedin.com/in/pranav-tyagi-/"><GrLinkedin className='linkdin' /></a>
							<a href="https://github.com/Pranavtyagi-2003"><GrGithub className='Git' /></a>
							<a href="https://www.youtube.com/c/CodifyProgramming"><GrYoutube className='You' /></a>

						</div>

					</div>

				</footer>
			</div>
		)
	}
}

export default Footer