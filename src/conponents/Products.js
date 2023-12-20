import './style/Products.css';
import product1 from '../conponents/assets/product-1.png'
import product2 from '../conponents/assets/product-2.png'
import product3 from '../conponents/assets/product-3.png'
import product4 from '../conponents/assets/product-4.png'
import product5 from '../conponents/assets/product-5.png'
import product6 from '../conponents/assets/product-6.png'
import product7 from '../conponents/assets/product-7.png'
import product8 from '../conponents/assets/product-8.png'
import StarRating from './star';
export default function Products() {
    const productsData = [
        { img: product1, title: 'suspendise id volutpat', price: '$84.00', discount: '$99.00' },
        { img: product2, title: 'Lorem ipsum dolor', price: '$84.00', discount: '$99.00' },
        { img: product3, title: 'Proin sed nulla mi', price: '$84.00' },
        { img: product4, title: 'Aenean placerat', price: '$84.00', discount: '$99.00' },
        { img: product5, title: 'suspendise id volutpat', price: '$84.00', discount: '$99.00' },
        { img: product6, title: 'Lorem ipsum dolor', price: '$84.00', discount: '$99.00' },
        { img: product7, title: 'Proin sed nulla mi', price: '$84.00' },
        { img: product8, title: 'Aenean placerat', price: '$84.00', discount: '$99.00' },
    ];

    const renderProductColumns = () => {
        return productsData.map((product, index) => (
            <div key={index} className="col-6 col-md-4 col-xl-3 product-container">
                <div className='img'><img src={product.img} alt={product.title} /></div>
                <button className='card-button'>Add to card</button>
                <div className="product-details">
                    <div className="title">{product.title}</div>
                    <div className='rating'><StarRating /></div>
                    <div className="dolar">
                        <p className='discount'>{product.discount}</p>
                        <p className='price'>{product.price}</p>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="container-fluid products">
            <div className='items-product'>
                <div className="title">
                    <div className="franco">Franco</div>
                    <div className="feature">Featured items</div>
                    <div className="line-product"></div>
                </div>

                <div className='row'>
                    {renderProductColumns()}
                </div>
            </div>

        </div>
    );
}
