import Footer_ from "../../components/Footer/Footer"
import Navigation from "../../components/Navigation/Navigation"
import { NextSeo } from "next-seo"

import {
	Page,
	Main,
	Title,
	Heading,
	Paragraph,
	Points,
	Point,
	List,
	Item,
	Key
} from "../../components/Articles/articleStyles"

export default function Benefits_() {
	return (
		<>
			<Page>
				<NextSeo
					title="Article "
					description="Having a financial plan"
					canonical="https://justinsalas.cc/"
					openGraph={{
						url: "https://justinsalas.cc/articles/independent",
						title: "The advantages of hiring an independent financial planner",
						description:
							"His professional fee might be small thing compared to the value he can bring to your finances",
						images: [
							{
								url: "https://justinsalas.cc/images/seo/independent.png",
								width: 1200,
								height: 627,
								alt: "a photo containing the article title"
							}
						],
						site_name: "Justin Salas RFP®"
					}}
				/>
				<Navigation />
				<Main>
					<Title>
						The advantages of hiring an independent financial planner
					</Title>

					<Points>
						<Point>
							<Heading>He works for you</Heading>
							<Paragraph>
								An independent financial planner charges a professional fee for
								the services he'll render to his client and therefore, always
								acts with his client's best interest in mind. Whether be it
								acquiring an investment or buying a financial product from one
								institution or the other, he will make sure that you get the
								most bang out of your buck.
							</Paragraph>
						</Point>
						<Point>
							<Heading>Everything is documented</Heading>
							<Paragraph>
								Before rendering his services, he makes sure that the client
								understands the terms on which he renders those services by
								expounding the contents of the financial service agreement - a
								document that typically includes but not limited to:
								<List>
									<Item>the goals of the engagement</Item>
									<Item>the ethical standards that he follows</Item>
									<Item>the basis of his professional fee</Item>
									<Item>what he can and can't do for the client</Item>
									<Item>the basis of his would-be recommendations</Item>
									<Item>your responsibility as his client</Item>
								</List>
							</Paragraph>
						</Point>
						<Point>
							<Heading>Your goals are aligned</Heading>
							<Paragraph>
								Since an independent professional charges his fees proportionate
								to his client's current financial situation, he'll do his best
								service to contribute to its improvement. In simple terms, he
								wants you to be financially successful in the future so he, in
								turn, will also be well remunerated.
							</Paragraph>
						</Point>

						<Point>
							<Heading>Quality of Service</Heading>
							<Paragraph>
								Independent professionals often bear industry-recognized
								designations that signify their competence in the services that
								they render. Bearing such designations also compels them to
								comply with continuing education requirements. The client is
								assured that the services they avail are up to date and are
								always in line with industry best practices.
							</Paragraph>
						</Point>
					</Points>
				</Main>
				<Footer_ />
			</Page>
		</>
	)
}
