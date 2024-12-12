import "./Footer.css"

const Footer = () => {
    return(
        <>
        <style>
            {`
            .paragraph-text-style{
            font-size:14px;
            color:gray;
            line-height:25px;
            }
            `}
        </style>
        <div className="footer" style={{
            border:"0px solid black",
            backgroundColor:"rgb(250,251,252)",
            fontFamily:"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
        }}>
            <div style={{ border:"0px solid black", display:"flex", paddingTop:"4%"}}>
                <div style={{width:"20%", border:"0px solid black"}}>
                    <h5 style={{marginBottom:"15%"}}>ONLINE SHOPPING</h5>
                    <p className="paragraph-text-style">Men</p>
                    <p className="paragraph-text-style">Women</p>
                    <p className="paragraph-text-style">Kids</p>
                    <p className="paragraph-text-style">Home & Living</p>
                    <p className="paragraph-text-style">Beauty</p>
                    <p className="paragraph-text-style">Gift Cards</p>
                    <p className="paragraph-text-style">Myntra Insider</p>

                    <h5 style={{marginTop:"10%", marginBottom:"15%"}}>USEFUL LINKS</h5>
                    <p className="paragraph-text-style">Blog</p>
                    <p className="paragraph-text-style">Careers</p>
                    <p className="paragraph-text-style">Site Map</p>
                    <p className="paragraph-text-style">Corporate information</p>
                    <p className="paragraph-text-style">Whitehat</p>
                    <p className="paragraph-text-style">Cleartrip</p>
                </div>
                <div style={{width:"20%", border:"0px solid black"}}>
                    <h5 style={{marginBottom:"15%"}}>COUSTOMER POLICIES</h5>
                    <p className="paragraph-text-style">Contact Us</p>
                    <p className="paragraph-text-style">FAQ</p>
                    <p className="paragraph-text-style">T&C</p>
                    <p className="paragraph-text-style">Terms Of Use</p>
                    <p className="paragraph-text-style">Track Orders</p>
                    <p className="paragraph-text-style">Shipping</p>
                    <p className="paragraph-text-style">Cancellation</p>
                    <p className="paragraph-text-style">Returns</p>
                    <p className="paragraph-text-style">Privacy Policy</p>
                    <p className="paragraph-text-style">Grievance Officer</p>
                </div>
                <div style={{width:"25%", border:"0px solid black"}}>
                    <h5 style={{marginBottom:"15%"}}>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div style={{width:"100%"}}>
                            <img style={{width:"100%"}} src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"/>
                        </div>
                        <div style={{width:"100%"}}>
                            <img style={{width:"100%"}} src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"/>
                        </div>
                    </div>
                </div>
                <div style={{width:"25%", border:"0px solid black"}}>
                    
                </div>
            </div>
            <h5 style={{margin:"2% 0% 2% 0%"}}>POPULAR SEARCHES</h5>
            <p style={{color:"gray", fontSize:"14px", lineHeight:"25px"}}>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees</p>
            <div style={{display:"flex", justifyContent:"space-between", margin:"4% 0% 4% 0%"}}>
                <p style={{color:"gray", fontSize:"15px"}}>In case of any concern,<span style={{color:"rgb(82,108,208)"}}>Contact Us</span></p>
                <p style={{color:"gray", fontSize:"15px"}}>© 2024 www.myntra.com. All rights reserved.</p>
                <p style={{color:"gray", fontSize:"15px"}}>A Flipkart company</p>
            </div>
            <hr/>
        
        </div>
        </>
    )
}

export default Footer;