import Footer_ from "../components/Footer"
import Navigation from "../components/Navigation"
import { Page } from "../helper-components/Containers"
import { White, Blue2 } from "../helper-components/Highlights"
import styled from "styled-components"
import * as colors from "../styles/colors"

const b_photo = "61.86em"

const Main = styled.main`
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Person = styled.section`
	width: 60%;
	max-width: 120rem;
	display: grid;
	grid-template-columns: auto 1fr;
	box-shadow: 0.2rem 0.2rem 0.8rem ${colors.shadow};

	@media screen and (max-width: 100.93em) {
		width: 95%;
	}

	@media screen and (max-width: ${b_photo}) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
	} ;
`

const Picture = styled.img`
	/* height: 50rem; */
	width: 30rem;
	/* height: 30rem; */
	object-fit: cover;

	@media screen and (max-width: ${b_photo}) {
		height: 30rem;
		justify-self: center;
		object-position: 50% 20%;
		border-radius: 50%;
		margin: 2rem 0;
	}

	@media screen and (max-width: 24em) {
		border-radius: 0;
		margin: 0;
		width: 100%;
	}
`

const Description = styled.div`
	font-size: 1.7rem;
	border-left: 0.4rem double black;
	@media screen and (max-width: ${b_photo}) {
		border: 0;
	}
`

const Description_prag = styled.p`
	padding: 0.5rem 1.5rem;
	text-align: justify;
	text-indent: 3rem;
	/* margin-bottom: 0.5rem; */
	/* margin: 1rem; */
`

const Credentials = styled.div`
	/* margin-top: 2rem; */
`

const Credential_list = styled.ul`
	/* list-style: circle; */
`
const Credential = styled.li`
	margin-bottom: 0.7rem;
	background-color: #000740;
	margin-bottom: 0.5rem;
	/* padding: 1rem; */
	height: 6rem;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;

	@media screen and (max-width: 36.2em) {
		height: auto;
		padding: 1rem;
	}
`

const Credential_rfp = styled(Credential)`
	background-color: ${colors.white1};
	/* outline: 1px solid ${colors.black}; */
`

const Credential_yrs = styled(Credential)`
	background-color: #003a42;
	color: ${colors.white};
`

const Credential_icon = styled.img`
	width: 6rem;
	height: 6rem;
`

const Credential_description = styled.div`
	padding-left: 1rem;
`

const Credential_src = styled.a`
	color: ${props => (props.awp ? `${colors.blue4}` : `${colors.blue}`)};
	display: block;
	font-size: 1.5rem;
`

export default function About_() {
	return (
		<Page>
			<Navigation />
			<Main>
				<Person>
					<Picture src="images/me.jpg" />

					<Description>
						<Credentials>
							<div></div>
							<Credential_list>
								<Credential>
									<Credential_icon src="icons/wmc.png" />
									<Credential_description>
										<White>Associate Wealth and Estate Planner</White>
										<Credential_src
											awp
											href="https://www.wealthcenter.org/"
											target="_blank"
										>
											Wealth Management Center for Communication and Research
											Inc.
										</Credential_src>
									</Credential_description>
								</Credential>
								<Credential_rfp>
									<Credential_icon src="icons/rfp.png" />
									<Credential_description>
										<Blue2>Associate Financial Planner</Blue2>
										<Credential_src href="https://rfp.ph/" target="_blank">
											Registered Financial Planners Institute
										</Credential_src>{" "}
									</Credential_description>
								</Credential_rfp>
								{/* <Credential_yrs>
									<Credential_description>
										6 years of personal experience in debt and equity
										investments
									</Credential_description>
								</Credential_yrs> */}
							</Credential_list>
						</Credentials>
						<Description_prag>
							Justin Salas is an advocate of personal financial planning. In the
							last 6 years, he has applied its principles to maintain and
							further improve his financial wellness. He believes that only
							through holistic plans can people truly find purpose for their
							hard earned money.
						</Description_prag>
						<Description_prag>
							The fact that financial planning is not yet a popular nor
							attractive undertaking, is not an obstacle for him to consistently
							reach out to the people to introduce the financial planning
							process and its benefits. Having a wide array of expertise that
							ranges from personal finance to development and engineering, he is
							more than equipped to craft solutions for every unique client
							goals and situation. He continues to improve his expertise on the
							subject to be able to always provide sound and up to date
							recommendations to his clients.
						</Description_prag>
					</Description>
				</Person>
			</Main>
			<Footer_ />
		</Page>
	)
}
