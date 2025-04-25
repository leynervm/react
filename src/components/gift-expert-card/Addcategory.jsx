import { useState } from "react"

const Addcategory = ({ onNewCategory }) => {

    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (value.trim().length <= 1) return
        onNewCategory(value.trim())
        setValue('')
    }

    return (
        <form className="flex items-end gap-1 mx-auto w-full max-w-md" autoComplete="off" onSubmit={(e) => onSubmit(e)}>
            <div className="relative flex-1">
                <label className="block text-white text-start" htmlFor="search">Buscar :</label>
                <input className="block p-2.5 border border-[#00d8ff] rounded-xl focus:outline-0 focus:ring-0 w-full text-[#00d8ff]"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
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
    )
}

export default Addcategory