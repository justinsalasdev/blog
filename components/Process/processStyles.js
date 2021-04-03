import styled from "styled-components"

const changeover = "62em"
const narrow = "42em"

const Process = styled.section`
	/* height: 30rem; */
	/* clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%); */
	/* background-color: var(--gray); */
	display: grid;
	padding: 2rem 0 1rem 0;
	grid-template-rows: auto 1fr;
`

const Title = styled.h2`
	/* color: var(--white); */
	padding-top: 2rem;
	padding-bottom: 2rem;
	margin-left: 2rem;
	font-size: 3.5rem;
`

const Cards = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`

const Card = styled.li`
	padding: 1rem 3rem 1rem 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: ${changeover}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-top: ${props =>
			props.noborder ? "none" : "0.1rem solid var(--gray)"};
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
	font-size: 3rem;
	margin-bottom: 1rem;
`
const Card_description = styled.p`
	font-size: 2.5rem;
	margin-bottom: 1rem;
	text-indent: 4rem;
	max-width: 80rem;

	@media screen and (max-width: ${changeover}) {
		text-align: justify;
	}
`

const Divider = styled.div`
	padding: 2rem;
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
		padding: 1rem;
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
