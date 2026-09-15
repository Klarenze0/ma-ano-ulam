const FILTER_LABELS = {
  mainIngredient: 'Meat / Main Ingredient',
  cookingMethod: 'Cooking Method',
  sauceType: 'Sauce / Soup Type',
}

function FilterPanel({ options, selectedFilters, onChange }) {
  const handleToggle = (category, value) => {
    const current = selectedFilters[category] || []
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]

    onChange({
      ...selectedFilters,
      [category]: next,
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 space-y-5 w-full max-w-sm">
      {Object.entries(options).map(([category, values]) => (
        <div key={category}>
          <h4 className="font-semibold text-gray-700 mb-2">
            {FILTER_LABELS[category] || category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {values.map((value) => {
              const isSelected = (selectedFilters[category] || []).includes(value)
              return (
                <button
                  key={value}
                  onClick={() => handleToggle(category, value)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition ${
                    isSelected
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-orange-400'
                  }`}
                >
                  {value}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FilterPanel