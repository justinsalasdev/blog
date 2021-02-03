import Footer_ from "../../components/Footer/Footer"
import Navigation from "../../components/Navigation/Navigation"
import styled from "styled-components"
import {
	Page,
	Main,
	Title,
	Paragraph
} from "../../components/Articles/articleStyles"

const List = styled.ul`
	/* background: red; */
	padding: 0 8rem 0 8rem;
	@media screen and (max-width: 30.4em) {
		padding: 0 2rem 0 2rem;
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

				<Paragraph>
					Financial planning is not a quick process - and it should be. It’s
					logical to set aside some time to plan for something that we have
					worked for in a long time: our hard-earned money.
				</Paragraph>
				<Paragraph>
					Just as important as the process per se, the professional you’ll be
					doing the planning with must have an acceptable level of competence.
					He must possess a set of expertise that is widely recognized in the
					financial services industry. Not only that, he must also adhere to the
					ethical standards of the profession.
				</Paragraph>
				<Paragraph>
					Before our client decides to do his/her financial plan - we make sure
					that he knows and understands the following.
				</Paragraph>
				<List>
					<Item>
						<Key>Overview</Key> - what is financial planning and how it’s done
					</Item>
					<Item>
						<Key>The different roles in the financial services industry</Key> -
						who does what
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
					make an informed choice. It’s better to discuss these concerns upfront
					to avoid potential inconveniences in the middle of the financial
					planning process. Misunderstandings and inconveniences can lengthen
					the process or worse, can put the whole effort to waste.
				</Paragraph>
			</Main>
			<Footer_ />
		</Page>
	)
}
