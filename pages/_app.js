import "../styles/globals.css"
import Head from "next/head"
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="icons/logo.png" type="image/png" />
			</Head>
			<Provider session={pageProps.session}>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

export default MyApp
