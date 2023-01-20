import request from "@/utils/request";
import { USER_INFO } from "./api";
import { UserInfo } from "./interface";

/**
 * 获取用户信息
 */
export const getUserInfo = async (): Promise<UserInfo> => {
  return request(USER_INFO);
};
