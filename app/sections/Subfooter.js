import Brand from './Brand'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  {
    title: 'Contact Us',
    path: 'https://bookitngo.in/home/ContactUs',
  },
  {
    title: 'About Us',
    path: 'https://bookitngo.in/home/AboutUs',
  },
  {
    title: 'Disclaimer',
    path: 'https://bookitngo.in/home/Disclaimer',
  },
  {
    title: 'Privacy Policy',
    path: 'https://bookitngo.in/home/Privacy',
  },
  {
    title: 'Cookies',
    path: 'https://bookitngo.in/home/Cookies',
  },
  {
    title: 'Terms of use',
    path: 'https://bookitngo.in/home/TermsandConditions',
  },
]

export default function Subfooter() {
  return (
    <footer className={'bg-[#F4F5FE]'}>
      <div
        className={
          'mx-auto grid w-fit max-w-[1200px] gap-8 p-4 md:grid-cols-5 mmd:p-8 pt-32'
        }
      >
        <div className="flex flex-col gap-8 md:col-span-2">
          <Brand size={'lg'} />
          <div className={'text-sm font-medium'}>
            As a leading travel technology company, we deliver innovative
            solutions to the travel industry. We strive to make travel easier,
            more accessible, and more enjoyable.
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-semibold">FOLLOW US</div>
            <div className="mt-4 flex gap-4 text-2xl">
              <a
                href="https://www.facebook.com/bookitngoapp/"
                target={'_blank'}
                rel={'noreferrer noopener'}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/bookitngo/"
                target={'_blank'}
                rel={'noreferrer noopener'}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCrkJV_aI7opkflzaPOySGEA"
                target={'_blank'}
                rel={'noreferrer noopener'}
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-medium  md:col-span-2">
          <div className="mb-4 text-sm font-bold">NEED HELP?</div>
          <div className={'text-xs'}>Contact Us</div>
          <a href={"tel:+1 949 329 8181"} className={'mb-4 text-sm text-blue-600'}>
            +1 949 329 8181
          </a>
          <div className={'text-xs'}>Email</div>
          <a href={"mailto:support@bookitngo.com"} className={'mb-4 text-sm text-blue-600'}>
            support@bookitngo.com
          </a>
          <div className="mb-4 text-sm font-semibold">
            Payments and Security.
          </div>
          <Image
            src={'/payments.png'}
            alt={''}
            width={400}
            height={138}
            className={"max-w-[245px]"}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-sm font-bold">COMPANY</div>
          {links.map((link) => (
            <Link className={'text-xs'} key={link.title} href={link.path}>
              {link.title}
            </Link>
          ))}
        </div>
        <div
          className={'text-center font-semibold text-theme-grey md:col-span-5'}
        >
          © {new Date().getFullYear()} Bookitngo All rights reserved.
        </div>
      </div>
    </footer>
  )
}
