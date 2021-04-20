import styled from "styled-components"

const bp = "36em"

export const NavBar = styled.div`
	z-index: var(--navIndex);
	width: 100%;
	position: fixed;
	padding: 1rem;
	background-color: var(--black);
`
export const NavMenu = styled.button`
	font-size: 4rem;
	z-index: var(--navIndex);
	display: none;
	--webkit-appearance: none;
	box-shadow: none;
	border-style: solid;
	border-color: transparent;
	position: absolute;
	outline: none;
	color: var(--white);
	background: transparent;
	top: 0.2rem;
	right: 1.5rem;

	@media screen and (max-width: ${bp}) {
		display: block;
	}

	svg {
		vertical-align: middle;
	}
`

export const Nav = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
`

export const NavHome = styled.div`
	@media screen and (min-width: ${bp}) {
		display: none;
	}
`

export const NavLinks = styled.ul`
	/* padding: 1rem; */

	display: grid;
	align-items: center;
	grid-template-columns: 1fr auto; //separate home from rest of options

	@media screen and (max-width: ${bp}) {
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
	}
`
