import{useState} from 'react'
import data from './data';

const List = () =>{
    const[items,setItems] = useState(data)
    return(
        <section className='container'>
        {
            items.map((item) =>{
                const {id,name,category,price,img} = item
                return(
                    <div className='single-container' data-category={category} key={id}>
                            <img src={img} alt={name}className='product-image'></img>
                            <div className='product-info'>
                                <h3 className='product-name'>{name}</h3>
                                <p className='product-category'>{category}</p>
                                <p className='product-price'>${price}</p>
                            </div>
                            <button className='add-button'>Add Item</button>
                    </div>
                )
            })
        }
        </section>
    )
}

export default List;