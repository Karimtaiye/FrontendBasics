import { useState, useEffect } from 'react'
import axios from 'axios'
const WomensClothing = () =>{
    const [data, setData] = useState([])
    const url = "https://fakestoreapi.com/products"
    const getAllData = () => {
         axios.get(url)
        .then(res=> setData(res.data))
    }
    useEffect(()=>{
        getAllData()
    },[])
    const womenOnly = data.filter((ele)=>ele.category==="women's clothing")
    console.log(womenOnly);
    return(
        <div className="Allproduct">
            <div className="CardWrapper">
                {
                    womenOnly.map((ele)=>(
                        <div className="Cards" key={ele.id}>
                        <div className="ImageCrad">
                        <div className="balls">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <img src={ele.image} alt="" />
                           
                        </div>
                        <div className="PriceCard">
                            <span>{ele.title}</span>
                            <p>$:{ele.price}</p>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
export default WomensClothing