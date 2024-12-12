import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const LoginorSignup = () => {
    const [allUser, setAllUser] = useState([])
    const numberRef = useRef(null)
    const navigate = useNavigate()



    function handleSubmit(e){
        e.preventDefault();

        if(numberRef.current.value.length !== 10){
            console.log("Number must be 10 digit only")
            return
        }

        const inputValue = Number(numberRef.current.value)

        

        const existsUser = allUser.some((user) => user.number === inputValue)

        if(existsUser){
            console.log("You Logged in Successfully")
            navigate("/")
        }

        if(!existsUser){
            console.log("You Registered Successfully")
            const obj ={
                number: inputValue
            }
            postUserDetail(obj)
            console.log(obj)
            navigate("/")
        }
      
        numberRef.current.value=""
    }

    useEffect(() => {
        getUserDetail()
    }, [])

    //==================Get User Data by Axios====================//
    async function getUserDetail(){
        try {
            const res = await axios({
                method: "get",
                url: `https://myntra-backend-2-o916.onrender.com/fetched-alluser`,
            })
            const { data } = res.data
            //console.log(data)
            setAllUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    async function postUserDetail(userDetail){
        try {
            const res = await axios({
                method:"post",
                url:`https://myntra-backend-2-o916.onrender.com/login`,
                data: userDetail
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    } 



    return(
        <>
        <style>
            {`
                body{
                    background-color:rgb(253,239,234);
                }
                input::placeholder{
                color:gray
                }
            `}
        </style>
        <div className="loginMainContainer">
            <div style={{border:"0px solid black"}}>
                <img style={{width:"100%"}}
                 src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"/>
            </div>

            <div style={{backgroundColor:"white", paddingTop:"5%"}}>
                <div style={{border:"0px solid black", margin:"auto", width:"80%", lineHeight:"50px", fontFamily:"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"}}>
                    <p style={{color:"rgb(66,69,83)", fontSize:"18px", fontWeight:"bold"}}>Login <span style={{fontWeight:"normal"}}>or</span> Signup</p>

                    <form onSubmit={handleSubmit}>
                        <input style={{width:"99%", fontSize:"14px", height:"40px"}}
                        type="number"
                        ref={numberRef}
                        placeholder="Mobile Number*"
                    
                        />
                        <label style={{ fontSize:"12px" ,color:"rgb(140, 141, 146)"}}>
                            By continuing, I agree to the <a style={{color:"rgb(255,93,131)", fontWeight:"bold", textDecoration:"none"}} href="https://www.myntra.com/termsofuse">Terms of Use
                            </a> & <a style={{color:"rgb(255,93,131)", fontWeight:"bold", textDecoration:"none"}} href="https://www.myntra.com/privacypolicy">Privacy Policy</a>
                        </label>
                        <button 
                        style={{
                            width:"100%", 
                            padding:"4% 0% 4% 0%", 
                            color:"white",
                            border:"none",
                            backgroundColor:"rgb(255,93,131)",
                            borderRadius:"10px",
                            fontWeight:"800"
                            }}
                            type="submit"
                            >
                            CONTINUE
                        </button>
                        <p style={{ fontSize:"12px" ,color:"rgb(140, 141, 146)"}}>Have trouble logging in? <span style={{color:"rgb(255,93,131)", fontWeight:"bold"}}>Get help</span></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginorSignup;