export default function CarouselControlls({
  slideIndex,
  setSlideIndex,
  len,
}:{
  slideIndex: number,
  setSlideIndex: (value: number) => void,
  len: number,
}) {
  return (
    <div className="flex justify-between">
      <button
        onClick={() => setSlideIndex(slideIndex - 1)}
        disabled={slideIndex === 0} type="button"
        className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/50 dark:bg-gray-800/30 group-hover:bg-indigo/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
      </button>
      <p className="text-indigo-500 mt-2">{slideIndex + 1}/{len} cards</p>
      <button
        onClick={() => setSlideIndex(slideIndex + 1)}
        disabled={slideIndex === 9}
        type="button"
        className="relative top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-indigo-500/50 dark:bg-gray-800/30 group-hover:bg-indigo/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}