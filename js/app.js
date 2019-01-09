// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  on: {
    pageInit(page) {
      //console.log(page)
      if(page.name == "form")
        setFormPage();
    }
  }
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

/*----------------------------------------------------------------------------------------------------------------------
/ Name: setFormPage
/ Use: setFormPage();
/ Description: Inicializa todos los inputs del form que lo requieran.
/-----------------------------------------------------------------------------------------------------------------------*/
function setFormPage()
{
  //Calendario Fecha de nacimiento
  create_birthdate_calendar();
  //Input de discapacidad
  $$('input[type=radio][name=discapacidad]').change(function() {
      if (this.value == 'si')
          addRequire($$('input[type=text][name=discapacidad]'));
      else if (this.value == 'no')
          removeRequire($$('input[type=text][name=discapacidad]'));
  });
  //Input de whatsapp
  $$('input[type=radio][name=tiene_whatsapp]').change(function() {
      if (this.value == 'si')
          addRequire($$('input[type=text][name=numero_whatsapp]'));
      else if (this.value == 'no')
          removeRequire($$('input[type=text][name=numero_whatsapp]'));
  });
  //Input de Facebook
  $$('input[type=radio][name=tiene_facebook]').change(function() {
      if (this.value == 'si')
          addRequire($$('input[type=text][name=user_facebook]'));
      else if (this.value == 'no')
          removeRequire($$('input[type=text][name=user_facebook]'));
  });
  //Input de Instagram
  $$('input[type=radio][name=tiene_instagram]').change(function() {
      if (this.value == 'si')
          addRequire($$('input[type=text][name=user_instagram]'));
      else if (this.value == 'no')
          removeRequire($$('input[type=text][name=user_instagram]'));
  });
  //Input de Twitter
  $$('input[type=radio][name=tiene_twitter]').change(function() {
      if (this.value == 'si')
          addRequire($$('input[type=text][name=user_twitter]'));
      else if (this.value == 'no')
          removeRequire($$('input[type=text][name=user_twitter]'));
  });
  //Input de Vehículo
  $$('input[type=radio][name=tiene_vehiculo]').change(function() {
      if (this.value == 'si')
          addRequire($$('input[type=text][name=placa]'));
      else if (this.value == 'no')
          removeRequire($$('input[type=text][name=placa]'));
  });
}
/*----------------------------------------------------------------------------------------------------------------------
/ Name:  create_birthdate_calendar
/ Use: create_birthdate_calendar();
/ Description: Setea el input del calendario para la fecha de nacimiento
/-----------------------------------------------------------------------------------------------------------------------*/
function create_birthdate_calendar()
{
  var calendarDefault = app.calendar.create({
    inputEl: '#fecha_nacimiento',
  });
}
/*----------------------------------------------------------------------------------------------------------------------
/ Name: addRequire
/ Use: addRequire($$('input[type=text][name=discapacidad]'));
/ Description: Agrega el require al input dado
/-----------------------------------------------------------------------------------------------------------------------*/
function addRequire(element)
{
  element.attr('required','true');
  element.attr('validate','true');
}
/*----------------------------------------------------------------------------------------------------------------------
/ Name: removeRequire
/ Use: removeRequire($$('input[type=text][name=discapacidad]'));
/ Description: Remueve el require al input dado
/-----------------------------------------------------------------------------------------------------------------------*/
function removeRequire(element)
{
  element.removeAttr('required');
  element.removeAttr('validate');
  element.removeClass('input-invalid');
  element.parents('.item-content.item-input').removeClass('item-input-with-error-message');
  element.parents('.item-content.item-input').removeClass('item-input-invalid');
  element.parent('.item-input-wrap').find('.item-input-error-message').remove();
}