export function getFilterOptions(ulams) {
    const meatTypes = new Set()
    const cookingMethods = new Set()
    const sauceTypes = new Set()


    ulams.forEach((u) => {
        if (u.meatType) meatTypes.add(u.meatType)
        if (u.cookingMethod) cookingMethods.add(u.cookingMethod)
        if (u.sauceType) sauceTypes.add(u.sauceType)
    })

    return {
        meatType: Array.from(meatTypes).sort(),
        cookingMethod: Array.from(cookingMethods).sort(),
        sauceType: Array.from(sauceTypes).sort(),
    }
}