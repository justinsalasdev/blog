import React from "react"
import { signIn } from "next-auth/client"

export default function SignIn({ providers }) {
	return (
		<>
			<pre>{JSON.stringify(providers)}</pre>

			<div>
				<button onClick={() => signIn("google")}>Sign in with Google</button>
			</div>
		</>
	)
}
