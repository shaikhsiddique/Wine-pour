import React from 'react'

function Page6() {
  return (
    <div
      className="h-full w-full relative flex flex-col items-center my-12 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle, rgb(67, 67, 67), rgb(0, 0, 0), rgba(0, 0, 0, 0))",
      }}
    >
        <div className="right-leaf absolute overflow-hidden -right-10 top-0">
      <img src="./footer-right-leaf.png" className="transform " alt="" />
      </div>
      <div className="left-leaf absolute overflow-hidden -left-0 bottom-0">
      <img src="./footer-left-leaf.png" className="transform " alt="" />
      </div>
      <div className="content flex flex-col items-center justify-center gap-8 text-white h-full w-full">
         <h1 className='text-7xl font-bold overflow-hidden'>Where to find Us</h1>
         <div className="section2 flex flex-col items-center justify-center">
            <h2>Visit Our Bar</h2>
            <h1>456, Req Block, Loas Angeles, A 98170</h1>
         </div>
         <div className="section3 flex flex-col items-center justify-center">
            <p className='text-xl pb-1'>Contact Us</p>
            <h3 className='text-3xl overflow-hidden'>(555) 454 4659</h3>
            <h3 className='text-3xl overflow-hidden'>hello@jscocktail.com</h3>
         </div>
         <div className="section4 flex flex-col items-center justify-center">
           <p className='text-xl pb-1'>Opens Every Day</p>
           <h3 className='text-3xl overflow-hidden'>Mon–Thu : 11:00am – 12am</h3>
           <h3 className='text-3xl overflow-hidden '>Fri : 11:00am – 2am</h3>
           <h3 className='text-3xl overflow-hidden '>Sat : 9:00am – 2am</h3>
           <h3 className='text-3xl overflow-hidden '>Sun : 9:00am – 1am</h3>
         </div>
         <div className="section5 flex flex-col items-center justify-center gap-2">
            <p className='text-xl'>Socials</p>
            <div className='flex gap-3'>
                <img className='h-6' src="./insta.png" alt="" />
                <img className='h-6' src="./x.png" alt="" />
                <img className='h-6' src="./fb.png" alt="" />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Page6