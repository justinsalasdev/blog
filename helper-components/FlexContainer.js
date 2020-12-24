import styled from "styled-components"

const Div = styled.div`
	display: flex;
`

export default function FlexDiv({ children }) {
	return <Div>{children}</Div>
}
