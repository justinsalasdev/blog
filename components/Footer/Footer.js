import { Blue1 } from "../../helper-components/Highlights"
import { Footer, Message } from "./footerStyles"

export default function Footer_() {
	return (
		<Footer>
			<Message>
				Visit us on{" "}
				<Blue1>
					<a href="https://facebook.com/planopilipino" target="_blank">
						Facebook
					</a>
				</Blue1>
			</Message>
			<Message>Email: planopilino@gmail.com</Message>
			<Message>© 2020 Plano Pilipino. All rights reserved</Message>
		</Footer>
	)
}
