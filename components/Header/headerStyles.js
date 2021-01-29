import styled from "styled-components"
import { fromLeft } from "./headerAnimations"
const Header = styled.header`
	/* width: 50%; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Header_title = styled.div`
	font-size: 2.8rem;
	width: 70%;
	max-width: 80rem;
	text-align: center;
	margin-bottom: 2rem;
	animation: ${fromLeft} 2s cubic-bezier(0, 1, 0, 1);
	animation-fill-mode: backwards;
	@media screen and (max-width: 50.46em) {
		width: 90%;
	}
`
const Header_link = styled.a`
	text-align: center;
	margin-bottom: 2rem;
	font-size: 2rem;
	color: var(--blue);
	cursor: pointer;
	:hover {
		font-weight: bold;
	}

	:active {
		color: var(--green);
		transform: translateX(1rem);
	}
`

export { Header, Header_link, Header_title }
