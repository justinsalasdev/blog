import Footer_ from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import Person_ from "../components/Person/Person"

import s from "../components/Pages/page.module.scss"
import d from "../components/Pages/about.module.scss"

export default function About_() {
	return (
		<div className={s.page}>
			<Navigation />
			<main className={d.main}>
				<Person_ />
			</main>
			<Footer_ />
		</div>
	)
}
