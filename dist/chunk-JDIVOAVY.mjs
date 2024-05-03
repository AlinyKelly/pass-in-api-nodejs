// src/utils/generate-slug.ts
function generateSlug(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\w\a-]/g, "").replace(/\s+/g, "-");
}

export {
  generateSlug
};
