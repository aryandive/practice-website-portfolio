import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="mt-auto bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-800 w-full">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center md:flex-row">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        © 2023 <Link href="#" className="hover:transition-colors">AryanDive™</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer