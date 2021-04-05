import Footer_ from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import styled from "styled-components"
import { keyframes } from "styled-components"

export const Page = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
`

const Main = styled.main`
	display: grid;
	grid-template-rows: auto auto;
	padding: 1rem 0;
	width: 95%;
	margin: 0 auto;
	max-width: 150rem;
`
const Summary = styled.p`
	text-align: center;
	padding: 2rem;
	border-bottom: 0.1rem solid var(--gray);
	margin-bottom: 2rem;
`

const Books = styled.ul`
	/* background-color: seagreen; */

	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
	align-items: center;
	grid-auto-flow: row dense;
`

const fromLeft = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-5%)
    } 
 
    100%{
        opacity: 1;
        transform: translateX(0)
    }
`
const Book = styled.li`
	margin: 1rem;
	box-shadow: 0.2rem 0.2rem 0.8rem var(--shadow);

	animation: ${fromLeft} 2s cubic-bezier(0, 1, 0, 1);

	animation-fill-mode: backwards;
	animation-delay: ${props => {
		return `${props.delay / 10}s`
	}};
`

const Cover = styled.img`
	display: block;
	width: 100%;
	/* height: 100%; */
	object-fit: stretch;
	:hover {
		background-color: green;
		z-index: -1;
	}
`

const pictures = [
	"richdad",
	"investingdummies",
	"intelligent",
	"fundamental",
	"security",
	"common",
	"oneup",
	"tvm",
	"little",
	"naked",
	"technical",
	"winning",
	"insurance",
	"thy1",
	"thy2",
	"thy3",
	"allocator",
	"analysis"
]

export default function Library_() {
	return (
		<Page>
			<Navigation />
			<Main>
				<Summary>
					Sharing with you some of the books that helped improve my knowledge in
					personal finance.
				</Summary>
				<Books>
					{pictures.map((picture, index) => {
						return (
							<Book key={index} delay={index}>
								<Cover src={`images/${picture}.jpg`} />
							</Book>
						)
					})}
				</Books>
			</Main>
			<Footer_ />
		</Page>
	)
}
