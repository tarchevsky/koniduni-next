import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import Carousel from '@/components/carousel/Carousel'

const title = 'Главная'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<FadeIn className='cont'>
				<Carousel />
			</FadeIn>
			<FadeIn className='cont mb-16'>
				<h2 className='text-4xl mb-8'>Наши цены</h2>
				<p className='text-lg'>
					Прогулки и занятия - будни 1400р час / выходные 1600р час
				</p>
				<p className='text-lg'>
					Двухчасовые прогулки - будни 2800р час / выходные 3200р час
				</p>
				<p className='text-lg'>
					Конкурная тренировка - будни 2100р час / выходные 2400р час
				</p>
				<p className='text-lg'>
					Катание в санях с лошадью - 5000р (40 минут) - вместительность - 3
					человека
				</p>
				<p className='text-lg'>
					Катание на собачей упряжке 1500р с человека (круг 15 минут)
				</p>
				<p className='text-lg'>
					Катание на собачей упряжке 1500р с человека (круг 15 минут)
				</p>
				<p className='text-lg'>
					Выезд лошадей в санях или для съёмок, заказ упряжки собак на своё
					мероприятие, выезд пони или контактного зоопарка от 15 - 20 т.р. с
					доставкой<sup>*</sup>
				</p>
				<p className='mt-8'>
					<sup>
						*Стоимость обговаривается индивидуально ,цена зависит от количества
						животных,времени и места проведения мероприятия.
					</sup>
				</p>
			</FadeIn>
		</>
	)
}

export default HomePage
