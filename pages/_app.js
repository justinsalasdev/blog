import "../styles/globals.css"
import Head from "next/head"
import { DefaultSeo } from "next-seo"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo
				title="Justin Salas"
				description="Your personal finance partner that will make it easier for you to make financial decisions and will keep you on track to meet your goals."
				canonical="https://justinsalas.cc"
				openGraph={{
					url: "https://justinsalas.cc",
					title: "Justin Salas",
					description:
						"Your personal finance partner that will make it easier for you to make financial decisions and will keep you on track to meet your goals.",
					images: [
						{
							url: "https://justinsalas.cc/images/destination.png",
							alt: "A symbol of financial journey"
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
