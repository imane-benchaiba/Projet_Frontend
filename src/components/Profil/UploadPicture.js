import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";

const UploadPicture = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
 // const [loading, setLoading] = useState(false);
 // const [image, setImage] = useState("");

  const handlePicture = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", file);
  /*  data.append("upload_preset", "project_images");
    setLoading(true);

    const res = await fetch("	https://api.cloudinary.com/v1_1/dxcbvhkmf/image/upload", {
      method: 'POST',
      body: data
    });
    
    const fileRes = await res.json();
    console.log(fileRes);
    setImage(fileRes.secure_url);
    setLoading(false); */

    dispatch(uploadPicture(data, userData._id));
  };
  return (
    <>
      
      <form action="" onSubmit={handlePicture} className="upload-pic">
        <label htmlFor="file">Changer l'image</label>
        <input
          type="file"
          id="file"
          name="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button type="submit" class="submit" className="button-submit">
          Envoyer
        </button>
      </form>
    </>
  );
};

export default UploadPicture;
