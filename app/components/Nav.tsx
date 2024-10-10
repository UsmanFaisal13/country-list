'use client'
import Link from "next/link"

export default function Nav() {
    return (

        <nav className='flex flex-col gap-5 justify-center items-center mt-6'>
            <Link href="/pakistan" className='bg-neutral-800 p-2 rounded-lg w-32 hover:bg-neutral-600 transition-colors flex justify-center align-middle'>Pakistan</Link>
            <Link href="/india" className='bg-neutral-800 p-2 rounded-lg w-32 hover:bg-neutral-600 transition-colors flex justify-center align-middle'>India</Link>
            <Link href="/china" className='bg-neutral-800 p-2 rounded-lg w-32 hover:bg-neutral-600 transition-colors flex justify-center align-middle'>China</Link>
            <Link href="/srilanka" className='bg-neutral-800 p-2 rounded-lg w-32 hover:bg-neutral-600 transition-colors flex justify-center align-middle'>Srilanka</Link>
            <Link href="/japan" className='bg-neutral-800 p-2 rounded-lg w-32 hover:bg-neutral-600 transition-colors flex justify-center align-middle'>Japan</Link>

        </nav>

    )
}

