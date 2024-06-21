"use client"
import React from 'react'
import { Offline } from 'react-detect-offline'

const Offlines = () => {
    return (
        <>
            <Offline>
                <div className='bg-black text-center p-2     w-1/4 rounded border border-white text-white fw-bold z-50 top-5 right-5 fixed'>
                    check Your Internet
                </div>
            </Offline>
        </>
    )
}

export default Offlines
