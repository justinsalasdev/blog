import Footer_ from "../../components/Footer/Footer"
import Navigation from "../../components/Navigation/Navigation"
import { NextSeo } from "next-seo"

import s from "../../components/Articles/articles.module.scss"

export default function Benefits_() {
	return (
		<>
			<div className={s.page}>
				<NextSeo
					title="Article "
					description="Having a financial plan"
					canonical="https://justinsalas.cc/"
					openGraph={{
						url: "https://justinsalas.cc/articles/independent",
						title: "The advantages of hiring an independent financial planner",
						description:
							"His professional fee might be small thing compared to the value he can bring to your finances",
						images: [
							{
								url: "https://justinsalas.cc/images/seo/independent1.png",
								width: 1200,
								height: 627,
								alt: "a photo containing the article title"
							}
						],
						site_name: "Justin Salas RFP®"
					}}
				/>
				<Navigation />
				<main className={s.main}>
					<h1 className={s.title}>
						The advantages of hiring an independent financial planner
					</h1>

					<ul className={s.points}>
						<li className={s.point}>
							<h2 className={s.heading}>He works for you</h2>
							<p className={s.parag}>
								An independent financial planner charges a professional fee for
								the services he'll render to his client and therefore, always
								acts with his client's best interest in mind. Whether be it
								acquiring an investment or buying a financial product from one
								institution or the other, he will make sure that you get the
								most bang out of your buck.
							</p>
						</li>
						<li className={s.point}>
							<h2 className={s.heading}>Everything is documented</h2>

							<p className={s.parag_wl}>
								Before rendering his services, he makes sure that the client
								understands the terms on which he renders those services by
								expounding the contents of the financial service agreement - a
								document that typically includes but not limited to:
							</p>
							<ul className={s.list}>
								<li className={s.item}>the goals of the engagement</li>
								<li className={s.item}>
									the ethical standards that he follows
								</li>
								<li className={s.item}>the basis of his professional fee</li>
								<li className={s.item}>
									what he can and can't do for the client
								</li>
								<li className={s.item}>
									the basis of his would-be recommendations
								</li>
								<li className={s.item}>your responsibility as his client</li>
							</ul>
						</li>

						<li className={s.point}>
							<h2 className={s.heading}>Your goals are aligned</h2>
							<p className={s.parag}>
								Since an independent professional charges his fees proportionate
								to his client's current financial situation, he'll do his best
								service to contribute to its improvement. In simple terms, he
								wants you to be financially successful in the future so he, in
								turn, will also be well remunerated.
							</p>
						</li>

						<li className={s.point}>
							<h2 className={s.heading}>Quality of Service</h2>
							<p className={s.parag}>
								Independent professionals often bear industry-recognized
								designations that signify their competence in the services that
								they render. Bearing such designations also compels them to
								comply with continuing education requirements. The client is
								assured that the services they avail are up to date and are
								always in line with industry best practices.
							</p>
						</li>
						<li className={s.point}>
							<h2 className={s.heading}>Accountability</h2>
							<p className={s.parag}>
								Since everything is documented, you know what to expect from the
								professional engagement and thus, have something to compare the
								results with. The financial planner will always strive to
								deliver because the client holds an agreement that, if not met,
								may be grounds for the professional to lose his practice. By all
								means, who would want a dissatisfied client?
							</p>
						</li>
					</ul>
				</main>
				<Footer_ />
			</div>
		</>
	)
}
