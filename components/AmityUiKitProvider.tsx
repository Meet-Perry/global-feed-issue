import dynamic from 'next/dynamic'

const AmityUiKitProvider: any = dynamic(
  () => import('@meetperry/amity-uikit').then((m) => m.AmityUiKitProvider),
  { ssr: false },
)

export default AmityUiKitProvider
