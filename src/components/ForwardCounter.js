
import useCounter from '../hooks/use-counter.js'
import Card from './Card';

const ForwardCounter = () => {
  var counter = useCounter()
  return <Card>{counter}</Card>;
};

export default ForwardCounter;