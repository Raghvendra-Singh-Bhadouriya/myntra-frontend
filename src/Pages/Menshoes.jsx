import { useState, useEffect } from "react"
import axios from "axios"
import "./Pages.css"


const Menshoes = () => {
    const [menShoes, setmenShoes] = useState([])

    async function fetchedmenShoes(){
        try {
            const res = await axios({
                method:"get",
                url:`https://myntra-backend-2-o916.onrender.com/fetched-product/menshoes`
            })
            const {data} = res.data
            console.log(data)
            setmenShoes(data)
        } catch (error) {
            console.log("Error fetching men shoes", error.message)
        }
    }

    useEffect(() => {
        fetchedmenShoes()
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
            {menShoes.map((shoes) => {
                return(
                    <>
                    <div className="card-container">
                        <div style={{width:"100%"}}>
                            <img style={{width:"100%", borderRadius:"10px"}} src={shoes.img}/>
                        </div>
                        <div style={{padding:"0% 5% 0% 5%", lineHeight:"20px"}}>
                            <h4>{shoes.title}</h4>
                            <p style={{width:"150px" ,fontSize:"12px", color:"rgb(83,87,121)", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{shoes.description}</p>
                            <div style={{display:"flex", justifyContent:"space-around", width:"80%"}}>
                                <h5>RS.{shoes.price}</h5>
                                <p style={{color:"rgb(162,129,140)", fontSize:"12px", textDecoration:"line-through"}}>{shoes.mrp}</p>
                                <p style={{color:"rgb(255,157,90)", fontSize:"12px"}}>({shoes.off}% OFF)</p>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default Menshoes;