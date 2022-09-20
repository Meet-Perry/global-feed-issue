import dynamic from 'next/dynamic';

const AmityUiKitFeed: any = dynamic(
  () => import('@meetperry/amity-uikit').then((m) => m.AmityUiKitFeed),
  { ssr: false },
)

export default AmityUiKitFeed
