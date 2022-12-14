import { NextPage } from 'next'
import Link from 'next/link'
import { ApiEndpoint, ApiRegion, PostDataType, PostTargetType } from '@amityco/js-sdk'
import AmityUiKitFeed from '../components/AmityUiKitFeed'
import AmityUiKitProvider from '../components/AmityUiKitProvider'
import { CustomPostRenderer } from './CustomPostRenderer'

const PublicGroupPage: NextPage = () => {
  return (
    <>
      <Link href="/public-community">
        <a>Go to Public Community</a>
      </Link>
      
      <AmityUiKitProvider
        key={process.env.NEXT_PUBLIC_AMITY_USER_ID}
        userId={process.env.NEXT_PUBLIC_AMITY_USER_ID}
        apiKey={process.env.NEXT_PUBLIC_AMITY_API_KEY}
        apiRegion={ApiRegion.US}
        apiEndpoint={ApiEndpoint.US}
        displayName="Test User"
        postRenderers={{
          [PostDataType.TextPost]: CustomPostRenderer,
        }}
      >
        <AmityUiKitFeed targetType={PostTargetType.GlobalFeed} />
      </AmityUiKitProvider>
    </>
  )
}

export default PublicGroupPage
