// Glob import all property images at build time
const propertyImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/properties/**/*.{jpeg,jpg,png,webp,avif}',
  { eager: true }
);

export function getPropertyImage(path: string): ImageMetadata | undefined {
  // Convert "/images/property-name/image.ext" to asset path
  const assetPath = path.replace('/images/', '/src/assets/images/properties/');
  return propertyImages[assetPath]?.default;
}

export function getPropertyImages(paths: string[]): ImageMetadata[] {
  return paths
    .map(path => getPropertyImage(path))
    .filter((img): img is ImageMetadata => img !== undefined);
}
