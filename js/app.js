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
        create_birthdate_calendar();
      //addRequire($$('[name="placa"]'));
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
/ Name:  
/ Use: 
/ Description: 
/-----------------------------------------------------------------------------------------------------------------------*/
$$('input[type=radio][name=discapacidad]').change(function() {
    console.log(3);
    if (this.value == 'si') {
        addRequire(this);
    }
    else if (this.value == 'no') {
        removeRequire(this);
    }
});

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
/ Name:  create_birthdate_calendar
/ Use: create_birthdate_calendar();
/ Description: Setea el input del calendario para la fecha de nacimiento
/-----------------------------------------------------------------------------------------------------------------------*/
function addRequire(element)
{
  element.attr('required','true');
  element.attr('validate','true');
}
function removeRequire(element)
{
  element.removeAttr('required');
  element.removeAttr('validate');
}