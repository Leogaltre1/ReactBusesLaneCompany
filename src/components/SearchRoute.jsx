import "./../index.css";

function SearchRoute() {
    return (
        <div className="flex items-center space-x-2 border border-gray-300 rounded-2xl p-2 shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition">
            <svg
                className="w-5 h-5 text-gray-500 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                type="text"
                placeholder="Unidad..."
                className="outline-none bg-transparent w-full text-gray-700 placeholder-gray-400 focus:ring-0"
            />
        </div>
    );
}

export default SearchRoute;
