import { useState } from 'react'
import WhaleCards from './components/whaleCards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid grid-cols-1 justify-items-center h-screen md:grid-cols-2">
    <section className= "hidden md:block bg-[#19191A] w-full h-full">
      <div className='flex flex-row '>
          
        <div className="flex mt-[72px] px-[60px] py-18 flex-col gap-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M25.9998 24H5.99984C5.82482 23.9989 5.65314 23.952 5.50195 23.8638C5.35077 23.7756 5.22539 23.6492 5.13833 23.4974C5.05127 23.3456 5.00559 23.1735 5.00586 22.9985C5.00613 22.8235 5.05233 22.6516 5.13984 22.5C5.96359 21.075 6.99984 17.4762 6.99984 13C6.99984 10.6131 7.94806 8.32387 9.63588 6.63604C11.3237 4.94821 13.6129 4 15.9998 4C18.3868 4 20.676 4.94821 22.3638 6.63604C24.0516 8.32387 24.9998 10.6131 24.9998 13C24.9998 17.4775 26.0373 21.075 26.8623 22.5C26.95 22.6518 26.9962 22.8239 26.9963 22.9991C26.9965 23.1744 26.9506 23.3466 26.8632 23.4985C26.7759 23.6504 26.6501 23.7767 26.4986 23.8647C26.3471 23.9527 26.1751 23.9994 25.9998 24Z" fill="white"/>
                  <path d="M27.7245 21.9925C27.0308 20.7975 25.9995 17.4163 25.9995 13C25.9995 10.3478 24.946 7.8043 23.0706 5.92893C21.1952 4.05357 18.6517 3 15.9995 3C13.3474 3 10.8038 4.05357 8.92846 5.92893C7.0531 7.8043 5.99953 10.3478 5.99953 13C5.99953 17.4175 4.96703 20.7975 4.27328 21.9925C4.09612 22.2963 4.0022 22.6415 4.00099 22.9931C3.99978 23.3448 4.09133 23.6906 4.2664 23.9956C4.44147 24.3006 4.69388 24.5541 4.99816 24.7304C5.30244 24.9068 5.64784 24.9997 5.99953 25H11.1008C11.3315 26.1289 11.9451 27.1436 12.8377 27.8722C13.7303 28.6009 14.8472 28.9989 15.9995 28.9989C17.1518 28.9989 18.2687 28.6009 19.1614 27.8722C20.054 27.1436 20.6676 26.1289 20.8983 25H25.9995C26.3511 24.9995 26.6964 24.9064 27.0005 24.73C27.3046 24.5535 27.5568 24.3 27.7317 23.9951C27.9066 23.6901 27.9981 23.3444 27.9968 22.9928C27.9956 22.6412 27.9016 22.2962 27.7245 21.9925ZM15.9995 27C15.3793 26.9998 14.7744 26.8074 14.268 26.4492C13.7617 26.0911 13.3788 25.5848 13.172 25H18.827C18.6203 25.5848 18.2374 26.0911 17.731 26.4492C17.2247 26.8074 16.6198 26.9998 15.9995 27ZM5.99953 23C6.96203 21.345 7.99953 17.51 7.99953 13C7.99953 10.8783 8.84238 8.84344 10.3427 7.34315C11.843 5.84285 13.8778 5 15.9995 5C18.1213 5 20.1561 5.84285 21.6564 7.34315C23.1567 8.84344 23.9995 10.8783 23.9995 13C23.9995 17.5063 25.0345 21.3412 25.9995 23H5.99953Z" fill="white"/>
            </svg>
            <h2 className="w-[313px] text-[color:var(--Background---F2F2F2,#F2F2F2)] text-[31px] not-italic font-medium leading-[120%]">Get notified when a highly correlated whale makes a move</h2>
            <p className="w-[322px] text-[color:var(--Background---F2F2F2,#F2F2F2)] text-base not-italic font-medium leading-[120%] opacity-70">Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>      
         </div>

        <WhaleCards />
        </div> 
      </section> 
     
      <form action="#" className="mt-4 w-[365px] flex flex-col justify-center justify-items-start">
          <div className="px-[13px] w-auto  ">
            <h1 className='text-center sm:text-left text-[39px] font-weight-500 text-gray-300 font-medium leading-[120%]'>Sign up for <br /> exclusive access.</h1>
                <div className="mt-8 w-full">
                    <input type="text" id="search-form-price" className="rounded-[8px] border-gray-100 border-[1px] flex shadow-[0px_1px_1px_0px_rgba(0,0,0,0.04),0px_4px_10px_0px_rgba(0,0,0,0.04)] border-solid w-full py-5 px-6 bg-white text-gray-800 placeholder-gray-200 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your price"/>
                </div>
                <div className="mt-6 w-full">
                  <span className="w-full rounded-md shadow-sm">
                      <button type="button" className="py-[18px] px-7  bg-black hover:bg-indigo-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-[8px] ">
                        Get Started
                      </button>
                  </span>
              </div>       
            </div>
            <p className="mt-6 py-[18px] color-gray-900 text-center text-base not-italic font-semibold leading-[120%]">You’ll receive an email with an invite link to join.</p>
          </form> 
    </div>

  )
}

export default App
