import Link from "next/link";

export const HeaderNav = () => {
  return (
    <header className=" py-8 bg-black lg:text-center grid grid-rows-1">
      <div className="grid grid-cols-2">
        <div className="">
          <Link href="/" className="text-xl  duration-150 text-zinc-100 hover:text-white font-bold">EnvPartager</Link>
        </div>
        <div className="w-11/12">
          <nav className="flex justify-end">
            <ul className="grid grid-cols-2">
              <li>
                <Link href="/share" className="text-lg font-semibold duration-150 text-zinc-100 hover:text-white font-light pr-3">Compartir</Link>
              </li>
              <li>
                <Link href="#" className="text-lg font-semibold duration-150 text-zinc-100 hover:text-white font-light">Abrir</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
};
