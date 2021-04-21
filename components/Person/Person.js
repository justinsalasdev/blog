import Link from "next/link"
import s from "./person.module.scss"

export default function Person_() {
	return (
		<section className={s.person}>
			<img className={s.picture} src="images/me.jpg" />

			<div className={s.desc}>
				<div>
					<ul>
						<li className={s.credit}>
							<img className={s.credit__icon} src="icons/wmc.png" />
							<p className={s.credit__desc}>
								<span className={s.white}>
									Certified Wealth and Estate Planner
								</span>
								<a
									className={s.credit__src}
									awp
									href="https://www.wealthcenter.org/"
									target="_blank"
								>
									Wealth Management Center for Communication and Research Inc.
								</a>
							</p>
						</li>
						<li className={`${s.credit} ${s.rfp}`}>
							<img className={s.credit__icon} src="icons/rfp.png" />
							<p className={s.credit__desc}>
								<span className={s.blue2}>Registered Financial Planner</span>
								<a
									className={`${s.credit__src} ${s.blue2}`}
									href="https://rfp.ph/"
									target="_blank"
								>
									Registered Financial Planners Institute
								</a>
							</p>
						</li>
					</ul>
				</div>
				<p className={s.desc__prag}>
					Justin Salas is an advocate of personal financial planning. In the
					last 6 years, he has applied its principles to maintain and further
					improve his financial wellness. He believes that only through holistic
					plans can people truly find purpose for their hard-earned money.
				</p>
				<p className={s.desc__prag}>
					The fact that financial planning is not yet a popular nor attractive
					undertaking, is not an obstacle for him to consistently reach out to
					people to introduce the financial planning process and its benefits.
					Having a wide array of expertise that ranges from personal finance to
					development and engineering, he is more than equipped to craft
					solutions for every unique client goals and situation. He continues to
					improve his expertise on the subject to be able to always provide
					sound and up to date recommendations to his clients.
				</p>
				<p className={s.desc__prag}>
					He graduated Bachelor of Science in Electrical Engineering from Mapua
					University. His curiosity and eagerness to explore new fields led him
					to the acquisition of valuable knowledge and skills in finance,
					computer hardware, networking, and web programming. He likes to read
					books or play chess in his free time while enjoying a cup of tea.{" "}
					<Link href="/library">
						<a className={s.desc__link}>
							Have a look at some of the books that he likes &rarr;
						</a>
					</Link>
				</p>
			</div>
		</section>
	)
}
