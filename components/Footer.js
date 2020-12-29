import * as colors from "../styles/colors"
import styled from "styled-components"
import { Blue1 } from "../helper-components/Highlights"

const Footer = styled.footer`
	text-align: center;
	background-color: ${colors.black};
	color: ${colors.white};
	padding: 2rem;
`

const Message = styled.p`
	padding: 0.2rem;
`

export default function Footer_() {
	return (
		<Footer>
			<Message>
				Visit us on{" "}
				<Blue1>
					<a href="https://facebook.com" target="_blank">
						Facebook
					</a>
				</Blue1>
			</Message>
			<Message>Email: plan@justinsalas.cc</Message>
			<Message>© 2020 Justin Salas. Alright rights reserved</Message>
		</Footer>
	)
}
