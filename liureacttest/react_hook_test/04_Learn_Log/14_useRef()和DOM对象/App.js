import './App.css';
import {useRef,useState} from "react";

const App = () => {

    const h1Ref = useRef(); // 创建一个容器
    const [count, setCount] = useState(1);

    const clickHandler = () => {

      // 通过id获取h1
      const header = document.getElementById('header');
      // alert(header);
      // header.innerHTML = '哈哈';

      console.log(h1Ref);
      // alert(h1Ref.current === header);
      h1Ref.current.innerText = '嘻嘻！';
    };

    const countAddHandler = ()=>{
      setCount(prevState => prevState + 1);
    };

    return <div className={'app'}>
        <h1 id="header" ref={h1Ref}>我是标题{count}</h1>
        <button onClick={clickHandler}>1</button>
        <button onClick={countAddHandler}>2</button>
    </div>;
};

// 导出App
export default App;
