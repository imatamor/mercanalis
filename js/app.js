// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App routes
  routes: routes,
  on: {
    pageInit(page) {
      //console.log(page)
      if(page.name == "home")
        login();
      if(page.name == "form")
        setFormPage();
    }
  }
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

$$('#my-login-screen .login-button').on('click', function () {

  var usuario = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  var valid = true;

  /*if($$('input').hasClass("input-invalid"))
    alert($$('input:empty').length);*/

  if(!usuario)
    valid = false;
  else if(!password)
    valid = false;
  if(valid)
  {
    var data = {
      'usuario'   : usuario,
      'password'  : password
    };
    $('.feedback_login').html("Espere un momento por favor...");
    $('.feedback_section_login').show();
    $.post("services/login.php", data)
    .done(function(submitResponse) 
    {
      //console.log(submitResponse);
      if(submitResponse.length == 0)
        $('.feedback_login').html("Usuario o Contraseña invalidos");
      else
        $('.feedback_login').html("Bienvenido "+ submitResponse[0].nombre);
      var userData =[submitResponse[0].nombre,submitResponse[0].usuario];
      localStorage.setItem('usuario', userData);
      // Close login screen
      app.loginScreen.close('#my-login-screen');
    })
    .fail( function(xhr, textStatus, errorThrown) {
    //error
      $('.feedback_login').html(submitResponse);
    })
  }
  else
  {
    $('.feedback_login').html("Debes llenar todos los campos para continuar");
  }
});
/**
 * LOGIN OPEN LOGIN SCREEN
 */
function login(){
  if(!localStorage.getItem('usuario'))
    app.loginScreen.open('#my-login-screen', true);
  
}

/*----------------------------------------------------------------------------------------------------------------------
/ Name: setFormPage
/ Use: setFormPage();
/ Description: Inicializa todos los inputs del form que lo requieran.
/-----------------------------------------------------------------------------------------------------------------------*/
function validateForm()
{

var nombre                  = $$('input[type=text][name=nombres]').val();
var apellido                = $$('input[type=text][name=apellidos]').val();
var cedula                  = $$('input[type=text][name=cedula]').val();
var fecha_nacimiento        = $$('input[type=text][name=fecha_nacimiento]').val();
var nombre_carnet           = $$('input[type=text][name=nombre_carnet]').val();
var nombre_familia          = $$('input[type=text][name=nombre_familia]').val();
var ciudad                  = $$('input[type=text][name=ciudad]').val();
var canton                  = $$('input[type=text][name=canton]').val();
var parroquia               = $$('input[type=text][name=parroquia]').val();
var barrio                  = $$('input[type=text][name=barrio]').val();
var sector                  = $$('input[type=text][name=sector]').val();
var direccion               = $$('textarea[name=nombres]').val();
var estado_civil            = $$('input[type=radio][name=estado_civil]:checked').val();
var numero_hijos            = $$('input[type=text][name=numero_hijos]').val();
var tiene_discapacidad      = $$('input[type=radio][name=discapacidad]:checked').val();
var discapacidad            = $$('input[type=text][name=discapacidad]').val();
var ocupacion               = $$('input[type=text][name=ocupacion]').val();
var profesion               = $$('input[type=text][name=profesion]').val();
var nivel_escolaridad       = $$('#nivel_escolaridad').val();
var capacitacion_deseada    = $$('input[type=text][name=capacitacion]').val();
var tiene_bono_gobierno     = $$('input[type=radio][name=bono_gobierno]:checked').val();
var tiene_bono_municipio    = $$('input[type=radio][name=bono_municipio]:checked').val();
var telefono_convencional   = $$('input[type=text][name=telefono_convencional]').val();
var telefono_celular        = $$('input[type=text][name=telefono_celular]').val();
var telefono_compania       = $$('input[type=text][name=telefono_compania]').val();
var tiene_whatsapp          = $$('input[type=radio][name=tiene_whatsapp]:checked').val();
var whatsapp                = $$('input[type=text][name=numero_whatsapp]').val();
var tiene_facebook          = $$('input[type=radio][name=tiene_facebook]:checked').val();
var facebook                = $$('input[type=text][name=user_facebook]').val();
var tiene_instagram         = $$('input[type=radio][name=tiene_instagram]:checked').val();
var instagram               = $$('input[type=text][name=user_instagram]').val();
var tiene_twitter           = $$('input[type=radio][name=tiene_twitter]:checked').val();
var twitter                 = $$('input[type=text][name=user_twitter]').val();
var correo_electronico      = $$('input[type=text][name=email]').val();
var tiene_casa_propia       = $$('input[type=radio][name=tiene_casa_propia]:checked').val();
var tiene_vehiculo          = $$('input[type=radio][name=tiene_vehiculo]:checked').val();
var placa                   = $$('input[type=text][name=placa]').val();
var seguro_medico           = $$('input[type=checkbox][name=seguro_medico]').val();
var credito_agricola        = $$('input[type=checkbox][name=credito_agricola]').val();
var otros                   = $$('textarea[name=otro]').val();
var numero_contrato         = $$('input[type=text][name=numero_contrato]').val();
var image                   = $$('input[type=text][name=nombres]').val();
  
}
/*----------------------------------------------------------------------------------------------------------------------
/ Name: setFormPage
/ Use: setFormPage();
/ Description: Inicializa todos los inputs del form que lo requieran.
/-----------------------------------------------------------------------------------------------------------------------*/
function setHomePage()
{
  $('.feedback_section_login').hide();
}
/*----------------------------------------------------------------------------------------------------------------------
/ Name: setFormPage
/ Use: setFormPage();
/ Description: Inicializa todos los inputs del form que lo requieran.
/-----------------------------------------------------------------------------------------------------------------------*/
function setFormPage()
{
  //Camara
  var pictureSource = navigator.camera.PictureSourceType;
  var destinationType = navigator.camera.DestinationType;
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
  //Guardar Registro
  $$('#form_save_button').on('click', function () {
    validateForm();
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











function onPhotoFileSuccess(imageData) {
  alert("onPhotoFileSuccess was called. imageData: "+imageData);
  // Get image handle
  console.log(JSON.stringify(imageData));

  // Get image handle
  //
  var largeImage = document.getElementById('largeImage');
  // Unhide image elements
  //
  largeImage.style.display = 'block';
  document.getElementById('uploadpicbtn').style.display="block";
  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  largeImage.src = imageData;
  uploadimgdata=imageData;
}
// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
  alert("onPhotoURISuccess was called. imageuri: "+imageURI);
  // Uncomment to view the image file URI
  // console.log(imageURI);
  // Get image handle
  //
  var largeImage = document.getElementById('largeImage');
  // Unhide image elements
  //
  largeImage.style.display = 'block';
  document.getElementById('uploadpicbtn').style.display="block";
  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //

//custom code to fix image uri
  if (imageURI.substring(0,21)=="content://com.android") {
    photo_split=imageURI.split("%3A");
    imageURI="content://media/external/images/media/"+photo_split[1];
  }

  largeImage.src = imageURI;
  document.getElementById('uploadpicbtn').style.display="block";

uploadimgdata=imageURI;
}

function capturePhotoWithFile() {
    navigator.camera.getPicture(onPhotoFileSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
}

// A button will call this function
//
function getPhoto(source) {
  alert("getphoto was called. source= "+source);
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    allowEdit: true,
    sourceType: source });
}
// Called if something bad happens.
//
function onFail(message) {
  alert('Failed because: ' + message);
}