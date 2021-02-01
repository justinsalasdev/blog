import styled from "styled-components"

const bp = "3.33em"

const NavBar = styled.div`
	position: relative;
	background-color: var(--black);
	@media screen and (max-width: ${bp}) {
		height: ${props => (props.shown ? "25rem" : "6rem")};
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
	padding: 0.7rem;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr auto;

	div {
		display: flex;
		/* flex-direction: row; */
	}

	@media screen and (max-width: ${bp}) {
		/* background: green; */
		display: ${props => (props.shown ? "flex" : "none")};
		flex-direction: column;
		align-items: center;

		div {
			flex-direction: column;
			align-items: center;
		}
	}
`

const NavLink = styled.a`
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
const NavHome = styled(NavLink)`
	font-weight: 700;
`

const NavMenu = styled.button`
	display: none;
	position: absolute;
	background-color: var(--black);
	outline: none;
	border: 0.1rem double var(--white);
	color: var(--white);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-family: "Josefin Sans";
	padding: 1rem;
	@media screen and (max-width: ${bp}) {
		display: block;
		top: ${props => (props.shown ? "80%" : "50%")};
		left: 50%;
	}
`

export { Nav, NavLinks, NavLink, NavHome, NavBar, NavMenu }
