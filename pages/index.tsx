import type { NextPage } from 'next'
import Head from 'next/head'
import TareasContainer from '../components/TareasContainer'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>Tareas / Pruebas</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex h-32 items-center justify-center py-2 text-5xl text-red-300">
        <h1>Tareas / pruebas</h1>
      </div>
      <div className="flex items-center justify-center py-2 text-neutral-50">
        <TareasContainer />
      </div>
    </div>
  )
}

export default Home
