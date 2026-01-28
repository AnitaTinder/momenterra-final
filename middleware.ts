import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // The three languages from your blueprint
  locales: ['en', 'de', 'fr'],
 
  // If someone just types momenterra.de, show German first
  defaultLocale: 'de'
});
 
export const config = {
  // This tells the "Ghost" to watch all pages
  matcher: ['/', '/(de|en|fr)/:path*']
};
