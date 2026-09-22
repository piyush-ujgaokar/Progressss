import React from 'react';

const page = async() => {

  await new Promise((resolve,reject)=> setTimeout(resolve,3000))

  return (
    <div>
      This is home page
    </div>
  );
}

export default page;
