import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detalies.css";

const Detalies = () => {
  const [data, setdata] = useState([]);
  const param = useParams();
  useEffect(() => {
    const fetching = async () => {
      try {
        const req = await fetch(`http://localhost:4000/prodect/${param.id}`);
        const res = await req.json();
        return setdata(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetching();
  }, [data]);

  const summery = (
    <div className="Detalies">
      <img src={data.image} alt={data.image} />
      <div className="data-Detalies">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
  return <Fragment>{summery}</Fragment>;
};

export default Detalies;
