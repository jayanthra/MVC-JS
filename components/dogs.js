import dogApi from '../api/animal.js'

export default {
  name: 'dogs',
  model: {
    dogs: []
  },
  view(model) {
    const dogHTML = model.dogs.map(dog => `<li><img src="${dog}" alt=""></li>`).join('')
    return `
      <ul class="dogs">
        ${dogHTML}
      </ul>
    `;
  },
  async controller(model) {
    const dogs = await dogApi.getDogs()
    model.dogs = dogs.message
  }
}