import { useContext } from "react";
import {Link} from "react-router-dom";
import {DropDownContext} from "../ContextApi/DropdownContext";

const BeautydropDown = () => {
    const { beautyDropDown, beautyMouseEnter, beautyMouseLeave } = useContext(DropDownContext)
    return(
        <>
        <style>
            {`
            .text-style{
            color:black;
            text-decoration:none;
            font-size:13px
            }
            
            .text-style:hover{
            font-weight:bold;
            }
            `}
        </style>
        {beautyDropDown && 
        <div style={{
            border:"0px solid black ",
            position:"absolute",
            backgroundColor:"rgba(100, 100, 100, 0.5)",
            width:"100%",
            height:"100rem"
        }}>
        <div style={{            
            border:"0px solid black", 
            width:"85%", 
            margin:"auto",
            padding:"2% 2% 2% 2%",
            backgroundColor:"white",
            boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            fontFamily:"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
            display:"flex",
            
            }}
            onMouseEnter={beautyMouseEnter}
            onMouseLeave={beautyMouseLeave}
            >
            <div style={{lineHeight:"25px", width:"25%"}}>
                <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Top Wear
                    </h5>
                </Link>
                <Link className="text-style"><p>T-Shirts</p></Link>
                <Link className="text-style"><p>Casual Shirts</p></Link>
                <Link className="text-style"><p>Formal Shirts</p></Link>
                <Link className="text-style"><p>Sweatshirts</p></Link>
                <Link className="text-style"><p>Sweaters</p></Link>
                <Link className="text-style"><p>Jackets</p></Link>
                <Link className="text-style"><p>Blazers & Coats</p></Link>
                <Link className="text-style"><p>Suits</p></Link>
                <Link className="text-style"><p>Rain Jackets</p></Link>

                <hr style={{color:"lightgray", width:"80%", margin:"5% 0% 5% 0%"}}/>  

                <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Indian & Festive Wear
                    </h5>
                </Link>
                <Link className="text-style"><p>Kurtas & Kurta sets</p></Link>
                <Link className="text-style"><p>Sherwanis</p></Link>
                <Link className="text-style"><p>Nehru Jackets</p></Link>
                <Link className="text-style"><p>Dhotis</p></Link>

            </div>
            <div style={{lineHeight:"25px", width:"25%"}}>
                <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Bottomwear
                    </h5>
                </Link>
                <Link className="text-style"><p>Jeans</p></Link>
                <Link className="text-style"><p>Casual Trousers</p></Link>
                <Link className="text-style"><p>Formal Trousers</p></Link>
                <Link className="text-style"><p>Shorts</p></Link>
                <Link className="text-style"><p>Track Pants & Joggers</p></Link>

                <hr style={{color:"lightgray", width:"80%", margin:"5% 0% 5% 0%"}}/>  

                <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Innerwear & Sleepwear
                    </h5>
                </Link>
                <Link className="text-style"><p>Briefs & Trunks</p></Link>
                <Link className="text-style"><p>Boxers</p></Link>
                <Link className="text-style"><p>Vests</p></Link>
                <Link className="text-style"><p>Sleepwear & Loungewear</p></Link>
                <Link className="text-style"><p>Thermals</p></Link>

                <hr style={{color:"lightgray", width:"80%", margin:"5% 0% 5% 0%"}}/>
                <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Plus Size
                    </h5>
                </Link>
            </div>
            <div style={{lineHeight:"25px", width:"25%"}}>
                <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Footwear
                    </h5>
                </Link>
                <Link className="text-style"><p>Casual Shoes</p></Link>
                <Link className="text-style"><p>Sports Shoes</p></Link>
                <Link className="text-style"><p>Formal Shoes</p></Link>
                <Link className="text-style"><p>Sneakers</p></Link>
                <Link className="text-style"><p>Sandals & Floaters</p></Link>
                <Link className="text-style"><p>Flip Flops</p></Link>
                <Link className="text-style"><p>Socks</p></Link>

                <hr style={{color:"lightgray", width:"80%", margin:"5% 0% 5% 0%"}}/>  

                <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Personl Care & Grooming
                    </h5>
                </Link>
                <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Sunglasses & Frames
                    </h5>
                </Link>
                <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Watches
                    </h5>
                </Link>
            </div>
            <div style={{lineHeight:"25px", width:"25%"}}>
                <Link style={{textDecoration:"none", color:"rgb(255,93,131)"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Sports & Active Wear
                    </h5>
                </Link>
                <Link className="text-style"><p>Sports Shoes</p></Link>
                <Link className="text-style"><p>Sports Sandals</p></Link>
                <Link className="text-style"><p>Active T-Shirts</p></Link>
                <Link className="text-style"><p>Track Pants & Shorts</p></Link>
                <Link className="text-style"><p>Tracksuits</p></Link>
                <Link className="text-style"><p>Jackets & Sweatshirts</p></Link>
                <Link className="text-style"><p>Sports Accessories</p></Link>
                <Link className="text-style"><p>Swimwear</p></Link>

                <hr style={{color:"lightgray", width:"80%", margin:"5% 0% 5% 0%"}}/> 

                <Link style={{textDecoration:"none", color:"rgb(255,93,131)", marginBottom:"2%"}}>
                    <h5 style={{marginBottom:"4%"}}>
                        Gadgets
                    </h5>
                </Link>
                <Link className="text-style"><p>Smart Wearables</p></Link>
                <Link className="text-style"><p>Fitness Gadgets</p></Link>
                <Link className="text-style"><p>Headphones</p></Link>
                <Link className="text-style"><p>Speakers</p></Link>
            </div>
        </div>
        </div>
        }
        </>
    )
}

export default BeautydropDown;