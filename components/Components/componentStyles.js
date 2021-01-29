import styled from "styled-components"
const col1 = "69em"

const Components = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Component = styled.li`
	background-color: var(--white1);
	color: var(--black);
	box-shadow: 0.4rem 0.4rem 0.8rem var(--shadow);
	max-width: 110rem;
	width: 85%;
	height: ${props => (props.expanded ? "auto" : "17rem")};
	margin-bottom: 3rem;
	display: grid;
	grid-template-columns: auto 1fr;

	@media screen and (max-width: ${col1}) {
		width: 70%;
		grid-template-columns: 1fr;
		height: ${props => (props.expanded ? "auto" : "50rem")};
	}

	@media screen and (max-width: 47.4em) {
		width: 96%;
	}
`

const Image = styled.img`
	width: 30rem;
	height: 100%;
	object-fit: cover;
	@media screen and (max-width: ${col1}) {
		width: 100%;
		height: 25rem;
	}
`
const Image2 = styled(Image)``

const Title = styled.h3`
	margin-bottom: 1rem;
`

const Description = styled.div`
	position: relative;
	padding: 2.3rem;
	padding-bottom: 0;
	color: ${props => (props.expanded ? `var(--black)` : "rgba(0, 0, 0, 0)")};
	background-image: ${props =>
		props.expanded
			? "none"
			: "linear-gradient(to bottom, black 55%, transparent)"};
	background-clip: text;
	-webkit-background-clip: text;
	overflow: hidden;
`

const Description_prag = styled.p`
	padding-bottom: ${props => (props.expanded ? "5rem" : "0")};
	text-indent: 4rem;
	text-align: justify;
`

const Description_action = styled.button`
	position: absolute;
	right: 50%;
	bottom: 0;
	width: 100%;
	transform: translateX(50%);
	outline: none;
	color: var(--blue);
	padding: 0.7rem;
	font-family: "Quicksand";
	font-size: 1.5rem;
	border: 0;
	background-color: white;
	/* box-shadow: 0.4rem 0.4rem 0.8rem var(--shadow); */
	:active {
		color: var(--green);
	}

	:hover {
		font-weight: bold;
	}
`
export {
	Components,
	Component,
	Title,
	Image,
	Image2,
	Description,
	Description_prag,
	Description_action
}
