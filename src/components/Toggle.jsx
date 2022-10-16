import React from 'react'

const Toggle = ({ handleToggle }) => {
    return (
        <button className="px-2 py-0.5 tracking-widest text-black bg-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300 ease-linear w-fit" onClick={handleToggle}>
            Toggle Contents
        </button>
    )
}

export default Toggle