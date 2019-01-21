let filteredAmiibo = []
let favorites = []

updateAmiibo = (array, id, name) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].tail === id) {
      array[i].name = name
      arr.push(array[i]);
    }
    else {
      arr.push(array[i]);
    }
  }
  return arr
}

updateFavorite = (array, id, name) => {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    if (array[i].id === id) {
      array[i].name = name
      arr.push(array[i])
    }
  }
  console.log(arr)
  return arr
}

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
  },

  editAmiibo: (req, res) => {
    let updatedAmiibo = updateAmiibo(filteredAmiibo, req.params.tail, req.body.name)
    let updatedFavorite = updateFavorite(favorites, req.params.tail, req.body.name)
    // console.log(updatedFavorite)
    let updated = {
      updatedAmiibo: updatedAmiibo,
      updatedFavorite: updatedFavorite
    }
    res.status(200).send(updated)
  }
}
