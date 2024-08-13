import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
			<div>
				Истринская область, село Онуфриево, ул. Молодёжная, дом 18
				<Link aria-label='Телефон конюшни' href='tel:+7-903-258-35-78'>
					+7-903-258-35-78
				</Link>
				<Link aria-label='Почта конюшни' href='mailto:safronovadunja@gmail.com'>
					safronovadunja@gmail.com
				</Link>
			</div>
			<aside>
				<p>Copyright © 2024 - разработано tezis.digital</p>
			</aside>
		</footer>
	)
}

export default Footer
