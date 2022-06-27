import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../styles/itemDetail.css'
import Header from "./Header";
import Footer from "./Footer";
import all from "../data/all";

const Item = () => {
    
    let { id } = useParams();

    const [item, setItem] = useState([])
    
    useEffect(() => {
        const previewItem = all.filter((item) => item.id === id)
        setItem(previewItem[0])
    }, [id])

    return (
        <div className="item-page">
            <Header />
            <div className="item-nav">
                <Link to='/shop'><button>Go Back</button></Link>
            </div>
            <div className="item-showcase">
                <img className="preview-image" src={item.image} alt={item.name}></img>
                <div className="preview-details">
                    <h1>{item.name}</h1>
                    <h2>${item.price} CAD</h2>
                    <button>Add to cart</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Item