import { Green, Orange } from "../../helper-components/Highlights"
import Link from "next/link"
import { PopupText } from "react-calendly"

import s from "./header.module.scss"

export default function Header_() {
	return (
		<header className={s.header}>
			<div className={s.title}>
				<span className={s.green}>Planning</span> makes it easier for you to
				make financial decisions and keeps you on track to meet your{" "}
				<span className={s.orange}>goals.</span>
			</div>
			<Link href="/articles/benefits">
				<a className={s.link}>More benefits of financial planning ⤍</a>
			</Link>
			<div className={s.action}>
				<PopupText
					text="Schedule a meeting 📆"
					url="https://calendly.com/justinsalasrfp/financial-planning-engagement"
				/>
			</div>
		</header>
	)
}
