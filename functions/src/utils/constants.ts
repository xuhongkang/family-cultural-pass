/**
 * @file Constants used throughout the application.
 */
export const TIME_ZONE = 'America/New_York';
export const TIME_FORMAT = 'MM-dd-yyyy';

export const CALLABLE_SECRETS = {
  secrets: ['CLOUD_FUNCTIONS_KEY'],
};
export const isLocal = !!process.env.NODE_ENV && process.env.NODE_ENV === 'local';
export const CALLABLE_OPTIONS = {
  ...CALLABLE_SECRETS,
  enforceAppCheck: !isLocal, // Reject requests with missing or invalid App Check tokens.
};

export const ALERTS_FALLBACK = {
  qualifiedAddress: 'This address does not qualify for pickup.',
  limitAddress: 'Address reached the yearly collection limit.',
};

export const WHILE_BREAK = 100;
export const DEFAULT_QUERY_LIMIT = 100;
