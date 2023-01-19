import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";

const Read = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/read/recommend">推荐</Link>
          </li>
          <li>
            <Link to="/read/like">喜欢</Link>
          </li>
          <li>
            <Link to={`/read/${Math.random()}`}>随机</Link>
          </li>
        </ul>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Read;
