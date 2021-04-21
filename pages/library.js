import Footer_ from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import s from "../components/Pages/page.module.scss"
import d from "../components/Pages/library.module.scss"

const pictures = [
	"richdad",
	"investingdummies",
	"intelligent",
	"fundamental",
	"security",
	"common",
	"oneup",
	"tvm",
	"little",
	"naked",
	"technical",
	"winning",
	"insurance",
	"thy1",
	"thy2",
	"thy3",
	"allocator",
	"analysis"
]

export default function Library_() {
	return (
		<div className={s.page}>
			<Navigation />
			<main className={d.main}>
				<p className={d.summary}>
					Sharing with you some of the books that helped improve my knowledge in
					personal finance.
				</p>
				<ul className={d.books}>
					{pictures.map((picture, index) => {
						return (
							<li className={d[`book_${index}`]} key={index}>
								<img className={d.cover} src={`images/${picture}.jpg`} />
							</li>
						)
					})}
				</ul>
			</main>
			<Footer_ />
		</div>
	)
}
