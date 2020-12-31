import Footer_ from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import styled from "styled-components"

export const Page = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
`

const Main = styled.main`
	width: 95%;
	max-width: 85rem;
	/* background-color: lightgreen; */
	margin: 0 auto;
	padding: 1rem;
	padding-top: 4rem;
`
const Title = styled.h1`
	font-size: 2.6rem;
	text-align: center;
	color: var(--black);
	margin-bottom: 1rem;
`
const Link = styled.a`
	display: block;
	text-align: center;
	margin-bottom: 2rem;
	font-size: 1.6rem;
	color: var(--blue);
	cursor: pointer;
	:hover {
		font-weight: bold;
	}

	:active {
		color: var(--green);
	}
`

const Heading = styled.h2`
	font-size: 1.8rem;
	margin-bottom: 0.5rem;
	color: var(--white1);
	padding: 0.5rem 3% 0.5rem 2%;
	clip-path: polygon(1% 0%, 100% 0, 99% 100%, 0% 100%);
	background-color: var(--green);
	display: inline-block;

	@media screen and (max-width: 44.46em) {
		max-width: 40rem;
	}
`

const Paragraph = styled.p`
	text-indent: 4rem;
	text-align: justify;
	margin-bottom: 2rem;
	padding: ${props => (props.main ? "0" : "0 4rem 0 4rem")};
	color: var(--black);
	font-size: 1.8rem;

	@media screen and (max-width: 30.4em) {
		padding: ${props => (props.main ? "0" : "0 1rem 0 1rem")};
	}
`

export default function About_() {
	return (
		<Page>
			<Navigation />
			<Main>
				<Title>The benefits of financial planning</Title>
				<Link
					href="https://savology.com/6-benefits-of-financial-planning"
					target="_blank"
				>
					view original article from Savology →
				</Link>
				<div>
					<Paragraph main>
						There are countless advantages of financial planning that come
						immediately from having a financial plan. From emotional and health
						associated benefits to social and financial benefits, financial
						planning has a net positive impact on every aspect of your life.
						While several dozen benefits exist, there are some that have more
						impact than others. Below are several key benefits that come as a
						direct result of creating a financial plan.
					</Paragraph>
				</div>

				<section>
					<Heading>
						Financial planning helps you set and reach your goals
					</Heading>
					<Paragraph>
						Financial plans help individuals create and set goals to work
						towards. Goals are what give people direction and purpose in their
						lives. When individuals have clear goals in mind, it gives them
						something to focus on. People that have clear goals they are
						actively working towards are around 10 times more likely to succeed.
						Yes, ten times! That alone should be enough motivation to create a
						plan for your finances.
					</Paragraph>
				</section>
				<section>
					<Heading>
						Financial plans are a great source of motivation and commitment
					</Heading>
					<Paragraph>
						People are not often motivated when they do not have clear goals and
						do not know what is expected of them. A financial plan reduces
						uncertainty around finances by providing clarity and indicating what
						you are expected to accomplish. You are more likely to work toward a
						goal that you know and understand.
					</Paragraph>
					<Paragraph>
						When you have a clear call to action through a financial plan, the
						ambiguity is no longer there to cloud your judgment. When you are
						ready to make positive changes in your life, then the plan leaves
						room for little hesitation. This allows for quicker action which
						increases follow-through. The longer you wait before taking action,
						the less likely you will be to take action.
					</Paragraph>
				</section>

				<section>
					<Heading>
						Financial plans provide a guide for action and decision-making
					</Heading>
					<Paragraph>
						Financial plans can direct actions toward desired outcomes. When
						actions are coordinated and focused on specific outcomes they are
						much more effective.Taking action with financial decisions can be
						hard for a multitude of reasons. There is a lot of stress and shame
						around money which makes people want to avoid talking or thinking
						about it. Personal finances often incorporate terms that many
						individuals are not familiar with. This creates an even larger
						problem when you add that to the fact that financial decisions are
						often big decisions that can have lasting consequences, negatively
						or positively affecting you for the long term.
					</Paragraph>
				</section>

				<section>
					<Heading>
						Financial planning has additional emotional and mental health
						benefits
					</Heading>
					<Paragraph>
						There are emotional and mental health benefits behind having a
						complete financial plan. Individuals with a plan are less stressed
						and tend to be more optimistic about their future compared to those
						that do not have any sort of financial plan. Having a financial plan
						that you can refer to can increase mindfulness about your personal
						finances which in turn lowers stress levels around money. When you
						have a plan in place, you are more likely to overcome setbacks.
					</Paragraph>
				</section>

				<section>
					<Heading>Financial plans help set performance standards</Heading>
					<Paragraph>
						Planning defines desired outcomes as well as milestones to define
						progress. These provide a standard for assessing when things are
						progressing and when they need correction. There are general
						financial standards that individuals should be meeting in order to
						be in a good place financially. These include having money set aside
						for emergencies, not taking on too much debt, saving for retirement
						and more. When you have a personalized plan to follow, it allows you
						to know exactly what steps you need to be taking to meet your goals.
					</Paragraph>
					<Paragraph>
						When you have a financial plan to measure yourself against it allows
						for both self-improvement and self-evaluation. You will have a
						comparison to overall standards and recommendations that will bring
						you to the best financial position for your goals and objectives.
					</Paragraph>
				</section>

				<section>
					<Heading>
						Financial planning is known to improve financial outcomes
					</Heading>
					<Paragraph>
						Last but not least, having a financial plan often improves financial
						outcomes over time. Those with plans are more likely to be prepared
						for financial emergencies and retirement. A financial plan allows
						you to begin with the end in mind. This gives people the proper
						perspective to balance their current goals and needs vs future goals
						and needs. A plan helps people to give attention to the future as
						well as today.
					</Paragraph>
				</section>
			</Main>
			<Footer_ />
		</Page>
	)
}
