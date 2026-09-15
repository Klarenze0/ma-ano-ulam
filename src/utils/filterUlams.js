export function filterUlams(ulams, selectedFilters) {
  const activeCategories = Object.entries(selectedFilters).filter(
    ([, values]) => values && values.length > 0,
  );

  if (activeCategories.length === 0) {
    return ulams;
  }

  return ulams.filter((ulam) =>
    activeCategories.every(([category, values]) =>
      values.includes(ulam[category]),
    ),
  );
}
