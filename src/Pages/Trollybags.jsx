import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./Pages.css"

const Trollybags = () => {
    
    const [trollyBags, setTrollyBags] = useState([])

    async function fetchedTrollyBags(){
        try {
            const res = await axios({
                method:"get",
                url:`https://myntra-backend-2-o916.onrender.com/fetched-product/trollybag`
            })
            const {data} = res.data
            console.log(data)
            setTrollyBags(data)
        } catch (error) {
            console.log("Error fetching women shoes", error.message)
        }
    }

    useEffect(() => {
        fetchedTrollyBags()
    }, [])


    return(
        <>
        <style>
            {`
            .card-container{
                margin:auto;
                width:80%;
                border:0px solid black;
                padding-bottom:2%;
            }
            .card-container:hover{
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                border-radius: 10px;
            }
            `}
        </style>
        <div className="gridContainer">
            {trollyBags.map((trolly) => {
                return(
                    <>
                    <Link style={{textDecoration:"none"}} to={`/${trolly.category}/${trolly._id}`} key={trolly.id}>
                    <div className="card-container">
                        <div style={{width:"100%"}}>
                            <img style={{width:"100%", borderRadius:"10px"}} src={trolly.img}/>
                        </div>
                        <div style={{padding:"0% 5% 0% 5%", lineHeight:"20px"}}>
                            <h4 style={{color:"black"}}>{trolly.title}</h4>
                            <p style={{
                                fontSize:"12px", 
                                color:"rgb(83,87,121)", 
                                overflow:"hidden", 
                                whiteSpace:"nowrap", 
                                textOverflow:"ellipsis",
                                width:"150px"
                                }}>
                                    {trolly.description}
                            </p>
                            <div style={{
                                display:"flex", 
                                justifyContent:"space-around", 
                                width:"80%"
                                }}>
                                <h5 style={{color:"black"}}>RS.{trolly.price}</h5>
                                <p style={{
                                    color:"rgb(162,129,140)", 
                                    fontSize:"12px", 
                                    textDecoration:"line-through"
                                    }}>
                                        {trolly.mrp}
                                </p>
                                <p style={{color:"rgb(255,157,90)", fontSize:"12px"}}>({trolly.off}% OFF)</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default Trollybags;