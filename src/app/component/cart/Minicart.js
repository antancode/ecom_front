import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import CartItem from '../../atom/cart/CartItem';
import { cartdatas } from '../../redux/Action';

export default function Minicart() {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.minicart);

    let arr = JSON.parse(localStorage.getItem('cart'));


    const minidata = (data.length > 0) ? data : (arr === null) ? [] : arr ;

    const counts = {};
    minidata.forEach(function (x) { counts[x.id] = (counts[x.id] || 0) + 1; });
          
    let cardata = [];
    let unique = {};

    for (let i in minidata) {
        let id = minidata[i]['id'];
        unique[id] = minidata[i];
    }
    for (let i in unique) {
        cardata.push(unique[i]);
    }
    
    const clearcart = () => {

        localStorage.removeItem('cart');
        dispatch(cartdatas([]));
    }


    return (
        (cardata.length > 0) ?
            <div className='mincart'>
                {
                    cardata.map((minc, index) => {
                        return (
                            <CartItem cart={minc} count={counts[minc.id]} key={index} />
                        )
                    })
                }
                <Button onClick={ () => clearcart()}>Clear</Button>
            </div>
        : null
    )
}
