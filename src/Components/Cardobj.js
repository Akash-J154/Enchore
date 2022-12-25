import React from 'react'

const Cardobj = ({ title,
  mode,
  date,
  link,
  provider,
  price,
  point,
  logo,details,
speaker,venue,category}) => {
  return (
    <div className=" w-[41vh]  ">
  <div className="ml-auto mr-auto bg-black">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8  ">
     
      <div className="flex flex-col bg-white border rounded-lg overflow-hidden w-72 ml-auto mr-auto h-[90%]">
        <a href={link} className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
          <img src={logo} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        </a>

        <div className="flex flex-col flex-1 p-4 sm:p-6">
          <h2 className="text-gray-800 text-lg font-semibold mb-2">{title}</h2>
          <h2 className="text-gray-800 text-lg font-semibold mb-2">
            <a href={link} className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">Go to their site</a>
          </h2>

          <p className="text-gray-500 mb-8">{details}</p>
          <p>{mode}</p>
          <p>{point}</p>
          <p>${price}</p>
          <p>{provider}</p>
          <p>{venue}</p>

          <div className="flex justify-between items-end mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <span className="block text-indigo-500">{speaker}</span>
                <span className="block text-gray-400 text-sm">{date}</span>
              </div>
            </div>

            <span className="text-gray-500 text-sm border rounded px-2 py-1">{category}</span>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Cardobj