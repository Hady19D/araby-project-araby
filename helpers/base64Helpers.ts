export const encodeToBase64 = (text: string): string => {
  let base64;
  if (process.client && window) base64 = btoa(text);
  else base64 = Buffer.from(text, 'ascii').toString('base64');

  return base64.replace(/\//g, '_').replace(/\+/g, '-').replace(/=/g, '');
};

export const decodeFromBase64 = (encodedString: string): string => {
  const paddedString = encodedString.padEnd(encodedString.length + ((4 - (encodedString.length % 4)) % 4), '=');
  const base64 = paddedString.replace(/_/g, '/').replace(/-/g, '+');
  return process.client ? atob(base64) : Buffer.from(base64, 'base64').toString('utf-8');
};
