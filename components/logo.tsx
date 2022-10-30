import Link from "next/link"

export default (): JSX.Element => (
    <li className="font-mplus">
          <Link href="/">
            <span className="text-lg border-2 rounded-full p-1 border-black">
              <span className="font-bold">A</span><span className="font-normal">G</span>
            </span>
          </Link>
    </li>
)