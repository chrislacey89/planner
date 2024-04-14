import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Todos' }]

export default function Index() {
	return (
		<main className="font-poppins grid h-full place-items-center">yolo</main>
	)
}
