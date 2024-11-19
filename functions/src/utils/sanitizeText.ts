/**
 * Sanitize text input to remove potential harmful characters or scripts.
 * @param text - The text to sanitize
 */
export function sanitizeText(text: string): string {
  return text.replace(/[<>]/g, ''); // Basic sanitization example
}