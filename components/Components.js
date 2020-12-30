import { useState } from "react"
import styled from "styled-components"
import { Expander } from "../common/Buttons"

const Components = styled.ul``
const my = "4rem"

const Component = styled.li`
	position: relative;
	background-color: var(--white1);
	color: var(--black);
	box-shadow: 0.4rem 0.4rem 0.8rem var(--shadow);
	/* border-right: 4px double var(black); */
	max-width: 110rem;
	width: 85%;
	height: 20rem;
	margin: ${my} auto;
	display: grid;
	grid-template-columns: auto 1fr;

	@media screen and (max-width: 160em) {
		width: 95%;
	}

	@media screen and (max-width: 62.66em) {
		border-right: 0;
		border-left: 4px double var(--black);

		grid-template-columns: 1fr;
		width: 70%;
	}

	@media screen and (max-width: 39em) {
		grid-template-columns: 1fr;
		width: 92%;
	}

	@media screen and (max-width: 29.8em) {
		text-align: justify;
	}
`

const Investment = styled(Component)``
const Risk = styled(Component)``
const Tax = styled(Component)``
const Estate = styled(Component)``

const Image = styled.img`
	width: 30rem;
	height: 100%;

	/* height: 27rem; */
	object-fit: cover;

	/* @media screen and (max-width: 161em) {
		height: 27rem;
	}

	@media screen and (max-width: 89em) {
		height: 35rem;
	}

	@media screen and (max-width: 62.66em) {
		width: 100%;
		height: 20rem;
	} */
`

const Image2 = styled(Image)`
	/* @media screen and (max-width: 190.46em) {
		height: 32rem;
	}

	@media screen and (max-width: 141.6em) {
		height: 38rem;
	}

	@media screen and (max-width: 83em) {
		height: 45rem;
	}

	@media screen and (max-width: 62.66em) {
		width: 100%;
		height: 20rem;
	} */
`

const Title = styled.h3`
	margin-bottom: 1rem;
`

const Description = styled.div`
	padding: 1.5rem;
	padding-bottom: 0;
	margin-bottom: 5rem;
	/* border-left: 4px double var(--black); */
	color: rgba(0, 0, 0, 0);
	background-image: linear-gradient(to bottom, black 55%, transparent);
	background-clip: text;
	-webkit-background-clip: text;
	overflow: hidden;

	@media screen and (max-width: 62.66em) {
		border-left: 0;
		border-top: 4px double var(--black);
	}
`

const Description_prag = styled.p`
	line-height: 1.4;
	text-indent: 4rem;
	font-size: 1.8rem;
`

export default function Components_() {
	const [expanded, expand] = useState(false)

	return (
		<Components>
			<Investment>
				<Image src="images/invest.jpg" />
				<Description expanded={expanded}>
					<Title onClick={() => expand(!expanded)}>Invesment Plan</Title>
					<Description_prag>
						We often want to invest to have either capital gains or to have some
						amount of extra income - but how much return on our investments do
						we really need? What are these sought after gains really for?
						Investment planning is the core component of a financial plan
						because it is geared towards the achievement of your financial
						goals. This suggests that our investments must have a clear purpose
						- but too often our financial goals are qualitative e.g "I want to
						retire when I'm rich" or "Someday, I want to live in a big house".
						My job as a financial planner is to quantify these qualitative goals
						and craft an investment plan which take into account your goal
						horizon, investable capital, adequate return on investment and the
						amount of risk you're willing to take for your investments.{" "}
					</Description_prag>
				</Description>
				<Expander>Read more</Expander>
			</Investment>
			<Risk>
				<Image2 src="images/insure.jpg" />
				<Description>
					<Title>Risk and Insurance Plan</Title>
					<Description_prag>
						To build wealth, we need to either maximize our revenue or minimize
						our expenses - without, of course, compromising our current standard
						of living. What we should specifically be wary about is the presence
						of unexpected costly circumstances that can immediately eat up our
						financial progress. Insurance is a great tool for managing risk -
						who would want to pay for a huge medical bill with their own money?
					</Description_prag>
					<Description_prag>
						The financial burden of risks like, death, disability, accident and
						critical illness can be passed on to insurance companies by paying a
						certain amount of premium - but how much are you willing to set
						aside for it? Allocating what would have been an investable amount
						for minimizing risk is not outright tangible and satisfying. You'll
						only appreciate your insurance the time that you'll be needing it -
						and for sure, we don't want that time to come ever. Therefore, it is
						important that we bring in the right balance between coverage
						adequacy and practicality appropriate to your current financial
						situation - insurance planning is a great tool for that.
					</Description_prag>
				</Description>
			</Risk>
			<Tax>
				<Image src="images/tax.jpg" />
				<Description>
					<Title>Tax plan</Title>
					<Description_prag>
						Tax planning isn't about tax avoidance. Taxation fuels our economy -
						it serves as our contribution to our nation's progress. We can't
						avoid our taxes - and we should not. Though the government is strict
						on it's mandate, it didn't fail to consider giving legal exemptions
						and tax deduction opportunities. By employing tax strategies
						synonymous to your business structure, we can maximize these
						provisions to maximize income efficiency.{" "}
					</Description_prag>
				</Description>
			</Tax>
			<Estate>
				<Image src="images/estate.jpg" />
				<Description>
					<Title>Estate plan</Title>
					<Description_prag>
						Not a single day of our life is guaranteed. We are too busy building
						our wealth that we forget to give little consideration of what
						happens to our estate when we're gone. The seasoned estate planner
						Atty. Angelo M. Cabrera always says "He who deliberately leaves no
						plan, plans chaos for his children". There's a lot of stories going
						around about properties being eaten away by estate taxes and family
						members suing each other on court for unsettled inheritance. These,
						and many other problems can be avoided with a proper estate plan.{" "}
					</Description_prag>
				</Description>
			</Estate>
		</Components>
	)
}
