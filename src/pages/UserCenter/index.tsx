import { observer } from "mobx-react";
import userStore from "@/store/user";

const UserCenter = observer(() => {
  const handleClick = () => {
    userStore.increaseLevel();
  };

  return (
    <div>
      <div>名字：{userStore.name}</div>
      <button onClick={handleClick}>等级加1</button>
      <div>等级：{userStore.level}</div>
    </div>
  );
});

export default UserCenter;
