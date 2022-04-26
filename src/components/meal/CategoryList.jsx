import React from "react";
import { CategoryItem } from "./CategotyItem"


export const CategoryList = (props) => {

    const { catalog = [] } = props
    return (
        <div className="list">
            {catalog.map((el) => {
                console.log(el);
                return < CategoryItem key={el.id} {...el} />
            })
            }
        </div>
    )
}