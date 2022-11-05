import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { posting } from "../../redux/data.js";
import "./Form.css";

const Forms = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const dispatch = useDispatch();
  const succeeded = useRef();
  const { loading } = useSelector((state) => state.getData);
  const handelimages = (dataimage) => {
    const reader = new FileReader();
    console.log(reader);
    reader.onload = () => {
      setimage(reader.result);
      if (reader.readyState === 2) {
        succeeded.current.innerText = "succeeded";
      }
    };
    reader.readAsDataURL(dataimage);
  };
  const data = {
    id: new Date().getTime(),
    title,
    description,
    image,
  };
  const handelCollect = () => {
    if (title && description && image !== "") {
      setTitle("");
      setdescription("");
      setimage("");
      dispatch(posting(data));
      setTitle("");
      setdescription("");
      setimage("");
      dispatch(posting(data));
      succeeded.current.innerText = "UPLOAD";
    }
  };
  return (
    <div className="Forms">
      <div className="form">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          placeholder="description"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
        />
        <div className="file">
          <input
            type="file"
            id="file"
            onChange={(e) => handelimages(e.target.files[0])}
          />
          <label htmlFor="file" className="upload" ref={succeeded}>
            UPLOAD
          </label>
        </div>
        <input
          type="submit"
          className="btn"
          value={loading ? "Sending..." : "Send"}
          onClick={handelCollect}
        />
      </div>
    </div>
  );
};

export default Forms;
