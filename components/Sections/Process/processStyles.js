import styled from "styled-components"

const changeover = "62em"
const narrow = "42em"

const Process = styled.section`
	/* height: 30rem; */
	/* clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%); */
	color: var(--white);
	background-color: var(--gray);
	display: grid;
	padding: 2rem 0 1rem 0;
	grid-template-rows: auto 1fr;
`

const Title = styled.h2`
	/* color: var(--white); */
	padding-top: 2rem;
	padding-bottom: 2rem;
	margin-left: 2rem;
	font-size: 3rem;
`

const Cards = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`

const Card = styled.li`
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
const Card_image = styled.img`
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

const Card_title = styled.h3`
	font-size: 2.7rem;
	margin-bottom: 1rem;
	font-weight: 400;
`
const Card_description = styled.p`
	font-weight: 300;
	font-size: 2.2rem;
	margin-bottom: 1rem;
	text-indent: 4rem;
	max-width: 80rem;

	@media screen and (max-width: ${changeover}) {
		/* text-align: justify;
		word-break: break-all; */
	}
`

const Divider = styled.div`
	padding: 0 2rem 2rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	max-width: 8 0rem;
	order: ${props => (props.first ? 1 : 3)};
	@media screen and (max-width: ${changeover}) {
		order: 3;
	}

	@media screen and (max-width: ${narrow}) {
		padding: 0 1rem 1rem 1rem;
	}
`

export {
	Process,
	Title,
	Cards,
	Card,
	Card_title,
	Card_image,
	Card_description,
	Divider
}
