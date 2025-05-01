import React from 'react'

// ✅ app/[username]/page.js
export default async function Username({ params }) {
    // wait for the dynamic params to resolve
    const { username } = await params;

    return (
        <div>
            {username}
        </div>
    );
}
