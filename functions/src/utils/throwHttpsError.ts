import * as functions from 'firebase-functions';

/**
 * Helper to throw a Firebase HttpsError with additional logging.
 * @param code - The error code
 * @param message - The error message
 * @param log - Optional log for debugging
 */
export function throwHttpsError(code: functions.https.FunctionsErrorCode, message: string, log?: string): never {
  if (log) {
    console.error(log);
  }
  throw new functions.https.HttpsError(code, message);
}