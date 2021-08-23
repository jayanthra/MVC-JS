import catApi from '../api/animal.js'

const catTemplate = (cat) => `
<div>
<p> ${cat.name} </p>
<img src="${cat.image ? cat.image.url : ''}" alt="">
</div>
`
export default {
  name: 'cats',
  model: {
    cats: []
  },
  view(model) {
    const catHTML = model.cats.reduce((html, cat) => html + `<li>${catTemplate(cat)}</li>`, '')
    return `
      <ul class="cats">
        ${catHTML}
      </ul>
    `;
  },
  async controller(model) {
    const cats = await catApi.getCats()
    model.cats = cats
  }
}