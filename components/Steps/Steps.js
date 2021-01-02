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
					<span>1️⃣</span>Get to know your advisor
				</Card_title>
				<Card_description>
					By scheduling a short online engagement, I'll be able to give you an
					overview of the financial planning. I will also get to properly
					introduce myself as a professional so you'll get to decide if my set
					of expertise will cater to your needs and expectations. How am I going
					to get compensated will also be disclosed.
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
					<span>2️⃣</span>Decide if I'm the right professional for you.
				</Card_title>
				<Card_description>
					My set of expertise might not be the right fit for the goals you want
					to achieve or the institutions I represent may not be of your personal
					preference. In any case, by discussing these matters upfront, we'll be
					able to save significant time and energy that could have been wasted
					if we heedlessly began planning without addressing relevant concerns.
				</Card_description>
			</Card>
			<Card delay={3}>
				<Card_title>
					<span>3️⃣</span>Begin : Get relevant financial information
				</Card_title>
				<Card_description>
					I can’t make a sound financial plan just like a doctor can’t prescribe
					medicine to a patient they haven’t examined yet. Your role is to give
					me the most accurate relevant data that I need to assess and
					understand your current financial situation.
				</Card_description>
			</Card>
			<Card delay={4}>
				<Card_title>
					<span>4️⃣</span>Develop a draft financial plan
				</Card_title>
				<Card_description>
					Taking into account your current financial standing and the goals you
					want to achieve, I'll be able to construct sound recommendations that
					you may want or need to undertake.
				</Card_description>
			</Card>
			<Card delay={5}>
				<Card_title>
					<span>5️⃣</span>Implement financial plan
				</Card_title>
				<Card_description>
					Financial plans are useless if no actions are taken to make it happen.
					Given the wide variety of financial instruments available, it can be
					confusing most of the time to choose which one is adequate for your
					goals. As a financial advisor, all I can do for you is to explain, to
					the best of my ability, viable recommendations suitable to your
					current financial standing - so you, and you alone, can make an
					informed choice.
				</Card_description>
			</Card>
			<Card delay={6}>
				<Card_title>
					<span>6️⃣</span>Review
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
