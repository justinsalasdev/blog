import { Blue1 } from "../../helper-components/Highlights"
import { Footer, Message } from "./footerStyles"

export default function Footer_() {
	return (
		<Footer>
			<Message>
				follow me on{" "}
				<Blue1>
					<a href="https://facebook.com/justinsalasrfp" target="_blank">
						Facebook
					</a>
				</Blue1>
			</Message>

			<Message>justinsalasrfp@gmail.com</Message>
			<Message>Copyright © 2021 Justin Salas. All rights reserved</Message>
		</Footer>
	)
}
