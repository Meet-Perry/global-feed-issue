import { AmityPostContainer, AmityPostEngagementBar } from '../components/AmityUiKitProvider'

export const CustomPostRenderer = ({ className, post }) => {
  return (
    <AmityPostContainer className={className}>
      <h1>Test</h1>
      <AmityPostEngagementBar postId={post.postId} />
    </AmityPostContainer>
  )
}
