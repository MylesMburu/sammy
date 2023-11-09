import React from 'react'
import Link from 'next/link';

export const Text = () => {
  return (
    <section>
        <h1 className='blue_gradient font-bold text-2xl'>Sammy</h1>
        <p className='desc'>Start summarizing your work with Sammy!!</p>
        <form
        className='mt-10 w-full max-w-2xl flex flex-col gap-3 glassmorphism p-5 rounded-lg'
        >
            <label htmlFor="">
                <span className='font-bold'>Text</span>
                <textarea 
                placeholder='Paste your text here...'
                required
                className='form_textarea'
                />
            </label>
            
            <div className='flex-end mx-3 mb-4 gap-4'>
                <Link href='/' className='bg-red-500 text-white px-3 py-1 rounded-md'>
                    Cancel
                </Link>
                <button
                type='submit'
                className='bg-blue-500 text-white px-3 py-1 rounded-md'
                >
                    Summarize
                </button>
            </div>
        </form>
    </section>
  )
}
