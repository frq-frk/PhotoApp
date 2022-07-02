import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const View = () => {
  const { id } = useParams();

  const [src, setSrc] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://picsum.photos/id/${id}/info`);
        setSrc(res.data.download_url);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [id]);

  const style = {
    width: "80vw",
    height: "80vh",
    margin: "auto",
    marginTop: "40px"
  };

  return <img src={src} alt="enlarged img" style={style} />;
};

export default View;
