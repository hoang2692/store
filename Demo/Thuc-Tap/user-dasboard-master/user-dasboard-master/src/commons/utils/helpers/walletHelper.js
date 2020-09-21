export function getMethodAddress(data) {
  if (!data) return "";
  return data.address || data.email || "";
}
