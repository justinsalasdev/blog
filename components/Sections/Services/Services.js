import s from "./service.module.scss"

export default function Services_() {
	return (
		<section className={s.services}>
			<h2 className={s.title}>SERVICES</h2>
			<ul className={s.segments}>
				<li className={s.segment}>
					<h3 className={s.segment__title}>Investment Planning</h3>
					<ul className={s.topics_40}>
						<li className={s.topic_1}>
							<Topic_title>Retirement</Topic_title>
						</li>
						<li className={s.topic_2}>
							<Topic_title>Education</Topic_title>
						</li>
						<li className={s.topic_3}>
							<Topic_title>Major purchase</Topic_title>
						</li>
					</ul>
				</li>
				<li className={s.segment}>
					<h3 className={s.segment__title_2}>Insurance Planning</h3>
					<ul className={s.topics_30}>
						<li className={s.topic_4}>
							<span className={s.topic__title_2}>Risk</span>
						</li>
						<li className={s.topic_5}>
							<span className={s.topic__title_2}>Size</span>
						</li>
						<li className={s.topic_6}>
							<span className={s.topic__title_2}>Type</span>
						</li>
						<li className={s.topic_7}>
							<span className={s.topic__title_2}>Brand</span>
						</li>
					</ul>
				</li>
				<li className={s.segment}>
					<ul className={s.topics_40}>
						<li className={s.topic_8}>
							<span className={s.topic__title_3}>Estate Planning</span>
						</li>
						<li className={s.topic_9}>
							<span className={s.topic__title_3}>Tax Planning</span>
						</li>
					</ul>
				</li>
				<li className={s.segment}>
					<h3 className={s.segment__title_2}>Management</h3>
					<ul className={s.topics_30}>
						<li className={s.topic_10}>
							<span className={s.topic__title_2}>Monitor</span>
						</li>
						<li className={s.topic_11}>
							<span className={s.topic__title_2}>Rebalance</span>
						</li>
						<li className={s.topic_12}>
							<span className={s.topic__title_2}>Allocate</span>
						</li>
						<li className={s.topic_13}>
							<span className={s.topic__title_2}>Review</span>
						</li>
					</ul>
				</li>
			</ul>
		</section>
	)
}
