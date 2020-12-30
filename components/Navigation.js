import styled from "styled-components"
import Link from "next/link"
import { Flex } from "../helper-components/Containers"

const Nav = styled.nav`
	/* height: 10rem; */
	background-color: var(--black);
`
const NavLinks = styled.ul`
	padding: 0.7rem;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr auto;
`
const NavLink = styled.a`
	font-size: 1.7rem;
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

export default function Navigation() {
	return (
		<Nav>
			<NavLinks>
				<li>
					<Link href="/">
						<NavHome>Justin Salas, AWP® AFP®</NavHome>
					</Link>
				</li>
				<Flex>
					<li>
						<Link href="/about">
							<NavLink>ABOUT</NavLink>
						</Link>
					</li>
					<li>
						<Link href="/login">
							<NavLink>LIBRARY</NavLink>
						</Link>
					</li>
				</Flex>
			</NavLinks>
		</Nav>
	)
}
