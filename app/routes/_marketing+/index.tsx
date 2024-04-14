import { type MetaFunction } from '@remix-run/node'
import { DataTable } from '#app/components/data-table/data-table.js'

export const meta: MetaFunction = () => [{ title: 'Todos' }]

export default function Index() {
	return (
		<main className="font-poppins grid h-full place-items-center">
			<DataTable columns={[]} data={[]} />
		</main>
	)
}
