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

const Paragraph = styled.p`
	text-indent: 4rem;
	text-align: justify;
	margin-bottom: 1.9rem;
	padding: ${props => (props.main ? "0" : "0 4rem 0 4rem")};
	color: var(--black);
	/* font-size: 1.8rem; */

	@media screen and (max-width: 30.4em) {
		padding: ${props => (props.main ? "0" : "0 1rem 0 1rem")};
	}
`

const List = styled.ul`
	/* background: red; */
	padding: ${props => (props.main ? "0" : "0 8rem 0 8rem")};
	@media screen and (max-width: 30.4em) {
		padding: ${props => (props.main ? "0" : "0 2rem 0 2rem")};
	}
	margin-bottom: 1.9rem;
`
const Item = styled.li`
	list-style: circle;
	/* background: blue; */
	margin: 1.5rem;
`
const Key = styled.span`
	color: var(--green);
`

export default function Benefits_() {
	return (
		<Page>
			<Navigation />
			<Main>
				<Title>Things we discuss with our clients on our first meeting</Title>

				<section>
					<Paragraph>
						Financial planning is not a quick process - and it should be. It’s
						logical to set aside some time to plan for something that we have
						worked for in a long time: our hard-earned money.
					</Paragraph>
					<Paragraph>
						Just as important as the process per se, the professional you’ll be
						doing the planning with must have an acceptable level of competence.
						He must possess a set of expertise that is widely recognized in the
						financial services industry. Not only that, he must also adhere to
						the ethical standards of the profession.
					</Paragraph>
					<Paragraph>
						Before our client decides to do his/her financial plan - we make
						sure that he knows and understands the following.
					</Paragraph>
					<List>
						<Item>
							<Key>Overview</Key> - what is financial planning and how it’s done
						</Item>
						<Item>
							<Key>The different roles in the financial services industry</Key>{" "}
							- who does what
						</Item>
						<Item>
							<Key>Our scope of responsibility</Key> - what can do and what we
							can’t
						</Item>
						<Item>
							<Key>How are we held accountable</Key> - what if we’re wrong?
						</Item>
						<Item>
							<Key>How are we compensated</Key> - do we charge consultation fees
							or do we earn from commissions?
						</Item>
					</List>
					<Paragraph>
						By knowing all of these things, the client will be in a position to
						make an informed choice. It’s better to discuss these concerns
						upfront to avoid potential inconveniences in the middle of the
						financial planning process. Misunderstandings and inconveniences can
						lengthen the process or worse, can put the whole effort to waste.
					</Paragraph>
				</section>
			</Main>
			<Footer_ />
		</Page>
	)
}
