import {
	Cards,
	Card,
	Card_title,
	Card_description,
	Card_action
} from "./stepsStyles"
import { PopupText } from "react-calendly"

export default function Steps_() {
	return (
		<Cards>
			<Card delay={1}>
				<Card_title>
					<span>Step 1</span> Financial Service Engagement
				</Card_title>
				<Card_description>
					By scheduling a short online assessment, I'll be able to get an
					overview of your current financial situation and depending on your
					goals, be able to recommend financial services that you may like or
					need to avail from me.
				</Card_description>
				<Card_description>
					I'll also expound the terms on which I render those services and the
					basis on how I charge my fee.
				</Card_description>
				<Card_description>
					Once we agree to terms on which I'll render my services to you, our
					client-professional relationship starts.
				</Card_description>

				{/* <Card_action>
					<PopupText
						text="Schedule a meeting 📆"
						url="https://calendly.com/justinsalasrfp/financial-planning-engagement"
					/>
				</Card_action> */}
			</Card>

			<Card delay={2}>
				<Card_title>
					<span>Step 2</span>Financial Planning
				</Card_title>
				<Card_description>
					We'll work on the completion of the financial planning-specific
					services you availed of and consolidate them into a written financial
					plan.
				</Card_description>
			</Card>
			<Card delay={3}>
				<Card_title>
					<span>Step 3</span>Financial Plan Implementation
				</Card_title>
				<Card_description>
					Given the wide variety of financial instruments available, finding the
					right tools to put the components of your financial plan into action
					can sometimes be a daunting task.
				</Card_description>
				<Card_description>
					As your financial planner, I will explain, to the best of my ability,
					viable options so you can make the best possible choice.
				</Card_description>
			</Card>
			<Card delay={4}>
				<Card_title>
					<span>Step ↺</span>Progress Monitoring & On-going Review
				</Card_title>
				<Card_description>
					Investment performance must be periodically monitored to see
					reallocation opportunities or rebalancing requirements. This is to
					ensure that the portfolio is on point to the investment objectives and
					is not exposed to unnecessary additional risks.
				</Card_description>
				<Card_description>
					Moreover, we can't have a complete picture of what your life is going
					to be like in the future. Adaptive changes to the plan must be made as
					you progress through the different chapters of your life.
				</Card_description>
			</Card>
		</Cards>
	)
}
