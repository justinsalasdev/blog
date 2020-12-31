import styled from "styled-components"
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

const Header_action = styled.button`
	outline: none;
	color: var(--white);
	padding: 0.7rem;
	font-family: "Quicksand";
	font-size: 1.6rem;
	border: 0;
	background-color: var(--green);
	box-shadow: 0.4rem 0.4rem 0.8rem var(--shadow);
	:active {
		transform: translateY(0.1rem);
		box-shadow: 0.2rem 0.2rem 0.4rem var(--shadow1);
	}

	:hover {
		outline: 0.2rem solid var(--green2);
	}
`

export { Header, Header_action, Header_link, Header_title }
