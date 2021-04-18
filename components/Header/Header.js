import { Green, Orange } from "../../helper-components/Highlights"
import Link from "next/link"
import { PopupText } from "react-calendly"
import { CgArrowLongRight } from "react-icons/cg"

import {
	Header,
	Header_link,
	Header_title,
	Header_action
} from "./headerStyles"

export default function Header_() {
	return (
		<Header>
			<Header_title>
				<Green>Planning</Green> makes it easier for you to make financial
				decisions and keeps you on track to meet your <Orange>goals.</Orange>
			</Header_title>
			<Link href="/articles/benefits">
				<Header_link>
					More benefits of financial planning{" "}
					<CgArrowLongRight className="icon" />
				</Header_link>
			</Link>
			<Header_action>
				<PopupText
					text="Schedule a meeting 📆"
					url="https://calendly.com/justinsalasrfp/financial-planning-engagement"
				/>
			</Header_action>
		</Header>
	)
}
