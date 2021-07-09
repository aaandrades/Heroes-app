import React from 'react'
import {HeroeList} from '../heroes/HeroeList';

export const MarvelScreen = () => {
    return (
        <div className="mt-3">
            <h1>Marvel Screen</h1>
            <hr/>
            <HeroeList publisher={'Marvel Comics'}></HeroeList>
        </div>
    )
}
