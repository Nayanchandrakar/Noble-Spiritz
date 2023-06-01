import Image from 'next/image'


const Logo = () => {
    return(
        <Image
          className='rounded-full'
          alt='Logo_image'
          src="/logo.jpg"
          width={45}
          height={45}
        />
    )
}
export default Logo