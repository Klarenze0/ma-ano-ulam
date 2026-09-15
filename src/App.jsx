import { useState } from "react";
import { ulams } from "./data/ulams";
import { getFilterOptions } from "./utils/getFilterOptions";
import { filterUlams } from "./utils/filterUlams";
import UlamCard from "./components/UlamCard";
import FilterPanel from "./components/FilterPanel";
import EmptyState from "./components/EmptyState";

function getRandomUlam(list, excludeId) {
  const pool = excludeId ? list.filter((u) => u.id !== excludeId) : list;
  const source = pool.length > 0 ? pool : list;
  const randomIndex = Math.floor(Math.random() * source.length);
  return source[randomIndex];
}

function App() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [generatedUlam, setGeneratedUlam] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const filterOptions = getFilterOptions(ulams);
  const matchingUlams = filterUlams(ulams, selectedFilters);
  const hasNoMatches = matchingUlams.length === 0;

  const handleGenerate = () => {
    const previousId = generatedUlam?.id;
    const next = getRandomUlam(ulams, previousId);
    setGeneratedUlam(next);
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
    setGeneratedUlam(null)
  };

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters)
    setGeneratedUlam(null)
  }

  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-3x1 font-bold text-orange-600">Ma, ano ulam?</h1>

      <FilterPanel
        options={filterOptions}
        selectedFilters={selectedFilters}
        onChange={handleFilterChange}
      />

      <button
        onClick={handleResetFilters}
        className="text-sm text-orange-600 underline hover:text-orange-700"
      >
        Reset Filters
      </button>

      <p className="text-sm text-gray-500">
        {matchingUlams.length} dish{matchingUlams.length !== 1 ? "es" : ""}{" "}
        match your filters
      </p>

      {!hasNoMatches && (
        <button
          onClick={handleGenerate}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow transition"
        >
          {generatedUlam ? "Generate Again" : "Generate Ulam"}
        </button>
      )}

      {hasNoMatches && (
        <EmptyState
          message="No ulam found."
          subMessage="Try removing one or more filters."
          actionLabel="Reset Filters"
          onAction={handleResetFilters}
        />
      )}

      {!hasNoMatches && generatedUlam && (
        <div className="w-full flex justify-center">
          <div className="w-[350px] max-w-full ring-4 ring-orange-300 rounded-2x1">
            <UlamCard
              ulam={generatedUlam}
              isFavorite={favorites.includes(generatedUlam.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>
        </div>
      )}

      {!hasNoMatches && (
        <div className="w-full max-w-6xl border-t border-orange-200 pt-2">
          <p className="text-sm text-gray-500 text-center">All matching ulam</p>
        </div>
      )}

      {!hasNoMatches && (
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {matchingUlams.map((ulam) => (
            <UlamCard
              key={ulam.id}
              ulam={ulam}
              isFavorite={favorites.includes(ulam.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default App;
