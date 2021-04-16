import styled from "styled-components"

const Footer = styled.footer`
	font-weight: 300;
	font-size: 1.5rem;
	line-height: 1.1;
	text-align: center;
	background-color: var(--black0);
	color: var(--white);
	padding: 1.5rem;
	display: grid;
	/* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
`

const Message = styled.p`
	padding: 0.2rem;
`

export { Footer, Message }
