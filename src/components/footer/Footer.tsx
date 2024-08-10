import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaSquarePhone } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

const Footer = () => {
	return (
		<footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
			{/*<nav>*/}
			{/*	<div className='grid grid-flow-col gap-4'>*/}
			{/*		<Link href='/' aria-label='Telegram link'>*/}
			{/*			<FaTelegramPlane className='fill-primary' size={25} />*/}
			{/*		</Link>*/}
			{/*		<Link href='/' aria-label='Whatsapp link'>*/}
			{/*			<IoLogoWhatsapp className='fill-primary' size={25} />*/}
			{/*		</Link>*/}
			{/*		<Link href='/' aria-label='Phone link'>*/}
			{/*			<FaSquarePhone className='fill-primary' size={25} />*/}
			{/*		</Link>*/}
			{/*	</div>*/}
			{/*</nav>*/}
			<aside>
				<p>Copyright © 2024 - разработано tezis.digital</p>
			</aside>
		</footer>
	)
}

export default Footer
