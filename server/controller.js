let filteredAmiibo = []

module.exports = {
  filteredAmiibo: (req, res) => {
    let filteredAmiibo = req.body.finalAmiibo;
    console.log(filteredAmiibo)
    res.status(200).send(filteredAmiibo)
  }
}
