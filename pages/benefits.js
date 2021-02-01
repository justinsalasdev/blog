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
	font-size: 1.9rem;
	color: var(--blue);
	cursor: pointer;
	:hover {
		font-weight: bold;
	}

	:active {
		transform: translateX(1rem);
		color: var(--green);
	}
`

const Heading = styled.h2`
	font-size: 1.8rem;
	margin-bottom: 1rem;
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
	margin-bottom: 2.2rem;
	padding: ${props => (props.main ? "0" : "0 4rem 0 4rem")};
	color: var(--black);
	/* font-size: 1.8rem; */

	@media screen and (max-width: 30.4em) {
		padding: ${props => (props.main ? "0" : "0 1rem 0 1rem")};
	}
`

export default function Benefits_() {
	return (
		<Page>
			<Navigation />
			<Main>
				<Title>The benefits of having a financial plan</Title>
				{/* <Link
					href="https://savology.com/6-benefits-of-financial-planning"
					target="_blank"
				>
					view original article from Savology →
				</Link> */}
				{/* <div>
					<Paragraph main>
						There are countless advantages of financial planning that come
						immediately from having a financial plan. From emotional and health
						associated benefits to social and financial benefits, financial
						planning has a net positive impact on every aspect of your life.
						While several dozen benefits exist, there are some that have more
						impact than others. Below are several key benefits that come as a
						direct result of creating a financial plan.
					</Paragraph>
				</div> */}

				<section>
					<Heading>Your financial goals are quantified</Heading>
					<Paragraph>
						Our financial goals are often qualitative - e.g. “I want to retire
						when I’m rich” or “I want to travel the world before I get old”. By
						putting numbers to our goals, we’ll be able to design measurable
						action plans to achieve them.
					</Paragraph>
				</section>
				<section>
					<Heading>It is unique to you</Heading>
					<Paragraph>
						It’s common to hear or read financial conventions like: save at
						least 10% of your income; you should put your money in stocks while
						you’re young; your insurance coverage should be 12 times your annual
						income. While some of these may be true, it doesn’t necessarily mean
						it is applicable to anyone. Each one of us has our own financial
						circumstances that need to be addressed differently.
					</Paragraph>
				</section>

				<section>
					<Heading>You’ll have confidence in your investment decisions</Heading>
					<Paragraph>
						Because a financial plan helps you quantify goals and helps you lay
						out the steps that need to be done to achieve them, you won’t have
						any hard time picking the right financial instrument - the one best
						suited for the goals you want to achieve.
					</Paragraph>
				</section>

				<section>
					<Heading>You have a guide in making financial decisions.</Heading>
					<Paragraph>
						Sometimes, we are worried that we might be overspending on something
						or we might not be saving enough. Having a complete picture of how
						your resources are currently allocated to your different financial
						goals, you’ll have peace of mind when you make spending decisions. A
						financial plan doesn’t restrict our spending - it just shows us the
						consequences of our decisions.
					</Paragraph>
				</section>

				<section>
					<Heading>Helps you set your earning standard</Heading>
					<Paragraph>
						By determining how much you need to allocate for each of your
						financial goals, you will get an idea of how big your investible
						surplus should be - and that in turn, will show you how much more
						you need to earn, from your current job or other sources of income,
						if you have a deficit. Of course, our investments will maximize our
						potential for meeting life goals but we should not solely rely on
						them to achieve everything for us. We should remember that the more
						returns we want from our investments, the more risk we have to take
						- the more learning effort we need to put in.
					</Paragraph>
				</section>
			</Main>
			<Footer_ />
		</Page>
	)
}
