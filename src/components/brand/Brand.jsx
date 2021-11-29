import React from 'react'
import {groupImg} from './content'

const Brand = () => {
    return (
        <div className='brand section_padding'>
            {groupImg.map((item, index) => (
            <div key={item.alt+index}>
                <img src={item.img} alt={item.alt} />
            </div>
            ))}
        </div>
    )
}

export default Brand
