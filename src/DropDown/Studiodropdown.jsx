import { useContext } from "react";
import { DropDownContext } from "../ContextApi/DropdownContext";

const StudiodropDown = () => {
    const { studioDropDown, studioMouseEnter, studioMouseLeave} = useContext(DropDownContext);
    return(
        <>
        {studioDropDown &&
        <div style={{
            border:"0px solid black ",
            marginLeft:"auto",
            position:"absolute",
            backgroundColor:"rgba(100, 100, 100, 0.5)",
            textAlign:"center",
            height:"100rem"
        }}>
            <div style={{
                background:"white",
                width:"55%",
                margin:"auto",
                padding:"2% 2% 2% 2%",
                border:"0px solid black",
                fontFamily:"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
                }}
                onMouseEnter={studioMouseEnter}
                onMouseLeave={studioMouseLeave}
                >
                <div style={{border:"0px solid black"}}>
                    <img src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg"/>
                </div>
                <p style={{color:"gray"}}>Your daily inspiration for everything fashion</p>
                <div style={{width:"100%", margin:"4% 0% 2% 0%", border:"0px solid black"}}>
                    <img style={{width:"100%"}} src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"/>
                </div>
                <button style={{
                    padding:"2% 5% 2% 5%",
                    backgroundColor:"white",
                    fontSize:"12px",
                    fontWeight:"bold"
                    }}>EXPLORE STUDIO</button>
            </div>
        </div>
        }
        </>
    )
}

export default StudiodropDown;