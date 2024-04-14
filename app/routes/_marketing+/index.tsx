import { type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { columns } from '#app/components/data-table/columns'
import tasks from '#app/components/data-table/data/tasks.json'
import { DataTable } from '#app/components/data-table/data-table'
export const meta: MetaFunction = () => [{ title: 'Todos' }]
export async function loader() {
	return tasks
}

export default function Index() {
	const data = useLoaderData<typeof loader>()

	return (
		<main className="font-poppins grid h-full place-items-center">
			<DataTable columns={columns} data={data} />
		</main>
	)
}
