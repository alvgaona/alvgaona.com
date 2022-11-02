import Link from "next/link"

const Logo = (): JSX.Element => (
    <span className="font-mplus">
          <Link href="/">
            <span className="text-lg border-2 rounded-full p-1 border-black dark:border-zinc-400">
              <span className="font-bold">A</span><span className="font-normal">G</span>
            </span>
          </Link>
    </span>
)

export default Logo
