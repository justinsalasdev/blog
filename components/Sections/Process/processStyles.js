import styled from "styled-components"

const changeover = "62em"
const narrow = "42em"

export const Process = styled.section`
	/* height: 30rem; */
	/* clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%); */
	position: relative;
	color: var(--white);
	background-color: var(--gray);
	display: grid;
	padding: 2rem 0 10rem 0;
	/* grid-template-rows: auto 1fr; */
`

export const Title = styled.h2`
	color: var(--white);
	font-size: 3rem;
	position: absolute;
	top: -1.75rem;
	left: 1rem;
	padding: 1rem 1rem 0.5rem 1rem;
	/* box-shadow: 0.1rem 0.1rem 0.4rem black; */
	background-color: var(--black);
`

export const Cards = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`

export const Card = styled.li`
	padding: 0.5rem 3rem 0.5rem 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: ${changeover}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-top: ${props =>
			props.noborder ? "none" : "0.1rem dotted var(--gray2)"};
	}

	@media screen and (max-width: ${narrow}) {
		padding: 1rem;
	}
`
export const Card_image = styled.img`
	order: 2;
	height: 45rem;
	@media screen and (max-width: 95em) {
		height: auto;
		width: 50rem;
	}

	@media screen and (max-width: 80em) {
		height: auto;
		width: 30rem;
	}

	@media screen and (max-width: ${changeover}) {
		width: auto;
		height: 35rem;
	}
	@media screen and (max-width: ${narrow}) {
		width: 100%;
	}
`

export const Card_title = styled.h3`
	font-size: 2.7rem;
	margin-bottom: 1rem;
	font-weight: 400;
	width: 100%;
	/* text-align: ${props => (props.right ? "right" : "left")}; */
`
export const Card_description = styled.p`
	font-weight: 300;
	font-size: 2.2rem;
	margin-bottom: 1rem;
	max-width: 80rem;

	@media screen and (max-width: ${changeover}) {
		text-indent: 4rem;
	}
`
//--
export const Divider = styled.div`
	padding: 0 2rem 2rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	max-width: 8 0rem;
	order: ${props => (props.first ? 1 : 3)};
	text-align: ${props => (props.right ? "right" : "left")};
	@media screen and (max-width: ${changeover}) {
		order: 3;
		text-align: left;
	}

	@media screen and (max-width: ${narrow}) {
		padding: 0 1rem 1rem 1rem;
	}
`
