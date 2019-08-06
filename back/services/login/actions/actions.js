const routes = require('../routes')
const loadAction = app => {
    routes.forEach(route => {
        app[route.method](route.path, require(`./${route.action}`))
    })
}
module.exports = loadAction