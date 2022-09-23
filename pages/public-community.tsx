import { NextPage } from 'next'
import Link from 'next/link'
import { ApiEndpoint, ApiRegion, PostTargetType } from '@amityco/js-sdk'
import AmityUiKitFeed from '../components/AmityUiKitFeed'
import AmityUiKitProvider from '../components/AmityUiKitProvider'

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
      >
        <AmityUiKitFeed
          targetType={PostTargetType.CommunityFeed}
          targetId={process.env.NEXT_PUBLIC_PUBLIC_COMMUNITY_ID}
          showPostCreator={false}
        />
      </AmityUiKitProvider>
    </>
  )
}

export default PublicGroupPage
