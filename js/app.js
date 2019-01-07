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
app.onPageInit('directorio', function (page) {
  // "page" variable contains all required information about loaded and initialized page
  console.log(1);
  create_birthdate_calendar();
})

/*----------------------------------------------------------------------------------------------------------------------
/ Name:  
/ Use: 
/ Description: 
/-----------------------------------------------------------------------------------------------------------------------*/
function create_birthdate_calendar()
{
  console.log(1);
  var calendarDefault = app.calendar.create({
    inputEl: '#fecha_nacimiento',
  });
}