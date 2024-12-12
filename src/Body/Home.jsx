import { useState, useEffect } from "react"
import  Slider  from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./Slider.css";
import ArrayRoutes from "../Navigation/ArrayRoutes";


const Home = () => {
    const [topSlider, setTopSlider] = useState([])
    const [bagBrandData, setBagBrandData] = useState([])
    const [globalBrandData, setGlobalBrandData] = useState([])
    const [shopCategoryData, setShopCategoryData] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        cssEase: "ease-in-out",
        fade: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
        ],
    }

    const secondSetting={
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay:true,
        autoplaySpeed:5000,
        cssEase: "ease-in-out",
        fade: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              },
            },
        ],
    }


    useEffect(() => {
        fetchTopSliderData()
        fetchBagBrandData()
        fetchGlobalBrandData()
        fetchShopCategoryData()
    }, [])

    async function fetchTopSliderData(){
        try {
            const res = await axios({
                method:"get",
                url:`https://myntra-backend-2-o916.onrender.com/fetching-alltopsliderImg`
            })
            const { data } = res.data
            console.log(data)
            setTopSlider(data)
        } catch (error) {
            console.log("Top Slider Data fetched unsuccessfully", error)
        }
    }
    
    async function fetchBagBrandData(){
        try {
            const res = await axios({
                method:"get",
                url:`https://myntra-backend-2-o916.onrender.com/fetching-brandBagImg`
            })
            const { data } = res.data
            console.log(data)
            setBagBrandData(data)
        } catch (error) {
            console.log("Bag Brands Data fetched unsuccessfully", error)
        }
    }

    async function fetchGlobalBrandData(){
        try {
            const res = await axios({
                method:"get",
                url:`https://myntra-backend-2-o916.onrender.com/fetching-globalbrandImg`
            })
            const { data } = res.data
            console.log(data)
            setGlobalBrandData(data)
        } catch (error) {
            console.log("Global Brands Data fetched unsuccessfully", error)
        }
    }

    async function fetchShopCategoryData(){
        try {
            const res = await axios({
                method:"get",
                url:`https://myntra-backend-2-o916.onrender.com/fetching-categoryshopImg`
            })
            const { data } = res.data
            console.log(data)
            setShopCategoryData(data)
        } catch (error) {
            console.log("Shop Category Data fetched unsuccessfully", error)
        }
    }

    return(
        <>
        <div className="maindiv">
            <div style={{width:"100%", marginTop:"2%"}}>
                <img style={{width:"100%"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/aNOirUy7_78d6bc56d9b44a2d83558c11d97939da.jpg"/>
            </div>

{/* ------------------------------------------------------------------------------------- */}
            <div className="firstSlider" style={{marginBottom:"5%"}}>
                <Slider {...settings}>
                    {topSlider.map((topImg) => {
                        return(
                        <>
                            <div className="firstSliderChild" key={topImg._id}>
                                <img className="firstSliderImg" src={topImg.img}/>
                            </div>
                        </>
                        )
                    })}
                </Slider>
            </div>

            <div style={{display:"flex", width:"100%", border:"0px solid black"}}>
                <div>
                    <img style={{width:"100%"}} src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/6/k8VLHVRc_69f9907255134b2b949339b859a56c17.jpg"/>
                </div>
                <div>
                    <img style={{width:"100%"}} src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/6/fizf99HB_2c4b6a74cb454d3bb4716923ce0c7f27.jpg"/>
                </div>
                <div>
                    <img style={{width:"100%"}} src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/6/KKjYcfE1_6f56ccd69f9045c79ed2dbf25a5094ee.jpg"/>
                </div>
            </div>

{/* ------------------------------------------------------------------------------------- */}
            <div style={{width:"100%"}}>
                <img style={{width:"100%"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/7ilNxlAE_bf0ca54bf8d149e7a111671ff2d5ea01.jpg"/>
            </div>

            <div style={{marginBottom:"5%"}}>
                <Slider {...secondSetting}>
                    {bagBrandData.map((brand, index) => (
                        <Link key={brand.id} to={ArrayRoutes[index]?.path || "/"}>
                        <div style={{border:"0px solid black"}}>
                            <img className="secondSliderImg" src={brand.img} alt={`Brand ${index+1}`}/>
                        </div>   
                        </Link>   
                    ))}
                                          
                </Slider>
            </div>
{/* ------------------------------------------------------------------------------------- */}
            <h1 style={{
                textAlign:"center",
                margin:"0% 0% 3% 0%",
                color:"rgb(254,132,37)",
                textDecoration:"underline",
                fontFamily:"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
                }}
            >GLOBAL BRAND</h1>
            <div style={{marginBottom:"5%"}}>
                <Slider {...secondSetting}>
                    {globalBrandData.map((global) => {
                        return(
                        <>
                            <div key={global._id} style={{border:"0px solid black"}}>
                                <img className="thirdSliderImg" src={global.img}/>
                            </div>
                        </>
                        )
                    })}
                </Slider>
            </div>

{/* ------------------------------------------------------------------------------------- */}
            <h1 style={{
                textAlign:"center",
                margin:"0% 0% 2% 0%",
                color:"rgb(41,83,239)",
                textDecoration:"underline",
                fontFamily:"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
                }}
            >SHOP BY CATEGORY</h1>
            <div className="gridContainer" style={{
                display:"grid",
                gridTemplateColumns:"repeat(5, 1fr)",
                // gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
                }}>
                {shopCategoryData.map((category) => {
                    return(
                        <>
                        <div style={{
                            border:"0px solid black",
                            }} 
                            key={category._id}
                        >
                            <img 
                                style={{
                                    width:"100%",
                                    height: "auto", 
                                }} src={category.img}
                            />
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Home;