import styled from "styled-components"
import { fromBottom } from "./stepsAnimations"

const Cards = styled.ul`
	margin: 0 auto;
	width: 220rem;
	padding-bottom: 1rem;
	/* background-color: blue; */
	justify-content: space-evenly;
	display: flex;
	min-height: 52rem;
`

const Card = styled.li`
	position: relative;
	flex-shrink: 0;
	flex-grow: 0;
	background-color: var(--white);
	width: 35rem;
	overflow: hidden;
	animation: ${fromBottom} 0.3s cubic-bezier(0, 1, 0, 1);
	animation-fill-mode: backwards;
	animation-delay: ${props => {
		return `${props.delay / 10}s`
	}};
`

const Card_title = styled.h3`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	height: 12rem;
	padding: 1.5rem;
	background-color: var(--orange2);
	text-align: center;

	/* color: var(--white); */
	span {
		display: block;
		/* margin-bottom: 1rem; */
		font-weight: 400;
		/* color: var(--black); */
	}
`
const Card_description = styled.p`
	/* height: 100%; */
	text-indent: 2rem;
	padding: 1.5rem 1.5rem 0 1.5rem;
	text-align: center;

	/* word-break: break-all; */
	:not(:first-of-type) {
		padding-top: 1rem;
	}
`

const Card_action = styled.div`
	border-radius: 10rem;
	text-align: center;
	width: 20rem;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	bottom: 1.2rem;
	outline: none;
	color: var(--white);
	padding: 1.2rem;
	font-family: "Josefin Sans";
	font-size: 1.6rem;
	border: 0;
	background-color: var(--green);
	box-shadow: 0.4rem 0.4rem 0.8rem var(--shadow);
	:active {
		transform: translate(-50%, 0.2rem);
		box-shadow: 0.2rem 0.2rem 0.4rem var(--shadow1);
	}

	:hover {
		background-color: var(--green1);
		/* outline: 0.2rem solid var(--green2); */
	}
`

export { Cards, Card, Card_title, Card_description, Card_action }
