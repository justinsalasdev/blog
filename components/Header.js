import styled from "styled-components"
import { Green, Orange } from "../helper-components/Highlights"
import Link from "next/link"
import { GreenBtn } from "../common/Buttons"

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
	@media screen and (max-width: 50.46em) {
		width: 90%;
	}
`
const Header_link = styled.a`
	text-align: center;
	margin-bottom: 2rem;
	font-size: 1.8rem;
	color: var(--blue);
	cursor: pointer;
	:hover {
		font-weight: bold;
	}

	:active {
		color: var(--green);
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
			<GreenBtn>Create your financial plan now</GreenBtn>
		</Header>
	)
}
