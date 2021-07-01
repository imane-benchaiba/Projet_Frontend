import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";

const UploadPicture = () => {
    const [file, setFile] = useState();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);

    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", userData.pseudo);
        data.append("userId", userData._id);
        data.append("file", file);

        dispatch(uploadPicture(data, userData._id));
    }
    return(
        <div>
            <form action="" onSubmit={handlePicture} className="upload-pic">
                <input type="file" id="file" name="file" accept=".jpg, .jpeg, .png" onChange={(e) => setFile(e.target.files[0])}/>
                <br/>
                <button type="submit" class="submit" className="bouton__form">Envoyer</button>               
            </form>
        </div>
    );
};

export default UploadPicture;