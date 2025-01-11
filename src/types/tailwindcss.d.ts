declare module "tailwindcss/lib/util/flattenColorPalette" {
  const flattenColorPalette: (
    colors: Record<string, unknown>
  ) => Record<string, unknown>;
  export default flattenColorPalette;
}
