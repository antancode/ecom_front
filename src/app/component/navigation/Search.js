import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Search } from 'semantic-ui-react'
import { server } from '../../config/axios';

export default function SearchResult() {

    const [searchdata, setSearchdata] = useState(null);
    const navigate = useNavigate();
   
    function debounce(func, timeout = 600) {
        let timer;
        return (args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func(args); }, timeout);
        };
    }
    function saveInput(args) {
        server.post('/product_search', {search: args}).then((response) => {
            setSearchdata(response.data.result.result);
        }).catch((err) => {
            console.log(err);
        })
    }
    const searhquery = debounce(saveInput);

    const searchselect = (e, {result}) => {
        console.log('/product/'+result.id);

        navigate('/product/'+result.id);
    }
  return (
    <div>
        <Search
          placeholder='Search...'
          results={searchdata}
          onResultSelect={searchselect}
          onSearchChange={(e, data) => searhquery(data.value)}
        />
    </div>
  )
}
