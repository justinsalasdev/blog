import Link from "next/link"
import { Nav, NavLinks, NavLink, NavHome } from "./navigationStyles"

export default function Navigation() {
	return (
		<Nav>
			<NavLinks>
				<li>
					<Link href="/">
						<NavHome>Justin Salas, AWP® AFP®</NavHome>
					</Link>
				</li>
				<div>
					<li>
						<Link href="/about">
							<NavLink>ABOUT</NavLink>
						</Link>
					</li>
					<li>
						<Link href="/library">
							<NavLink>LIBRARY</NavLink>
						</Link>
					</li>
				</div>
			</NavLinks>
		</Nav>
	)
}
