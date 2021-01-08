import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Header_ from "../components/Header/Header"
import Steps_ from "../components/Steps/Steps"
import Components_ from "../components/Components/Components"
import Footer_ from "../components/Footer/Footer"

export const Page = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
`

const Main = styled.main`
	display: grid;
	grid-template-rows: 30rem auto 1fr auto;
`

const Section = styled.section`
	/* height: 30rem; */
	/* clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%); */
	background-color: var(--gray);
	display: grid;
	padding: 2rem 0 1rem 0;
	grid-template-rows: auto 1fr;
`

const Section2 = styled(Section)`
	background-color: white;
`

const Section_title = styled.h2`
	color: var(--white);
	padding-bottom: 2rem;
	margin-left: 1.5rem;
	/* margin-bottom: 1rem; */
`
const Section_title2 = styled(Section_title)`
	width: 70%;
	color: var(--black);
	padding-bottom: 1rem;
	margin-bottom: 2rem;
	@media screen and (max-width: 51.4em) {
		width: 50%;
	}
	@media screen and (max-width: 36.6em) {
		width: 80%;
	}
`

export const Scroller = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: scroll;
`

export default function Index_() {
	return (
		<>
			<Page>
				<Navigation />
				<Main>
					<Header_ />
					<Section>
						<Section_title>The Financial Planning Process</Section_title>
						<Scroller>
							<Steps_ />
						</Scroller>
					</Section>
					<Section2>
						<Section_title2>
							Components that may be present in a Financial Plan
						</Section_title2>
						<Components_ />
					</Section2>
				</Main>
				<Footer_ />
			</Page>
		</>
	)
}
