'use client'
import {useCallback, useState} from 'react'
import {toogleLinks} from '../../../constants/index.js'

import Navcontainer from './Navcontainer.jsx'


const Navigation = () => {

    const [active , setactive] = useState('/')


    const handleActiveButton = useCallback((href) => {
        setactive(href)
    },[])


    return(
        <div 
            className="
                flex-row
                gap-2
                items-center
                hidden
                xl:flex
        ">
            {toogleLinks?.map((elem) => {
                return(
                    <Navcontainer
                        handleActiveButton={handleActiveButton}
                        elem={elem}
                        acitve={active}
                    />
                )
            })}
        </div>
    )
}
export  default Navigation