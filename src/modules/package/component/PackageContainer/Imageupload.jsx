import { CropSquareOutlined } from "@material-ui/icons";
import { MdOutlineDangerous } from "react-icons/md";
import React, { useState } from "react";
import "./Product.css";
const Imageupload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleOptional = (event) => {
    // const files = e.target.files;
    setSelectedImages([]);
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    // selectedFiles.length > 0 && setSelectedImages(URL.createObjectURL(selectedFiles[0]));

    const imagesArray = selectedFilesArray.map((file) => {
      return window.URL.createObjectURL(file);
      //
      // URL.createObjectURL(event.target.files[0])
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    console.log("selectedImages", selectedImages);
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    window.URL.revokeObjectURL(image);
  }

  return (
    <div className="personal_info p-4">
      <div className="row px-4">
        <div className="col-12 mb-3" style={{paddingLeft:'0', color:"#1C1C1C", fontWeight:"400"}}>
          <label
            htmlFor="inputPassword"
            className="col-sm-2 col-form-label align-self-center"
          >
            Product Image
          </label>
        </div>

        <div className="col-12 col-md-12 drag-drop">
          <div className="d-flex">
            <svg
              width="35"
              height="26"
              viewBox="0 0 35 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.822 0.000749944C20.4579 0.000749944 23.1008 0.996872 25.1111 3.00705C26.671 4.56691 27.6003 6.51873 27.9501 8.54213C31.9417 9.19025 35.0006 12.6289 35.0006 16.7971C35.0006 21.4264 31.2315 25.1953 26.6025 25.1953H7.89749C3.89268 25.1953 0.644531 21.9473 0.644531 17.9423C0.644531 14.0435 3.72908 10.8905 7.58733 10.7248C7.47576 7.94703 8.42933 5.12315 10.5456 3.0063C12.5544 0.997487 15.1866 0 17.8225 0L17.822 0.000749944ZM17.822 1.52755C15.5731 1.52755 13.3369 2.37432 11.6189 4.09233C9.63322 6.07797 8.80431 8.77431 9.11372 11.3569C9.14115 11.5755 9.07298 11.7952 8.9268 11.9595C8.78061 12.124 8.57051 12.2175 8.35031 12.2159H7.89711C4.71167 12.2159 2.17109 14.7565 2.17109 17.9419C2.17109 21.1273 4.71167 23.6679 7.89711 23.6679H26.6021C30.4059 23.6679 33.4733 20.6007 33.4733 16.7967C33.4733 13.2049 30.7368 10.2673 27.2345 9.94934H27.2342C26.8748 9.91818 26.5861 9.63939 26.5425 9.28124C26.3223 7.38402 25.4949 5.54965 24.0373 4.09204C22.3203 2.37505 20.0711 1.52726 17.8221 1.52726L17.822 1.52755ZM17.822 9.16224C18.0263 9.16597 18.226 9.25304 18.3349 9.35317L22.5341 13.1705C22.8478 13.4437 22.863 13.9587 22.5938 14.2561C22.3243 14.5536 21.8045 14.5743 21.5081 14.3038L18.5855 11.6435V19.8507C18.5855 20.2725 18.2438 20.6142 17.8221 20.6142C17.4003 20.6142 17.0587 20.2723 17.0587 19.8507V11.6435L14.136 14.3038C13.8396 14.5743 13.334 14.5403 13.0504 14.2561C12.7564 13.9616 12.8113 13.4387 13.11 13.1705L17.3093 9.35317C17.4773 9.19953 17.6197 9.16171 17.8221 9.16224H17.822Z"
                fill="#C4C4C4"
              />
            </svg>

            <h5 className=" my-3"> Drag and drop your files anywhere or</h5>

            <div className="file-input-display" style={{ margin: "0" }}>
              <button className="chooseFile">ChooseFile</button>
            </div>
          </div>
          <input
            type="file"
            onChange={handleOptional}
            multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </div>
        <div className="d-flex my-4">
          {selectedImages &&
            selectedImages.map((imges, index) => (
              <div
                key={index}
                className="main-box-img"
                style={{ cursor: "pointer", position: "relative" }}
              >
                {/* <img src={selectedImages} /> */}
                <img
                  key={index}
                  src={imges}
                  width={70}
                  height={70}
                  className="mx-2"
                  alt=""
                  srcset=""
                />{" "}
                <br />
                <button
                  className="del-btn"
                  onClick={() => deleteHandler(imges)}
                >
                  <MdOutlineDangerous size={14} />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Imageupload;
