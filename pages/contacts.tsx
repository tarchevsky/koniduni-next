import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import ContactForm from '@/components/contactForm/ContactForm'
import Link from 'next/link'

const title = 'Контакты'

const ContactsPage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Описание страницы контактов' />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>{title}</h1>
				</main>
			</FadeIn>
			<FadeIn className='cont mb-40'>
				<div>
					Истринская область, село Онуфриево, ул. Молодёжная, дом 18
					<br />
					<Link aria-label='Телефон конюшни' href='tel:+7-903-258-35-78'>
						+7-903-258-35-78
					</Link>
					<br />
					<Link
						aria-label='Почта конюшни'
						href='mailto:safronovadunja@gmail.com'
					>
						safronovadunja@gmail.com
					</Link>
				</div>
			</FadeIn>
			<FadeIn className='cont mb-40'>
				<ContactForm title={title} />
			</FadeIn>
			<FadeIn className='cont mb-40'>
				<iframe
					src='https://yandex.ru/map-widget/v1/?um=constructor%3Aa6c325260e13de417089db3cc2c1ad69c6e2bcd74821cec84dba048a2cc8c4b9&amp;source=constructor'
					width='100%'
					height='400'
					className='rounded-box'
				/>
			</FadeIn>
		</>
	)
}

export default ContactsPage
