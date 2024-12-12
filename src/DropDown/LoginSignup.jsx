import { Link } from "react-router-dom";
import { useContext } from "react";
import { DropDownContext } from "../ContextApi/DropdownContext";

const LoginSignup = () => {
    const { loginDropDown, loginMouseEnter, loginMouseLeave } = useContext(DropDownContext)
    return(
        <>
        <style>
            {`
                .custom_button{
                    padding:4% 6% 4% 6%;
                    background-color:white;
                    border:1px solid lightgray;
                    border-color:lightgray;
                    font-weight:bold;
                    font-family:Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif
                }
                .custom_button:hover{
                    border-color:rgb(255,93,131)
                }

                .custom-style {
                    color: rgb(97, 97, 97);
                    cursor: pointer;
                }
                .custom-style:hover {
                    color: rgb(0, 0, 0);
                    color:black;
                    font-weight:bold;
                }
            `}
        </style>
        {loginDropDown &&
        <div style={{            
            border:"0px solid black", 
            width:"25%", 
            right:"0%",
            padding:"2% 2% 2% 2%",
            position:"absolute",
            backgroundColor:"white",
            boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
            }}
            onMouseEnter={loginMouseEnter}
            onMouseLeave={loginMouseLeave}
        >
            <div style={{border:"0px solid black", fontSize:"14px", fontWeight:"400", fontFamily:"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif", lineHeight:"25px"}}>
                <p style={{color:"rgb(62,65,82)", fontWeight:"bold"}}>Welcome</p>
                <p style={{color:"rgb(97, 97, 97)"}}>To access account and manage orders</p>
                <button className="custom_button" style={{ }}>
                    <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}} to="/login">
                        LOGIN / SIGNUP
                    </Link>
                </button>

                <hr style={{margin:"5% 0% 4% 0%", borderTop:"none", borderLeft:"none", borderRight:"none", borderBottom:"1px solid rgb(226, 222, 222)"}}></hr>

                <p className="custom-style" >Orders</p>
                <p className="custom-style" >Wishlist</p>
                <p className="custom-style" >Gift Cards</p>
                <p className="custom-style" >Contact Us</p>
                <p className="custom-style" >Myntra Insider</p>

                <hr style={{margin:"5% 0% 4% 0%", borderTop:"none", borderLeft:"none", borderRight:"none", borderBottom:"1px solid rgb(226, 222, 222)"}}></hr>

                <p className="custom-style" >Myntra Credit</p>
                <p className="custom-style" >Coupans</p>
                <p className="custom-style" >Saved Cards</p>
                <p className="custom-style" >Saved VPA</p>
                <p className="custom-style" >Saved Addresses</p>
            </div>
            
        </div>
        }
        </>
    )
}

export default LoginSignup;









// style={{color:"rgb(97, 97, 97)"}}