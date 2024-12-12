import { Routes, Route } from "react-router-dom"
import Home from "../Body/Home"
// import Men from "../Body/Men"
import Login from "../Body/Login"
import ArrayRoutes from "./ArrayRoutes"
import Singleproduct from "../Pages/Singleproduct"

const AllRoutes = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/men" element={<Men/>} /> */}

            <Route path="/login" element={<Login/>} />

            {ArrayRoutes.map(({path, element}, index) => (
                <Route key={index} path={path} element={element}/>
            ))}

            <Route path="/:category/:id" element={<Singleproduct/>}/>

        </Routes>
        </>
    )
}

export default AllRoutes;