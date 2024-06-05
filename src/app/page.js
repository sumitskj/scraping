'use client'; // This is a client component

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const InputUrl = () => {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/website-content/${encodeURIComponent(url)}`);
  };

  return (
    <div className='flex w-full justify-center items-center pt-32 gap-4'>
      <form onSubmit={handleSubmit} className='gap-4'>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className='border border-gray-200'
          placeholder="Enter a URL"
        />
        <button type="submit" className='ml-4 bg-blue-400 p-2 rounded-md'>Fetch Content</button>
      </form>
    </div>
  );
};

export default InputUrl;