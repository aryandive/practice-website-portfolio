import Feature from '@/components/Feature';
import Youtube from '@/components/Carouse';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Carouse from '@/components/Carouse';

export default function Home() {
  //   return (
  //     <main className="relative overflow-hidden min-h-screen">
  //       <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
  //         <div className='flex justify-center overflow-auto'>
  //           <section className="absolute top-35">
  //             <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
  //               <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
  //               <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
  //               <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
  //                 <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
  //                   Get started
  //                   <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
  //                   </svg>
  //                 </a>
  //                 <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
  //                   Learn more
  //                 </a>
  //               </div>
  //             </div>
  //           </section>
  //         </div>
  //         <div classNameName='bg-white h-1 opacity-10'></div>
  //         <div classNameName='absolute top-60'>
  //           <Feature />
  //         </div>
  //       </div>
  //     </main>

  //   );
  // }
  return (
    <div className="relative overflow-hidden">
      <div className="z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <section className="pt-20 pb-10">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16" style={{ paddingTop: '8rem' }}>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              We invest in the world’s potential
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <div className="bg-white h-1 opacity-10 mx-auto w-11/12"></div>

        <section className="text-gray-600 body-font py-20">
          <div className="container px-5 mx-auto">
            <Feature />
          </div>
        </section>

        <div className="bg-white h-1 opacity-10 mx-auto w-11/12"></div>

        <section className="text-gray-600 body-font py-20">
          <div className="container px-5 mx-auto">
            <Carouse />
          </div>
        </section>

      </div>




    </div>
  )
}