import styled from "styled-components"

export const Footer = styled.footer`
	font-weight: 300;
	font-size: 1.5rem;

	text-align: center;
	background-color: var(--black0);
	color: var(--white);
	padding: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Message = styled.p`
	display: inline-block;
	padding: 0.2rem;
	/* border-bottom: 1px solid white; */
	margin: auto;
`

export const List = styled.ul`
	display: flex;
	align-items: center;
`
export const Item = styled.li``

export const Link = styled.a`
	display: block;
	padding: 0.5rem;
	font-size: 3rem;

	svg {
		vertical-align: middle;
	}
`
