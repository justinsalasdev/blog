import s from "./process.module.scss"

export default function Process_() {
	return (
		<section className={s.process}>
			<h2 className={s.title}>PROCESS</h2>
			<ul className={s.cards}>
				<li className={s.card}>
					<img className={s.card__img} src="images/meeting.svg" />
					<div className={s.divider}>
						<h3 className={s.card__title}>Service Engagement</h3>
						<p className={s.card__desc}>
							By scheduling a short online assessment, I'll be able to get an
							overview of your current financial situation and depending on your
							goals, be able to recommend financial services that you may like
							or need to avail from me.
						</p>

						<p className={s.card__desc}>
							I'll also expound the terms on which I render those services and
							the basis on how I charge my fee. Once we agree to those terms by
							signing a written agreement, our client-professional relationship
							starts.
						</p>
					</div>
				</li>
				<li className={s.card}>
					<img className={s.card__img} src="images/planning.svg" />
					<div className={`${s.divider} ${s.first} ${s.right}`}>
						<h3 className={s.card__title}>Financial planning</h3>
						<p className={s.card__desc}>
							We'll work on the completion of the financial planning-specific
							services you availed and consolidate them into a written financial
							plan.
						</p>
					</div>
				</li>
				<li className={s.card}>
					<img className={s.card__img} src="images/implementation.svg" />
					<div className={s.divider}>
						<h3 className={s.card__title}>Financial plan implementation</h3>
						<p className={s.card__desc}>
							Given the wide variety of financial instruments available, finding
							the right tools to put the components of your financial plan into
							action can sometimes be a daunting and time consuming task.
						</p>
						<p className={s.card__desc}>
							As your financial planner, I will determine objectively, to the
							best of my ability, viable options so you can make the best
							possible choice.
						</p>
					</div>
				</li>
				<li className={s.card}>
					<img className={s.card__img} src="images/review.svg" />
					<div className={`${s.divider} ${s.first} ${s.right}`}>
						<h3 className={s.card__title}>Management and review</h3>
						<p className={s.card__desc}>
							Investment performance must be periodically monitored to see
							reallocation opportunities or rebalancing requirements. This is to
							ensure that the portfolio is on point to the investment objectives
							and is not exposed to unnecessary additional risks.
						</p>
						<p className={s.card__desc}>
							Moreover, we can't have a complete picture of what your life is
							going to be like in the future. Adaptive changes to the plan must
							be made as you progress through the different chapters of your
							life.
						</p>
					</div>
				</li>
			</ul>
		</section>
	)
}
