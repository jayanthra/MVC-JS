export default {
  async getCats() {
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    return response.json()
  },

  async getDogs() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/50')
    return response.json()
  },
}