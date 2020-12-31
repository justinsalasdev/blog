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
	position: relative;
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
	/* height: 100%; */
	text-indent: 2rem;
	padding: 1.5rem;
	text-align: justify;
`

const Card_action = styled.div`
	border-radius: 10rem;
	text-align: center;
	width: 20rem;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 5rem;
	outline: none;
	color: var(--white);
	padding: 0.8rem;
	font-family: "Quicksand";
	font-size: 1.5rem;
	border: 0;
	background-color: var(--green);
	box-shadow: 0.4rem 0.4rem 0.8rem var(--shadow);
	:active {
		transform: translate(-50% 0.3rem);
		box-shadow: 0.2rem 0.2rem 0.4rem var(--shadow1);
	}

	:hover {
		/* outline: 0.2rem solid var(--green2); */
	}
`

export { Cards, Card, Card_title, Card_description, Card_action }
