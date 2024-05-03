export function generateSlug(text: string): string {
  return text
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^\w\a-]/g, "")
  .replace(/\s+/g, "-");
}