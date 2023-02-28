import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Search from './Search';

export default function Nav() {
    const [activeItem, setActiveItem] = useState('editorials');

    const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })
    return (
        <div className='main-header'>
            <div className='nav'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </div>
            
            <div className='search'>
                <Search />
            </div>
        </div>
    )
}
