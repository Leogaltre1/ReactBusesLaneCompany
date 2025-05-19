function EnterUnity({ value, setValue }) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="w-64">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-2xl p-2 shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition h-10">
                <input
                    type="text"
                    list="units"
                    placeholder="  Unidad..."
                    value={value}
                    onChange={handleChange}
                    className="outline-none bg-transparent w-full h-full text-gray-700 placeholder-gray-400 focus:ring-0"
                />
            </div>
            <datalist id="units">
                {Array.from({ length: 20 }, (_, i) => (
                    <option
                        key={i}
                        value={`Unidad${String(i + 1).padStart(2, "0")}`}
                    />
                ))}
            </datalist>
        </div>
    );
}

export default EnterUnity;
