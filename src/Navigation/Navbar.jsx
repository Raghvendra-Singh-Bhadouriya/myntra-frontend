import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs";
import { TfiUser } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from "react";
import './Navbar.css'
import MendropDown from "../DropDown/Mendropdown";
import WomendropDown from "../DropDown/Womendropdown";
import KidsdropDown from "../DropDown/Kidsdropdown";
import HomedropDown from "../DropDown/Homedropdown";
import BeautydropDown from "../DropDown/Beautydropdown";
import StudiodropDown from "../DropDown/Studiodropdown";
import LoginSignup from "../DropDown/LoginSignup";
import { useContext } from "react";
import { DropDownContext } from "../ContextApi/DropdownContext";

const Navbar = () => {
    const { loginMouseEnter, loginMouseLeave, menMouseEnter, menMouseLeave, womenMouseEnter, womenMouseLeave, kidsMouseEnter, kidsMouseLeave, homeMouseEnter, homeMouseLeave, beautyMouseEnter, beautyMouseLeave, studioMouseEnter, studioMouseLeave } = useContext(DropDownContext)
    const [isOpen, setIsOpen] = useState(false)

    function openSideBar(){
        if(isOpen){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
    }
    return(
        <>
        <style>
            {`
                .inline-placeholder::placeholder {
                    font-weight: bold;
                    font-size: 14px;
                    marginLeft: 5%;
                    color: rgb(182,182,182);                        
                }
                    
            `}
        </style>
        <div className="nav">
        <div style={{
            border:"0px solid black",
            display:"flex",
            justifyContent:"space-between",
            padding:"0% 0% 0% 0%",
            }}
        >

            <div style={{ 
                left:"0%",
                width:"58%", 
                border:"0px solid black", 
                display:"flex", 
                justifyContent:"space-between", 
                fontWeight:"bold", 
                fontFamily:"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif" 
                }}
            >
                <div style={{margin:"auto",border:"0px solid red", width:"12%", marginLeft:"1%"}}>
                    <Link to="/">
                        <img style={{width:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2d_M0PbRKWW5wBDqqFaWudCjoFjQbK-l9m9GIAeMoouBJR5-atSYpmnnre5xjbWdRqrE&usqp=CAU" />
                    </Link>
                </div>

                    <Link style={{margin:"auto", alignContent:"center", height:"75px", border:"0px solid black",textDecoration:"none", color:"rgb(40,44,63)", fontSize:"12px", fontWeight:"bold"}}
                    to="/men"
                    onMouseEnter={menMouseEnter}
                    onMouseLeave={menMouseLeave}
                    >
                        MEN
                    </Link>               

                    <Link style={{margin:"auto", alignContent:"center", height:"75px", border:"0px solid black",textDecoration:"none", color:"rgb(40,44,63)", fontSize:"12px", fontWeight:"bold"}}
                    to="/women"
                    onMouseEnter={womenMouseEnter}
                    onMouseLeave={womenMouseLeave}
                    >
                        WOMEN
                    </Link>                

                    <Link style={{margin:"auto", alignContent:"center", height:"75px", border:"0px solid black",textDecoration:"none", color:"rgb(40,44,63)", fontSize:"12px", fontWeight:"bold"}}
                    to="/kids"
                    onMouseEnter={kidsMouseEnter}
                    onMouseLeave={kidsMouseLeave}
                    >
                        KIDS
                    </Link>       

                    <Link style={{margin:"auto", alignContent:"center", height:"75px", border:"0px solid black", textDecoration:"none", color:"rgb(40,44,63)", fontSize:"12px", fontWeight:"bold"}}
                    to="/homeandliving"
                    onMouseEnter={homeMouseEnter}
                    onMouseLeave={homeMouseLeave}
                    >
                        HOME & LIVING
                    </Link>

                    <Link style={{margin:"auto", alignContent:"center", height:"75px", border:"0px solid black", textDecoration:"none", color:"rgb(40,44,63)", fontSize:"12px", fontWeight:"bold"}}
                    to="/beauty"
                    onMouseEnter={beautyMouseEnter}
                    onMouseLeave={beautyMouseLeave}
                    >
                        BEAUTY
                    </Link>
            

                    <Link style={{margin:"auto", alignContent:"center", height:"75px", border:"0px solid black",textDecoration:"none", color:"rgb(40,44,63)", fontSize:"12px", fontWeight:"bold"}}
                    to="/studio"
                    onMouseEnter={studioMouseEnter}
                    onMouseLeave={studioMouseLeave}
                    >
                        STUDIO
                    </Link> 
            </div>

            <div style={{
                border:"0px solid red", 
                width:"35%", 
                display:"flex", 
                justifyContent:"space-around", 
                fontWeight:"bold", 
                fontFamily:"montserrat, sans-serif"
                }}
            >
                <div style={{margin:"auto" ,border:"0px solid black", height:"35px",width:"45%", display:"flex", justifyContent:"space-between", backgroundColor:"rgb(245,245,246)"}}>
                    <BsSearch style={{ border:"0px solid black", margin:"auto"}} />
                    <input 
                    style={{ width:"70%",height:"2rem", margin:"auto", outline:"none", border:"none", backgroundColor:"rgb(245,245,246)"}}
                    placeholder="search for product"
                    className="inline-placeholder"
                    />
                </div>

                <div style={{ width:"42%", border:"0px solid black", display:"flex", justifyContent:"space-between"}}>
                    <div style={{ margin:"auto", alignContent:"center",border:"0px solid black", height:"75px", textAlign:"center"}}
                    onMouseEnter={loginMouseEnter}
                    onMouseLeave={loginMouseLeave}
                    >
                        <TfiUser style={{fontSize:"20px", color:"rgba(59, 56, 56, 0.9)" }}/>
                        <Link style={{margin:"auto", textDecoration:"none", color:"black", fontSize:"11px"}}>
                            Profile
                        </Link>
                    </div>
                    <div style={{border:"0px solid black", margin:"auto", textAlign:"center", alignContent:"center", height:"75px"}}>
                        <CiHeart style={{fontSize:"20px"}}/>
                        <Link style={{margin:"2%", textDecoration:"none", color:"black", fontSize:"11px"}}
                        to="/faviorite">
                            Wishlist
                        </Link>
                    </div>
                    <div style={{border:"0px solid black", margin:"auto", textAlign:"center", alignContent:"center", height:"75px"}}>
                        <BsHandbag style={{fontSize:"20px", color:"rgba(59, 56, 56, 0.9)"}}/>
                        <Link style={{margin:"2%", textDecoration:"none", color:"black", fontSize:"11px"}}
                        to="/beauty">
                            Bag
                        </Link>
                    </div>
                </div>
            </div>

            
        </div>
            <MendropDown/>
            <WomendropDown/>
            <KidsdropDown/>
            <HomedropDown/>
            <BeautydropDown/>
            <StudiodropDown/>
            <LoginSignup/>
        </div>

        {/* //================Side Bar========================// */}
        <div className="sidebar">
            
            {isOpen ?
                <div onClick={openSideBar}
                style={{
                    position:"absolute",
                    width:"100%",
                    height:"100rem",
                    overflow:"auto",
                    backgroundColor:"rgba(100, 100, 100, 0.5)",
                    transition:"left 0.1s ease-in-out",
                    border:"0px solid black"
                }}
                > 
                <div 
                style={{
                    width:"60%",
                    height:"100rem",
                    backgroundColor:"white",
                }}>

                    <div style={{
                        fontWeight:"bold", 
                        fontFamily:"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                        lineHeight:"50px",
                        paddingTop:"10%"
                    }}>
                    <Link style={{ width:"10%,", margin:"auto", alignContent:"center", border:"none",textDecoration:"none", color:"rgb(40,44,63)", fontSize:"14px", fontWeight:"bold"}}
                    to="/men"
                    >
                        <p style={{width:"10%"}}>Men</p>
                    </Link>
                    <Link style={{margin:"auto", alignContent:"center", border:"0px solid black",textDecoration:"none", color:"rgb(40,44,63)", fontSize:"14px", fontWeight:"bold"}}
                    to="/women"
                    >
                        <p>Women</p>
                    </Link>
                    <Link style={{margin:"auto", alignContent:"center", border:"0px solid black",textDecoration:"none", color:"rgb(40,44,63)", fontSize:"14px", fontWeight:"bold"}}
                    to="/kids"
                    >
                        <p>Kids</p>
                    </Link>
                    <Link style={{margin:"auto", alignContent:"center", border:"0px solid black",textDecoration:"none", color:"rgb(40,44,63)", fontSize:"14px", fontWeight:"bold"}}
                    to="/hom&living"
                    >
                        <p>Home & Living</p>
                    </Link>
                    <Link style={{margin:"auto", alignContent:"center", border:"0px solid black",textDecoration:"none", color:"rgb(40,44,63)", fontSize:"14px", fontWeight:"bold"}}
                    to="/beauty"
                    >
                        <p>Beauty</p>
                    </Link>
                    <Link style={{margin:"auto", alignContent:"center", border:"0px solid black",textDecoration:"none", color:"gray", fontSize:"14px", fontWeight:"bold"}}
                    to="/beauty"
                    >
                        <p>Orders</p>
                    </Link>
                    <Link style={{margin:"auto", alignContent:"center", border:"0px solid black",textDecoration:"none", color:"gray", fontSize:"14px", fontWeight:"bold"}}
                    to="/beauty"
                    >
                        <p>Wishlist</p>
                    </Link>
                    <Link style={{margin:"auto", alignContent:"center", border:"0px solid black",textDecoration:"none", color:"gray", fontSize:"14px", fontWeight:"bold"}}
                    to="/beauty"
                    >
                        <p>Gift Cards</p>
                    </Link>
                    <Link style={{margin:"auto", alignContent:"center", border:"0px solid black",textDecoration:"none", color:"gray", fontSize:"14px", fontWeight:"bold"}}
                    to="/beauty"
                    >
                        <p>Contact Us</p>
                    </Link>
                    <Link style={{margin:"auto", alignContent:"center", border:"0px solid black",textDecoration:"none", color:"gray", fontSize:"14px", fontWeight:"bold"}}
                    to="/beauty"
                    >
                        <p>Myntra Insider</p>
                    </Link>
                    </div>
                </div>
                </div> : null
            }










            <div style={{border:"0px solid black", display:"flex", justifyContent:"space-between", margin:"auto"}}>
                <div style={{ width:"15%", display:"flex"}}>
                    <div onClick={openSideBar}>
                    {!isOpen && <RxHamburgerMenu style={{fontSize:"25px", margin:"auto"}}/>}
                    </div>
                    <Link to="/">
                    <div style={{width:"120%"}}>
                        <img style={{width:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2d_M0PbRKWW5wBDqqFaWudCjoFjQbK-l9m9GIAeMoouBJR5-atSYpmnnre5xjbWdRqrE&usqp=CAU"/>
                    </div>
                    </Link>
                </div>
                <div style={{width:"25%", border:"0px solid black", display:"flex", justifyContent:"space-around"}}>
                    <div>
                        <BsSearch style={{ border:"0px solid black", fontSize:"20px"}} />
                    </div>
                    <Link to="/login">
                    <div>
                        <TfiUser style={{fontSize:"20px"}}/>
                    </div>
                    </Link>
                    <div>
                        <BsHandbag style={{fontSize:"20px"}}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;
