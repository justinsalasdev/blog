import styled from "styled-components"
import { fromLeft } from "./personAnimations"

const b_photo = "61.86em"

const Person = styled.section`
	width: 95%;
	max-width: 130rem;
	display: grid;
	grid-template-columns: auto 1fr;
	box-shadow: 0.2rem 0.2rem 0.8rem var(--shadow);
	animation: ${fromLeft} 2s cubic-bezier(0, 1, 0, 1);
	animation-fill-mode: backwards;

	@media screen and (max-width: ${b_photo}) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
	} ;
`

const Picture = styled.img`
	/* height: 50rem; */
	width: 30rem;
	/* height: 30rem; */
	object-fit: cover;

	@media screen and (max-width: 90em) {
		height: 60rem;
	}

	@media screen and (max-width: ${b_photo}) {
		height: 30rem;
		justify-self: center;
		object-position: 50% 20%;
		border-radius: 50%;
		margin: 2rem 0;
	}

	@media screen and (max-width: 24em) {
		border-radius: 0;
		margin: 0;
		width: 100%;
	}
`

const Description = styled.div`
	/* border-left: 0.4rem double black; */
	padding-bottom: 1rem;
	@media screen and (max-width: ${b_photo}) {
		border: 0;
	}
`

const Description_prag = styled.p`
	padding: 0.3rem 1.5rem;
	text-align: justify;
	text-indent: 3rem;
	/* margin-bottom: 0.5rem; */
	/* margin: 1rem; */
`

const Description_link = styled.a`
	/* text-align: center; */

	color: var(--blue);
	cursor: pointer;
	:hover {
		color: var(--blue2);
	}

	:active {
		color: var(--green);
	}
`

const Credentials = styled.div`
	/* margin-top: 2rem; */
`

const Credential_list = styled.ul`
	/* list-style: circle; */
`
const Credential = styled.li`
	/* margin-bottom: 0.7rem; */
	background-color: #000740;
	/* margin-bottom: 0.5rem; */
	/* padding: 1rem; */
	height: 6rem;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;

	@media screen and (max-width: 36.2em) {
		height: auto;
		padding: 1rem;
	}
`

const Credential_rfp = styled(Credential)`
	background-color: var(--white1);
	/* outline: 1px solid var(--black); */
`

const Credential_icon = styled.img`
	width: 6rem;
	height: 6rem;
`

const Credential_description = styled.div`
	padding-left: 1rem;
`

const Credential_src = styled.a`
	color: ${props => (props.awp ? `var(--blue4)` : `var(--blue)`)};
	display: block;
	font-size: 1.5rem;
`

export {
	Person,
	Picture,
	Description,
	Description_prag,
	Description_link,
	Credentials,
	Credential_list,
	Credential,
	Credential_rfp,
	Credential_icon,
	Credential_description,
	Credential_src
}
