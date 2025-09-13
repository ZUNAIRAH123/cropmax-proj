export default function NewsSection() {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-10 px-6 md:px-16">
      
      {/* MAIN HEADING */}
      <h1 className="text-4xl font-bold text-[#76b74e] text-center mb-10">
        NEWS Updates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* LEFT BIG CARD */}
        <div className="flex flex-col space-y-6">
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="/Booster1.png"
              alt="Hymn"
              className="w-full h-56 object-contain bg-gray-100"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-2">24 Oct 2021</p>
              <h3 className="text-lg font-semibold">Hymn to the United Nations</h3>
              <p className="text-gray-600 text-sm mt-2">
                The UN General Assembly adopted the Student’s Hymn to the United Nations.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">Emily Bond</span>
                <button className="bg-blue-600 text-black px-3 py-1 rounded-lg text-sm hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* SMALL CARD UNDER BIG CARD */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="/Axle.png"
              alt="Small News"
              className="w-full h-36 object-contain bg-gray-100"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500">25 Oct 2021</p>
              <h3 className="text-lg font-semibold mt-2">
                Small News Card Example
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                This is a smaller card placed below the big card for extra updates.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">John Doe</span>
                <button className="bg-blue-600 text-black px-3 py-1 rounded-lg text-sm hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER CARDS */}
        <div className="flex flex-col space-y-6">
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 w-full">
            <img
              src="/Bul.png"
              alt="Peace"
              className="w-full h-36 object-contain bg-gray-100"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500">24 Oct 2021</p>
              <h3 className="text-lg font-semibold mt-2">
                Peace, dignity and equality on a healthy planet
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Building a sustainable world requires peace, equality, and dignity for all.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">William Roy</span>
                <button className="bg-blue-600 text-black px-3 py-1 rounded-lg text-sm hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 w-full">
            <img
              src="/Convervex.png"
              alt="Peace"
              className="w-full h-36 object-contain bg-gray-100"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500">24 Oct 2021</p>
              <h3 className="text-lg font-semibold mt-2">
                Peace, dignity and equality on a healthy planet
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Building a sustainable world requires peace, equality, and dignity for all.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">William Roy</span>
                <button className="bg-blue-600 text-black px-3 py-1 rounded-lg text-sm hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="flex flex-col space-y-6">
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 w-full">
            <img
              src="/Cluster.png"
              alt="Peace"
              className="w-full h-36 object-contain bg-gray-100"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500">24 Oct 2021</p>
              <h3 className="text-lg font-semibold mt-2">
                Peace, dignity and equality on a healthy planet
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Building a sustainable world requires peace, equality, and dignity for all.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">William Roy</span>
                <button className="bg-blue-600 text-black px-3 py-1 rounded-lg text-sm hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 w-full">
            <img
              src="/Theorem.png"
              alt="Peace"
              className="w-full h-36 object-contain bg-gray-100"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500">24 Oct 2021</p>
              <h3 className="text-lg font-semibold mt-2">
                Peace, dignity and equality on a healthy planet
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Building a sustainable world requires peace, equality, and dignity for all.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">William Roy</span>
                <button className="bg-blue-600 text-black px-3 py-1 rounded-lg text-sm hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
