import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Item({product}) {
    
    return (
        <Card className='items' as={Link} to={`/product/${product.id}`}>
            <Image src={product.image}  wrapped ui={false} />
            <Card.Content>
                <Card.Header>{product.name}</Card.Header>
                <Card.Meta>
                    <span className='sale-price'>Sale Price : {product.sale_price}</span>
                    <span className='actual-price'> Actual Price : {product.actual_price}</span>
                </Card.Meta>                
                <Card.Description>{product.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                {
                    product.categorie_name !== null &&
                    <Label>{product.categorie_name}</Label>
                }
                {
                    product.color_name !== null &&
                    <Label>{product.color_name}</Label>
                }
                {
                    product.size_name !== null &&
                    <Label>{product.size_name}</Label>
                }
            
            </Card.Content>
        </Card>
    )
}
