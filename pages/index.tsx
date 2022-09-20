import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="/public-community">
          <a>Public Community</a>
        </Link>
      </li>
      <li>
        <Link href="/global-feed">
          <a>Global Feed</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
