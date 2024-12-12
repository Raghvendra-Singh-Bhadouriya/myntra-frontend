import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./Pages.css"

const Womenslippers = () => {
    
    const [womenSlippers, setWomenSlippers] = useState([])

    async function fetchedWomenSlippers(){
        try {
            const res = await axios({
                method:"get",
                url:`https://myntra-backend-2-o916.onrender.com/fetched-product/womenslippers`
            })
            const {data} = res.data
            console.log(data)
            setWomenSlippers(data)
        } catch (error) {
            console.log("Error fetching women shoes", error.message)
        }
    }

    useEffect(() => {
        fetchedWomenSlippers()
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
            {womenSlippers.map((slippers) => {
                return(
                    <>
                    <Link style={{textDecoration:"none"}} to={`/${slippers.category}/${slippers._id}`} key={slippers.id}>
                    <div className="card-container">
                        <div style={{width:"100%"}}>
                            <img style={{width:"100%", borderRadius:"10px"}} src={slippers.img}/>
                        </div>
                        <div style={{padding:"0% 5% 0% 5%", lineHeight:"20px"}}>
                            <h4 style={{color:"black"}}>{slippers.title}</h4>
                            <p style={{fontSize:"12px", color:"rgb(83,87,121)", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{slippers.description}</p>
                            <div style={{display:"flex", justifyContent:"space-around", width:"80%"}}>
                                <h5 style={{color:"black"}}>RS.{slippers.price}</h5>
                                <p style={{color:"rgb(162,129,140)", fontSize:"12px", textDecoration:"line-through"}}>{slippers.mrp}</p>
                                <p style={{color:"rgb(255,157,90)", fontSize:"12px"}}>({slippers.off}% OFF)</p>
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

export default Womenslippers;