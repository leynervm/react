import { useState } from "react";
import { useSearchParams } from "react-router";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("q") || ""
    const [term, setTerm] = useState(query || "")

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchParams((prev) => ({ ...prev, q: term }));
    }

    return (
        <div className="mx-auto w-full max-w-sm">
            <h1 className="py-6 text-[#00d8ff]">Search Form</h1>

            <form className="flex items-end gap-1 w-full" onSubmit={handleSearch}>
                <div className="relative flex-1">
                    <label className="block text-white text-start" htmlFor="search">Buscar :</label>
                    <input className="block p-2.5 border border-[#00d8ff] rounded-lg focus:outline-0 focus:ring-0 w-full text-[#00d8ff]"
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                        type="search"
                        placeholder="Buscar..."
                        id="search" />
                </div>
                <button className="link-navigation-aprendizaje" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="block size-6">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20" />
                    </svg>
                </button>
            </form>

            {query && (<p className="mt-2">Resultados para <b>{query}</b></p>)}
        </div>
    )
}

export default Search