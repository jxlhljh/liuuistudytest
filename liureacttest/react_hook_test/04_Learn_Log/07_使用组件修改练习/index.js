import ReactDOM from "react-dom/client";
import App from "./App";
// 引入样式表
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// React组件可以直接通过JSX渲染
root.render(<App/>);