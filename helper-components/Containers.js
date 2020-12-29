import styled from "styled-components"

export const Flex = styled.div`
	display: flex;
`

export const Scroller = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: scroll;
`

export const Hidden = styled.div`
	width: 100%;
	height: 90%;
	overflow: hidden;
	padding: 1rem;
`

export const Page = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
`
