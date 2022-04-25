import { useNavigate, useParams } from "react-router-dom"

export const Movies = () => {

    let { title } = useParams()
    console.log(title)

    let navigate = useNavigate()
    console.log(navigate)


    return (
        <>
            <h1>Some movie {title}</h1>
            <button onClick={() => navigate(-1)}>Go back</button>
        </>)
}