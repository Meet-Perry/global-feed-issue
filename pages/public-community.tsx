import { NextPage } from 'next'
import Link from 'next/link'
import { ApiEndpoint, ApiRegion, PostDataType, PostTargetType } from '@amityco/js-sdk'
import AmityUiKitFeed from '../components/AmityUiKitFeed'
import AmityUiKitProvider from '../components/AmityUiKitProvider'
import { CustomPostRenderer } from './CustomPostRenderer'

const PublicGroupPage: NextPage = () => {
  return (
    <>
      <Link href="/global-feed">
        <a>Go to Global Feed</a>
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
        <AmityUiKitFeed
          targetType={PostTargetType.CommunityFeed}
          targetId={process.env.NEXT_PUBLIC_PUBLIC_COMMUNITY_ID}
          showPostCreator={true}
        />
      </AmityUiKitProvider>
    </>
  )
}

export default PublicGroupPage
