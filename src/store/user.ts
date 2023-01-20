import { makeAutoObservable } from "mobx";

export interface IUserStore {
  name: string;
  level: number;
  increaseLevel: () => void;
}

class UserStore implements IUserStore {
  public name = "";
  public level = 1;

  constructor() {
    makeAutoObservable(this);
  }

  public increaseLevel = () => {
    this.level += 1;
  };

  public updateName = (name: string) => {
    this.name = name;
  };
}

const userStore = new UserStore();

export default userStore;
