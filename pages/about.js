import Footer_ from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import Person_ from "../components/Person/Person"
import styled from "styled-components"
import { Page } from "../components/Pages/pageStyles"

const Main = styled.main`
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default function About_() {
	return (
		<Page>
			<Navigation />
			<Main>
				<Person_ />
			</Main>
			<Footer_ />
		</Page>
	)
}
