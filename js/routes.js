routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  /*{
    path: '/elector/:id/',
    async: function (routeTo, routeFrom, resolve, reject) {
      console.log('Entro al router path');
      var router = this;
      var app = router.app;
      console.log(routeTo.params.id);
      app.preloader.show();
      //var us =  app.params.template7Data['directorio'][routeTo.params.id];

      console.log(us);
      //var user = app.params.template7Data['directorio'][routeTo.params.id];
      setTimeout(function () {
      resolve(
        {
          url: './pages/elector.html',
        },
        {
          context: {
            user: us,
          }
        },
      );
     }, 1000);
     app.preloader.hide();
    }
  },*/
  {
    path: '/elector/:id/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.id;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user      = app.params.template7Data['directorio'][routeTo.params.id];
        var radios    = setRadios(user);
        var select    = setSelect(user);
        var checkBox  = setCheckBox(user);
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/elector.html',
          },
          {
            context: {
              user:     user,
              radios:   radios,
              select:   select,
              checkBox: checkBox,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '/directorio/',
    url: './pages/directorio.html',
  },
  {
    path: '/noticias/',
    url: './pages/noticias.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

function setRadios(user)
{
  var radios = {};
  //Estado Civil
  if(user.estado_civil == 'Soltero')
    radios['estado_civil_soltero'] = true;
  else
    radios['estado_civil_soltero'] = false;
  if(user.estado_civil == 'Casado')
    radios['estado_civil_casado'] = true;
  else
    radios['estado_civil_casado'] = false;
  //Discapacidad
  if(user.tiene_discapacidad == 'si')
    radios['tiene_discapacidad_si'] = true;
  else
    radios['tiene_discapacidad_si'] = false;
  if(user.tiene_discapacidad == 'no')
    radios['tiene_discapacidad_no'] = true;
  else
    radios['tiene_discapacidad_no'] = false;
  //Bono Gobierno
  if(user.tiene_bono_gobierno == 'si')
    radios['tiene_bono_gobierno_si'] = true;
  else
    radios['tiene_bono_gobierno_si'] = false;
  if(user.tiene_bono_gobierno == 'no')
    radios['tiene_bono_gobierno_no'] = true;
  else
    radios['tiene_bono_gobierno_no'] = false;
  //Bono Municipio
  if(user.tiene_bono_municipio == 'si')
    radios['tiene_bono_municipio_si'] = true;
  else
    radios['tiene_bono_municipio_si'] = false;
  if(user.tiene_bono_municipio == 'no')
    radios['tiene_bono_municipio_no'] = true;
  else
    radios['tiene_bono_municipio_no'] = false;
  //Whatsapp
  if(user.tiene_whatsapp == 'si')
    radios['tiene_whatsapp_si'] = true;
  else
    radios['tiene_whatsapp_si'] = false;
  if(user.tiene_whatsapp == 'no')
    radios['tiene_whatsapp_no'] = true;
  else
    radios['tiene_whatsapp_no'] = false;
  //Facebook
  if(user.tiene_facebook == 'si')
    radios['tiene_facebook_si'] = true;
  else
    radios['tiene_facebook_si'] = false;
  if(user.tiene_facebook == 'no')
    radios['tiene_facebook_no'] = true;
  else
    radios['tiene_facebook_no'] = false;
  //Instagram
  if(user.tiene_instagram == 'si')
    radios['tiene_instagram_si'] = true;
  else
    radios['tiene_instagram_si'] = false;
  if(user.tiene_instagram == 'no')
    radios['tiene_instagram_no'] = true;
  else
    radios['tiene_instagram_no'] = false;
  //Twitter
  if(user.tiene_twitter == 'si')
    radios['tiene_twitter_si'] = true;
  else
    radios['tiene_twitter_si'] = false;
  if(user.tiene_twitter == 'no')
    radios['tiene_twitter_no'] = true;
  else
    radios['tiene_twitter_no'] = false;
  //Casa Propia
  if(user.tiene_casa_propia == 'si')
    radios['tiene_casa_propia_si'] = true;
  else
    radios['tiene_casa_propia_si'] = false;
  if(user.tiene_casa_propia == 'no')
    radios['tiene_casa_propia_no'] = true;
  else
    radios['tiene_casa_propia_no'] = false;
  //Vehiculo
  if(user.tiene_vehiculo == 'si')
    radios['tiene_vehiculo_si'] = true;
  else
    radios['tiene_vehiculo_si'] = false;
  if(user.tiene_vehiculo == 'no')
    radios['tiene_vehiculo_no'] = true;
  else
    radios['tiene_vehiculo_no'] = false;

  return radios;
}
function setSelect(user)
{
  var select = {};
  //primaria-incompleta
  if(user.nivel_escolaridad == 'primaria-incompleta')
    select['primaria_incompleta'] = true;
  else
    select['primaria_incompleta'] = false;
  //primaria-completa
  if(user.nivel_escolaridad == 'primaria-completa')
    select['primaria_completa'] = true;
  else
    select['primaria_completa'] = false;
  //secundaria-incompleta
  if(user.nivel_escolaridad == 'secundaria-incompleta')
    select['secundaria_incompleta'] = true;
  else
    select['secundaria_incompleta'] = false;
  //bachiller
  if(user.nivel_escolaridad == 'bachiller')
    select['bachiller'] = true;
  else
    select['bachiller'] = false;
  //universidad-incompleta
  if(user.nivel_escolaridad == 'universidad-incompleta')
    select['universidad_incompleta'] = true;
  else
    select['universidad_incompleta'] = false;
  //universidad-completa
  if(user.nivel_escolaridad == 'universidad-completa')
    select['universidad_completa'] = true;
  else
    select['universidad_completa'] = false;

  return select;
}
function setCheckBox(user)
{
  var checkBox = {};
  //seguro_medico
  if(user.seguro_medico == 'si')
    checkBox['seguro_medico'] = true;
  else
    checkBox['seguro_medico'] = false;
  //credito_agricola
  if(user.credito_agricola == 'si')
    checkBox['credito_agricola'] = true;
  else
    checkBox['credito_agricola'] = false;

  return checkBox;

}