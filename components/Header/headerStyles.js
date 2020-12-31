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

export { Header, Header_link, Header_title }
