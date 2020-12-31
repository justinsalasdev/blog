import styled from "styled-components"
const Nav = styled.nav`
	/* height: 10rem; */
	background-color: var(--black);
`
const NavLinks = styled.ul`
	padding: 0.7rem;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr auto;

	div {
		display: flex;
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

export { Nav, NavLinks, NavLink, NavHome }
