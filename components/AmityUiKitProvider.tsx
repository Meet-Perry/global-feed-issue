import dynamic from 'next/dynamic'

const AmityUiKitProvider: any = dynamic(
  () => import('@meetperry/amity-uikit').then((m) => m.AmityUiKitProvider),
  { ssr: false },
)

export const AmityPostContainer: any = dynamic(
  () => import('@meetperry/amity-uikit').then((m) => m.AmityPostContainer),
  { ssr: false },
)

export const AmityPostEngagementBar: any = dynamic(
  () => import('@meetperry/amity-uikit').then((m) => m.AmityPostEngagementBar),
  { ssr: false },
)

export default AmityUiKitProvider
