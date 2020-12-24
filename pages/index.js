import styled from "styled-components"
import Navigation from "../components/Navigation"

const Page = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
`
const Main = styled.main`
	display: grid;
	grid-template-rows: auto auto auto auto;
`

export default function Home() {
	return (
		<Page>
			<Navigation />
			<Main>
				<header>Header</header>
				<section>Financial Planning Process</section>
				<section>Components of financial planning</section>
			</Main>
			<footer>Footer</footer>
		</Page>
	)
}
