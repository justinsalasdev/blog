import "../styles/globals.css"
import Head from "next/head"
import { NextSeo } from "next-seo"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextSeo
				title="Justin Salas"
				description="Financial Planner"
				canonical="https://justinsalas.cc"
				openGraph={{
					url: "https://justinsalas.cc",
					title: "Justin Salas",
					description: "Financial Planner",
					images: [
						{
							url: "https://justinsalas.cc/images/target2.png",
							alt: "A depiction of financial goals"
						}
					],
					site_name: "Justin Salas"
				}}
			/>
			<Head>
				<link rel="icon" href="/icons/logo.png" type="image/png" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
