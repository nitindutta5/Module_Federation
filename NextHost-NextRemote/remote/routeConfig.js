const routes = [{
    url: "/demo", path: "./pages/index.js", key: "./TestRoute"
  }]
const routesConfig = routes.reduce((prev, curr) => ({...prev, [curr.key] : curr.path }), { })

exports.routes = routes
exports.routesConfig = routesConfig