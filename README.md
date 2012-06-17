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
By calling $(selector).automask() once it reads the data-mask attribute and automatically set the specified mask to any input:text element inside the selector.  
Example:
<pre>
$(function() {
	$(document).automask();
});

<!-- The mask will be 99/99/9999 -->
&lt;input type="text" data-mask="99/99/9999" /&gt;
</pre>