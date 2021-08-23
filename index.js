import App from './lib/App.js'
import Router from './lib/Router.js'
import cats from './components/cat.js'
import dogs from './components/dogs.js'

const app = new App('#app')
const router = new Router(app)
app.createComponent(cats)
app.createComponent(dogs)


const routes = [{
  name: 'cats',
  path: '/cats'
},
{
  name: 'dogs',
  path: '/dogs'
}]

router.addRoute(routes)
