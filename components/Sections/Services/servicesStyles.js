import styled from "styled-components"

const Services = styled.section`
	position: relative;
	background-color: var(--black);
	/* padding: 2rem 0 1rem 0; */
	/* grid-template-rows: auto 1fr; */
`

const Title = styled.h2`
	color: var(--black);
	font-size: 3rem;
	position: absolute;
	top: -1.75rem;
	left: 1rem;
	/* text-shadow: 0.1rem 0.1rem 0.4rem var(--black); */
	padding: 1rem 1rem 0.5rem 1rem;
	/* box-shadow: 0.1rem 0.1rem 0.rem var(--white); */
	background-color: var(--white);
	vertical-align: middle;
`

const Segments = styled.ul`
	/* max-width: 120rem; */
	/* width: 98%; */
	/* margin: auto;
	margin-top: 5rem; */
`
const Segment = styled.li`
	/* padding: 0 0 4rem 0; */
	/* margin: 2rem auto; */
	position: static;
`
const Segment_title = styled.h3`
	color: white;
	padding: 1rem 1rem 1rem 1rem;
	position: absolute;
	top: 2rem;
	right: 2rem;
	width: 100%;
	text-align: right;
	border-bottom: 1px solid white;
	/* background: linear-gradient(to right, var(--orange) 80%, var(--black)); */
	/* background-color: var(--orange2); */
	/* color: var(--gray); */
`

const Topics = styled.ul`
	/* display: grid;
	/* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	gap: 2rem;
	justify-items: stretch;
	/* align-items: center; */
	display: flex;
	/* gap: 1rem; */
`
const Topic = styled.li`
	/* font-weight: 300; */
	color: var(--white);
	/* border: 0.05rem solid var(--white); */
	/* width: 25%; */
	flex-grow: 1;
	height: 50rem;
	background-color: green;
	border: 1px solid gray;
	/* margin: 0.5rem; */
`
const Topic_1 = styled.li`
	/* border-radius: 20rem; */
	font-weight: 300;
	color: var(--white);
	padding: 2rem;
	text-align: center;
	border: 0.05rem solid var(--white);

	@media screen and (max-width: 36.26em) {
		text-align: left;
	}
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
