import styled from "styled-components"

const bp = "36em"

const NavBar = styled.div`
	position: relative;
	background-color: var(--black);
	@media screen and (max-width: ${bp}) {
		/* padding-top: 4.5rem; */
		height: ${props => (props.shown ? "auto" : "6rem")};
	}
`

const Nav = styled.nav`
	/* position: absolute; */
	/* height: 10rem; */
	@media screen and (max-width: ${bp}) {
		display: ${props => (props.shown ? "relative" : "absolute")};
	}
`
const NavLinks = styled.ul`
	padding: 1rem;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr auto;

	div {
		display: flex;
	}

	@media screen and (max-width: ${bp}) {
		/* background: green; */
		display: ${props => (props.shown ? "flex" : "none")};
		flex-direction: column;
		align-items: flex-start;

		div {
			flex-direction: column;
			align-items: flex-start;
		}
	}
`

const NavLink = styled.a`
	font-size: 2.2rem;
	cursor: pointer;
	border: 0.1rem solid transparent;
	color: var(--white);
	padding: 0.7rem;
	display: inline-block;
	:hover {
		background-color: var(--gray);
	}

	:active {
		transform: scale(1.02);
		border: 0.1rem solid var(--white);
	}
`

const NavMenu = styled.button`
	display: none;
	position: absolute;
	background-color: var(--black);
	outline: none;
	border: 0.1rem double var(--white);
	color: var(--white);
	top: ${props => (props.shown ? "3rem" : "50%")};
	right: 1.5rem;
	transform: translateY(-50%);
	font-family: "Josefin Sans";
	padding: 1rem;
	@media screen and (max-width: ${bp}) {
		display: block;
	}
`

export { Nav, NavLinks, NavLink, NavBar, NavMenu }
