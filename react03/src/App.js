import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [hc, setHc] = useState(false);
  // let을 쓰면 변수가 바뀐다고 생각해서 리엑트에서 재할당을 안 해준다. ...이게 맞나... let은 변쑤!
  //const는 값을 바꿀 수 업쥐...상쑤!
  return (
    <div>
      <i className='xi-heart' onClick={() => (setNum(num + 1), setHc(!hc))}
      style={{ color: hc && 'red' }}></i> {num}
    </div>
  );
}

export default App;
