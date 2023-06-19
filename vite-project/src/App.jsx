import axios from 'axios'
import {AiOutlineSearch, AiOutlineHeart, AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {BsBagFill} from 'react-icons/bs'
import { useEffect, useState  } from 'react'
import Product from '../../Product'
import './App.css'
import Category from '../../Category'
function App() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    const url = "https://fakestoreapi.com/products"
    const getAllData = () => {
         axios.get(url)
        .then(res=> setData(res.data))
    }
    // console.log(data);
    const newData1 = data.slice(0,3)
    const newData2 = data.slice(3,6)
    const newData3 = data.slice(6,9)
    const newData4 = data.slice(9,12)
    const newData5 = data.slice(12,15)
    const newData6 = data.slice(15,18)
    const newData7 = data.slice(18,20)
    const dataArray = [newData1, newData2, newData3, newData4, newData5, newData6, newData7]
    const nextItem=()=>{
        setCount(count=> count +1)
    }
    
    const newDataArray = dataArray[count % dataArray.length]
    // console.log(newDataArray);
    
    const prevItem=()=>{
        count===0?setCount(0):setCount(count=> count +1)
    }



    useEffect(()=>{
         setInterval(() => {
         setCount(count=> count+= 1)
        },5000);
        getAllData()
    },[])

 return(
  <div className='Main'>
    <section className='Header'>
        <div className='headerHolder'>
        <h1>KareemEcoms</h1>
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>

        <div className="headerIcons">
            <AiOutlineSearch className='Icons' />
            <BsBagFill className='Icons'/>
            <AiOutlineHeart className='Icons'/>
        </div>
        </div>
    </section>

    <section className='HomeView'>
        <div className="arrowNavs"><AiOutlineArrowLeft className='arrow' onClick={prevItem}/></div>
        <div className='homeWrapper'>
                {
                  newDataArray.map((ele)=>(

                        <div className='ImageBox' key={ele.id}> 
                         <img src={ele.image} alt="" /> 
                         <h4>{ele.title}</h4>
                         <button className='Btn'>Shop Now</button>
                         </div>     
                    ))
                }
        </div>
        <div className="arrowNavs"><AiOutlineArrowRight className='arrow' onClick={nextItem}/></div>
    </section>
    <Category/>
    
    <div className="Product">
            <div className='product'>
            <h1>Our Product</h1>
            <div className="line"></div>
        </div>
            </div>
                <Product/>
             </div>  

 ) 
}
export default App