'use client'
import Container from '../Container';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from '../Navbar/SocialIcons';


const Footer = () => {


    return (
        <footer className="bg-gradient-to-r from-gray-100 via-[#fa34a1]/[.2] to-gray-100">
            <Container>
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
              <Image 
              src="/logo.jpg" 
              className="mr-5 rounded-full "
              width={50} 
              height={60} 
              alt="logo"
              />
                <p className="max-w-xs mt-4 text-sm text-gray-600">
        A Social mission committed to
        100% Free Job Skills Training
        from expert instructors along with
        100% Free Material.
        501 (c) (3) non-profit/charity
                </p>
                <div className="flex mt-8 space-x-6 text-gray-600">
                    <SocialIcons/>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="font-medium">
                    Company
                  </p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <Link className="hover:opacity-75" href="/"> About </Link>
                    <Link className="hover:opacity-75" href="/"> Meet the Team </Link>
                    <Link className="hover:opacity-75" href="/"> History </Link>
                    <Link className="hover:opacity-75" href="/"> Careers </Link>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">
                    Services
                  </p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <Link className="hover:opacity-75" href="/"> 1on1 Coaching </Link>
                    <Link className="hover:opacity-75" href="/"> Company Review </Link>
                    <Link className="hover:opacity-75" href="/"> Accounts Review </Link>
                    <Link className="hover:opacity-75" href="/"> HR Consulting </Link>
                    <Link className="hover:opacity-75" href="/"> SEO Optimisation </Link>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">
                    Helpful Links
                  </p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <Link className="hover:opacity-75" href="/"> Contact </Link>
                    <Link className="hover:opacity-75" href="/"> FAQs </Link>
                    <Link className="hover:opacity-75" href="/"> Live Chat </Link>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">
                    Legal
                  </p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <Link className="hover:opacity-75" href="/"> Privacy Policy </Link>
                    <Link className="hover:opacity-75" href="/"> Terms &amp; Conditions </Link>
                    <Link className="hover:opacity-75" href="/"> Returns Policy </Link>
                    <Link className="hover:opacity-75" href="/"> Accessibility </Link>
                  </nav>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-800">
              © 2022 Comany Name
            </p>
          </div>
        </Container>
        </footer>
    );
};

export default Footer;