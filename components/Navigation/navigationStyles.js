import styled from "styled-components"

export const bp = "36em"

export const NavBar = styled.div`
	position: relative;
	background-color: var(--black);
	@media screen and (max-width: ${bp}) {
		height: ${props => (props.shown ? "auto" : "6rem")};
	}
`

export const Nav = styled.nav`
	width: 100%;
	height: 100%;

	@media screen and (max-width: ${bp}) {
		display: flex;
		align-items: center;
		padding: ${props => (props.shown ? "0" : "1.5rem 1rem 1rem 1rem ")};
	}
`
export const NavLinks = styled.ul`
	padding: 1rem;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr auto;

	@media screen and (max-width: ${bp}) {
		/* background: green; */
		display: ${props => (props.shown ? "flex" : "none")};
		flex-direction: column;
		align-items: flex-start;
	}
`

export const Divider = styled.div`
	display: flex;
	@media screen and (max-width: ${bp}) {
		flex-direction: column;
		align-items: flex-start;
	}
`

export const NavHome = styled.li`
	@media screen and (min-width: ${bp}) {
		display: none;
	}
`

export const NavLink = styled.a`
	font-size: 2rem;
	cursor: pointer;
	border: 0.1rem solid transparent;
	color: var(--white);
	padding: 1rem;
	display: inline-block;
	:hover {
		background-color: var(--gray);
	}

	:active {
		transform: scale(1.02);
		border: 0.1rem solid var(--white);
	}

	svg {
		display: inline-block;
		/* margin-bottom: 0.5rem; */
	}
`

export const NavMenu = styled.button`
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
