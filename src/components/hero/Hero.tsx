import { HeroProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const Hero = ({ title, buttonText, alt, subtitle, src }: HeroProps) => {
	return (
		<main className='hero cont h-[100svh]'>
			<div className='relative hero-content flex-col-reverse items-center lg:flex-row'>
				<div className='md:relative z-10 flex flex-col gap-4 text-center'>
					<h1 className='text-5xl font-extrabold'>{title}</h1>
					<p>В конюшню звоните по телефону:</p>
					<Link href='tel:+7-903-258-35-78'>+7-903-258-35-78</Link>
					{subtitle ? <p>{subtitle}</p> : null}
					{buttonText ? (
						<button className='btn btn-primary btn-lg mt-3'>
							{buttonText}
						</button>
					) : null}
				</div>
			</div>
		</main>
	)
}

export default Hero
