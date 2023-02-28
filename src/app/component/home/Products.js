import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import Item from '../../atom/product/Item'
import { server } from '../../config/axios';

export default function Products() {

    const [productlist, setProductlist] = useState(null);
    const {data} = useSelector(state => state.filter);


    useEffect(() => {
        
        server.get('/products', {params : {filter : JSON.stringify(data), min:0, max: 16}})
        .then((response) => {
            if(response.data.result.success === true){
            setProductlist(response.data.result.result);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }, [setProductlist, data]);


    return (
        <div className='products'>
            {
                productlist !== null &&

                productlist.map((product, index) => {

                    return (
                        <Item product={product} key={index} />
                    )
                    
                })
            }
            
        </div>
    )
}
