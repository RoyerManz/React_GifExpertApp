import React from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>
            {loading && <p className="animate__animated animate__bounce"> Loading </p> }
            {/* {loading ? 'cargando' : 'data cargada'} */}
            <div className="grid-card">
                {
                    images.map((image) => (
                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
