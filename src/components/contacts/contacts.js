
Contacts = {}

Contacts.model = function () {
  this.name  = m.prop('your name');
  this.email = m.prop('your email');
};

Contacts.controller = function () {
  var ctrl = this;
  ctrl.contacts = m.prop([new Contacts.model()])
}

Contacts.view = function (ctrl) {
  return m('.contacts', [
    m('h3', 'Enter your info'),
    ctrl.contacts().map(function (contact, index) {
      return m('.contact', [
        m('p', 'Attendee #' + (index+1)),
        m('input[type=text]', { value: contact.name() }),
        m('input[type=text]', { value: contact.email() })
      ])
    })
  ])
}
