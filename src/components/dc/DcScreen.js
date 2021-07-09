import React from 'react'
import {HeroeList} from '../heroes/HeroeList';

export const DcScreen = () => {
    
    return (
        <div className="mt-3">
            <h1>DC Screen</h1>
            <hr/>
            <HeroeList publisher={'DC Comics'}></HeroeList>
        </div>
    )
}
