/**
 * @copyright 2012,2013 Binovo it Human Project, S.L.
 * @license http://www.opensource.org/licenses/bsd-license.php New-BSD
 */

 function postRequest(url, params) {
   $.ajax({
     type: "POST",
     url: url,
     data: params,
     success: function(response) {
       if (response.msg){
         okMsg(response.msg);

         if (response.action){
           if (response.data){
             // Call to callback
             window[response.action].apply(null, response.data);
           }
         }
       }
     }
   });
 };



require(['dojo', 'dojo/parser', 'dijit/form/Button', 'dijit/PopupMenuBarItem', 'dijit/DropDownMenu', 'dojo/NodeList-manipulate', 'dojo/ready', 'dojo/dom-class', 'dijit/registry'],
function(dojo, parser, Button, PopuMenuBarItem, DropDownMenu, NodeList, ready, domClass, registry) {
    ready(function() {
              parser.parse().then(function(){

              //  dojo.destroy('menuplaceholder');
               });
          });
});
