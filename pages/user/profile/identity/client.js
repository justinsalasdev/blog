import Navigation from "../../../../components/Navigation/Navigation"
import styled from "styled-components"
import { useForm } from "react-hook-form"

export const Page = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr;
	min-height: 100vh;
`

const Main = styled.main`
	width: 95%;
	max-width: 100rem;
	/* background-color: lightgreen; */
	margin: 0 auto;
	padding: 1rem;
	padding-top: 4rem;
	background-color: lightgreen;
`
export default function Client_() {
	const { register, handleSubmit, watch, errors } = useForm()
	const onSubmit = data => console.log(data)
	return (
		<Page>
			<Navigation />
			<Main>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input name="example" defaultValue="test" ref={register} />
					<input name="exampleRequired" ref={register({ required: true })} />
					{errors.exampleRequired && <span>This field is required</span>}
					<button type="submit">Submit</button>
				</form>
			</Main>
		</Page>
	)
}
