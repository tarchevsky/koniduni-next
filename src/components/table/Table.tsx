import { TableProps } from '@/types'

const Table = ({ data }: TableProps) => {
	const headers = Object.keys(data[0])

	return (
		<table className='table'>
			<thead>
				<tr>
					{headers.map((header, headerIndex) => (
						<th
							key={header}
							style={headerIndex === 0 ? { width: '550px' } : {}}
						>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{headers.map((header, cellIndex) => (
							<td
								key={`${rowIndex}-${header}`}
								style={cellIndex === 0 ? { width: '550px' } : {}} // Задаем ширину первой колонке
							>
								{row[header]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
export default Table
