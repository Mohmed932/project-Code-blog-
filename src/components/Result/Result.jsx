import "./Result.css";
import { Link } from "react-router-dom";
import { fetching, deleting } from "../../redux/data";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Suspense } from "react";

const Empty = lazy(() => import("../Empty/Empty"));
const Loaging = lazy(() => import("../../components/Loaging/Loading.js"));
const Result = () => {
  const dispatch = useDispatch();
  const { dataing, loading } = useSelector((state) => state.getData);

  useEffect(() => {
    dispatch(fetching());
  }, [dispatch]);
  const data = dataing.map(({ title, id, image }) => (
    <div className="prodect" key={id}>
      <img src={image} alt={image} />
      <div className="Result-more">
        <h1>{title}</h1>
        <Link to={`/prodect/${id}`}>Read more...</Link>
      </div>
      <button
        className="btn"
        onClick={(e) => {
          dispatch(deleting(id));
          if (loading) {
            e.target.innerText = "Deleteing...";
          } else {
          }
          e.target.innerText = "Delete";
        }}
      >
        Delete
      </button>
    </div>
  ));
  return (
    <div className="Result">
      <Suspense fallback=<Loaging />>
        {loading ? <Loaging /> : dataing.length === 0 ? <Empty /> : data}
      </Suspense>
    </div>
  );
};

export default Result;
