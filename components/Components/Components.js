import { useReducer } from "react"
import {
	Components,
	Component,
	Title,
	Image,
	Image2,
	Description,
	Description_prag,
	Description_action
} from "./componentStyles"

const initialState = {
	one: false,
	two: false,
	three: false,
	four: false
}

function reducer(state, action) {
	switch (action.type) {
		case "one":
			return { ...state, one: !state.one }
		case "two":
			return { ...state, two: !state.two }
		case "three":
			return { ...state, three: !state.three }
		case "four":
			return { ...state, four: !state.four }
	}
}

export default function Components_() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { one, two, three, four } = state
	return (
		<Components>
			<Component expanded={one}>
				<Image src="images/invest.jpg" />
				<Description expanded={one}>
					<Title>Invesment Plan</Title>
					<Description_prag expanded={one}>
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
					<Description_action onClick={() => dispatch({ type: "one" })}>
						{one ? "Show less" : "Read more"}
					</Description_action>
				</Description>
			</Component>
			<Component expanded={two}>
				<Image2 src="images/insure.jpg" />
				<Description expanded={two}>
					<Title>Risk and Insurance Plan</Title>
					<Description_prag>
						To build wealth, we need to either maximize our revenue or minimize
						our expenses - without, of course, compromising our current standard
						of living. What we should specifically be wary about is the presence
						of unexpected costly circumstances that can immediately eat up our
						financial progress. Insurance is a great tool for managing risk -
						who would want to pay for a huge medical bill with their own money?
					</Description_prag>
					<Description_prag expanded={two}>
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
					<Description_action onClick={() => dispatch({ type: "two" })}>
						{two ? "Show less" : "Read more"}
					</Description_action>
				</Description>
			</Component>
			<Component expanded={three}>
				<Image src="images/tax.jpg" />
				<Description expanded={three}>
					<Title>Tax plan</Title>
					<Description_prag expanded={three}>
						Tax planning isn't about tax avoidance. Taxation fuels our economy -
						it serves as our contribution to our nation's progress. We can't
						avoid our taxes - and we should not. Though the government is strict
						on it's mandate, it didn't fail to consider giving legal exemptions
						and tax deduction opportunities. By employing tax strategies
						synonymous to your business structure, we can maximize these
						provisions to maximize income efficiency.{" "}
					</Description_prag>
					<Description_action onClick={() => dispatch({ type: "three" })}>
						{three ? "Show less" : "Read more"}
					</Description_action>
				</Description>
			</Component>
			<Component expanded={four}>
				<Image src="images/estate.jpg" />
				<Description expanded={four}>
					<Title>Estate plan</Title>
					<Description_prag expanded={four}>
						Not a single day of our life is guaranteed. We are too busy building
						our wealth that we forget to give little consideration of what
						happens to our estate when we're gone. The seasoned estate planner
						Atty. Angelo M. Cabrera always says "He who deliberately leaves no
						plan, plans chaos for his children". There's a lot of stories going
						around about properties being eaten away by estate taxes and family
						members suing each other on court for unsettled inheritance. These,
						and many other problems can be avoided with a proper estate plan.{" "}
					</Description_prag>
					<Description_action onClick={() => dispatch({ type: "four" })}>
						{four ? "Show less" : "Read more"}
					</Description_action>
				</Description>
			</Component>
		</Components>
	)
}
