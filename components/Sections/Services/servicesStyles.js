import styled from "styled-components"

export const Services = styled.section`
	position: relative;
	background-color: var(--black);
`

export const Title = styled.h2`
	z-index: var(--titleIndex);
	color: var(--black);
	font-size: 3rem;
	position: absolute;
	top: -1.75rem;
	left: 1rem;
	padding: 1rem 1rem 0.5rem 1rem;
	background-color: var(--white);
	vertical-align: middle;
`

export const Segments = styled.ul`
	/* max-width: 120rem; */
	width: 100%;
	/* margin: auto;
	margin-top: 5rem; */
`
export const Segment = styled.li`
	/* padding: 0 0 4rem 0; */
	/* margin: 2rem auto; */
	position: relative;
`
export const Segment_title = styled.h3`
	font-weight: 400;
	text-transform: uppercase;
	z-index: var(--titleIndex);
	padding-top: 1rem;
	position: absolute;
	top: 2rem;
	right: 2rem;
	width: 70%;
	text-align: right;
	border-top: 0.1rem solid #737373;
	color: #e6e6e6;

	@media screen and (max-width: 37.33em) {
		top: 6rem;
		font-weight: normal;
	} ;
`
export const Segment_title2 = styled(Segment_title)`
	width: 70%;
	transform: translateX(50%);
	top: 4rem;
	right: 50%;
	text-align: center;
	border: none;
`

export const Topics = styled.ul`
	display: flex;
	height: ${props => `${props.h}rem`};
`

export const Topic = styled.li`
	position: relative;
	color: var(--white);
	flex-grow: 1;
	height: 100%;
	background: ${function ({ bg }) {
		const setAttr = (n, color) =>
			`${color} url("images/cards/${n}.svg") center/cover no-repeat`
		switch (bg) {
			case 1:
				return setAttr(1, "#262626")
			case 2:
				return setAttr(2, "#404040")
			case 3:
				return setAttr(3, "#666666")
			case 4:
				return setAttr(4, "#1a1a1a")
			case 5:
				return setAttr(5, "#1a1a1a")
			case 6:
				return setAttr(6, "#1a1a1a")
			case 7:
				return setAttr(7, "#1a1a1a")
			case 8:
				return setAttr(8, "#404040")
			case 9:
				return setAttr(9, "#262626")
			case 10:
				return setAttr(10, "#1a1a1a")
			case 11:
				return setAttr(11, "#1a1a1a")
			case 12:
				return setAttr(12, "#1a1a1a")
			case 13:
				return setAttr(13, "#1a1a1a")
		}
	}};
`

export const Topic_title = styled.span`
	color: #e6e6e6;
	display: block;
	font-size: 2rem;
	font-weight: 300;
	position: absolute;
	bottom: 10%;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
`

export const Topic_title2 = styled(Topic_title)`
	bottom: 22%;
	font-size: 2rem;
`

export const Topic_title3 = styled(Topic_title)`
	text-transform: uppercase;
	font-size: 2.3rem;
	bottom: auto;
	width: 100%;
	top: 3rem;
	font-weight: 400;
`

export const Items = styled.ul``
export const Item = styled.li`
	padding: 1rem 1rem 1rem 2rem;
	font-size: 2rem;
`
