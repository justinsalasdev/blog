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
					<span>Pre-planning</span> Get an overview
				</Card_title>
				<Card_description>
					By scheduling a short online meeting, I'll be able to give you an
					overview of financial planning and an introduction to the different
					roles in the financial services industry.
				</Card_description>
				<Card_description>
					I will also properly introduce myself as a professional so you'll have
					an idea about my set of expertise, responsibilities, and limitations.
					How I'll be paid and how I'll be held accountable will also be
					disclosed.
				</Card_description>

				<Card_action>
					<PopupText
						text="Schedule a meeting 📆"
						url="https://calendly.com/justinsalas/plan-intro"
					/>
				</Card_action>
			</Card>
			<Card delay={2}>
				<Card_title>
					<span>Pre-planning</span>Decide if I'm the right professional for you.
				</Card_title>
				<Card_description>
					My set of expertise might not be the right fit for the goals you want
					to achieve or the institutions I represent may not be of your personal
					preference. You are not, in anyway, obliged to have me as your
					financial professional.
				</Card_description>
				<Card_description>
					In any case, I am grateful to have shared with you the unpopular yet
					beneficial field of financial planning.
				</Card_description>
			</Card>
			<Card delay={3}>
				<Card_title>
					<span>Step 1</span>Get relevant financial information
				</Card_title>
				<Card_description>
					I can’t make a sound financial plan just like a doctor can’t prescribe
					medicine to a patient they haven’t examined yet.
				</Card_description>
				<Card_description>
					It is to your best interest to share to me, as accurate possible, all
					relevant information that I need to assess and understand your current
					financial situation.
				</Card_description>
			</Card>
			<Card delay={4}>
				<Card_title>
					<span>Step 2</span>Develop financial plan
				</Card_title>
				<Card_description>
					In this step, we'll collaborately design an action plan that you may
					want or need to undertake to achieve your financial goals given your
					current financial situation.
				</Card_description>
			</Card>
			<Card delay={5}>
				<Card_title>
					<span>Step 3</span>Implementation
				</Card_title>
				<Card_description>
					Given the wide variety of financial instruments available, finding the
					right tools to put your financial plan into action can sometimes be a
					daunting task.
				</Card_description>
				<Card_description>
					As your financial advisor, I will explain, to the best of my ability,
					viable options so you, and you alone, can make an informed choice.
				</Card_description>
			</Card>
			<Card delay={6}>
				<Card_title>
					<span>Step ↺</span>Review
				</Card_title>
				<Card_description>
					We can't have a complete picture of what your life is going to be like
					in the future. Adaptive changes to the plan must be made as you
					progress through the different chapters of your life.
				</Card_description>
			</Card>
		</Cards>
	)
}
