
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
  // View code goes here
}
