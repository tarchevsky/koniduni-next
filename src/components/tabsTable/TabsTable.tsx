import Table from '@/components/table/Table'
import tableData from '@/data/tables.json'
import FadeIn from '@/components/fadeIn/FadeIn'

const TabsTable = () => {
	return (
		<FadeIn
			role='tablist'
			className='cont tabs tabs-bordered dark:bg-base overflow-x-auto'
			style={{
				gridTemplateColumns: '1fr 1fr 1fr'
			}}
		>
			<input
				type='radio'
				name='my_tabs_1'
				role='tab'
				className='tab'
				aria-label='Часовые занятия'
				defaultChecked
			/>
			<div role='tabpanel' className='tab-content p-4'>
				<div className='overflow-x-auto'>
					<Table data={tableData.oneHour} />
				</div>
			</div>

			<input
				type='radio'
				name='my_tabs_1'
				role='tab'
				className='tab'
				aria-label='30-минутные занятия'
			/>
			<div role='tabpanel' className='tab-content p-4'>
				<Table data={tableData.thirtyMinutes} />
			</div>

			<input
				type='radio'
				name='my_tabs_1'
				role='tab'
				className='tab'
				aria-label='Мероприятия'
			/>
			<div role='tabpanel' className='tab-content p-4'>
				<Table data={tableData.events} />
			</div>
		</FadeIn>
	)
}

export default TabsTable
