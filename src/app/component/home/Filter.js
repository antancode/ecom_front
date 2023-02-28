import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import FilterBlock from '../../atom/product/FilterBlock';
import { server } from '../../config/axios'
import { filterdatas } from '../../redux/Action';

export default function Filter() {

    const [filterdata, setFilterdata] = useState(null);
    const [filterpoint, setFilterpoint] = useState({
        categorie: [],
        color: [],
        size: []
    });

    const dispatch = useDispatch();

    const cato = () => {
        const catol = document.getElementsByClassName('cato');
        let catarr = [];
        for (let index = 0; index < catol.length; index++) {
            if(catol[index].checked === true){
                catarr.push(parseInt(catol[index].value));
            }
            
        }
        setFilterpoint({
            ...filterpoint,
            categorie: catarr
        })

    }

    const calo = () => {
        const colo = document.getElementsByClassName('calo');
        let coloarr = [];
        for (let index = 0; index < colo.length; index++) {
            if(colo[index].checked === true){
                coloarr.push(parseInt(colo[index].value));
            }
            
        }
        setFilterpoint({
            ...filterpoint,
            color: coloarr
        })
    }

    const size = () => {
        const sizes = document.getElementsByClassName('size');
        let sizearr = [];
        for (let index = 0; index < sizes.length; index++) {
            if(sizes[index].checked === true){
                sizearr.push(parseInt(sizes[index].value));
            }
            
        }
        setFilterpoint({
            ...filterpoint,
            size: sizearr
        })
    }

    useEffect(() => {
        server.get('/product_filter')
            .then((response) => {
                setFilterdata(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
        dispatch(filterdatas(filterpoint));
    }, [setFilterdata, filterpoint]);


    return (
        <div className='filter'>
            <div className='header'>
                <div className='title'>Filter</div>
            </div>
            {
                filterdata !== null &&
                <FilterBlock title='Categorie' classcall='cato' filterdata={filterdata.categorie} handlerClick={cato} />
            }
            {
                filterdata !== null &&
                <FilterBlock title='Color' classcall='calo' filterdata={filterdata.color} handlerClick={calo} />
            }
            {
                filterdata !== null &&
                <FilterBlock title='Size' classcall='size' filterdata={filterdata.size} handlerClick={size} />
            }
        </div>
    )
}
