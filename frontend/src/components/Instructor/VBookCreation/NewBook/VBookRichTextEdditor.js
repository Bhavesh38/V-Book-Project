import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EdditorToolbar";
import "./VBookRichTextEdditor.css";
import cheerio from "cheerio";

function VBookRichTextEdditor() {
    const [height, setHeight] = useState({});
  const [intialVal, setInitVal] = useState({});
  const [audios,setAudios] = useState([]);
  const [htmlValue,setHtmlValue] = useState("");
  const [noOfHeadings,setNumberOfHeadings] = useState(0);

  const [userInfo, setuserInfo] = useState({
    title: "",
    author: "",
    description: "",
    information: "",
  });

  const sendData = () => {
    console.log(userInfo.description);
  };

  const onChangeValue = (e) => {
    if (e.target.value[1] === "i") {
      console.log(e.target.value);
    }
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const forceAudioRequest = ()=>{
    const $ = cheerio.load(htmlValue);
    console.log($("h3"));
    let numberOfHeadings = $("h3").length;
    setNumberOfHeadings(numberOfHeadings);
    if(audios.length<numberOfHeadings){
      // show message that more audio/video is required as per heading count.
      alert(`${numberOfHeadings-audios.length} more audios required.`);

    }
  }
  const extractImageLayer = (value) => {
    // console.log(value);
    const $ = cheerio.load(value);
    let imageList = [];
    let i = 0;
    $("img").each(function () {
      // upload to storage and grab the link


      imageList = [...imageList, $(this).attr("src")];
      let newId = `image_${i}`; // set an id for identification
      $(this).attr("id", newId);
      let newSrc = `image_${i}_upload_link`; //change it with uploaded link
      $(this).attr("src", newSrc);

      i++;
    });
    // console.log(i);
    // console.log($.html());
  };
  const ondescription = (value) => {
    setHtmlValue(value);
    extractImageLayer(value);
    let totalHeight = document.getElementsByClassName("quill")[0].clientHeight;
    if (height > 800) {
      window.alert("You have reached the max word-limit");
    }
    setHeight(totalHeight);
    // console.log(height);

    // console.log(height)

    if (totalHeight) setInitVal(userInfo.description);
    setuserInfo({
      ...userInfo,
      description: value,
    });
  };

  const oninformation = (value) => {
    setuserInfo({
      ...userInfo,
      information: value,
    });
  };
  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    forceAudioRequest()
    try {
      event.preventDefault();
      event.persist();
      if (userInfo.description.length < 50) {
        setError("Required, Add description minimum length 50 characters");
        return;
      }
    } catch (error) {
      throw error;
    }
  };


  return (
    <>
      {/* <Home /> */}
      <div className="App">
        <div className="container">
          <div className="row">
            <form onSubmit={addDetails} className="update__forms">
              <div className="form-row">
                <div className="editor form-group col-md-12 ">
                  <label className="font-weight-bold">
                    <strong>Page Content </strong>{" "}
                    <span className="required"> * </span>{" "}
                  </label>
                  <EditorToolbar toolbarId={"t1"} />
                  <ReactQuill
                    theme="snow"
                    value={userInfo.description}
                    onChange={ondescription}
                    placeholder={"Write something awesome..."}
                    modules={modules("t1")}
                    formats={formats}
                    style={{
                      width: 390,
                      textAlign: "center",
                      justifyContent: 30,
                    }}
                  />
                </div>
                <br />
                {isError !== null && <div className="errors"> {isError} </div>}
                <div className="form-group col-sm-12 text-right">
                  <button
                    type="submit"
                    className="btn btn__theme"
                    onClick={sendData}
                  >
                    {" "}
                    Save{" "}
                  </button>
                  <button type="submit" className="btn btn__theme">
                    {" "}
                    Save next{" "}
                  </button>
                  <button type="submit" className="btn btn__theme">
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default VBookRichTextEdditor;
