import Navigation from "../../../components/Navigation/Navigation"
import styled from "styled-components"
import Link from "next/link"

export const Page = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr;
	min-height: 100vh;
`

const Main = styled.main`
	width: 95%;
	max-width: 100rem;
	/* background-color: lightgreen; */
	margin: 0 auto;
	padding: 1rem;
	padding-top: 4rem;
	background-color: lightgreen;
`

const InfoNav = styled.ul`
	background-color: seagreen;
`
const InfoCat = styled.li`
	padding: 0.5rem;
`

const CatLink = styled.a`
	cursor: pointer;
`

export default function Benefits_() {
	return (
		<Page>
			<Navigation />
			<Main>
				<InfoNav>
					<InfoCat>
						<Link href="profile/identity">
							<CatLink>Identity</CatLink>
						</Link>
					</InfoCat>
					<InfoCat>
						<Link href="profile/identity">
							<CatLink>Identity</CatLink>
						</Link>
					</InfoCat>
					<InfoCat>
						<Link href="profile/identity">
							<CatLink>Identity</CatLink>
						</Link>
					</InfoCat>
					<InfoCat>
						<Link href="profile/identity">
							<CatLink>Identity</CatLink>
						</Link>
					</InfoCat>
					<InfoCat>
						<Link href="profile/identity">
							<CatLink>Identity</CatLink>
						</Link>
					</InfoCat>
				</InfoNav>
			</Main>
		</Page>
	)
}
