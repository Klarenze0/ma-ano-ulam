import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

function UlamCard({ ulam, isFavorite, onToggleFavorite }) {
  if (!ulam) return null;

  const { name, meatType, cookingMethod, sauceType, description, image } = ulam;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm w-full">
      <div className="h-48 bg-orange-100 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}

        <div
          className="w-full h-full items-center justify-center text-orange-300 text-5xl"
          style={{ display: image ? "none" : "flex" }}
        >
          <FontAwesomeIcon icon={faUtensils} />
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex item-start justify-between gap-2">
          <h3 className="text-lg font-bold text-gray 800">{name}</h3>
          <button
            onClick={() => onToggleFavorite?.(ulam.id)}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className="text-xl leading-none shrink-0 text-red-500"
          >
            <FontAwesomeIcon icon={isFavorite ? faHeart : faHeartRegular} />
          </button>
        </div>

        <p className="text-sm text-gray-500">
          {meatType !== "None" ? meatType : "Vegetables"}
          {cookingMethod ? ` ${cookingMethod}` : ""}
        </p>

        {sauceType && <p className="text-sm text-gray-500">{sauceType}</p>}

        {description && (
          <p className="text-sm text-gray-600 pt-1">{description}</p>
        )}
      </div>
    </div>
  );
}

export default UlamCard;
