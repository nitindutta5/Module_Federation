const routes = [{
    url: "/demo", path: "./pages/index.js", key: "./TestRoute"
  },
  {
    url: "/about", path: "./pages/about.js", key: "./AboutRoute"
  }]

export default routes.reduce((prev, curr) => ({...prev, [curr.url] : curr.key }), { })


//  exports.routesConfig = routes.reduce((prev, curr) => ({...prev, [curr.key] : curr.path }), { })