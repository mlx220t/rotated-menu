# Simple Rotated menu.

You can see the Demo here: http://web.kupibo.com.ua/_demo/js/rotated-menu/

#### You should add:

  - jquery-1.11.0.min.js
  - jquery.rotated-menu.css
  - jquery.rotated-menu.js

#### Initialisation

      <div id="rotated-menu">
					<div class="top">
						Rotated menu opened
					</div>
					<div class="front">
						Rotated menu closed
					</div>
			</div>
    
#

    <script>
  		$(document).ready(function (){
  		  $('#rotated-menu').rotatedmenu();
	      $('#rotated-menu-2').rotatedmenu(20);
  		});
	  </script>
		
Where:
  - '20' - speed in %
  - You can add values from 1 to 100.
