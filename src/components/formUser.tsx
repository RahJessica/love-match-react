import React, { useRef, useEffect, useState, Fragment } from 'react';
import { FaHeart } from 'react-icons/fa';

function FormUser() {

    const [firstname, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [stat, setStat] = useState<number | null>(null)
    const [isMatched, setIsMatched] = useState(false)

    const handleChangeName = (e) => {
        setFirstName(e.target.value)
    }

    const handleChangeSecondName = (e) => {
        setSecondName(e.target.value)
    }

    const MatchStat = () => {
        const randomStat = Math.floor(Math.random() * 101)
        setStat(randomStat)
        setIsMatched(true)
    }

    const Matched = () => {
        setIsMatched(true)
        setStat(null)
    }

    useEffect(() => {
        setIsMatched(false);
        setStat(null);
    }, [firstname, secondName]);

    return (
        <>

            <div className='flex flex-col justify-center items-center gap-4 bg-white mx-30 my-20 px-10 py-5 w-[30vw] h-[75vh] rounded-3xl shadow-2xl'>
                <FaHeart
                    className='w-[6vw] h-[7vh] text-[#ff4d6d]'
                />
                <h1 className='text-center text-2xl'>Love match</h1>
                <p className='text-center'>Find your soulmate in one click !</p>
                <input type="text"
                    placeholder='Enter your name'
                    name='firstName'
                    className='w-[25vw] border border-gray-900 px-2 py-1 rounded-sm'
                    onChange={handleChangeName}
                />
                <p className='text-center'>and</p>
                <input type="text"
                    placeholder="Enter your crush's name"
                    name='secondName'
                    onChange={handleChangeSecondName}
                    className='w-[25vw] border border-gray-900 px-2 py-1 rounded-sm'
                />
                <button
                    onClick={MatchStat}
                    disabled={!firstname || !secondName || isMatched}
                    className='bg-[#f9dbbd] cursor-pointer w-80 py-2 mt-2 rounded-xl transform transition duration-200 ease-in-out hover:scale-95'>
                    Test compatibility 👀
                </button>
                {stat != null && <p>Vous êtes compatibles à : {stat}%</p>}

            </div>
        </>
    )
}

export default FormUser