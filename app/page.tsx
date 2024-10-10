import Nav from "./components/Nav"

export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h1 className="font-black text-6xl">Country List</h1>
      <h3>A GI-AIWMD assignment project </h3>
      <Nav />

      <footer className='flex flex-col gap-5 justify-center items-center mt-6'>&copy; created by Usman Faisal </footer>
    </main>

  </>
  )
}
