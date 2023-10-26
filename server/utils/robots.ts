export default [
    {sitemap:() => process.env.ENVIRONMENT === "production" ? process.env.BASE_URL + "/sitemap.xml" : ''},
    {UserAgent:"*"},
    {Disallow: () => process.env.ENVIRONMENT === "production" ? ["/admin", "/.env", "/users"] : '/'}  
]