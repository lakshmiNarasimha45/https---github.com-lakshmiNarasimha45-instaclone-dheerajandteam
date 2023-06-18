import React,{ useState} from 'react'
import"./Signup.css"
import { useNavigate } from "react-router-dom";
// import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { colors } from '@mui/material';

function Signup() {
    const [mailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sname, setUsername] = useState("");
  const navigate=useNavigate();
    function login(){
        navigate("/homepage")
    }
    const save=async(e)=>{
        if(password==="")
        alert("enter password")
        else if(sname==="")
        alert("Enter the UserName")
        else if(mailid==="")
        alert("Enter the Mail")
        else {
            let mydata={
                name:sname,
                mail:mailid,
                password:password
            }
            let result=await axios.post("http://localhost:8080/savedata",mydata)
            if(result.data==="added"){
                navigate("/homepage")
            }
            else{
                alert(result.data)
            }
        }

    }
  return (
    <div className="signup" >
        <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" 
        alt=""  />

    <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={mailid}
         />
        
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={sname} />      
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password} />
        <button  style={{fontSize:"15px",paddingLeft:"25px",paddingRight:"25px",backgroundColor:"primary"}}  onClick={save}>
          Signup 
        </button>
         {/* <Button variant="contained" href="/homepage" style={{fontSize:"15px",paddingLeft:"15px",marginLeft:"225px",backgroundColor:"lightgreen"}}>Signup</Button>       */}
    </div>
  )
}

export default Signup
