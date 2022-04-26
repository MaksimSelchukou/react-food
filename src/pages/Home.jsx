import { useState, useEffect } from "react"
import { getAllCategories } from "../api"
import { CategoryList } from "../components/meal/CategoryList"
import { Preloader } from "../components/Preloader"

export function Home() {
    const [catalog, setCatalog] = useState([])

    console.log(catalog);

    useEffect(() => {
        // debugger

        // getAllCategories().then(data => {

        //     setCatalog(data.categories)
        getAllCategories().then((data) => {
            console.log(data)
            setCatalog(data.categories);
        })


    }, [])

    // useEffect(function getGoods() {
    //     fetch(API_URL, {
    //         headers: {
    //             'Authorization': API_KEY,
    //         }
    //     }
    //     ).then((response) => response.json()
    //     ).then((data) => {
    //         data.featured && setGoods(data.featured)
    //         setLoading(false)
    //     })
    // }, [])

    return (

        <>
            {/* {!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />} */}
            <CategoryList catalog={catalog} />
        </>
    )
}
