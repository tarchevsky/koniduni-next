import { NextPage } from 'next'
import Hero from '@/components/hero/Hero'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<FadeIn className='cont'>
				<Hero title='Cайт в разработке' />
			</FadeIn>
		</>
	)
}

export default HomePage
