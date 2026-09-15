export default function EmptyState({ message, subMessage, actionLabel, onAction}) {
    return (
        <div className="bg-white rounded-2x1 shadow-md p-6 text-center max-w-sm w-full space-y-3">
            <p className="text-lg font-semibold text-gray-700">{message}</p>
            {subMessage && <p className="text-sm text-gray-500">{subMessage}</p>}
            {actionLabel && onAction && (
                <button
                    onClick={onAction}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full shadow transition"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    )
}