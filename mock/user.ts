/* eslint-disable no-console */
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/mock-api/user/info",
    method: "get",
    response: ({ body, query }) => {
      console.log("body>>>>>>>>", body);
      console.log("query>>>>>>>>", query);
      return {
        code: 200,
        message: "ok",
        data: {
          name: "carriiii",
        },
      };
    },
  },
] as MockMethod[];
