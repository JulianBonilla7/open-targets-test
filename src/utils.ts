export const polarToCartesian = (angle: number, distance: number) => {
  const x = distance * Math.cos(angle);
  const y = distance * Math.sin(angle);
  return { x, y };
};

export const toTitleCase = (str: string) =>
  str
    .split("_")
    .filter((x) => x.length > 0)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");