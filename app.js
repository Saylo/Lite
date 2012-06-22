//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

/**********************************************************************
					REQUIRES (ASYNCHRONOUS LOADING)
http://docs-devel.sencha.com/touch/2-0/#!/api/Ext.Loader
**********************************************************************/

Ext.require('Ext.data.Store');
Ext.require('Ext.dataview.List');
Ext.require('Ext.field.Checkbox');
Ext.require('Ext.Img');

/**********************************************************************
							APPLICATION LOAD
**********************************************************************/

var SayloCoords;
Ext.application({
    name: 'SayloMobile',	
    requires: [
        'Ext.MessageBox',
        'SayloMobile.config'
    ],
	
   controllers: ['Main'],
                
	viewport: {
		autoMaximize: true
	}, 
	
    coords: {},
    foo: 'bar',
    setCoords: function(arg) {
        SayloMobile.app.coords = arg;
    },
    
    getCoords: function() {
        return SayloMobile.app.coords;
    },
                
    views: ['Main'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        //navigator.geolocation.getCurrentPosition(geoSuccess, geoFail, {enableHighAccuracy: true});
        
        var viewMain = {
            xtype: "main"
        };
        
        // Initialize the main view
        Ext.Viewport.add(viewMain);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});

/* function geoSuccess(position)
{
   SayloMobile.config.setCoords({
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
   });
   
   SayloCoords = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
   };
}

function geoFail(err)
{
    console.log('Error: ' + err);
} */