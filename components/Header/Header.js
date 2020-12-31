import { Green, Orange } from "../../helper-components/Highlights"
import Link from "next/link"

import {
	Header,
	Header_action,
	Header_link,
	Header_title
} from "./headerStyles"

export default function Header_() {
	return (
		<Header>
			<Header_title>
				<Green>Planning</Green> makes it easier for you to make financial
				decisions and keeps you on track to meet your <Orange>goals.</Orange>
			</Header_title>
			<Link href="/benefits">
				<Header_link>More benefits of financial planning &rarr;</Header_link>
			</Link>
			<Header_action>Create your financial plan now</Header_action>
		</Header>
	)
}
