import Image from 'next/image'

export default function Home() {
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-4xl">Welcome to  
			<span className="dark:dark:text-indigo-500"> the new ecommerce experience. </span>
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">From small to large-scale industries.</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:dark:bg-indigo-500 rounded-full">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:dark:text-gray-50 dark:dark:border-gray-700 rounded-full">Learn more</button>
		</div>
	</div>
</section>
  )
}
