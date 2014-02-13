// Call onDeviceReady when PhoneGap is loaded.
    //
    // At this point, the document has loaded but phonegap-1.0.0.js has not.
    // When PhoneGap is loaded and talking with the native device,
    // it will call the event `deviceready`.
    // 
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
        // Now safe to use the PhoneGap API
    
      /*jQuery(document).ready(function($) {*/
        // Stuff to do as soon as the DOM is ready. Use $() w/o colliding with other libs;
      
      



    							/* Use this to escape stings*/
    							var entityMap = {
								    "&": "&amp;",
								    "<": "&lt;",
								    ">": "&gt;",
								    '"': '&quot;',
								    "'": '&#39;',
								    "/": '&#x2F;'
								  };

								  function escapeHtml(string) {
								    return String(string).replace(/[&<>"'\/]/g, function (s) {
								      return entityMap[s];
								    });
								  }



	// show everything for news
	$('.news-button').on('tap', function(event) {

    var lastclickpoint = $(this).attr('data-clickpoint');
    var curclickpoint = event.clientX+'x'+event.clientY
    if (lastclickpoint == curclickpoint) return false;
    $(this).attr('data-clickpoint',curclickpoint);

		console.log('news button tapped');
    $('.actual-race-results').hide();
		$('.f1-halloffame').hide();
		$('.race-results').hide();
		$('.f1-news').show();
    $('.f1-tracks').hide();
    $('.home-page').hide();
    $('.about-app').hide();
    $('.races-tracks').hide();
    $('.track-data').hide();
    $('.more-data').hide();
	});



	// Show full article content
	$('.readmore',this).live('click', function(event){

    var lastclickpoint = $(this).attr('data-clickpoint');
    var curclickpoint = event.clientX+'x'+event.clientY
    if (lastclickpoint == curclickpoint) return false;
    $(this).attr('data-clickpoint',curclickpoint);

		console.log('read more');

		/*$(document).find("a[class^='theid-']", function(){*/
			
			/*var num = this.id.split('-')[1]; // get the id

			console.log(num );*/

			var thesinglecontent = $(this).attr('data-content');
			$('.full-content-view').html( '<div class="small-12">'+ thesinglecontent + '</div>' );
      $('.full-content-view').show();
				$(window).scrollTop($(".full-content-view").offset().top);
			return false;
		/*});*/
	});

	/* NEWS RESULTS */
	/*var output = $('#latestnews');*/
                jQuery.ajax({
                          
                          url: 'http://www.carmag.co.za/api/?q=news&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:70000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {
                            $.each(data, function(i,item){ 
                                //alert(item.title);


                            

                                var thumbnail = '<img src="'+ item.thumnail +'" class="single-thumb">';
                                var news =  '<div class="row news readmore-'+ item.id +'" ><div class="small-12 background-body f1-news"><img src="'+ item.thumnail +'" class="img-news"><h4>'+ item.title + 
                                '</h4> <div class="excerpt">'+ item.excerpt +' <p class="news-date">'+ item.date +'</p> <a href="#" class="readmore theid-'+ item.id +'" data-content="<h2>'+ item.title +'</h2>' + escapeHtml(item.content)  +'">Read More</a></div></div></div>';
                            
                            $('#latestnews').append(news);
                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });


    		
				$("img.teams-button").live( "tap", function( event ) {

          var lastclickpoint = $(this).attr('data-clickpoint');
          var curclickpoint = event.clientX+'x'+event.clientY
          if (lastclickpoint == curclickpoint) return false;
          $(this).attr('data-clickpoint',curclickpoint);

          /* TEAMS */
      /*var output = $('.redbull .small-12');*/
                jQuery.ajax({
                          
                          url: 'http://www.carmag.co.za/api/?q=teams-detailed&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:70000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {
                            $.each(data, function(i,item){ 
                                //alert(item.title);


                            

                                var thumbnail = '<img src="'+ item.thumnail +'" class="single-thumb">';
                               // var teams =  '<div class="row news readmore-'+ item.id +'" ><div class="small-12 background-body f1-news"><img src="'+ item.thumnail +'" class="img-news"><h4>'+ item.title + 
                               // '</h4> <div class="excerpt">'+ item.excerpt +' <p class="news-date">'+ item.date +'</p> <a href="#" class="readmore theid-'+ item.id +'" data-content="<h2>'+ item.title +'</h2>' + escapeHtml(item.content)  +'">Read More</a></div></div></div>';

                                var teams = '<h2>'+ item.title +'</h2><img class="team-readbull race-car" src="'+ item.carpic +'"><div class="row"><div class="small-12"><div class="racer-team"><h4>' + item.racername1 + '</h4></div><div class="racer-team-img"><img src="'+ item.racerpic1 +'" width="89" height="74" ><ul><li><span class="titles">Born:</span><span class="answer">'+ item.born1 +'</span></li><li><span class="titles">First GP:</span><span class="answer">'+ item.firstgp1 +'</span></li><li><span class="titles">GP Starts:</span><span class="answer">'+ item.gpstarts1 +'</span></li><li><span class="titles">First GP Victory:</span><span class="answer">'+ item.firstgpvitory1 +'</span></li><li><span class="titles">Victories:</span><span class="answer">'+ item.victories1 +'</span></li><li><span class="titles">Podiums:</span><span class="answer">'+ item.podiums1 +'</span></li><li><span class="titles">Total Points:</span><span class="answer">'+ item.totalpoints1 +'</span></li></ul></div><div class="racer-team"><h4>' + item.racername2 + '</h4></div><div class="racer-team-img"><img src="'+ item.racerpic2 +'" width="89" height="74" ><ul><li><span class="titles">Born:</span><span class="answer">'+ item.born2 +'</span></li><li><span class="titles">First GP:</span><span class="answer">'+ item.firstgp2 +'</span></li><li><span class="titles">GP Starts:</span><span class="answer">'+ item.gpstarts2 +'</span></li><li><span class="titles">First GP Victory:</span><span class="answer">'+ item.firstgpvitory2 +'</span></li><li><span class="titles">Victories:</span><span class="answer">'+ item.victories2 +'</span></li><li><span class="titles">Podiums:</span><span class="answer">'+ item.podiums2 +'</span></li><li><span class="titles">Total Points:</span><span class="answer">'+ item.totalpoints2 +'</span></li></ul></div></div></div>';

                                //alert(teams);
                            
                            $('.redbull .large-12').append(teams);
                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });



					console.log('team button tapped');
          $('.actual-race-results').hide();
					$('.f1-halloffame').hide();
					/*$('.race-results').hide();*/
					$('.f1-news').hide();
					$('.full-content-view').hide();
					$('.race-results').show();
          $('.f1-tracks').hide();
          $('.home-page').hide();
          $('.about-app').hide();
          $('.races-tracks').hide();
          $('.track-data').hide();
          $('.more-data').hide();
					$(window).scrollTop($(".redbull").offset().top);

				});


          
    				
            jQuery( "img.tracks-button" ).live( "tap", function( event ) {

                var lastclickpoint = $(this).attr('data-clickpoint');
                var curclickpoint = event.clientX+'x'+event.clientY
                if (lastclickpoint == curclickpoint) return false;
                $(this).attr('data-clickpoint',curclickpoint);

                console.log('tracks button tapped');
                $('.f1-tracks h2').show();
                $('#f1-tracks-listing').html('');
                $('#f1-tracks-listing').show();
                $('.track-data').hide();
                $('.more-data').hide();
                /* F1 Tracks */
            jQuery.ajax({
                          
                          url: 'http://www.carmag.co.za/api/?q=f1-tracks&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:70000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete

                          },
                          success: function(data, textStatus, xhr) {
                            $.each(data, function(i,item){ 
                                //alert(item.title);

                                //var tracks = '<div class="row racetrackslisting"><div class="small-12"><img class="trackimg" src="'+ item.trackimage +'"><img class="countryflag" src="'+ item.countryflag +'"><div class="track-title" id="single-'+ item.id +'">'+ item.title +'</div><ul class="trackinfo"><li>Laps:<ul class="laps-results"><li>'+ item.laps +'</li></ul></li><li>Length of circuit:<ul class="laps-distance"><li>'+ item.lenghtofcircut +'</li></ul></li></ul></div></div>';
                                var tracks = '<div class="track-'+ item.id +' track-data"><img class="trackimg-single" src="'+ item.trackimage +'"><h2>'+ item.title +'</h2><h4 class="subtitle">'+ item.sub_title +'</h4><div id="f1-tracks-listing-single"><img src="'+ item.countryflag +'" class="countryflag-single"><ul class="trackinfo single"><li>Circuit length:<ul class="laps-distance single-t"><li>'+ item.lenghtofcircut +'</li></ul></li><li>Race distance:<ul class="laps-distance single-t"><li>'+ item.race_distance +'</li></ul></li><li>Start:<ul class="laps-distance single-t"><li>'+ item.race_start +'</li></ul></li><li>2013 Winner:<ul class="laps-distance single-t"><li>'+ item.winner +'</li></ul></li><li>2013 Pole:<ul class="laps-distance single-t"><li>'+ item.pole +'</li></ul></li></ul><img src="'+ item.f1_car_img +'" class="f1-traks-single-img"></div></div>';

                                //alert(tracks);
                            $('#f1-tracks-listing').append(tracks);
                            $('.track-data').show();

                            /*textToInsert += '<div class="track-'+ item.id +' track-data"><h2>'+ item.title +'</h2><h4 class="subtitle">'+ item.sub_title +'</h4><div id="f1-tracks-listing-single"><img class="trackimg-single" src="img/11_hungary_track.jpg"><ul class="trackinfo single"><li>Circuit length:<ul class="laps-distance single-t"><li>'+ item.lenghtofcircut +'</li></ul></li><li>Race distance:<ul class="laps-distance single-t"><li>'+ item.race_distance +'</li></ul></li><li>Start:<ul class="laps-distance single-t"><li>'+ item.race_start +'</li></ul></li><li>2012 Winner:<ul class="laps-distance single-t"><li>'+ item.winner +'</li></ul></li><li>2012 Pole:<ul class="laps-distance single-t"><li>'+ item.pole +'</li></ul></li></ul><img src="'+ item.f1_car_img +'" class="f1-traks-single-img"></div></div>';*/

                            /*$('.f1-tracks-single').empty();*/
                            
                            

                            });
                            /*$('.subcontent').html('news loaded');*/
                            /*$('.f1-tracks-single').one().append(textToInsert);*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });

                  $('.f1-halloffame').hide();
                  $('.actual-race-results').hide();
                  $('.race-results').hide();
                  $('.f1-news').hide();
                  $('.full-content-view').hide();
                  $('.race-results').hide();
                  $('.home-page').hide();
                  $('.f1-tracks').show();
                  $('.about-app').hide();
                  $('.races-tracks').hide();
                  $('.more-data').hide();
                  /*$('.track-data').hide();*/

                  $(window).scrollTop($(".background-body").offset().top);

            });


          /* SHOW THE SINGLE PAGE
          -------------------------------*/
          jQuery(document).find("div[id^='single-']").live('tap', function(){
              var delid = this.id.split('-')[1];
              console.log('single has been tapped!');

              $('.f1-tracks-single').empty();
              var textToInsert = '';

               jQuery.ajax({
                          
                          url: 'http://www.carmag.co.za/api/?q=f1-tracks-single&id='+ delid +'&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:70000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete

                          },
                          success: function(data, textStatus, xhr) {
                            $.each(data, function(i,item){ 
                                //alert(item.title);

                                /*var tracks = '<div class="row racetrackslisting"><div class="small-12"><img class="trackimg" src="'+ item.trackimage +'"><img class="countryflag" src="'+ item.countryflag +'"><div class="track-title" id="single-'+ item.id +'">'+ item.title +'</div><ul class="trackinfo"><li>Laps:<ul class="laps-results"><li>'+ item.laps +'</li></ul></li><li>Length of circuit:<ul class="laps-distance"><li>'+ item.lenghtofcircut +'</li></ul></li></ul></div></div>';
                            $('#f1-tracks-listing').append(tracks);*/

                            textToInsert += '<div class="track-'+ item.id +' track-data"><img class="trackimg-single" src="'+ item.trackimage +'"><h2>'+ item.title +'</h2><h4 class="subtitle">'+ item.sub_title +'</h4><div id="f1-tracks-listing-single"><img src="'+ item.countryflag +'" class="countryflag-single"><ul class="trackinfo single"><li>Circuit length:<ul class="laps-distance single-t"><li>'+ item.lenghtofcircut +'</li></ul></li><li>Race distance:<ul class="laps-distance single-t"><li>'+ item.race_distance +'</li></ul></li><li>Start:<ul class="laps-distance single-t"><li>'+ item.race_start +'</li></ul></li><li>2013 Winner:<ul class="laps-distance single-t"><li>'+ item.winner +'</li></ul></li><li>2013 Pole:<ul class="laps-distance single-t"><li>'+ item.pole +'</li></ul></li></ul><img src="'+ item.f1_car_img +'" class="f1-traks-single-img"></div></div>';

                            /*$('.f1-tracks-single').empty();*/
                            
                            

                            });
                            /*$('.subcontent').html('news loaded');*/
                            //
                            $('.f1-tracks h2').hide();
                            $('#f1-tracks-listing').hide();
                            /*$('.f1-tracks-single .track-'+ delid).remove();*/
                            $('.f1-tracks-single').html(textToInsert);
                            $('.track-'+ delid).show();
                            $(window).scrollTop($(".background-body").offset().top);
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });


            
           
            
            

          });




            /* Hall of fame*/
            jQuery( "img.halloffame-button" ).live( "tap", function( event ) {

                var lastclickpoint = $(this).attr('data-clickpoint');
                var curclickpoint = event.clientX+'x'+event.clientY
                if (lastclickpoint == curclickpoint) return false;
                $(this).attr('data-clickpoint',curclickpoint);


                  $('.actual-race-results').hide();
                  $('.race-results').hide();
                  $('.f1-news').hide();
                  $('.full-content-view').hide();
                  $('.race-results').hide();
                  $('.f1-tracks').hide();
                  $('.home-page').hide();
                  $('.f1-halloffame').show();
                  $('.about-app').hide();
                  $('.races-tracks').hide();
                  $('.more-data').hide();
                  $(window).scrollTop($(".background-body").offset().top);

            });


            
            jQuery( "img.results-button" ).live( "tap", function( event ) {

                var lastclickpoint = $(this).attr('data-clickpoint');
                var curclickpoint = event.clientX+'x'+event.clientY
                if (lastclickpoint == curclickpoint) return false;
                $(this).attr('data-clickpoint',curclickpoint);



                /* Actual Race Results */
            jQuery.ajax({
                          
                          url: 'http://www.carmag.co.za/api/?q=actual-race-results&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:70000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {
                            $.each(data, function(i,item){ 
                                //alert(item.title);

                                $('.race-results-title').html(item.title);
                                $('.race-banner .track-name').html(item.track_name);
                                $('.country-flag-results').html('<img src="'+ item.countryflag +'" class="cflagresults">');

                                var raceresults = '<h2>RACE RESULTS</h2><table class="race-answers"><tr class="race-result-answers titles"><td>Driver Name</td><td>Team Name</td><td>Position</td><td>time</td><td>PTS</td></tr><tr class="race-result-answers"><td>'+ item.driver_1 +'</td><td>'+ item.driver_team_1 +'</td><td>'+ item.driver_pos_1 +'</td><td>'+ item.driver_time_1 +'</td><td>'+ item.driver_pts_1 +'</td></tr><tr class="race-result-answers"><td>'+ item.driver_2 +'</td><td>'+ item.driver_team_2 +'</td><td>'+ item.driver_pos_2 +'</td><td>'+ item.driver_time_2 +'</td><td>'+ item.driver_pts_2 +'</td></tr><tr class="race-result-answers"><td>'+ item.driver_3 +'</td><td>'+ item.driver_team_3 +'</td><td>'+ item.driver_pos_3 +'</td><td>'+ item.driver_time_3 +'</td><td>'+ item.driver_pts_3 +'</td></tr><tr class="race-result-answers"><td>'+ item.driver_4 +'</td><td>'+ item.driver_team_4 +'</td><td>'+ item.driver_pos_4 +'</td><td>'+ item.driver_time_4 +'</td><td>'+ item.driver_pts_4 +'</td></tr><tr class="race-result-answers"><td>'+ item.driver_5 +'</td><td>'+ item.driver_team_5 +'</td><td>'+ item.driver_pos_5 +'</td><td>'+ item.driver_time_5 +'</td><td>'+ item.driver_pts_5 +'</td></tr><tr class="race-result-answers"><td>'+ item.driver_6 +'</td><td>'+ item.driver_team_6 +'</td><td>'+ item.driver_pos_6 +'</td><td>'+ item.driver_time_6 +'</td><td>'+ item.driver_pts_6 +'</td></tr><tr class="race-result-answers"><td>'+ item.driver_7 +'</td><td>'+ item.driver_team_7 +'</td><td>'+ item.driver_pos_7 +'</td><td>'+ item.driver_time_7 +'</td><td>'+ item.driver_pts_7 +'</td></tr><tr class="race-result-answers"><td>'+ item.driver_8 +'</td><td>'+ item.driver_team_8 +'</td><td>'+ item.driver_pos_8 +'</td><td>'+ item.driver_time_8 +'</td><td>'+ item.driver_pts_8 +'</td></tr><tr class="race-result-answers"><td>'+ item.driver_9 +'</td><td>'+ item.driver_team_9 +'</td><td>'+ item.driver_pos_9 +'</td><td>'+ item.driver_time_9 +'</td><td>'+ item.driver_pts_9 +'</td></tr><tr class="race-result-answers"><td>'+ item.driver_10 +'</td><td>'+ item.driver_team_10 +'</td><td>'+ item.driver_pos_10 +'</td><td>'+ item.driver_time_10 +'</td><td>'+ item.driver_pts_10 +'</td></tr><tr class="race-result-answers"><td>'+ item.driver_11 +'</td><td>'+ item.driver_team_11 +'</td><td>'+ item.driver_pos_11 +'</td><td'+ item.driver_time_12 +'</td><td>'+ item.driver_pts_11 +'</td></tr></table>';
                            $('.race-results-drivers .this-driver').html(raceresults);


                            var raceresultsteams = '<h2>MANUFACTURERS RESULTS</h2><table class="race-answers"><tr class="race-result-answers titles"><td>Team Name</td><td>Position</td><td>PTS</td></tr><tr class="race-result-answers"><td>'+ item.team_1 +'</td><td>'+ item.team_pos_1 +'</td><td>'+ item.team_pts_1 +'</td></tr><tr class="race-result-answers"><td>'+ item.team_2 +'</td><td>'+ item.team_pos_2 +'</td><td>'+ item.team_pts_2 +'</td></tr><tr class="race-result-answers"><td>'+ item.team_3 +'</td><td>'+ item.team_pos_3 +'</td><td>'+ item.team_pts_3 +'</td></tr><tr class="race-result-answers"><td>'+ item.team_4 +'</td><td>'+ item.team_pos_4 +'</td><td>'+ item.team_pts_4 +'</td></tr><tr class="race-result-answers"><td>'+ item.team_5 +'</td><td>'+ item.team_pos_5 +'</td><td>'+ item.team_pts_5 +'</td></tr><tr class="race-result-answers"><td>'+ item.team_6 +'</td><td>'+ item.team_pos_6 +'</td><td>'+ item.team_pts_6 +'</td></tr><tr class="race-result-answers"><td>'+ item.team_7 +'</td><td>'+ item.team_pos_7 +'</td><td>'+ item.team_pts_7 +'</td></tr><tr class="race-result-answers"><td>'+ item.team_8 +'</td><td>'+ item.team_pos_8 +'</td><td>'+ item.team_pts_8 +'</td></tr><tr class="race-result-answers"><td>'+ item.team_9 +'</td><td>'+ item.team_pos_9 +'</td><td>'+ item.team_pts_9 +'</td></tr><tr class="race-result-answers"><td>'+ item.team_10 +'</td><td>'+ item.team_pos_10 +'</td><td>'+ item.team_pts_10 +'</td></tr><tr class="race-result-answers"><td>'+ item.team_11 +'</td><td>'+ item.team_pos_11 +'</td><td>'+ item.team_pts_11 +'</td></tr></table>';
                            $('.race-results-teams .this-team').html(raceresultsteams);
                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });

                  $('.f1-halloffame').hide();
                  $('.race-results').hide();
                  $('.f1-news').hide();
                  $('.full-content-view').hide();
                  $('.race-results').hide();
                  $('.home-page').hide();
                  $('.f1-tracks').hide();
                  $('.actual-race-results').show();
                  $('.about-app').hide();
                  $('.races-tracks').hide();
                  $('.track-data').hide();
                  $('.more-data').hide();
                  $(window).scrollTop($(".background-body").offset().top);

            });


            

          jQuery( "img.races-button" ).live( "tap", function( event ) {

                var lastclickpoint = $(this).attr('data-clickpoint');
                var curclickpoint = event.clientX+'x'+event.clientY
                if (lastclickpoint == curclickpoint) return false;
                $(this).attr('data-clickpoint',curclickpoint);


                    /* F1 Tracks / RACES */
            jQuery.ajax({
                          
                          url: 'http://www.carmag.co.za/api/?q=f1-races&callback=?', // The callback=? part is very importatnt to use in you get URL
                          crossDomain:true,
                          timeout:70000,
                          type: 'GET',
                          dataType: 'jsonp',
                          jsonp: 'jsonp',
                          complete: function(xhr, textStatus) {
                            //called when complete
                          },
                          success: function(data, textStatus, xhr) {
                            $.each(data, function(i,item){ 
                                //alert(item.title);

                                var tracks = '<div class="row racetrackslisting"><div class="small-12"><img class="countryflag" src="'+ item.countryflag +'"><div class="track-title">'+ item.title +'</div><ul class="trackinfo"><li>'+ item.race_city +'</li><li>Date:<ul class="laps-results"><li>'+ item.race_date +'</li></ul></li><li>Time:<ul class="laps-distance"><li>'+ item.race_time +'</li></ul></li><li>Status:<ul class="laps-results"><li>'+ item.race_status +'</li></ul></li></ul></div></div>';
                            $('#f1-tracks-listing-races').append(tracks);
                            });
                            /*$('.subcontent').html('news loaded');*/
                          },
                          error: function(xhr, textStatus, errorThrown) {
                            alert(errorThrown);
                          }
                });

                  $('.f1-halloffame').hide();
                  $('.race-results').hide();
                  $('.f1-news').hide();
                  $('.full-content-view').hide();
                  $('.race-results').hide();
                  $('.home-page').hide();
                  $('.f1-tracks').hide();
                  $('.actual-race-results').hide();
                  $('.races-tracks').show();
                  $('.about-app').hide();
                  $('.track-data').hide();
                  $('.more-data').hide();
                  $(window).scrollTop($(".background-body").offset().top);

            });


          jQuery( "img.about-button" ).live( "tap", function( event ) {

                var lastclickpoint = $(this).attr('data-clickpoint');
                var curclickpoint = event.clientX+'x'+event.clientY
                if (lastclickpoint == curclickpoint) return false;
                $(this).attr('data-clickpoint',curclickpoint);


                  $('.f1-halloffame').hide();
                  $('.race-results').hide();
                  $('.f1-news').hide();
                  $('.full-content-view').hide();
                  $('.race-results').hide();
                  $('.home-page').hide();
                  $('.f1-tracks').hide();
                  $('.actual-race-results').hide();
                  $('.races-tracks').hide();
                  $('.about-app').show();
                  $('.track-data').hide();
                  $('.more-data').hide();
                  $(window).scrollTop($(".background-body").offset().top);

            });

          jQuery( "img.home-button" ).live( "tap", function( event ) {

                var lastclickpoint = $(this).attr('data-clickpoint');
                var curclickpoint = event.clientX+'x'+event.clientY
                if (lastclickpoint == curclickpoint) return false;
                $(this).attr('data-clickpoint',curclickpoint);

                  $('.f1-halloffame').hide();
                  $('.race-results').hide();
                  $('.f1-news').hide();
                  $('.full-content-view').hide();
                  $('.race-results').hide();
                  $('.home-page').hide();
                  $('.f1-tracks').hide();
                  $('.actual-race-results').hide();
                  $('.races-tracks').hide();
                  $('.about-app').hide();
                  $('.home-page').show();
                  $('.track-data').hide();
                  $('.more-data').hide();
                  $(window).scrollTop($(".background-body").offset().top);

            });


          /* MORE BUTTON
          -------------------*/
          jQuery( "img.more-button" ).on( "tap", function( event ) {

                var lastclickpoint = $(this).attr('data-clickpoint');
                var curclickpoint = event.clientX+'x'+event.clientY
                if (lastclickpoint == curclickpoint) return false;
                $(this).attr('data-clickpoint',curclickpoint);

                  $('.f1-halloffame').hide();
                  $('.race-results').hide();
                  $('.f1-news').hide();
                  $('.full-content-view').hide();
                  $('.race-results').hide();
                  $('.home-page').hide();
                  $('.f1-tracks').hide();
                  $('.actual-race-results').hide();
                  $('.races-tracks').hide();
                  $('.about-app').hide();
                  $('.home-page').hide();
                  $('.track-data').hide();
                  $('.more-data').show();
                  $(window).scrollTop($(".background-body").offset().top);

            });



          /* SCREEN ITEMS SWITCHES
          --------------------------------------*/

          $(window).on('load resize', function(){  

            var width = $(window).width();

            if( width >= 320) {
              
                $(".rich").attr("src","img/drawable-xhdpi/richelieu-footer.png");
            }

            if(width >= 1024) {
              
                $(".rich").attr("src","img/rich-footer-1024.png");
            }

           });


          



//}); // .ready end

}