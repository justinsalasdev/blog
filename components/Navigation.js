import styled from "styled-components"
import Link from "next/link"
import FlexDiv from "../helper-components/FlexContainer"

import { tprimary, bprimary, bprimary_l1 } from "../styles/colors"

const Nav = styled.nav`
	/* height: 10rem; */
	background-color: ${bprimary};
`
const NavLinks = styled.ul`
	padding: 0.7rem;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr auto;
`
const NavLink = styled.a`
	cursor: pointer;
	border: 0.1rem solid transparent;
	color: ${tprimary};
	padding: 0.7rem;
	display: inline-block;
	:hover {
		background-color: ${bprimary_l1};
	}

	:active {
		transform: scale(1.02);
		border: 0.1rem solid ${tprimary};
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
					<Link href="/about">
						<NavHome>Justin Salas, AWP® AFP®</NavHome>
					</Link>
				</li>
				<FlexDiv>
					<li>
						<Link href="/about">
							<NavLink>ABOUT</NavLink>
						</Link>
					</li>
					<li>
						<Link href="/login">
							<NavLink>CLIENT LOGIN</NavLink>
						</Link>
					</li>
				</FlexDiv>
			</NavLinks>
		</Nav>
	)
}
