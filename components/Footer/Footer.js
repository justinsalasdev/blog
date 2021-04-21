import { RiFacebookCircleFill } from "react-icons/ri"
import { AiFillTwitterCircle } from "react-icons/ai"
import { IoLogoYoutube } from "react-icons/io"
import { MdEmail } from "react-icons/md"

import s from "./footer.module.scss"

export default function Footer_() {
	return (
		<footer className={s.footer}>
			{/* <Message>
				follow me on{" "}
				<Blue1>
					<a className={s.link} href="https://facebook.com/justinsalasrfp" target="_blank">
						Facebook
					</a>
				</Blue1>
			</Message>

			<Message>justinsalasrfp@gmail.com</Message> */}
			<ul className={s.list}>
				<li>
					<a
						className={s.link}
						href="https://facebook.com/justinsalasrfp"
						target="_blank"
					>
						<RiFacebookCircleFill />
					</a>
				</li>
				<li>
					<a className={s.link} href="#">
						<AiFillTwitterCircle />
					</a>
				</li>
				<li>
					<a className={s.link} href="#">
						<IoLogoYoutube />
					</a>
				</li>
				<li>
					<a
						className={s.link}
						href="mailto:justinsalasrfp@gmail.com?subject=More%20information&body=Hi%20Justin%2C%20I%20have%20some%20questions.%20Contact%20me%20via%20this%20address."
					>
						<MdEmail />
					</a>
				</li>
			</ul>
			<p className={s.message}>
				Copyright © 2021 Justin Salas. All rights reserved
			</p>
		</footer>
	)
}
