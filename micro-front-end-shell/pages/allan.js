import dynamic from 'next/dynamic'

const RemoteAllan = dynamic(
  () => import("app1/allan"),
  { ssr: false }
)

const App3 = () => (<RemoteAllan />)

export default App3
