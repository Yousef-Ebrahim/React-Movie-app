function SearchForm({ loading, error, query, setQuery }) {
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      {" "}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full m-4 max-w-lg flex gap-2 shadow-lg p-4 rounded-xl bg-white"
      >
        <input
          placeholder="Search for TV shows..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow input input-lg input-bordered rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />{" "}
        {loading && (
          <p className="mt-4 text-blue-600 font-medium animate-pulse">
            Loading...
          </p>
        )}
        {error && <p className="mt-4 text-red-500 font-semibold">{error}</p>}
        <button
          className="text-slate-600 btn btn-success btn-lg rounded-xl px-8 hover:scale-105 hover:bg-blue-600 transition-all shadow-md"
          
        >Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
