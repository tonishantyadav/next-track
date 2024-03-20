export { default } from 'next-auth/middleware'

// Specified routes on which the middleware be applied
// Sidenote: 'issues/edit/:id+, Here the '+' is modifier that allow the middleware to run on any parameter that comes after /:id/ (it's like catch all parameters but in NextAuth)

export const config = {
  matcher: ['/issues/new', '/issues/:id/edit'],
}
