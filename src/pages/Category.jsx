import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { filterByCategory } from "../api"
import { Preloader } from "../components/Preloader"
import { MealList } from "../components/MealList"

export const Category = () => {

    const { name } = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        filterByCategory(name).then((data) =>
            setMeals(data.meals)
        )

    }, [name]);
    console.log(meals);
    return (
        <>
            {!meals ? <Preloader /> : <MealList meals={meals} />}
        </>)
}