import React from 'react'

export default function FilterBlock({title, classcall, filterdata, handlerClick}) {
  return (
    <div className='section'>
        <div className='title'>{title}</div>
        {

            filterdata.map((ca, index) => {
                return (
                    <div className='block' key={index}>
                        <label>
                            <input type='checkbox' className={classcall} value={ca.id} onChange={ (e) => handlerClick()} />
                            <span>{ca.name}</span>
                        </label>
                    </div>
                )
            })
        }

    </div>
  )
}
