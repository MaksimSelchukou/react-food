import { API_URL } from './config'

const getMealById = async (mealId) => {
  const responce = await fetch(API_URL + 'lookup.php?i=' + mealId)
  return await responce.json()
}

const getAllCategories = async () => {
  // debugger
  const response = await fetch(API_URL + 'categories.php')
  // debugger
  console.log(response)
  return await response.json()
}

const filterByCategory = async (categoryName) => {
  const responce = await fetch(API_URL + 'filter.php?c=' + categoryName)
  return await responce.json()
}

export { getMealById, getAllCategories, filterByCategory }
