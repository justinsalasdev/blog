import { keyframes } from "styled-components"

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

export { fromLeft }
