import { White, Blue2 } from "../../helper-components/Highlights"
import {
	Person,
	Picture,
	Description,
	Description_prag,
	Credentials,
	Credential_list,
	Credential,
	Credential_rfp,
	Credential_icon,
	Credential_description,
	Credential_src
} from "./personStyles"

export default function Person_() {
	return (
		<Person>
			<Picture src="images/me.jpg" />

			<Description>
				<Credentials>
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
									Wealth Management Center for Communication and Research Inc.
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
					</Credential_list>
				</Credentials>
				<Description_prag>
					Justin Salas is an advocate of personal financial planning. In the
					last 6 years, he has applied its principles to maintain and further
					improve his financial wellness. He believes that only through holistic
					plans can people truly find purpose for their hard-earned money.
				</Description_prag>
				<Description_prag>
					The fact that financial planning is not yet a popular nor attractive
					undertaking, is not an obstacle for him to consistently reach out to
					the people to introduce the financial planning process and its
					benefits. Having a wide array of expertise that ranges from personal
					finance to development and engineering, he is more than equipped to
					craft solutions for every unique client goals and situation. He
					continues to improve his expertise on the subject to be able to always
					provide sound and up to date recommendations to his clients.
				</Description_prag>
				<Description_prag>
					He graduated Bachelor of Science in Electrical Engineering from Mapua
					University. His curiosity and eagerness to explore new fields led him
					to the acquisition of valuable knowledge and skills in finance,
					computer hardware, networking, and web programming. He likes to read
					books and play chess in his free time while enjoying a cup of tea.
				</Description_prag>
			</Description>
		</Person>
	)
}
