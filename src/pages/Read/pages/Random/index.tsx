import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default Detail;
