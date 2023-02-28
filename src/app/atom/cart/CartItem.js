import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export default function CartItem({ cart, count }) {

    let total = cart.sale_price * count;
    return (
        
        <Card className='cart'>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src={cart.image}
                />
                <Card.Header>{cart.name}</Card.Header>
                <Card.Meta>
                    <div className='qty'>QTY : {count}</div>
                    <div className='sale-price'>Sale price : {cart.sale_price}</div>
                    <div className='total-price'>total : {total}</div>
                </Card.Meta>
            </Card.Content>
        </Card>
    )
}
