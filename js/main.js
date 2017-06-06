/**
* Main AngularJS Web Application
*/

var app = angular.module('kelleeMartins', ['ui.bootstrap', 'ngSanitize']);

app.controller('NavController', function($scope, $location, $anchorScroll) {
   $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});




app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, project)
{
$scope.project = project;

});


app.controller('ProjectController', function($scope, $timeout, $modal, $log, $sce) {

    $scope.projects = [
        {
			name: 'Adidas',
			heroImage: 'images/projects/adidas.jpg',
			text: '<div><p><img class="size-medium wp-image-123 alignnone" src="http://kelleemartins.com/wp-content/uploads/2016/07/ad-F2-300x276.jpg" alt="ad-F2" width="300" height="276"></p><p>quick turn around<br>fun<br>360</p><p><img class="alignnone size-medium wp-image-122" src="http://kelleemartins.com/wp-content/uploads/2016/07/ad-F3-300x174.jpg" alt="ad-F3" width="300" height="174" srcset="http://kelleemartins.com/wp-content/uploads/2016/07/ad-F3-300x174.jpg 300w, http://kelleemartins.com/wp-content/uploads/2016/07/ad-F3-1024x595.jpg 1024w" sizes="(max-width: 300px) 100vw, 300px"></p></div>',
			havLink: false,
			link: '',
		},
		{
			name: 'AWAL',
			heroImage: 'images/projects/awal.jpg',
			text: '<div><p>When this project was first being discussed, I liked the design so much that I asked to be the lead on this project. I was really excited about this and finally getting the hang of a WordPress site from start to finish. As much as I love working with a group, it’s just so neat to know a project inside and out. This site became one of my babies and I learned SO much in the process of building it.</p><p>This design was actually done out of house and wasn’t as explicit in its functionality as I would have hoped for. Inferring what the client wanted, and deciding what was actually in scope of the original contract was probably my least favorite part of this job. I want to make a product that the client LOVES but I also want to make my project managers happy and stay within scope and budget.&nbsp;This is a constant industry battle, but this really showed to me how important it is to communicate often and clearly! Being an extrovert and coming into this industry I certainly didn’t anticipate that I would need to cultivate my communication skills, but they really take work and practice and it’s been a huge focus of mine.</p><p>The concept of the background images for this site was what initially intrigued me. They wanted the capability&nbsp;to upload a group of images and for the images to randomly shuffle behind a color filter that was determined by the content. I used CMB2 throughout the site. All of the content is completely customizable on the admin side. I also added Site Options which&nbsp;allow the user to upload a group of images that they want to be in the background. On page load, the images are pulled into a hidden div. Next,&nbsp;a random image is pulled and then used as the background image. Getting this to work, and to work quickly was one of my bigger struggles on this site. It also highlights my biggest mistake on the site. On my staging site I got my load time down and running super slick. But what I failed to do was put a limit on the photo sizes and force compression. On my staging site, all the images were optimized and compressed. Even though I instructed the user to compress their images and to not exceed a certain size, I didn’t enforce it in my code. Unfortunately, they ignored my instructions and the live site is super slow. I can’t even look at the live site without a face palm. But lesson learned, I’ll never again leave it up to the client to upload the correctly sized and compressed image.</p></div>',
			havLink: true,
			link: 'https://awal.com/',
		},
		{
			name: 'BlueStar Cooking',
			heroImage: 'images/projects/bluestar.jpg',
			text: '<div><p>Although my co-workers might disagree, I really enjoyed working on BlueStar! I was on the project from the very beginning which means I knew it inside out. That’s always an enjoyable experience, really makes you feel like you have a handle on things. I started off by building out the templates using HTML, CSS, and JavaScript. Then I brought in CMB2 to handle the custom content and implemented custom post types to handle different products and gallery images. This is actually a pretty common flow in my projects. But each time I get faster, more modular, more thorough, and gain a more complete understanding of the tools and techniques I’m using.</p></div>',
			havLink: true,
			link: 'https://www.bluestarcooking.com/',
		},
		{
			name: 'Boppy',
			heroImage: 'images/projects/boppy.jpg',
			text: '<div><p>Cookie</p></div>',
			havLink: true,
			link: 'http://www.boppy.com/',
		},
		{
			name: 'ClearChoice',
			heroImage: 'images/projects/clearchoice.jpg',
			text: '<div><p>-Ongoing work-Correcting own code-Time estimates-Restructured entire site into modules and page builder.</p></div>',
			havLink: true,
			link: 'https://www.clearchoice.com/',
		},
		{
			name: 'FjallRaven',
			heroImage: 'images/projects/fjallraven.jpg',
			text: '<div><p>This project was my first exposure to Shopify and Liquid. I specifically built out the locations page and the current footer. Although, I’ve done little edits throughout the site.</p></div>',
			havLink: true,
			link: 'https://www.clearchoice.com/',
		},
		{
			name: 'Friday Playlists – Voltage Ad',
			heroImage: 'images/projects/voltageplaylist.jpg',
			text: '<div><p></p></div>',
			havLink: true,
			link: 'http://friday.voltagead.com/',
		},
		{
			name: 'Hansen Orthodontics',
			heroImage: 'images/projects/hansen.jpg',
			text: '<p>Hansen Ortho was my first start to end project with my Zenman team. The entire site is actually constructed using Advanced Custom Field modules which allows the user to add multiple sections to create pages. The flexibility is amazing but making sure these modules worked in any combination on any page proved to be quite tricky.<br>I had quite a few modules that required a YouTube embed. This would break though if you had two embed modules on a page or even if a repeater within one module included a row that contained a YT embed. The YouTube API requires a unique ID that needed to be generated from each module and each row within each module. In each module file I create a random string that makes each module unique:</p>' + 
				'<script src="https://gist.github.com/kellsbells/383b7b10bfc04428b824d5542a498628.js"></script>' + 
				'<p>I then had to make each row within that module unique. I did by setting up a simple row counter:<br><script src="https://gist.github.com/kellsbells/c7e91dafcbe7cc047b751e45faf786b6.js"></script><br>In my JavaScript I then had to build an array of all the embeds for the YT API to map through and consume. I included some data attribute that can be set in the WP-Admin that dictate loop, autoplay and mute.</p>' +
				'<script src="https://gist.github.com/kellsbells/e36a6898bdeb3db8415bdffc235dfc32.js"></script>',
			havLink: true,
			link: 'http://www.bracesbydrhansen.com/',
		},
		{
			name: 'Pagosa Springs Medical Center',
			heroImage: 'images/projects/pagosasprings.jpg',
			text: '<div><p>-Wordpress-Difficult Responsive Design-Dropdown-Link to website-Cookie-Sorting providers</p></div>',
			havLink: true,
			link: 'http://pagosaspringsmedicalcenter.org/',
		},
		{
			name: 'PlayerLync',
			heroImage: 'images/projects/playerlync.jpg',
			text: '<div><p>-Wordpress-Difficult Responsive Design-Dropdown-Link to website-Cookie-Sorting providers</p></div>',
			havLink: true,
			link: 'https://www.playerlync.com/',
		},
		{
			name: 'Proctor Productions',
			heroImage: 'images/projects/proctor.jpg',
			text: '<div><p>-nav-blog</p></div>',
			havLink: true,
			link: 'http://www.proctorproductions.com/',
		},
		{
			name: 'Reebok',
			heroImage: 'images/projects/reebok.jpg',
			text: '<div><p><img class="alignnone size-medium wp-image-121" src="http://kelleemartins.com/wp-content/uploads/2016/07/jj-watt-desktop-new-2-123x300.jpg" alt="jj-watt-desktop-new-2" width="123" height="300" />-Bra Finder-Link Farm-lots of crazy code</p></div>',
			havLink: true,
			link: 'http://www.reebok.com/us/women-sports_bras',
		},
    ];


    // MODAL WINDOW
    $scope.open = function (_project) {

        var modalInstance = $modal.open({
          controller: "ModalInstanceCtrl",
          templateUrl: 'partials/modal.html',
            resolve: {
                project: function()
                {
                    return _project;
                }
            }
        });

    };

    $scope.background = function() {

		var colors = new Array(
		  [62,35,255],
		  [255,35,98],
		  [62,35,255],
		  [255,35,98],
		  [62,35,255],
		  [255,35,98]
		);


		var step = 0;
		//color table indices for: 
		// current color left
		// next color left
		// current color right
		// next color right
		var colorIndices = [0,1,2,3];

		//transition speed
		var gradientSpeed = 0.002;

		function updateGradient() {
		  
			if ( $===undefined ) return;
		  
			var c0_0 = colors[colorIndices[0]];
			var c0_1 = colors[colorIndices[1]];
			var c1_0 = colors[colorIndices[2]];
			var c1_1 = colors[colorIndices[3]];

			var istep = 1 - step;
			var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
			var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
			var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
			var color1 = "rgb("+r1+","+g1+","+b1+")";

			var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
			var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
			var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
			var color2 = "rgb("+r2+","+g2+","+b2+")";

		 	$('.gradient').css({
		   		background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
		    	background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
		  
		  step += gradientSpeed;
		  if ( step >= 1 )
		  {
		    step %= 1;
		    colorIndices[0] = colorIndices[1];
		    colorIndices[2] = colorIndices[3];
		    
		    //pick two new target color indices
		    //do not pick the same as the current one
		    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
		    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
		    
		  }
		}

		setInterval(updateGradient,10);
	};


});

app.filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
}]);




app.controller('SocialController', ['$scope', function($scope) {
	$scope.socials = [
		{
			name: 'Github', 
			icon: '../images/Github.svg',
			link: 'https://github.com/kellsbells',
		},
		{
			name: 'Twitter', 
			icon: '../images/Twitter.svg',
			link: 'https://twitter.com/kelleebutton',
		},
		{
			name: 'LinkedIn', 
			icon: '../images/Linkedin.svg',
			link: 'https://www.linkedin.com/in/kelleemartins',
		},
		{
			name: 'Instagram', 
			icon: '../images/Instagram.svg',
			link: 'https://www.instagram.com/kelleebutton/',
		},
		
	]
}]);


