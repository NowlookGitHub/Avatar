// Sketchfab Viewer API: Models Follow the mouse
var version = '1.10.1';
var iframe = document.getElementById('api-frame2');

var uidStation = '97a260a8e41f409b95451e4fa2cf1fc4';

var eventCatcher = document.createElement('div');
eventCatcher.style.width = '100%';
// eventCatcher.style.height = '100%';
eventCatcher.style.position = 'relative';
iframe.parentNode.insertBefore(eventCatcher, iframe);
var client = new window.Sketchfab(version, iframe);

var error = function error() {
  console.error('Sketchfab API error');
};


var success = function success(api) {

  // Listener
    api.start(function () {
      api.addEventListener('viewerready', function () {
        api.getSceneGraph(function (err, result) { //ID des objets
          if (err) {
            console.log('Error getting nodes');
            return;
          } // get the id from that log
        console.log(result);
        });
        
        // hide-show
        //aiguille manomètre
        api.hide(612); //bas  
        api.show(595); //nominal
        api.hide(626); //haut
        
        document.getElementById('bouton1').addEventListener('click', function () {
              api.setCameraLookAt([5, -71, 11], [2.2, -64.4, 8.4], .2, function(err) {});
              setTimeout(tempoManoBas, 100);
              function tempoManoBas() {
                api.show(612); //bas  
                api.hide(595); //nominal
                api.hide(626); //haut
              }
        });
        
        document.getElementById('bouton2').addEventListener('click', function () {
          api.hide(612); //bas  
          api.show(595); //nominal
          api.hide(626); //haut
        });

        document.getElementById('bouton3').addEventListener('click', function () {
            api.setCameraLookAt([5, -71, 11], [2.2, -64.4, 8.4], .2, function(err) {});
            setTimeout(tempoManoHaut, 100);
            function tempoManoHaut() {
              api.hide(612); //bas  
              api.hide(595); //nominal
              api.show(626); //haut
            }
        });

        //porte
        api.show(562); //fermé
        api.hide(640); //ouvert
        
        document.getElementById('bouton4').addEventListener('click', function () {
          api.show(562); //fermé
          api.hide(640); //ouvert
        });

        document.getElementById('bouton5').addEventListener('click', function () {
            api.setCameraLookAt([3.5, -73.8, 10.5], [5.6, -65.3, 6.8], .2, function(err) {});
            setTimeout(tempoManoHaut, 100);
            function tempoManoHaut() {
              api.hide(562); //fermé
              api.show(640); //ouvert
            }
        });
        
        // end hide-show

      });

            
      

    });
  // End Listener


};


client.init(uidStation, {
  
  annotation: 0, // Usage: Setting to [1 – 100] will automatically load that annotation when the viewer starts.
  annotations_visible: 1, // Usage: Setting to 0 will hide annotations by default.
  autospin: 0, // Usage: Setting to any other number will cause the model to automatically spin around the z-axis after loading.
  autostart: 1, // Usage: Setting to 1 will make the model load immediately once the page is ready, rather than waiting for a user to click the Play button.
  cardboard: 0, // Usage: Start the viewer in stereoscopic VR Mode built for Google Cardboard and similar devices.
  camera: 0, // Usage: Setting to 0 will skip the initial animation that occurs when a model is loaded, and immediately show the model in its default position.
  preload: 1, // Usage: Setting to 1 will force all resources (textures) to download before the scene is displayed.
  ui_stop: 0, // Usage: Setting to 0 will hide the "Disable Viewer" button in the top right so that users cannot stop the 3D render once it is started.
  transparent: 0, // Usage: Setting to 1 will make the model's background transparent
  ui_animations: 0, // Usage: Setting to 0 will hide the animation menu and timeline.
  ui_annotations: 1, // Usage: Setting to 0 will hide the Annotation menu.
  ui_controls: 1, // Usage: Setting to 0 will hide all the viewer controls at the bottom of the viewer (Help, Settings, Inspector, VR, Fullscreen, Annotations, and Animations).
  ui_fullscreen: 0, // Usage: Setting to 0 will hide the Fullscreen button.
  ui_general_controls: 1, // Usage: Setting to 0 will hide main control buttons in the bottom right of the viewer (Help, Settings, Inspector, VR, Fullscreen).
  ui_help: 1, // Usage: Setting to 0 will hide the Help button.
  ui_hint: 1, // Usage: Setting to 0 will always hide the viewer hint animation ("click & hold to rotate"). Setting to 1 will show the hint the first time per browser session (using a cookie). Setting to 2 will always show the hint.
  ui_infos: 0, // Usage: Setting to 0 will hide the model info bar at the top of the viewer.
  ui_inspector: 0, // Usage: Setting to 0 will hide the inspector button.
  ui_settings: 0, // Usage: Setting to 0 will hide the Settings button.
  ui_vr: 0, // Usage: Setting to 0 will hide the View in VR button.
  ui_watermark_link: 0, // Usage: Setting to 0 remove the link from the Sketchfab logo watermark.
  ui_color: '00a8c0', // Usage: Setting to a hexidecimal color code (without the #) or a HTML color name will change the color of the viewer loading bar.
  ui_watermark: 0, // Usage: Setting to 0 remove the Sketchfab logo watermark.

  success: success,
  error: error
  
  
  // success: success,
  // error: error,
  // success: function onSuccess( api ){ },
  // error: function onError() { },
  // camera: 0,
  // blending: 1,
  // autostart: 0,
  // ui_annotations: 1, // Usage: Setting to 0 will hide the Annotation menu.
  // ui_controls: 1, // Usage: Setting to 0 will hide all the viewer controls at the bottom of the viewer (Help, Settings, Inspector, VR, Fullscreen, Annotations, and Animations).
  // ui_fullscreen: 0, // Usage: Setting to 0 will hide the Fullscreen button.
  // ui_general_controls: 1, // Usage: Setting to 0 will hide main control buttons in the bottom right of the viewer (Help, Settings, Inspector, VR, Fullscreen).
  // ui_help: 1, // Usage: Setting to 0 will hide the Help button.
  // ui_hint: 1, // Usage: Setting to 0 will always hide the viewer hint animation ("click & hold to rotate"). Setting to 1 will show the hint the first time per browser session (using a cookie). Setting to 2 will always show the hint.
  // ui_infos: 0, // Usage: Setting to 0 will hide the model info bar at the top of the viewer.
  // ui_inspector: 0, // Usage: Setting to 0 will hide the inspector button.
  // ui_settings: 0, // Usage: Setting to 0 will hide the Settings button.
  // preload: 1
});