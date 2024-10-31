
import React, { useState, useSyncExternalStore } from "react";
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    // const categories = ['one pumch', 'samuray z', 'dragon ball'];

    const [categories, setCategories] = useState(['one pumch']);
    // const handleAdd = () => {
    //     setCategories([...categories, 'hunter z hunter']);
    // }
    return <>
        <h1>GifExpertApp</h1>
        <AddCategories setCategories={ setCategories } />
        <hr />
        <ol>
            {
                categories.map(category => (
                    <GifGrid
                    key={ category } 
                    category={ category } 
                    />
                ))
            }
        </ol>
    </>
}
