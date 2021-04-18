import Link from "next/link"
import {
	NavBar,
	Nav,
	NavLinks,
	NavLink,
	NavMenu,
	NavHome,
	Divider
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
				{navShown ? null : ( //shows when mobile & navLinks are hidden
					<NavHome shown={navShown}>
						<Link href="/">
							<NavLink>Justin Salas RFP®</NavLink>
						</Link>
					</NavHome>
				)}

				<NavLinks shown={navShown}>
					<li>
						<Link href="/">
							<NavLink>Justin Salas RFP®</NavLink>
						</Link>
					</li>

					<Divider>
						{session && (
							<li>
								<Link href="/user/dashboard">
									<NavLink>
										<CgProfile />
										DASHBOARD
									</NavLink>
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

						<li>
							<NavLink onClick={setAction(session)}>
								{session ? "LOGOUT" : "LOGIN"}
							</NavLink>
						</li>
					</Divider>
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
