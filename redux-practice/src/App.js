import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import GrandSonBox from './component/GrandSonBox';

function App() {
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const pw = useSelector(state => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type:"INCREMENT", payload:{num: 5}});
  }

  const decrease = () => {
    dispatch({type:"DECREMENT", payload:{num: 2}});
  }

  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"tester", password:"1234"}});
  }
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>5씩 증가</button><p/>
      <button onClick={decrease}>2씩 감소</button><p/>
      <Box />
      <GrandSonBox />
      <h1>아이디: {id}, 패스워드: {pw}</h1>
      <button onClick={login}>로그인</button><br/>
    </div>
  );
}

export default App;
