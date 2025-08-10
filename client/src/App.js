import {useRef,useState,useEffect} from 'react';
import './App.css';
import { uploadFile } from './services/api';
import Navbar from './Comps/Navbar';


function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef=useRef();
  const onUpoad=()=>{
    fileInputRef.current.click(); 
  }
  useEffect(() => {
   const getImg= async()=>{
    if(file){
      const data=new FormData();
      data.append("name",file.name);
      data.append("file",file);

      let response=await uploadFile(data);
      setResult(response.path);
    }
   }
   getImg();
  }, [file])
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };
  

  return (
<>
<div className='mainpage'>
  <Navbar></Navbar>
 <div className="container">
 <div className="box">
  <h1>Simple File Sharing</h1>
  <p>Upload and Share the link!</p>
  <button className="upload-btn" onClick={()=>onUpoad()}>Upload</button>
  <input type="file" 
  ref={fileInputRef} 
  style={{display: 'none'}} 
  onChange={(e)=>setFile(e.target.files[0])}/>
  {result && <button className="upload-btn" onClick={copyToClipboard}>Copy Link</button>}
  </div>
 </div>
</div>




</>
  );
}

export default App;
