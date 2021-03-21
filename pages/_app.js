import "../styles/globals.css"
import Head from "next/head"
import { Provider } from "next-auth/client"
import { DefaultSeo } from "next-seo"

const seoImageUrl = "https://justinsalas.cc/images/seo/default.png"
const seoDescription = "Financial Planner"
const seoTitle = "Justin Salas"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo
				title={seoTitle}
				description={seoDescription}
				canonical="https://justinsalas.cc"
				openGraph={{
					url: "https://justinsalas.cc",
					title: seoTitle,
					description: seoDescription,
					images: [
						{
							url: seoImageUrl,
							alt: "A financial planner in blue"
						}
					]
				}}
			/>
			<Head>
				<link rel="icon" href="favicon.ico" type="image/x-icon" />
			</Head>
			<Provider session={pageProps.session}>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

export default MyApp
