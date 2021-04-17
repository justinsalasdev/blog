import {
	Process,
	Title,
	Cards,
	Card,
	Card_image,
	Card_title,
	Card_description,
	Divider
} from "./processStyles"

export default function Process_() {
	return (
		<Process>
			<Title>PROCESS</Title>
			<Cards>
				<Card noborder>
					<Card_image src="images/meeting.svg" />
					<Divider>
						<Card_title>Service Engagement</Card_title>
						<Card_description>
							By scheduling a short online assessment, I'll be able to get an
							overview of your current financial situation and depending on your
							goals, be able to recommend financial services that you may like
							or need to avail from me.
						</Card_description>

						<Card_description>
							I'll also expound the terms on which I render those services and
							the basis on how I charge my fee. Once we agree to those terms by
							signing a written agreement, our client-professional relationship
							starts.
						</Card_description>
					</Divider>
				</Card>
				<Card>
					<Card_image src="images/planning.svg" />
					<Divider first right>
						<Card_title>Financial planning</Card_title>
						<Card_description>
							We'll work on the completion of the financial planning-specific
							services you availed and consolidate them into a written financial
							plan.
						</Card_description>
					</Divider>
				</Card>
				<Card>
					<Card_image src="images/implementation.svg" />
					<Divider>
						<Card_title>Financial plan implementation</Card_title>
						<Card_description>
							Given the wide variety of financial instruments available, finding
							the right tools to put the components of your financial plan into
							action can sometimes be a daunting and time consuming task.
						</Card_description>
						<Card_description>
							As your financial planner, I will determine objectively, to the
							best of my ability, viable options so you can make the best
							possible choice.
						</Card_description>
					</Divider>
				</Card>
				<Card>
					<Card_image src="images/review.svg" />
					<Divider first right>
						<Card_title>Management and review</Card_title>
						<Card_description>
							Investment performance must be periodically monitored to see
							reallocation opportunities or rebalancing requirements. This is to
							ensure that the portfolio is on point to the investment objectives
							and is not exposed to unnecessary additional risks.
						</Card_description>
						<Card_description>
							Moreover, we can't have a complete picture of what your life is
							going to be like in the future. Adaptive changes to the plan must
							be made as you progress through the different chapters of your
							life.
						</Card_description>
					</Divider>
				</Card>
			</Cards>
		</Process>
	)
}
