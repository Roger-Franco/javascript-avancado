class MensagemView extends View {

  constructor(elemento) {
    super(elemento)
  }

  _template(model) {
    // if (model.texto === '') return '<p></p>';
    // return `<p class="alert alert-info">${model.texto}</p>`
    /* Ou */
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>'
  }

}