import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, EffectFade } from 'swiper/modules'
import styles from './Carousel.module.scss'
import cn from 'clsx'
import FadeIn from '@/components/fadeIn/FadeIn'

import Image from 'next/image'

const Carousel = () => {
	return (
		<FadeIn className='mb-16'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true
				}}
				navigation={true}
				effect={'fade'}
				modules={[EffectFade, Pagination, Navigation]}
				className={cn(styles.carousel, 'carousel')}
			>
				<SwiperSlide>
					<div className='relative h-full flex flex-col items-center justify-center rounded-box'>
						<Image
							className='absolute top-0 left-0 h-full w-full rounded-box -z-10 brightness-50'
							src='/s3/slider/hi.jpg'
							alt='more-dark'
							width={1000}
							height={1000}
							style={{
								objectFit: 'cover'
							}}
							quality={10}
						/>
						<div className='font-thin md:text-5xl text-white'>
							Мы - конная ферма в<br /> Московской области,
							<br /> в селе Онуфриево
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative h-full flex flex-col items-center justify-center rounded-box'>
						<Image
							className='absolute top-0 left-0 h-full w-full rounded-box -z-10 brightness-50'
							src='/s3/slider/hey-amigo.jpg'
							alt='forest-river'
							width={1000}
							height={1000}
							style={{
								objectFit: 'cover'
							}}
							quality={10}
						/>
						<div className='font-thin md:text-5xl text-white'>
							Выезжаем на праздники, <br />
							ходим в конные походы
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative h-full flex flex-col items-center justify-center rounded-box'>
						<Image
							className='absolute top-0 left-0 h-full w-full rounded-box -z-10 brightness-50'
							src='/s3/slider/field-sun.jpg'
							alt='fog-sea'
							width={1000}
							height={1000}
							style={{
								objectFit: 'cover'
							}}
							quality={10}
						/>
						<div className='font-thin md:text-5xl text-white'>
							Обучаем детей взрослых
							<br />
							кататься на лошадях
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</FadeIn>
	)
}

export default Carousel
