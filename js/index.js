
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        
		
		var onSuccess = function(position) {
       	
			var lat = position.coords.latitude;
			var long = position.coords.longitude;
			
			
			
			$.ajax({ //ajax weather recuperer donnees avec coord gps
				type: "GET",
				dataType: "json",
				url: "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=c6f7c305685d791568deb77d851e9c3b&lang=fr",
				
				success: function(data) {


					var city_name = data.name;
					var general = data.weather[0].main;
					var description = data.weather[0].description;
					var icon = data.weather[0].icon;
					var celsiusmin = Math.round(data.main.temp_min - 273.15);
					var celsiusmax = Math.round(data.main.temp_max - 273.15);

				  console.log(city_name);


				  //on concatene la div en une variable
					var weather_now = city_name+'<br>';
					weather_now += '<img src="http://openweathermap.org/img/w/01d.png"><br>';
					weather_now += description +'<br>';
					weather_now += 'Temp min: '+ celsiusmin + '<br>';
					weather_now += 'Temp max: '+ celsiusmax + '<br>';

		
		
				

					$("#nom_ville").html("<h2>"+city_name+"</h2>");
					$("#icone").html('<img src="img/'+icon+'.png">');
					$("#description").html(description);
					$("#temp_min").html('Température minimum: '+celsiusmin+'°c');
					$("#temp_max").html('Température maximum: '+celsiusmin+'°c');
								  
		
		
                                  
         }, // success
                          
	 }); ///END AJAX WEATHER////
			
			
			
			
			
			
			
    };//onsuccess de la récupération geolocs

    //onError Callback receives a PositionError object
    
    function onError(error) {
	        alert('code: '    + error.code    + '\n' +
	              'message: ' + error.message + '\n');
	    
	
	
	
	
	}

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
		
		$("#go").click(function(){
			
			var inputville = $("#inputville").val();
			
			
			$.ajax({ //ajax weather recuperer donnees avec coord gps
				type: "GET",
				dataType: "json",
				url: "http://api.openweathermap.org/data/2.5/weather?q="+inputville+"&appid=c6f7c305685d791568deb77d851e9c3b&lang=fr ",
				
				success: function(data) {


					var city_name2 = data.name;
					var general2 = data.weather[0].main;
					var description2 = data.weather[0].description;
					var icon2 = data.weather[0].icon;
					var celsiusmin2 = Math.round(data.main.temp_min - 273.15);
					var celsiusmax2 = Math.round(data.main.temp_max - 273.15);


				  //on concatene la div en une variable
					
					$("#nom_ville2").html(city_name2);
					$("#icone2").html('<img src="img/'+icon2+'.png">');
					$("#description2").html(description2);
					$("#temp_min2").html('Température minimum: '+celsiusmin2+'°c');
					$("#temp_max2").html('Température maximum: '+celsiusmax2+'°c');
								  
		
		
                                  
         }, // success
                          
	 }); ///END AJAX WEATHER////
			
			
			
		})
		
		
		

		
		
		
		
		
		
    },//ondeviceready

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

