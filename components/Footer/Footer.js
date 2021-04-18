import { Footer, Message, List, Item, Link } from "./footerStyles"
import { RiFacebookCircleFill } from "react-icons/ri"
import { AiFillTwitterCircle } from "react-icons/ai"
import { IoLogoYoutube } from "react-icons/io"
import { MdEmail } from "react-icons/md"

export default function Footer_() {
	return (
		<Footer>
			{/* <Message>
				follow me on{" "}
				<Blue1>
					<a href="https://facebook.com/justinsalasrfp" target="_blank">
						Facebook
					</a>
				</Blue1>
			</Message>

			<Message>justinsalasrfp@gmail.com</Message> */}
			<List>
				<Item>
					<Link href="https://facebook.com/justinsalasrfp" target="_blank">
						<RiFacebookCircleFill />
					</Link>
				</Item>
				<Item>
					<Link href="#">
						<AiFillTwitterCircle />
					</Link>
				</Item>
				<Item>
					<Link href="#">
						<IoLogoYoutube />
					</Link>
				</Item>
				<Item>
					<Link href="mailto:justinsalasrfp@gmail.com?subject=More%20information&body=Hi%20Justin%2C%20I%20have%20some%20questions.%20Contact%20me%20via%20this%20address.">
						<MdEmail />
					</Link>
				</Item>
			</List>
			<Message>Copyright © 2021 Justin Salas. All rights reserved</Message>
		</Footer>
	)
}
