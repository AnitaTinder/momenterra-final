import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Deine drei Sprachen
  locales: ['en', 'de', 'fr'],
  // Standard ist Deutsch
  defaultLocale: 'de',
  // Das hilft Vercel, die Sprache besser zu finden
  localePrefix: 'always'
});
 
export const config = {
  // Dieser Bereich sagt dem Computer, welche Seiten er ignorieren soll (wie Bilder)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
