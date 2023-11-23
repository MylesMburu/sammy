'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export const Text = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {

      const response = await fetch('/api/summary',
       {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text }), 
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSummary(data.summary); // Assuming your API responds with a JSON containing the summary
    } catch (error) {
      console.error('There was an error summarizing the text', error);
    }
  };

  return (
    <section>
        <h1 className='blue_gradient font-bold text-2xl'>Sammy</h1>
        <p className='desc'>Start summarizing your work with Sammy!!</p>
        
        <form
        className='mt-10 w-full max-w-2xl flex flex-col gap-3 glassmorphism p-5 rounded-lg'
        onSubmit={handleSubmit}
        >
            <label htmlFor="text">
                <span className='font-bold'>Text</span>
                <textarea 
                id="text"
                placeholder='Paste your text here...'
                required
                className='form_textarea'
                value={text}
                onChange={handleTextChange}
                />
            </label>
            
            <div className='flex-end mx-3 mb-4 gap-4' >
                <Link href='/' className='bg-red-500 text-white px-3 py-1 rounded-md' passHref>
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

        {summary && <div className="summary">{summary}</div>}

    </section>
  );
};
