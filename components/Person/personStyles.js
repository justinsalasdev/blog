import styled from "styled-components"
const b_photo = "61.86em"

const Person = styled.section`
	width: 60%;
	max-width: 120rem;
	display: grid;
	grid-template-columns: auto 1fr;
	box-shadow: 0.2rem 0.2rem 0.8rem var(--shadow);

	@media screen and (max-width: 100.93em) {
		width: 95%;
	}

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
	font-size: 1.7rem;
	border-left: 0.4rem double black;
	@media screen and (max-width: ${b_photo}) {
		border: 0;
	}
`

const Description_prag = styled.p`
	padding: 0.5rem 1.5rem;
	text-align: justify;
	text-indent: 3rem;
	/* margin-bottom: 0.5rem; */
	/* margin: 1rem; */
`

const Credentials = styled.div`
	/* margin-top: 2rem; */
`

const Credential_list = styled.ul`
	/* list-style: circle; */
`
const Credential = styled.li`
	margin-bottom: 0.7rem;
	background-color: #000740;
	margin-bottom: 0.5rem;
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
	Credentials,
	Credential_list,
	Credential,
	Credential_rfp,
	Credential_icon,
	Credential_description,
	Credential_src
}
