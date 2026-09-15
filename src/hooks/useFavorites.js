import { useState, useEffect } from 'react'

const STORAGE_KEY = 'ulam-generator-favorites'

function loadFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    return parsed.filter((id) => typeof id === 'number')
  } catch {
    return []
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(loadFavorites)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
     
    }
  }, [favorites])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    )
  }

  const isFavorite = (id) => favorites.includes(id)

  return { favorites, toggleFavorite, isFavorite }
}