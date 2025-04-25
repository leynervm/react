import { useState } from "react"
import Addcategory from "../../components/gift-expert-card/Addcategory"
import GridCard from "../../components/gift-expert-card/GridCard"

const GridExpertApp = () => {

    const [categories, setCategories] = useState([])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
        // setCategories(cats => [newCategory, ...cats])
    }

    return (
        <>
            <div className="flex flex-col gap-2 w-full">
                <h1 className="py-6 font-semibold text-[#00d8ff]">Grid Gif App</h1>

                <Addcategory onNewCategory={(value) => onAddCategory(value)} />

                <ol>
                    {
                        categories.map(category => (
                            <GridCard key={category} category={category} />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}

export default GridExpertApp