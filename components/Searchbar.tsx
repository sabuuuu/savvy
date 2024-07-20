"use client"

import React ,{FormEvent, useState} from 'react'

const Searchbar = () => {
    const [searchPrompt ,setSearchPrompt] = useState('')
    const [loading ,setLoading] = useState(false)
    const isValidLink = (link:string) => {
        try {
            const parsed = new URL(link)
            const hostname = parsed.hostname

            if(hostname.includes('amazon.com') ||
               hostname.includes('amazon.') ||
               hostname.endsWith('amazon')) return true
        } catch (error) {
            return false
        }
        return false
    }
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const isValid = isValidLink(searchPrompt)
        if(!isValid) alert ('Please enter a valid amazon link')

        try {
            setLoading(true)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
  return (
    <form 
        className='flex  gap-4 mt-12'
        onSubmit={handleSubmit}
    >
        <input type="text" name="search" placeholder='Search for a product' 
            value={searchPrompt}
            onChange={(e)=>setSearchPrompt(e.target.value)}
            className='w-full rounded-lg md:w-1/2 lg:w-full text-[#192211] border-2 border-[#93b269] bg-[#b1c88e] px-4 py-2 text-base focus:outline-none placeholder:text-[#192211] placeholder:text-opacity-55' 
        />
        <button className='rounded-lg bg-[#28321E] px-6 py-2 text-base text-white' disabled={searchPrompt===''}>
            {loading ? 'Searching...' : 'Search'}
        </button>
        
    </form>
  )
}

export default Searchbar