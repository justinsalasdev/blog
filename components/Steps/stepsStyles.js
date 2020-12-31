import styled from "styled-components"

const Cards = styled.ul`
	margin: 0 auto;
	width: 210rem;
	padding-bottom: 1rem;
	/* background-color: blue; */
	justify-content: space-evenly;
	display: flex;
`

const Card = styled.li`
	flex-shrink: 0;
	flex-grow: 0;
	background-color: var(--white);
	width: 33rem;
	overflow: hidden;
`

const Card_title = styled.h3`
	height: 10rem;
	padding: 1rem;
	background-color: var(--orange2);
	text-align: center;
	span {
		display: block;
		margin-bottom: 1rem;
	}
`
const Card_description = styled.p`
	height: 100%;
	text-indent: 2rem;
	padding: 1.5rem;
	text-align: justify;
`

export { Cards, Card, Card_title, Card_description }
