import { makeAutoObservable } from "mobx";

export interface IUserStore {
  name: string;
  level: number;
  increaseLevel: () => void;
}

class UserStore implements IUserStore {
  public name = "carri";
  public level = 1;

  constructor() {
    makeAutoObservable(this);
  }

  public increaseLevel = () => {
    this.level += 1;
  };
}

const userStore = new UserStore();

export default userStore;
