import type { AppProps } from 'next/app'
import { ApiEndpoint, ApiRegion } from '@amityco/js-sdk'
import AmityUiKitProvider from '../components/AmityUiKitProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AmityUiKitProvider
      key={process.env.NEXT_PUBLIC_AMITY_USER_ID}
      userId={process.env.NEXT_PUBLIC_AMITY_USER_ID}
      apiKey={process.env.NEXT_PUBLIC_AMITY_API_KEY}
      apiRegion={ApiRegion.US}
      apiEndpoint={ApiEndpoint.US}
      displayName="Test User"
    >
      <Component {...pageProps} />
    </AmityUiKitProvider>
  )
}

export default MyApp
