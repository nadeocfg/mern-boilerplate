import { connect } from 'react-redux';
import axios from 'axios';
import counterActions from '../../store/actions/counterActions';
import './Home.scss';
import { useEffect } from 'react';

function Home({ ...props }: any) {
  const { counter, increment, decrement, incrementNumber } = props;

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    return axios
      .get('/api/products')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log({ ...err });
      });
  };

  return (
    <>
      <h1>Home page</h1>

      <h4>{counter}</h4>
      <button onClick={() => increment()}>INC</button>
      <button onClick={() => decrement()}>DEC</button>
      <button onClick={() => incrementNumber(5)}>INC +5</button>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  counter: state.counter.counter,
});
export default connect(mapStateToProps, counterActions)(Home);
