import Navigation from "../components/Navigation/Navigation"
import Header_ from "../components/Header/Header"
import Footer_ from "../components/Footer/Footer"
import Process_ from "../components/Sections/Process/Process"
import Services_ from "../components/Sections/Services/Services"
import s from "../components/Pages/page.module.scss"
import i from "../components/Pages/index.module.scss"

export default function Index_() {
	return (
		<>
			<div className={s.page}>
				<Navigation />
				<main className={i.main}>
					<Header_ />
					<Process_ />
					<Services_ />
				</main>
				<Footer_ />
			</div>
		</>
	)
}
