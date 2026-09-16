import UlamCard from "./UlamCard";
import EmptyState from "./EmptyState";

function FavoritesView({ ulams, favorites, isFavorite, onToggleFavorite }) {
  const favoritedUlams = ulams.filter((u) => favorites.includes(u.id));

  if (favoritedUlams.length === 0) {
    return (
      <EmptyState
        message="You don't have any favorite ulam yet."
        subMessage="Start generating and save the ones you like!"
      />
    );
  }

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
      {favoritedUlams.map((ulam) => (
        <UlamCard
          key={ulam.id}
          ulam={ulam}
          isFavorite={isFavorite(ulam.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default FavoritesView;
