var version = '1.10.1';
var iframe = document.getElementById('api-frame1');

var uidUsine = '1a745cb2bc954d19bbcd60ea10c326cd';

var eventCatcher = document.createElement('div');
eventCatcher.style.width = '100%';
// eventCatcher.style.height = '100%';
eventCatcher.style.position = 'absolute';
iframe.parentNode.insertBefore(eventCatcher, iframe);
var client = new window.Sketchfab(version, iframe);
var error = function error() {console.error('Sketchfab API error');};

var success = function success(api) {
      api.start(function () {
        api.addEventListener('viewerready', function () {

            api.hide(554); //toit
            api.hide(317); //sigle

            document.getElementById('bouton2').addEventListener('click', function () {
              bouton1.style.backgroundColor = "white";
              bouton3.style.backgroundColor = "white";
              api.hide(554); //toit
            });

            document.getElementById('bouton1').addEventListener('click', function () {
              api.setCameraLookAt([-7.5, -14, 2.5], [-4, -12, 1.5], .2, function(err) {});
              bouton1.style.backgroundColor = "red";
              bouton3.style.backgroundColor = "white";
              setTimeout(tempoMano, 300);
              function tempoMano() {api.show(554)}
            });

            document.getElementById('bouton3').addEventListener('click', function () {
              api.setCameraLookAt([-7.5, -14, 2.5], [-4, -12, 1.5], .2, function(err) {});
              setTimeout(tempoMano, 300);
              bouton3.style.backgroundColor = "red";
              bouton1.style.backgroundColor = "white";
              function tempoMano() {api.show(554)}
            });

            document.getElementById('bouton4').addEventListener('click', function () {
              api.hide(317); //sigle
              bouton5.style.backgroundColor = "white";
            });

            document.getElementById('bouton5').addEventListener('click', function () {
              api.setCameraLookAt([-7.5, -14, 2.5], [-4, -12, 1.5], .2, function(err) {});
              setTimeout(tempoPorte, 300);
              bouton5.style.backgroundColor = "#F3E131";
              function tempoPorte() {api.show(317)}
            });

        });
      });
};


// var success = apiClient => {
//   // api = apiClient;
//   // api.start();
//   api.addEventListener( 'viewerready', function() {
//     window.console.log('viewer ready');


//   });
// };

client.init(uidUsine, {
  annotation: 0, // Usage: Setting to [1 – 100] will automatically load that annotation when the viewer starts.
  annotations_visible: 0, // Usage: Setting to 0 will hide annotations by default.
  autospin: 0, // Usage: Setting to any other number will cause the model to automatically spin around the z-axis after loading.
  autostart: 1, // Usage: Setting to 1 will make the model load immediately once the page is ready, rather than waiting for a user to click the Play button.
  cardboard: 0, // Usage: Start the viewer in stereoscopic VR Mode built for Google Cardboard and similar devices.
  camera: 0, // Usage: Setting to 0 will skip the initial animation that occurs when a model is loaded, and immediately show the model in its default position.
  preload: 0, // Usage: Setting to 1 will force all resources (textures) to download before the scene is displayed.
  ui_stop: 0, // Usage: Setting to 0 will hide the "Disable Viewer" button in the top right so that users cannot stop the 3D render once it is started.
  transparent: 0, // Usage: Setting to 1 will make the model's background transparent
  ui_animations: 0, // Usage: Setting to 0 will hide the animation menu and timeline.
  ui_annotations: 1, // Usage: Setting to 0 will hide the Annotation menu.
  ui_controls: 1, // Usage: Setting to 0 will hide all the viewer controls at the bottom of the viewer (Help, Settings, Inspector, VR, Fullscreen, Annotations, and Animations).
  ui_fullscreen: 0, // Usage: Setting to 0 will hide the Fullscreen button.
  ui_general_controls: 1, // Usage: Setting to 0 will hide main control buttons in the bottom right of the viewer (Help, Settings, Inspector, VR, Fullscreen).
  ui_help: 1, // Usage: Setting to 0 will hide the Help button.
  ui_hint: 0, // Usage: Setting to 0 will always hide the viewer hint animation ("click & hold to rotate"). Setting to 1 will show the hint the first time per browser session (using a cookie). Setting to 2 will always show the hint.
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
  // autostart: 1,
  // autospin: 4,
  // annotation_cycle: 4,
  // ui_annotations: 1, // Usage: Setting to 0 will hide the Annotation menu.
  // ui_controls: 1, // Usage: Setting to 0 will hide all the viewer controls at the bottom of the viewer (Help, Settings, Inspector, VR, Fullscreen, Annotations, and Animations).
  // ui_fullscreen: 0, // Usage: Setting to 0 will hide the Fullscreen button.
  // ui_general_controls: 1, // Usage: Setting to 0 will hide main control buttons in the bottom right of the viewer (Help, Settings, Inspector, VR, Fullscreen).
  // ui_help: 1, // Usage: Setting to 0 will hide the Help button.
  // ui_hint: 1, // Usage: Setting to 0 will always hide the viewer hint animation ("click & hold to rotate"). Setting to 1 will show the hint the first time per browser session (using a cookie). Setting to 2 will always show the hint.
  // ui_infos: 0, // Usage: Setting to 0 will hide the model info bar at the top of the viewer.
  // ui_inspector: 0, // Usage: Setting to 0 will hide the inspector button.
  // ui_settings: 0, // Usage: Setting to 0 will hide the Settings button.
  // orbit_constraint_pitch_down: -Math.PI,
  // orbit_constraint_pan: 0.5,
  // camera: 0,
  // preload: 1
});

