import useAxios from "@/hooks/useAxios";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const { doAxios, response } = useAxios<any>(
    () => axios.get("https://csdnxiaofu.huangb.top/iconfont.json"),
    []
  );

  useEffect(() => {
    doAxios();
  }, [doAxios]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(response);
  }, [response]);

  return (
    <div>
      <div>home</div>
    </div>
  );
};

export default Home;
