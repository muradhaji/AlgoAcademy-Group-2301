import { useEffect, useState } from 'react';

function FunctionComponent(props) {
  let { x } = props;
  let [count, setCount] = useState(0);

  // useEffect(() => {
  // Mounting
  // }, []);

  // useEffect(() => {
  // return () => {
  //   Unmounting;
  // };
  // }, []);

  // useEffect(() => {
  //   Updating
  // }, [x]);

  useEffect(() => {
    console.log('Mounted');
    return () => {
      console.log('Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Updated');
  }, [count, x]);

  return (
    <div>
      Function Component {count}{' '}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default FunctionComponent;
