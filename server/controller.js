let filteredAmiibo = []

module.exports = {
  filteredAmiibo: (req, res) => {
    filteredAmiibo = req.body.finalAmiibo;
    console.log(filteredAmiibo)
    res.status(200).send(filteredAmiibo)
  },
  getAmiibo: (req, res) => {
    const selectedAmiibo = filteredAmiibo.filter( (character, index) => {
      return index == req.params.id
    })
    res.status(200).send(selectedAmiibo)
  }
}
