var sayloApi = function(){	

	var sayloApiCfg = defaults;

	var defaults = {
		fnRecConvoList: function(data) { 
			getResults(data, "RecConvoList");
		},
		fnRecMessages: function(data) {
			getResults(data, "RecMessages");
		},
		fnRecCreate: function(data) {
			getResults(data, "RecCreate");
		},
		fnRecRoomAdd: function(data) {
			getResults(data, "RecRoomAdd");
		},
		fnRecUpdRoom: function(data) {
			getResults(data, "RecUpdRoom");
		},
		fnRecMsgAdd: function(data) {
			getResults(data, "RecMsgAdd");
		},
		fnRecUpdUser: function(data) {
			getResults(data, "RecUpdUser");		
		},
		fnRecRoomCreate: function(data){
			getResults(data, "RecRoomCreate");			
		},
      fnRecNewSession: function(data) {
         getResults(data, "RecNewSession");   
      },
      fnRecEmailRequest: function(data) {
         getResults(data, "RecEmailRequest");      
      },
      fnRecStaticConvos: function(data) {
         getResults(data, "RecStaticConvos");
      },
      fnRecUserInfo: function(data) {
         getResults(data, "RecUserInfo");
      },
      fnRecActionError: function(data) {
         getResults(data, "RecActionError");
      },
      fnRecActionSuccess: function(data) {
         getResults(data, "RecActionSuccess");
      },
      fnRecAccountSettings: function(data) {
         getResults(data, "RecAccountSettings");
      },
      fnRecInviteOnly: function(data) {
         getResults(data, "RecInviteOnly");
      },
      fnRecUsers: function(data) {
         getResults(data, "RecUsers");
      },
      fnRecConnect: function(data){
        getResults(data, "RecConnect");
      }
	}

	function doPost(apiCall, data, success, error){
		$.post(
			apiCall,
			data,
			success,
			error
		);
	}
	
	function defError(err)
	{
		//console.log(err);
	}
	
	var setup = function(config) {
		sayloApiCfg = $.extend(defaults, config);
		now.recConvoList = sayloApiCfg.fnRecConvoList;
		now.recMessages = sayloApiCfg.fnRecMessages;
		now.recCreate = sayloApiCfg.fnRecCreate;
		now.recRoomAdd = sayloApiCfg.fnRecRoomAdd;
		now.recUpdRoom = sayloApiCfg.fnRecUpdRoom;
		now.recMsgAdd = sayloApiCfg.fnRecMsgAdd;
		now.recUpdUser = sayloApiCfg.fnRecUpdUser;
		now.recRoomCreate = sayloApiCfg.fnRecRoomCreate;
      now.recNewSession = sayloApiCfg.fnRecNewSession;
      now.recEmailRequest = sayloApiCfg.fnRecEmailRequest;
      now.recStaticConvos = sayloApiCfg.fnRecStaticConvos;
      now.recUserInfo = sayloApiCfg.fnRecUserInfo;
      now.recActionError = sayloApiCfg.fnRecActionError;
      now.recActionSuccess = sayloApiCfg.fnRecActionSuccess;
      now.recAccountSettings = sayloApiCfg.fnRecAccountSettings;
      now.recInviteOnly = sayloApiCfg.fnRecInviteOnly;
      now.recUsers = sayloApiCfg.fnRecUsers;
      now.recConnect =  sayloApiCfg.fnRecConnect;
   }

	var createAccount = function(email, password, firstName, lastName) {

		doPost(
			'/create',
			{
				email: email,
				first: firstName,
				last: lastName,
				password: password
			}, 
			function(data) {
				//console.log( data );
				var results = JSON.parse( data );
				if ( results.auth == true )
					window.location="/map";
				else
					alert('Could not login with the supplied credentials.');
			}
		);
	};

   var betaInvite = function(email, first, last)
   {
      doPost(
			'/beta',
			{
				email: email,
				first: first,
				last: last
			}, 
			function(data) {
				//console.log( data );
			   //$.colorbox({html:"<div class='purplebox'><h1>Thank you for your request</h1><p>Corny text goes here</p></div>"})
			}
		);
   }

	var forgotPassword = function(email)
	{
		doPost(
			'/forgot',
			{
				email: email,
			}, 
			function(data) {
				console.log( "Forgot results: " + data );
			   //$.colorbox({html:"<div class='purplebox'><h1>Thank you for your request</h1><p>Corny text goes here</p></div>"})
			}
		);
	}

	var login = function(email, password) {
        doPost(
				'/login', 
            {
                email:    email, 
                password: password
            },
            function(data) {
                //console.log(data);
		var results = JSON.parse( data );
		if ( results.auth == true )
			window.location="/map";
		else
			alert('Could not login with the supplied credentials.');
            }
        ); 
	};

	var stealth = function() {
		doPost(
			'/stealth',
			function(data) {
				window.location="/map#stealth";
         }		
		);	
	}

	return {
		createAccount: createAccount,
		login: login,
		setup: setup,
		stealth: stealth,
		forgotPassword: forgotPassword,
      betaInvite: betaInvite
	}
}();

function getResults(data, fn)
{
	console.log("Fn: " + fn);
	console.log(data);
}
