async function getAll(req, res, next) {
  console.log("chegou no getAll")
  const { user } = req;

  if (user.id === 1) {
    res.status(200).send(
      [
        {
          id: 1,
          data: "conteudo do usuario 01"
        }
      ]
    )
  } else if (user.id === 2) {
    res.status(200).send(
      [
        {
          id: 2,
          data: "conteudo do usuario 02"
        }
      ]
    )
  } else {
    // TODO: encapsular erro
    res.status(404).send({ data: "não encontrado" });
  }
}

module.exports = {
  getAll,
}