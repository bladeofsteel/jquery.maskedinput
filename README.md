Masked Input Plugin for jQuery
==============================

Overview
--------
This is a masked input plugin for the jQuery javascript library. It allows a user to more easily enter fixed width input where you would like them to enter the data in a certain format (dates,phone numbers, etc). It has been tested on Internet Explorer 6/7, Firefox 1.5/2/3, Safari, Opera, and Chrome.  A mask is defined by a format made up of mask literals and mask definitions. Any character not in the definitions list below is considered a mask literal. Mask literals will be automatically entered for the user as they type and will not be able to be removed by the user.The following mask definitions are predefined:

* a - Represents an alpha character (A-Z,a-z)
* 9 - Represents a numeric character (0-9)
* \* - Represents an alphanumeric character (A-Z,a-z,0-9)

autoMask (jQuery 1.7+)
--------
By calling $( selector ).autoMask() once it reads the data-mask attribute and automatically set the specified mask to any input[type='text'], input[type='tel'] or input[type='number'] element inside the selector.  
Example:
<pre>
$(function() {
	$( document ).autoMask();
});

//The mask will be 99/99/9999
&lt;input type="text" data-mask="99/99/9999" /&gt;

//The mask will be +99 9999
&lt;input type="tel" data-mask="+99 9999" /&gt;

//The mask will be 99 - 99
&lt;input type="number" data-mask="99 - 99" /&gt;
</pre>

You could also pass the options in the first argument. These options will be defined once and be valid to all the masks inside the selector.
Example:
<pre>
$(function() {
	$( document ).autoMask({
		completed: function() {
			alert("Alert executed after each mask has been completed");
		}
	});
});
</pre>

autoMask does NOT support two or more instance in the same selector or in any of it's contents.