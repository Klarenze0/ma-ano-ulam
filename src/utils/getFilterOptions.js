import { getMainIngredient } from './filterUlams'

export function getFilterOptions(ulams) {
  const mainIngredients = new Set()
  const cookingMethods = new Set()
  const sauceTypes = new Set()

  ulams.forEach((u) => {
    mainIngredients.add(getMainIngredient(u))
    if (u.cookingMethod) cookingMethods.add(u.cookingMethod)
    if (u.sauceType) sauceTypes.add(u.sauceType)
  })

  return {
    mainIngredient: Array.from(mainIngredients).sort(),
    cookingMethod: Array.from(cookingMethods).sort(),
    sauceType: Array.from(sauceTypes).sort(),
  }
}