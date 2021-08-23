class App {
  constructor(selector) {
    this.element = document.querySelector(selector)
    this.components = {}
    this.currentComponent = {}
  }

  createComponent(component) {
    this.components[component.name] = component
    component.model = new Proxy(component.model, {
      set: (obj, prop, value) => {
        console.log(obj, prop, value)
        obj[prop] = value
        this.updateView()
        return true
      }
    });
  
  }

  renderComponent(name) {
    this.currentComponent = this.components[name]
    if(this.currentComponent && this.currentComponent.controller) {
      this.currentComponent.controller(this.currentComponent.model)
    }
    this.updateView(this.currentComponent.model)
  }

  updateView() {
    if(this.currentComponent) {
      this.element.innerHTML = this.currentComponent.view(this.currentComponent.model)
    }
  }

  proxify(model) {
    return new Proxy(model, {
      set: (obj, prop, value) => {
        obj[prop] = value
        this.updateView()
        return true
      }
    });
  }
}

export default App;