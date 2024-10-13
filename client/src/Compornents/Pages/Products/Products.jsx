import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Products.css'

const Products = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    const products = [
        { id: 1, name: "MP5 Player Double Din 7 Inch", price: "Rs.10500.00", img: "./product1.jpg" },
        { id: 2, name: "Android 7.1 Inch Double Din Stereo", price: "Rs.16000.00", img: "./product2.jpg" },
        { id: 3, name: "Android 10.1 Inch Double Din Stereo", price: "Rs.20000.00", img: "./product3.jpg" },
        { id: 4, name: "Car 9 Inch Android Player Set Head", price: "Rs.19500.00", img: "./product4.jpg" },
        { id: 5, name: "10.26 Inch Touch Screen MP5 Player", price: "Rs.32000.00", img: "./product5.png" },
        { id: 6, name: "2 Din 7 Inch Car Android Player", price: "Rs.18000.00", img: "./product6.jpg" },
        { id: 7, name: "TFT 5.5 Inch Color Car Monitor", price: "Rs.6500.00", img: "./product7.jpg" },
        { id: 8, name: "Android Set 10 Inch Touch Screen", price: "Rs.46500.00", img: "./product8.jpg" },
        { id: 9, name: "LENOVO 10 Inch Android Car Player", price: "Rs.30000.00", img: "./product9.jpg" },
        { id: 10, name: "Toyota Vitz Stereo Multimedia Player", price: "Rs.43500.00", img: "./product10.jpg" },
        { id: 11, name: "MP5 Player & Reverse Camera", price: "Rs.16500.00", img: "./product11.jpg" },
        { id: 12, name: "Nakamichi Android Player", price: "Rs.69000.00", img: "./product12.jpg" },
        { id: 13, name: "Alpine Android Player 10 Inch", price: "Rs.75000.00", img: "./product13.jpg" },
        { id: 14, name: "YD 9 Inch Android Player", price: "Rs.75000.00", img: "./product14.jpg" },
        { id: 15, name: "MP5 Player T-Model", price: "Rs.25000.00", img: "./product15.png" },
        { id: 16, name: "Car DVD Player (Universal)", price: "Rs.31500.00", img: "./product16.jpg" },
        { id: 17, name: "Car Stereo with CD/DVD Player", price: "Rs.16500.00", img: "./product17.jpg" },
        { id: 18, name: "7 Inch Rearview LED Monitor", price: "Rs.13000.00", img: "./product18.jpg" },
        { id: 19, name: "Car MP5 Player Frame Universal", price: "Rs.1950.00", img: "./product19.jpg" },
        { id: 20, name: "9 Inch Novelty Multimedia Player", price: "Rs.15500.00", img: "./product20.jpg" },
    ];

    if (loading) {
        return (
            <div
                id="spinner"
                className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
                style={{ zIndex: 9999 }}
            >
                <div
                    className="spinner-border text-primary"
                    style={{ width: '3rem', height: '3rem' }}
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span> {/* Updated from sr-only */}
                </div>
            </div>
        );
    }

    return (
        <div>
            <div
                className="container-fluid page-header mb-5 p-0"
                style={{ backgroundImage: 'url(/Phead5.jpg)' }} // Update path as needed
            >
                <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown normal-style">Products</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item">
                                    <Link to="/" className="nav-item nav-link normal-style" style={{ color: 'white' }}>Home</Link>
                                </li>
                                <li className="breadcrumb-item text-white active normal-style" aria-current="page">
                                    Products
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container">
                <header className="my-4">


                    {/* Search Bar */}
                    <form className="input-group mb-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            id="searchInput"
                            className="form-control"
                            placeholder="Search for products..."
                            onKeyUp={searchProducts}
                        />
                    </form>
                </header>

                <div className="row">
                    {products.map((product) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                            <div className="card h-100">
                                <img
                                    src={product.img}
                                    className="card-img-top"
                                    alt={product.name}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}</p>
                                    <div className="mt-auto">
                                        <button className="btn btncustom w-100 mb-2">Add to Cart</button> {/* btn-block updated to w-100 */}
                                        <button className="btn btncustom2 w-100">Buy Now</button> {/* btn-block updated to w-100 */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const searchProducts = () => {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.getElementsByClassName('card');

    Array.from(productCards).forEach((card) => {
        const productName = card.getElementsByClassName('card-title')[0].textContent.toLowerCase();
        if (productName.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};

export default Products;
