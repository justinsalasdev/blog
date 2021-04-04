import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Header_ from "../components/Header/Header"
import Footer_ from "../components/Footer/Footer"
import Process_ from "../components/Sections/Process/Process"
import { Page } from "../components/Pages/pageStyles"
import Services_ from "../components/Sections/Services/Services"

const Main = styled.main`
	display: grid;
	grid-template-rows: 40rem auto auto;
	//header process  services
`

export default function Index_() {
	return (
		<>
			<Page>
				<Navigation />
				<Main>
					<Header_ />
					<Process_ />
					<Services_ />
				</Main>
				<Footer_ />
			</Page>
		</>
	)
}
