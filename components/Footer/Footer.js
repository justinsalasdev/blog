import { Blue1 } from "../../helper-components/Highlights"
import { Footer, Message } from "./footerStyles"

export default function Footer_() {
	return (
		<Footer>
			<Message>
				Follow me on{" "}
				<Blue1>
					<a href="https://facebook.com/justinsalasrfp" target="_blank">
						Facebook
					</a>
				</Blue1>
			</Message>
			<Message>justinsalasrfp@gmail.com</Message>
			<Message>© Justin Salas. All rights reserved</Message>
		</Footer>
	)
}
