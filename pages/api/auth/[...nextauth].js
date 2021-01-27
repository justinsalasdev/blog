import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import nextConnect from "next-connect"
import initDatabase from "../../../middlewares/initDatabase"

const handler = nextConnect()
handler.use(initDatabase)

handler.use(async (req, res) => {
	const isAllowedToSignIn = true
	return NextAuth(req, res, {
		providers: [
			Providers.Google({
				clientId: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET
			})
			// ...add more providers here
		],
		pages: {
			signIn: "/auth/signin",
			signOut: "/auth/signout",
			error: "/auth/error", // Error code passed in query string as ?error=
			verifyRequest: "/auth/verify-request", // (used for check email message)
			newUser: null // If set, new users will be directed here on first sign in
		},
		callbacks: {
			signIn: async (user, account, profile) => {
				const users = req.db.collection("users")
				const { email } = await users.findOne({ email: profile.email })
				if (email) {
					return Promise.resolve(true)
				} else {
					// Return false to display a default error message
					console.log("rejected")
					// return Promise.resolve(false)
					return Promise.reject("/auth/error") // Redirect to a URL
				}
			}
		}
	})
})

export default handler
