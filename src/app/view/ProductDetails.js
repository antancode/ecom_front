import React, { useEffect, useState } from 'react'
import {Button, Image, Label } from 'semantic-ui-react';
import { useParams, redirect } from 'react-router-dom';
import { server } from '../config/axios';
import { useDispatch } from 'react-redux';
import { cartdatas } from '../redux/Action';

export default function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const dispatch = useDispatch();

    const addtocart = (product) => {
        let arr = JSON.parse(localStorage.getItem('cart'));
        if(arr === null){
            arr = [];
        }
        arr.push(product);
        localStorage.setItem('cart', JSON.stringify(arr));
        dispatch(cartdatas(arr));
    }

    useEffect(() => {
        server.post("/product_detail", {id:id})
        .then((response) => {
            setProduct(response.data.result.result);
        }).catch((err) => {
            console.log(err);
        })
    }, [id, setProduct])

    
    return (
        <div className='product_detail'>
            {
                product !== null &&
                
                <>
                <div className='image-block'>
                    <div className='img'>
                        <Image src={product[0].image} />
                    </div>
                </div>
                <div className='content-block'>
                    <h2>{product[0].name}</h2>
                    <p>{product[0].description}</p>
                    <div className='price-detail'>
                        <div className='sale-price'>Sale Price : {product[0].sale_price}</div>
                        <div className='actual-price'>Actual Price : {product[0].actual_price}</div>
                    </div>
                    
                    <div className='product_attribute'>
                        {
                            product[0].categorie_name !== null &&
                            <Label>{product[0].categorie_name}</Label>
                        }
                        {
                            product[0].color_name !== null &&
                            <Label>{product[0].color_name}</Label>
                        }
                        {
                            product[0].size_name !== null &&
                            <Label>{product[0].size_name}</Label>
                        }
                    </div>
                    <div className='product_btn'>
                        <Button primary onClick={ () => addtocart(product[0])}>Add to Cart</Button>
                    </div>
                </div>
                </>
            }
        </div>
    )
}
