import Link from "next/link"
import { Nav, NavLinks, NavLink, NavHome } from "./navigationStyles"
import { signIn, signOut, useSession } from "next-auth/client"

export default function Navigation() {
	const [session, loading] = useSession()
	const setAction = session => () => {
		if (session) {
			signOut({ callbackUrl: "http://localhost:3000/" })
		} else {
			signIn("google", { callbackUrl: "http://localhost:3000/user/profile" })
		}
	}

	return (
		<Nav>
			<NavLinks>
				<li>
					<Link href="/">
						<NavHome>{session ? "HOME" : "Justin Salas, CWP® CEPP®"}</NavHome>
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
						<NavLink onClick={setAction(session)}>
							{session ? "LOGOUT" : "CLIENT LOGIN"}
						</NavLink>
					</li> */}
				</div>
			</NavLinks>
		</Nav>
	)
}
