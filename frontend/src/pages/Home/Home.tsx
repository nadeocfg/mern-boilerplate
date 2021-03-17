import { connect } from 'react-redux'
import counterActions from '../../store/actions/counterActions'
import './Home.scss'

function Home({ ...props }: any) {
  const { counter, increment, decrement, incrementNumber } = props

  return (
    <>
      <h1>Home page</h1>

      <h4>{counter}</h4>
      <button onClick={() => increment()}>INC</button>
      <button onClick={() => decrement()}>DEC</button>
      <button onClick={() => incrementNumber(5)}>INC +5</button>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  counter: state.counter.counter,
})
export default connect(mapStateToProps, counterActions)(Home)
