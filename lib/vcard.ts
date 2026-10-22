/**
 * Reusable vCard handler utility
 * Detects mobile devices and handles vCard download/navigation accordingly
 */

export interface VCardHandlerOptions {
  vCardPath?: string;
  fileName?: string;
}

/**
 * Creates a click handler for vCard download links
 * On mobile: navigates directly to the vCard file
 * On desktop: allows default download behavior
 *
 * @param options Configuration options for vCard handling
 * @returns Click handler function for anchor tags
 *
 * @example
 * const handleVCardClick = createVCardHandler({
 *   vCardPath: '/contact.vcf',
 *   fileName: 'PT-Veritasindo-Citra-Abadi.vcf'
 * });
 *
 * <a href="/contact.vcf" download="PT-Veritasindo-Citra-Abadi.vcf" onClick={handleVCardClick}>
 *   Save Contact
 * </a>
 */
export function createVCardHandler(options: VCardHandlerOptions = {}) {
  const {
    vCardPath = '/contact.vcf',
    fileName = 'PT-Veritasindo-Citra-Abadi.vcf'
  } = options;

  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Detect mobile devices via user agent
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // On mobile, prevent default download behavior and navigate directly
      e.preventDefault();
      window.location.href = vCardPath;
    }
    // On desktop, let the default download behavior happen (no intervention needed)
  };
}
