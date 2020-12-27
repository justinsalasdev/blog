import styled from "styled-components"
import Navigation from "../components/Navigation"
import Header_ from "../components/Header"
import * as colors from "../styles/colors"
import { Scroller } from "../helper-components/Containers"
import Steps_ from "../components/Steps"
import Components_ from "../components/Components"

const Page = styled.div`
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
	background-color: ${colors.gray};
	display: grid;
	padding: 1rem 0 1rem 0;
	grid-template-rows: auto 1fr;
`

const Section2 = styled(Section)`
	padding-top: 4rem;
	background-color: white;
`

const Section_title = styled.h2`
	color: ${colors.white};
	padding-bottom: 2rem;
	margin-left: 1.5rem;
	/* margin-bottom: 1rem; */
`
const Section_title2 = styled(Section_title)`
	width: 70%;
	color: ${colors.black};
	padding-bottom: 1rem;
`

export default function Home() {
	return (
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
			<footer>Footer</footer>
		</Page>
	)
}
