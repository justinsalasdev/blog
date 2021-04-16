import {
	Services,
	Title,
	Segments,
	Segment,
	Segment_title,
	Topics,
	Topic,
	Topic_1,
	Topic_title,
	Items,
	Item
} from "./servicesStyles"

export default function Services_() {
	return (
		<Services>
			<Title>SERVICES</Title>
			<Segments>
				<Segment>
					<Segment_title>INVESTMENT PLANNING</Segment_title>
					<Topics>
						<Topic>
							{/* <Topic_title>Investment Planning</Topic_title> */}
							{/* <Items>
								<Item>Goal size and cashflows</Item>
								<Item>Porfolio design</Item>
								<Item>Allocation schedule</Item>
							</Items> */}
						</Topic>
						<Topic>
							{/* <Topic_title>Insurance Planning</Topic_title> */}
							{/* <Items>
								<Item>Risk factors</Item>
								<Item>Coverage requirements</Item>
								<Item>Budget alignment</Item>
							</Items> */}
						</Topic>
						<Topic>
							{/* <Topic_title>Estate Planning</Topic_title> */}
							{/* <Items>
								<Item>Estate composition</Item>
								<Item>Succession structure</Item>
								<Item>Estate distribution </Item>
								<Item>Planning cost </Item>
								<Item>Implementation cost</Item>
							</Items> */}
						</Topic>
					</Topics>
				</Segment>
				<Segment>
					{/* <Segment_title>Financial plan implementation</Segment_title> */}
					<Topics>
						<Topic_1>Investing</Topic_1>
						<Topic_1>Insurance product acquisition</Topic_1>
						<Topic_1>Estate plan implementation</Topic_1>
						<Topic_1>Tax plan implementation</Topic_1>
					</Topics>
				</Segment>
				<Segment>
					{/* <Segment_title>Managment and review</Segment_title> */}
					<Topics>
						<Topic_1>Investment plan review</Topic_1>
						<Topic_1>Portfolio Management</Topic_1>
						<Topic_1>Insurance plan review</Topic_1>
						<Topic_1>Estate plan review</Topic_1>
						<Topic_1>Tax plan review</Topic_1>
					</Topics>
				</Segment>
			</Segments>
		</Services>
	)
}
