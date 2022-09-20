import { NextPage } from 'next'
import Link from 'next/link'
import { PostTargetType } from '@amityco/js-sdk'
import AmityUiKitFeed from '../components/AmityUiKitFeed'

const PublicGroupPage: NextPage = () => {
  return (
    <>
      <Link href="/public-community">
        <a>Go to Public Community</a>
      </Link>
      
      <AmityUiKitFeed targetType={PostTargetType.GlobalFeed} />
    </>
  )
}

export default PublicGroupPage
