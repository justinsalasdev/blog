import Navigation from "../../../../components/Navigation/Navigation"
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

const PersonNav = styled.ul`
	background-color: seagreen;
`
const Person = styled.li`
	padding: 0.5rem;
`

const PersonLink = styled.a`
	padding: 0.5rem;
`

export default function Identity_() {
	return (
		<Page>
			<Navigation />
			<Main>
				<PersonNav>
					<Person>
						<Link href="identity/client">
							<PersonLink>Client</PersonLink>
						</Link>
					</Person>
					<Person>
						<Link href="identity/policy-owner">
							<PersonLink>Policy Owner</PersonLink>
						</Link>
					</Person>
					<Person>
						<Link href="identity/beneficial-owner">
							<PersonLink>Beneficial Owner</PersonLink>
						</Link>
					</Person>
				</PersonNav>
			</Main>
		</Page>
	)
}
