class Router {
  constructor(app) {
    this.app = app
    this.routes = []
    this.hashChange = this.hashChange.bind(this)
    window.addEventListener('hashchange', this.hashChange)
    window.addEventListener('DOMContentLoaded', this.hashChange)
  }

  addRoute(approute) {
    approute.forEach(element => {
      const route = {
        name: element.name,
        path: `^#${element.path}$`
      }
      this.routes.push(route)
    });
  }

  hashChange() {
    const { hash } = window.location
    const route = this.routes.find(route => {
      return hash.match(new RegExp(route.path))
    })
    if (route) {
      this.app.renderComponent(route.name)
    }
  }
}

export default Router;