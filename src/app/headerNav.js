import Link from "next/link";

export const HeaderNav = () => {
  return (
    <header className=" py-8 bg-black lg:text-center grid grid-rows-1">
      <div className="grid grid-cols-2">
        <div className="">
          <Link href="/" className="text-2xl font-semibold duration-150 text-zinc-100 hover:text-white">EnvPartager</Link>
        </div>
        <div className="w-6/12">
          <nav>
            <ul className="grid grid-cols-2">
              <li>
                <Link href="/share" className="text-2xl font-semibold duration-150 text-zinc-100 hover:text-white">Compartir</Link>
              </li>
              <li>
                <Link href="#" className="text-2xl font-semibold duration-150 text-zinc-100 hover:text-white">Abrir</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
};
