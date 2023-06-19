import AllProduct from './AllProduct'
import MensClothing from './vite-project/src/MenClothing'
import WomensClothing from './vite-project/src/WomensClothing'
import JewelryProduct from './Jewelry'
import ElectronicsProducts from './Electronics'
import { useState  } from 'react'
const Product = () =>{
    const [alProduct, setAlProduct] = useState(true)
    const [men, setmen] = useState(false)
    const [women, setWomen] = useState(false)
    const [electronics, setElectronics] = useState(false)
    const [jewelry, setJewelry] = useState(false)
    const AlProduct = () =>{
        setAlProduct(true)
        setmen(false)
        setWomen(false)
        setJewelry(false)
        setElectronics(false)
    }  
     const Men = () =>{
        setAlProduct(false)
        setmen(true)
        setWomen(false)
        setElectronics(false)
        setJewelry(false)
    }
    const Women = () =>{
        setAlProduct(false)
        setmen(false)
        setWomen(true)
        setElectronics(false)
        setJewelry(false)
    }
    const Jewelry = () =>{
        setAlProduct(false)
        setmen(false)
        setWomen(false)
        setElectronics(false)
        setJewelry(true)
    }
    const Electronics = () =>{
        setAlProduct(false)
        setmen(false)
        setWomen(false)
        setElectronics(true)
        setJewelry(false)
    }
    return(
        <>
                <section className='ProductItems'>
        <div className="productList">
        <ul>
            <li className={alProduct?'Active':null} onClick={AlProduct}>AllProduct</li>
            <li className={men?'Active':null} onClick={Men}>Men's Clothings</li>
            <li className={women?'Active':null} onClick={Women}>Women's Clothings</li>
            <li className={jewelry?'Active':null} onClick={Jewelry}>Jewelries</li>
            <li className={electronics?'Active':null} onClick={Electronics}>Electronics</li>
        </ul>
        <button className='FilterBtn'>Filter</button>
        </div>
        
    </section>
    {
        alProduct?(<AllProduct/>):
        men?<MensClothing/>:
        women?<WomensClothing/>:
        jewelry?<JewelryProduct/>:
        electronics?<ElectronicsProducts/>:null
    }
    </>
    )
}
export default Product