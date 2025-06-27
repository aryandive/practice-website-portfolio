"use client"

import React, { useState } from 'react'

const Shorten = () => {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    }

    const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
    })

    const rquestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            setGenerated(`$(process.env.NEXT_HOST)`)
            seturl("")
            setshorturl("")
            console.log(result)
            alert(result.message)
        })
        .catch((error) => console.error(error))



    return (
        <div className='mx-auto pt-56 pb-[30rem] md:pb-[35rem] lg:pb-[40rem] flex justify-center'>
            <div className='color opacity-80 w-180 h-60 rounded-2xl px-20 py-10 flex flex-col items-center justify-center gap-4'>
                <h1 className='font-extrabold text-2xl'>Generate your short URLs</h1>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <input className='bg-purple-100 px-7 cursor-pointer' value={shorturl} type="text" placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
                    <input className='bg-purple-100 px-7 cursor-pointer' value={generated} type="text" placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
                    <button className='bg-purple-500 rounded-full py-2 px-4 text-white cursor-pointer hover:bg-purple-800'>Generate</button>
                </div>
            </div>
        </div>

        {generated && <code>
            <span>Your Link:</span> <Link target="_blank" hrf={generated}>{generated}</Link> 
            </code>
        }
    )
}

export default Shorten