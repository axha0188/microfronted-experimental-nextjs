import dynamic from 'next/dynamic'

const Counter = dynamic(
  () => import('../../components/other/counter'),
  { ssr: false }
)

const CounterPage = () => (<Counter />)

export default CounterPage
