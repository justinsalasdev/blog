import Link from "next/link"
import { MdMenu } from "react-icons/md"
import { signIn, signOut, useSession } from "next-auth/client"
import { useState } from "react"
import s from "./navigation.module.scss"

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
		<div className={s.bar}>
			<nav className={s.nav}>
				{navShown ? null : ( //shows when mobile & navLinks are hidden
					<div className={s.home}>
						<Link href="/">
							<a className={s.link}>Justin Salas RFP®</a>
						</Link>
					</div>
				)}

				<ul
					className={`${s.links} ${navShown ? s.links_shown : s.links_hidden}`}
					id="owned_navlinks"
				>
					<li>
						<Link href="/">
							<a className={s.link}>Justin Salas RFP®</a>
						</Link>
					</li>

					<div className={s.divider}>
						{session && (
							<li>
								<Link href="/user/dashboard">
									<a className={s.link}>
										<CgProfile />
										DASHBOARD
									</a>
								</Link>
							</li>
						)}
						<li>
							<Link href={session ? "/user/profile" : "/about"}>
								<a className={s.link}>{session ? "PROFILE" : "ABOUT"}</a>
							</Link>
						</li>

						{!session && (
							<li>
								<Link href="/library">
									<a className={s.link}>LIBRARY</a>
								</Link>
							</li>
						)}
						{/* <li>
							<Link href="/library">
								<NavLink>ARTICLES</NavLink>
							</Link>
						</li> */}

						<li>
							<a className={s.link} onClick={setAction(session)}>
								{session ? "LOGOUT" : "LOGIN"}
							</a>
						</li>
					</div>
				</ul>
			</nav>
			<button
				className={s.menu}
				type="button"
				aria-expanded={navShown ? "true" : "false"}
				aria-owns="owned_navlinks"
				onClick={() => showNav(!navShown)}
			>
				<MdMenu />
			</button>
		</div>
	)
}
