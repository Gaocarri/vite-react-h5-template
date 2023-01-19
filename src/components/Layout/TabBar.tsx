import "./TabBar.less";
import { Link } from "react-router-dom";

const TabBar = () => {
  return (
    <ul className="tab-bar-container">
      <li>
        <Link to="/home">首页</Link>
      </li>
      <li>
        <Link to="/read">阅读</Link>
      </li>
      <li>
        <Link to="/user-center">个人</Link>
      </li>
    </ul>
  );
};

export default TabBar;
