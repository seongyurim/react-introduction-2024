import { useState } from 'react';
import './App.css';

function App() {
  let counter = 0;

  const [counter2, setCounter2] = useState(0);
  // counter2: 초기값이 담긴 state
  // setCounter2: state 값을 변경해주는 함수
  // 0: 초기값

  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("variable: " + counter + ", state: " + counter2);
  }

  // 1. 유저가 버튼을 클릭한다.
  // 2. counter + 1해서 일반 변수는 1이 된다.
  // 3. setState 함수를 호출한다.
  // 4. console.log를 실행한다.
  // 5. 일반변수 값은 1로 보이고, state 값은 아직 변하지 않았으므로 이전 값이 보인다.
  // 6. 함수를 종료한다.
  // 7. app이 리렌더링된다.
  // 8. let counter = 0 문을 거치면서 값이 초기화된다.
  // 9. state 값은 업데이트되어 다시 렌더링된다.
  
  // 결론
  // 일반변수: 리렌더링되면서 값이 초기화된다.
  // state: 비동기적으로 처리된다.

  return (
    <div>
      <div>{counter}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>Click</button>
    </div>
  );
}

export default App;
