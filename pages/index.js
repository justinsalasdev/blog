import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Header_ from "../components/Header/Header"
import Steps_ from "../components/Steps/Steps"
import Components_ from "../components/Components/Components"
import Footer_ from "../components/Footer/Footer"
import { NextSeo } from "next-seo"

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
	background-color: #ffffff;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23ffffff'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23f4f4f4'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23e9e9e9'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23dedede'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23d3d3d3'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23c8c8c8'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23bebebe'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23b3b3b3'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23a8a8a8'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%239d9d9d'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23929292'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23878787'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg %3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
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

const seoImageUrl =
	"https://drive.google.com/file/d/19bP-uh96dwwwodmWjykQ0InAJ5s1ENSq/view?usp=sharing"

const seoDescription = "Financial Planner"

export default function Index_() {
	return (
		<>
			<NextSeo
				title="Justin Salas"
				description={seoDescription}
				canonical="https://justinsalas.cc"
				openGraph={{
					url: "https://justinsalas.cc",
					title: "Justin Salas",
					description: seoDescription,
					images: [
						{
							url: seoImageUrl,
							alt: "Mountain camps"
						}
					]
				}}
			/>
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
