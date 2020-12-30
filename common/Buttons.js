import styled from "styled-components"

const Button = styled.button`
	outline: none;
	color: var(--white);
	padding: 0.7rem;
	font-family: "Quicksand";
	font-size: 1.6rem;
	border: 0;
	background-color: var(--green);
	box-shadow: 0.4rem 0.4rem 0.8rem var(--shadow);
	:active {
		transform: translateY(0.1rem);
		box-shadow: 0.2rem 0.2rem 0.4rem var(--shadow1);
	}

	:hover,
	:focus {
		outline: 0.2rem solid var(--green2);
	}
`

export const GreenBtn = styled(Button)`
	background-color: var(--green);
	:hover,
	:focus {
		outline: 0.2rem solid var(--green2);
	}
`

export const Expander = styled(Button)`
	background-color: white;
	font-size: 1.3rem;
	position: absolute;
	bottom: 5%;
	left: 55%;
`
