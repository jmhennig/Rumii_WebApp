// ProductFetcher

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../Models/ProductList'; 
import ProductPage from './ProductPage.js'

const ProductFetcher = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams(); // Fetch the productId from URL params

    useEffect(() => {
        // Find the product in the productList based on productId
        const foundProduct = productsData.find(item => item.id === parseInt(productId));
        
        // Update the product state with the found product
        setProduct(foundProduct);
    }, [productId]); // dependency array

    return (
        <div>
            {product !== null ? ( // Check if product is not null
                <ProductPage
                    productName={product.name}
                    productPop={product.pop}
                    productPrice={product.price}
                    productRating={product.rating}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductFetcher;