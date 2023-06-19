import { NextResponse } from 'next/server'

export function middleware(req) {
    const url = req.url
    const verify = req.cookies.get('token')

    console.log(verify)

    
    if(!verify && url.includes('/blog')){
        return NextResponse.redirect('http://localhost:4000/login')
    }

    if(verify && url.includes('/login' || '/SignUp')){
        return NextResponse.redirect('http://localhost:4000')
    }
}
   
