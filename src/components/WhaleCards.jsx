const WhaleCards = () => {
  return (
    <div className="flex flex-row gap-3">
      <NotifiedCard />
      <MeCard />
      <TimeCard  />
    </div>
  );
};

export default WhaleCards;

const NotifiedCard = () => {
  return (
    <div className="w-[189.7px] h-[171.5px]  flex flex-col gap-[14px]  bg-gray-100 rounded-lg">
      <div className="flex w-auto max-w-full items-start px-[14px] justify-between gap-5 mt-[14px]">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z"
            fill="#165DFF"
            fill-opacity="0.1"
            stroke="black"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5"
            stroke="black"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="text-grey-900 text-right text-xs font-semibold leading-[120%]">
          <a href="#" className="link">
            Save
          </a>
        </div>
      </div>
      <div className="text-grey-900 px-[14px] text-[14px] not-italic font-medium leading-[120%] ">
        We’ll be sending <br /> notifications to you <br /> here
      </div>
      {/* <form className="px-[14px]">
        <input className="text-gray-900 text-sm font-medium leading-[120%] border-[#D4D4D4] bg-white w-auto px-[12px] py-3 rounded-md border-[1px] border-solid" type="email" id="email" value="hello@loch.one" />
      </form> */}
      <form className="px-[14px]">
        <input className="w-full px-3 py-2.5 text-gray-900 text-sm font-medium leading-[120%] border-[#D4D4D4] bg-white rounded-md border-[1px] border-solid " type="email" id="email" value="hello@loch.one" />
      </form>
    </div>
  );
};


const MeCard = () => {
  return (
    <div className="w-[189.7px] h-[171.5px] bg-gray-100 flex flex-col rounded-lg">
      <div className="flex w-auto max-w-full items-start px-[14px] justify-between gap-5 mt-[14px]">
      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M23.0996 25.9004V11.9004" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M14.7002 25.9V3.5" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_3" d="M6.2998 25.9V17.5" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        <div className="p-1 rounded-[4.2px] bg-blue-500 font-semibold leading-[120%]">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="icon" d="M3.66451 7.32773C3.9696 7.32773 4.20025 7.21058 4.35646 6.97627L7.73564 1.8837C7.79178 1.80071 7.83327 1.71895 7.86012 1.6384C7.88697 1.55542 7.90039 1.47609 7.90039 1.40043C7.90039 1.19053 7.82717 1.01724 7.68073 0.880557C7.53672 0.741436 7.35855 0.671875 7.14621 0.671875C6.99976 0.671875 6.87529 0.701164 6.77278 0.759741C6.67271 0.815878 6.57752 0.913507 6.48721 1.05263L3.64987 5.50817L2.22937 3.80577C2.0756 3.62759 1.88278 3.53851 1.65091 3.53851C1.43369 3.53851 1.2543 3.60807 1.11273 3.74719C0.971172 3.88631 0.900391 4.06082 0.900391 4.27072C0.900391 4.36591 0.915035 4.45622 0.944324 4.54165C0.976053 4.62463 1.03341 4.71128 1.11639 4.80158L3.00185 7.02386C3.17515 7.22644 3.39603 7.32773 3.66451 7.32773Z" fill="white"/>
        </svg>
        </div>
      </div>
      <div className="text-grey-900 px-[14px] mt-[55.3px] text-[11.2px] not-italic font-medium leading-[120%] ">
      Notify me when any wallets <br /> move more than  
      </div>
      {/* <form className="px-[14px]">
        <input className="text-gray-900 text-sm font-medium leading-[120%] border-[#D4D4D4] bg-white w-auto px-[12px] py-3 rounded-md border-[1px] border-solid" type="email" id="email" value="hello@loch.one" />
      </form> */}
      <section className="mt-[14.6px] ml-[14px] bg-gray-50 bg-opacity-50 p-[4.2px] flex flex-row gap-[2.8px] rounded-[2.8px] ">
        <div className="text-zinc-800 text-xs font-medium leading-[120%] self-stretch">
          $1,000.00
        </div>
        <svg className="w-3 h-3 " fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M3.79965 4.59953L6.17719 6.97704C6.24553 7.04538 6.35633 7.04538 6.42467 6.97704L8.80215 4.59953C8.9124 4.48928 8.83435 4.30078 8.67839 4.30078H3.9234C3.76749 4.30078 3.68941 4.48928 3.79965 4.59953Z" fill="#96979A"/>
        </svg>
      </section>
    </div>
  );
};

const TimeCard = () => {
  return (
    <div className="w-[189.7px] h-[171.5px] flex bg-gray-100 flex-col rounded-lg">
      <div className="flex w-auto max-w-full items-start px-[14px] justify-between gap-5 mt-[14px]">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M13.9997 25.6663C20.443 25.6663 25.6663 20.443 25.6663 13.9997C25.6663 7.55635 20.443 2.33301 13.9997 2.33301C7.55635 2.33301 2.33301 7.55635 2.33301 13.9997C2.33301 20.443 7.55635 25.6663 13.9997 25.6663Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M14 7V14L18.6667 16.3333" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        <div className="p-1 rounded-[4.2px] bg-blue-500 font-semibold leading-[120%]">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="icon" d="M3.66451 7.32773C3.9696 7.32773 4.20025 7.21058 4.35646 6.97627L7.73564 1.8837C7.79178 1.80071 7.83327 1.71895 7.86012 1.6384C7.88697 1.55542 7.90039 1.47609 7.90039 1.40043C7.90039 1.19053 7.82717 1.01724 7.68073 0.880557C7.53672 0.741436 7.35855 0.671875 7.14621 0.671875C6.99976 0.671875 6.87529 0.701164 6.77278 0.759741C6.67271 0.815878 6.57752 0.913507 6.48721 1.05263L3.64987 5.50817L2.22937 3.80577C2.0756 3.62759 1.88278 3.53851 1.65091 3.53851C1.43369 3.53851 1.2543 3.60807 1.11273 3.74719C0.971172 3.88631 0.900391 4.06082 0.900391 4.27072C0.900391 4.36591 0.915035 4.45622 0.944324 4.54165C0.976053 4.62463 1.03341 4.71128 1.11639 4.80158L3.00185 7.02386C3.17515 7.22644 3.39603 7.32773 3.66451 7.32773Z" fill="white"/>
        </svg>
        </div>
      </div>
      <div className="text-grey-900 px-[14px] mt-[39.2px] text-[11.2px] not-italic font-medium leading-[120%] ">
      Notify me when any <br /> wallet dormant for
      </div>
      {/* <form className="px-[14px]">
        <input className="text-gray-900 text-sm font-medium leading-[120%] border-[#D4D4D4] bg-white w-auto px-[12px] py-3 rounded-md border-[1px] border-solid" type="email" id="email" value="hello@loch.one" />
      </form> */}
      <section className="mt-[14px] ml-[14px] bg-gray-200 bg-opacity-50 p-[4px] flex flex-row gap-[2.8px] rounded-[2.8px] ">
        <div className="text-zinc-800 text-xs font-medium leading-[120%] self-stretch" iner >
        &#62 30 days
        </div>
        <svg className="w-3 h-3 " fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M3.79965 4.59953L6.17719 6.97704C6.24553 7.04538 6.35633 7.04538 6.42467 6.97704L8.80215 4.59953C8.9124 4.48928 8.83435 4.30078 8.67839 4.30078H3.9234C3.76749 4.30078 3.68941 4.48928 3.79965 4.59953Z" fill="#96979A"/>
        </svg>
      </section>
    </div>
  );
};

