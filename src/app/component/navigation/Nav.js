import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

export default function Nav() {
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
