import { NextPage } from 'next'
import Link from 'next/link'
import { PostTargetType } from '@amityco/js-sdk'
import AmityUiKitFeed from '../components/AmityUiKitFeed'

const PublicGroupPage: NextPage = () => {
  return (
    <>
      <Link href="/global-feed">
        <a>Go to Global Feed</a>
      </Link>
      
      <AmityUiKitFeed
        targetType={PostTargetType.CommunityFeed}
        targetId={process.env.NEXT_PUBLIC_PUBLIC_COMMUNITY_ID}
        showPostCreator={false}
      />
    </>
  )
}

export default PublicGroupPage
