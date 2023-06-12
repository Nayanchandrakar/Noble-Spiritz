'use client'
import {create} from 'zustand'

const userMenu = create(set  => ({
    isOpen:false,
    onClose:() => set(state => ({isOpen:false})),
    onOpen:() => set(state => ({isOpen:true}))
}))

export default userMenu