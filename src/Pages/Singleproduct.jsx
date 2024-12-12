import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Pages.css"

const Singleproduct = () =>{
    const [singleProduct, setSingleProduct] = useState({});
    const { id } = useParams();

    console.log("ID:", id);

    async function fetchedSingleProduct(id){
        try {
            console.log("Id", id)

            const res = await axios({
                method:"get",
                url:`https://myntra-backend-2-o916.onrender.com/fetched-single-product/${id}`
            })
            const { data } = res.data;
            console.log(data)
            setSingleProduct(data)
        } catch (error) {
            console.log(`Error in fetched single product ${error.message}`)
        }
    }

    useEffect(() => {
        fetchedSingleProduct(id)
    }, [id])


    return(
        <>
        <div style={{
            border:"0px solid black",
            lineHeight:"40px",
            marginTop:"2%",
            marginBottom:"4%",
            fontFamily:"Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
            }}
        >
            <div className="singleProductContainer" >
                <div className="singleProductImgDiv" >
                    <img style={{width:"100%"}} src={singleProduct.img}/>
                </div>
                <div className="singleProductDetailDiv" >
                    <h2>{singleProduct.title}</h2>
                    <p style={{fontSize:"20px", color:"rgb(83,87,121)"}}>{singleProduct.description}</p>
                    <hr/>
                    <div style={{display:"flex", width:"80%", justifyContent:"space-between"}}>
                        <h2>Rs.{singleProduct.price}</h2>
                        <p style={{color:"rgb(162,129,140)", fontSize:"20px", textDecoration:"line-through"}}>{singleProduct.mrp}</p>
                        <p style={{color:"rgb(255,157,90)", fontSize:"20px", fontWeight:"bold"}}>({singleProduct.off}% OFF)</p>
                    </div>
                    <p style={{color:"green", fontWeight:"bold"}}>inclusive of all taxis</p>
                    <h3>Select Size</h3>
                    <div style={{
                        width:"80%",
                        display:"flex",
                        justifyContent:"space-between"
                        }}
                    >
                        {singleProduct.size && Array.isArray(singleProduct.size) ? (
                            singleProduct.size.map((s, index) => (
                                <div style={{
                                    
                                    border:"1px solid black",
                                    textAlign:"center",
                                    borderRadius:"50px",
                                    padding:"5%",
                                    fontWeight:"bold",
                                    borderColor:"gray"
                                    }} key={index}>
                                    <p>{s}</p>
                                </div>
                            ))
                        ) : (
                            <p>No sizes available</p>
                            )
                        }
                    </div>
                    <div style={{ border:"0px solid black", marginTop:"10%", display:"flex", justifyContent:"space-between"}}>
                        <button style={{
                            border:"0px solid black",
                            backgroundColor:"rgb(255,82,123)",
                            padding:"4% 10% 4% 10%",
                            fontWeight:"bold",
                            color:"white"
                            }} > 
                                ADD TO BAG
                        </button>   
                        <button style={{
                            borderColor:"gray",
                            backgroundColor:"white",
                            padding:"4% 10% 4% 10%",
                            fontWeight:"bold"
                            }}>
                                FAVIORATE
                        </button> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Singleproduct;