import { useState,useContext } from "react";
import { createMovie } from "../../context/MovieContext/apiCalls";
import { MovieContext } from "../../context/MovieContext/MovieContext";
import storage from "../../firebase";
import "./newProduct.css";

export default function NewProduct() {
  const [movie,setMovie] = useState(null);
  const [img,setImg] = useState(null);
  const [imgTitle,setImgTitle] = useState(null);
  const [imgsm,setImgSm] = useState(null);
  const [trailer,setTrailer] = useState(null);
  const [video,setVideo] = useState(null);
  const [uploaded,setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);
  const handleChange = (e)=>{
    const value = e.target.value;
    setMovie({...movie,[e.target.name]:value})
  };
  const upload = (items) => {
    items.forEach((item)=>{
      const uploadTask = storage.ref(`/items/${item.file.name}`).put(item.file);
      uploadTask.on("state_changes",(snapshot)=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        console.log("Upload is"+progress + "%done.")
      },(error)=>{console.log(error)},
      ()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
          setMovie((prev)=>{
            return  {...prev,[item.label]:url}
          });
          setUploaded(prev=>prev +1);
        })
      })
    })
  }
  const handleUpload = (e)=>{
    e.preventDefault();
    upload([
      {file:img,label: "img"},
      {file:imgTitle,label: "imgTitle"},
      {file:imgsm,label: "imgsm"},
      {file:trailer,label: "trailer"},
      {file:video,label: "video"},
    ])
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };
  console.log(movie)
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" name="img" onChange={e=>setImg(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imgtitle" name="imgtitle" onChange={e=>setImgTitle(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Thumnail image</label>
          <input type="file" placeholder="imgSm" name="imgSm" onChange={e=>setImgSm(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Jone Wick" name="title" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Description" name="desc" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year" name="year" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name="gerne" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name="duration" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" name="limit" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" name="trailer" onChange={e=>setTrailer(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" name="video" onChange={e=>setVideo(e.target.files[0])}/>
        </div>{uploaded ===  5? (
          <button className="addProductButton" onClick={handleSubmit}>Create</button>
        ): (
          <button className="addProductButton" onClick={handleUpload}>Upload</button>
        )}
      </form>
    </div>
  );
}
