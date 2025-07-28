function formatDateTime(isoString) {
  const date = new Date(isoString);

  // Format options
  const options = {
    year: "numeric",
    month: "long", // e.g., May
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // 12-hour format with AM/PM
  };

  return date.toLocaleString(undefined, options);
}

export default formatDateTime