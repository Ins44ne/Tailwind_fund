export function Part2() {
  return (
    <div className="container">
      <div className="w-4/5 my-0 mx-auto">
        <header className="flex flex-row gap-x-60 justify-center mt-20 bg-violet-400">
          <div className="hover:text-green-500 transition-colors duration-300 ease-in-out cursor-pointer bg-orange-400/80 px-10 py-3 shadow-2xl shadow-violet-900">
            Logo
          </div>
          <ul className="flex items-center gap-10">
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
          <button className="animate-bounce">Contact us</button>
        </header>
        <main className="grid grid-cols-3 gap-20 w-4/5 mt-10 my-0 mx-auto">
          <div className="blur-sm">Image</div>
          <div className="rotate-12">Image</div>
          <div className="">Image</div>
          <div className="">Image</div>
          <div className="">Image</div>
          <div className="">Image</div>
          <div className="">Image</div>
          <div className="">Image</div>
          <div className="">Image</div>
        </main>
      </div>
    </div>
  )
}
