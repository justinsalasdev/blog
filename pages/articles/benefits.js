import Footer_ from "../../components/Footer/Footer"
import Navigation from "../../components/Navigation/Navigation"
import styled from "styled-components"

export const Page = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
	background-color: #ffffff;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23ffffff' width='11' height='11'/%3E%3Crect fill='%23fefefe' x='10' width='11' height='11'/%3E%3Crect fill='%23fefefe' y='10' width='11' height='11'/%3E%3Crect fill='%23fdfdfd' x='20' width='11' height='11'/%3E%3Crect fill='%23fdfdfd' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23fcfcfc' y='20' width='11' height='11'/%3E%3Crect fill='%23fbfbfb' x='30' width='11' height='11'/%3E%3Crect fill='%23fbfbfb' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23fafafa' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23f9f9f9' y='30' width='11' height='11'/%3E%3Crect fill='%23f9f9f9' x='40' width='11' height='11'/%3E%3Crect fill='%23f8f8f8' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23f8f8f8' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23f7f7f7' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23f6f6f6' y='40' width='11' height='11'/%3E%3Crect fill='%23f6f6f6' x='50' width='11' height='11'/%3E%3Crect fill='%23f5f5f5' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23f5f5f5' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23f4f4f4' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23f3f3f3' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23f3f3f3' y='50' width='11' height='11'/%3E%3Crect fill='%23f2f2f2' x='60' width='11' height='11'/%3E%3Crect fill='%23f1f1f1' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23f1f1f1' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23f0f0f0' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23f0f0f0' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23efefef' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23eeeeee' x='70' width='11' height='11'/%3E%3Crect fill='%23eeeeee' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23ededed' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23ededed' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23ececec' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23ebebeb' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23ebebeb' x='80' width='11' height='11'/%3E%3Crect fill='%23eaeaea' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23eaeaea' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23e9e9e9' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23e8e8e8' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23e8e8e8' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23e7e7e7' x='90' width='11' height='11'/%3E%3Crect fill='%23e6e6e6' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23e6e6e6' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23e5e5e5' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23e5e5e5' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23e4e4e4' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23e3e3e3' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23e3e3e3' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23e2e2e2' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23e2e2e2' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23e1e1e1' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23e0e0e0' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23e0e0e0' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23dfdfdf' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23dfdfdf' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23dedede' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23dddddd' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23dddddd' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23dcdcdc' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23dcdcdc' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23dbdbdb' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
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
