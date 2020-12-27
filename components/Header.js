import styled from "styled-components"
import * as b from "../styles/breakpoints"
import * as colors from "../styles/colors"
import { Green, Orange } from "../helper-components/Highlights"
import Link from "next/link"

const Header = styled.header`
	/* width: 50%; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Header_title = styled.div`
	font-size: 2.3rem;
	width: 70%;
	max-width: 80rem;
	text-align: center;
	margin-bottom: 2rem;
	@media screen and (max-width: ${b.header}) {
		width: 90%;
	}
`
const Header_link = styled.a`
	text-align: center;
	margin-bottom: 2rem;
	font-size: 1.8rem;
	color: ${colors.blue};
	cursor: pointer;
	:hover {
		font-weight: bold;
	}

	:active {
		color: ${colors.green};
	}
`

const Header_action = styled.button`
	outline: none;
	color: ${colors.white};
	padding: 0.7rem;
	font-family: "Quicksand";
	font-size: 1.6rem;
	border: 0;
	background-color: ${colors.green};
	box-shadow: 0.4rem 0.4rem 0.8rem ${colors.shadow};
	:active {
		transform: translateY(0.1rem);
		box-shadow: 0.2rem 0.2rem 0.4rem ${colors.shadow1};
	}
	:hover,
	:focus {
		outline: 0.2rem solid ${colors.green2};
	}
`

export default function Header_() {
	return (
		<Header>
			<Header_title>
				<Green>Planning</Green> makes it easier for you to make financial
				decisions and keeps you on track to meet your <Orange>goals.</Orange>
			</Header_title>
			<Link href="/benefits">
				<Header_link>More benefits of financial planning &rarr;</Header_link>
			</Link>
			<Header_action>Create your financial plan now</Header_action>
		</Header>
	)
}
