import { Blue1 } from "../../helper-components/Highlights"
import { Footer, Message } from "./footerStyles"

export default function Footer_() {
	return (
		<Footer>
			<Message>
				Visit me on{" "}
				<Blue1>
					<a href="https://facebook.com/justinsalasfinancial" target="_blank">
						Facebook
					</a>
				</Blue1>
			</Message>
			<Message>Email: plan@justinsalas.cc</Message>
			<Message>© 2020 Justin Salas. All rights reserved</Message>
		</Footer>
	)
}
