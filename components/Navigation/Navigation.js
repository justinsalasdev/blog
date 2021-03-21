import Link from "next/link"
import {
	NavBar,
	Nav,
	NavLinks,
	NavLink,
	NavHome,
	NavMenu
} from "./navigationStyles"
import { signIn, signOut, useSession } from "next-auth/client"
import { useState } from "react"

export default function Navigation() {
	const [navShown, showNav] = useState(false)
	const [session, loading] = useSession()
	const setAction = session => () => {
		if (session) {
			signOut({ callbackUrl: "http://localhost:3000/" })
		} else {
			signIn("google", { callbackUrl: "http://localhost:3000/user/profile" })
		}
	}

	return (
		<NavBar shown={navShown}>
			<Nav shown={navShown}>
				<NavLinks shown={navShown}>
					<li>
						<Link href="/">
							<NavLink>Justin Salas RFP®</NavLink>
						</Link>
					</li>

					<div>
						{session && (
							<li>
								<Link href="/user/dashboard">
									<NavLink>DASHBOARD</NavLink>
								</Link>
							</li>
						)}
						<li>
							<Link href={session ? "/user/profile" : "/about"}>
								<NavLink>{session ? "PROFILE" : "ABOUT"}</NavLink>
							</Link>
						</li>

						{!session && (
							<li>
								<Link href="/library">
									<NavLink>LIBRARY</NavLink>
								</Link>
							</li>
						)}
						{/* <li>
							<Link href="/library">
								<NavLink>ARTICLES</NavLink>
							</Link>
						</li> */}

						{/* <li>
						<NavLink onClick={setAction(session)}>
							{session ? "LOGOUT" : "CLIENT LOGIN"}
						</NavLink>
					</li> */}
					</div>
				</NavLinks>
			</Nav>
			<NavMenu
				shown={navShown}
				type="button"
				onClick={() => showNav(!navShown)}
			>
				{navShown ? "HIDE MENU" : "SHOW MENU"}
			</NavMenu>
		</NavBar>
	)
}
