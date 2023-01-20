import { observer } from "mobx-react";
import userStore from "@/store/user";
import styles from "./index.module.less";

const UserCenter = observer(() => {
  const handleClick = () => {
    userStore.increaseLevel();
  };

  return (
    <div>
      <div className={styles.name}>名字：{userStore.name}</div>
      <button onClick={handleClick}>等级加1</button>
      <div className={styles.level}>等级：{userStore.level}</div>
    </div>
  );
});

export default UserCenter;
