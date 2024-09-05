export const formatDate = (date: Date) => {
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  return `${dayOfWeek} ${day} ${month}`;
};
