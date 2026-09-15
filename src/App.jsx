import { useState } from "react";
import { ulams } from "./data/ulams";
import UlamCard from "./components/UlamCard";

function getRandomUlam(list, excludeId) {
  const pool = excludeId ? list.filter((u) => u.id !== excludeId) : list;

  const source = pool.length > 0 ? pool : list;
  const randomIndex = Math.floor(Math.random() * source.length);
  return source[randomIndex];
}

function App() {
  const [generatedUlam, setGeneratedUlam] = useState(null);
  const [favoritess, setFavorites] = useState([]);

  const handleGenerate = () => {
    const previousId = generatedUlam?.id;
    const next = getRandomUlam(ulams, previousId);
    setGeneratedUlam(next);
  };

  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-3x1 font-bold text-orange-600">Ma, ano ulam?</h1>

      <button
        onClick={handleGenerate}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow transition"
      >
        {generatedUlam ? 'Generate Again' : 'Generate Ulam'}
      </button>

      {generatedUlam && (
        <UlamCard 
          ulam={generatedUlam}
          isFavorite={favoritess.includes(generatedUlam.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </div>
  );
}

export default App;
