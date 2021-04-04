import styled from "styled-components"

const Services = styled.section`
	background-color: var(--black);
	padding: 2rem 0 1rem 0;
	grid-template-rows: auto 1fr;
`

const Title = styled.h2`
	color: var(--white);
	margin: 2rem 0rem 3rem 2rem;
	font-size: 3.5rem;
`

const Segments = styled.ul`
	max-width: 120rem;
	width: 98%;
	margin: auto;
`
const Segment = styled.li`
	padding: 0 0 4rem 0;
	margin: 2rem auto;
`
const Segment_title = styled.h3`
	padding: 1rem 1rem 1rem 1rem;
	background: linear-gradient(to right, var(--orange) 80%, var(--black));
	/* background-color: var(--orange2); */
	/* color: var(--gray); */
`

const Topics = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	gap: 2rem;
	justify-items: stretch;
	/* align-items: center; */
	margin: 2rem;
`
const Topic = styled.li`
	font-weight: 300;
	color: var(--white);
	border: 0.05rem solid var(--white);
`
const Topic_1 = styled.li`
	/* border-radius: 20rem; */
	font-weight: 300;
	color: var(--white);
	padding: 2rem;
	text-align: center;
	border: 0.05rem solid var(--white);
`

const Topic_title = styled.h4`
	background-color: var(--gray);
	text-align: center;

	padding: 1rem;
	border-bottom: 0.1rem solid var(--white);
`

const Items = styled.ul``
const Item = styled.li`
	padding: 1rem 1rem 1rem 2rem;

	/* background-color: green; */
	font-size: 2rem;
`

export {
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
}
