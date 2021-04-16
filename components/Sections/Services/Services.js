import {
	Services,
	Title,
	Segments,
	Segment,
	Segment_title,
	Segment_title2,
	Topics,
	Topics2,
	Topics3,
	Topic,
	Topic_title,
	Topic_title2,
	Topic_title3
} from "./servicesStyles"

export default function Services_() {
	return (
		<Services>
			<Title>SERVICES</Title>
			<Segments>
				<Segment>
					<Segment_title>Investment Planning</Segment_title>
					<Topics>
						<Topic bg={1}>
							<Topic_title>Retirement</Topic_title>
						</Topic>
						<Topic bg={2}>
							<Topic_title>Education</Topic_title>
						</Topic>
						<Topic bg={3}>
							<Topic_title>Major purchase</Topic_title>
						</Topic>
					</Topics>
				</Segment>
				<Segment>
					<Segment_title2>Insurance Planning</Segment_title2>
					<Topics2>
						<Topic bg={4}>
							<Topic_title2>Risk</Topic_title2>
						</Topic>
						<Topic bg={5}>
							<Topic_title2>Size</Topic_title2>
						</Topic>
						<Topic bg={6}>
							<Topic_title2>Type</Topic_title2>
						</Topic>
						<Topic bg={7}>
							<Topic_title2>Brand</Topic_title2>
						</Topic>
					</Topics2>
				</Segment>
				<Segment>
					<Topics3>
						<Topic bg={8}>
							<Topic_title3>Estate Planning</Topic_title3>
						</Topic>
						<Topic bg={9}>
							<Topic_title3>Tax Planning</Topic_title3>
						</Topic>
					</Topics3>
				</Segment>
				<Segment>
					<Segment_title2>Management</Segment_title2>
					<Topics2>
						<Topic bg={10}>
							<Topic_title2>Monitor</Topic_title2>
						</Topic>
						<Topic bg={11}>
							<Topic_title2>Rebalance</Topic_title2>
						</Topic>
						<Topic bg={12}>
							<Topic_title2>Allocate</Topic_title2>
						</Topic>
						<Topic bg={13}>
							<Topic_title2>Review</Topic_title2>
						</Topic>
					</Topics2>
				</Segment>
			</Segments>
		</Services>
	)
}
