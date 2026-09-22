'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = async() => {

  const router=useRouter()

  return (
    <div>
     <Link href={'/home'}><h3>Home</h3></Link>
     <Link href={'/about'}><h3>About</h3></Link>
     <Link href={'/contact'}><h3>Contact</h3></Link>

     <button onClick={()=>router.push('/about')}>
      Go to google
     </button>
    </div>
  );
}

export default page;
