import "../styles/fonts.css"
import { QueryProvider } from "components"
import { Hydrate } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { globalStyles } from "styles/stitches.config"

export default function MyApp({ Component, pageProps }) {
	return (
		<div className={globalStyles()}>
			<QueryProvider>
				<Hydrate state={pageProps.dehydratedState}>
					<Component {...pageProps} />
				</Hydrate>
				<ReactQueryDevtools />
			</QueryProvider>
		</div>
	)
}
