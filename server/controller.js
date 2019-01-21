let filteredAmiibo = []
let favorites = []

module.exports = {
  filteredAmiibo: (req, res) => {
    filteredAmiibo = req.body.finalAmiibo;
    res.status(200).send(filteredAmiibo)
  },
  getAmiibo: (req, res) => {
    const selectedAmiibo = filteredAmiibo.filter( character => {
      return character.tail == req.params.id
    })
    res.status(200).send(selectedAmiibo)
  },
  favoriteAmiibo: (req, res) => {
    // console.log('hit')
    // console.log(req.body)

    const newFavorite = {
      name: req.body.name,
      image: req.body.image,
      id: req.body.tail
    }

    favorites.push(newFavorite)
    res.status(200).send(favorites)
  },
  deleteAmiibo: (req, res) => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === req.params.id) {
        favorites.splice(i, 1)
      }
    }
    res.status(200).send(favorites)
  }
}
