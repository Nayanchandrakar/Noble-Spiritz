'use client'
import {create} from 'zustand'

const userAuth = create(set  => ({
    userCredentials:null, 
    isAuth:false,

    isNotAuthenticated:() => set(state => ({
        isAuth:false,
    })),

    setisAuth:() => set(state => ({
        isAuth:true,
    })),

    setUser:(data) => set(state => ({
        userCredentials:data
    })),

    Emptyuser:() => set(state => ({
        userCredentials:null,
    }))
    
}))

export default userAuth