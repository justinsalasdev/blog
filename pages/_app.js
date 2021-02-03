import "../styles/globals.css"
import Head from "next/head"
import { DefaultSeo } from "next-seo"
import { Provider } from "next-auth/client"

const seoImage =
	"https://drive.google.com/file/d/19bP-uh96dwwwodmWjykQ0InAJ5s1ENSq/view?usp=sharing"

const seoDescription = "cFinancial Planner"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo
				title="Justin Salas"
				description={seoDescription}
				canonical="https://justinsalas.cc"
				openGraph={{
					url: "https://justinsalas.cc",
					title: "Justin Salas",
					description: seoDescription,
					images: [
						{
							url: seoImage,
							width: 800,
							height: 600,
							alt: "A symbol of financial journey"
						}
					],
					site_name: "Justin Salas"
				}}
			/>
			<Head>
				<link rel="icon" href="/icons/logo.png" type="image/png" />
			</Head>
			<Provider session={pageProps.session}>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

export default MyApp
