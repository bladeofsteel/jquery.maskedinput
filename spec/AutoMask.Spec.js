(function( $ ) {
	var container, container2, oldJqueryOn;
	feature("AutoMask", function() {
		beforeEach(function() {
			container1 = $("<div id='auto-mask-container'><input type='text' data-mask='9/9' /></div><div id='no-auto-mask'><input type='text' data-mask='9/9' /></div>").appendTo("body");
			container2 = $("<div id='auto-mask-container2'><input type='text' data-mask='99' /></div>").appendTo("body");
			oldJqueryOn = $.fn.on;
		});
		
		scenario("Valid container", function() {
			var $cont = $("#auto-mask-container"),
				$input = $cont.find("input");
			
			given("an autoMask", function() {
				$cont.autoMask();
			});
			
			when("typing and bluring", function() {
				$input.focus().mashKeys("12").blur();
			});
			
			then("The mask should be correct", function() {
				expect($input).toHaveValue("1/2");
			});
			
		});
		
		scenario("Invalid container", function() {
			var $cont = $("#no-auto-mask"),
				$input = $cont.find("input");
			
			when("typing and bluring", function() {
				$input.focus().mashKeys("12").blur();
			});
			
			then("The mask should be correct", function() {
				expect($input).toHaveValue("12");
			});
		});
		
		scenario("When reading data should treat as string", function(){
			var $cont = $("#auto-mask-container2"),
				$input = $cont.find("input");
			
			given("an autoMask", function(){
				$cont.autoMask();
			});
			when("focusing", function(){
				$input.focus().mashKeys("99");
			});
			then("the mask should be correct", function(){
				expect($input.mask()).toBe('99');
			});
		});
		
		scenario("When starting should be able to pass custom options for all the masks", function() {
			var $cont = $("#auto-mask-container"),
				$input = $cont.find("input"),
				count = 0;
			
			given("an autoMask with options", function() {
				$cont.autoMask({
					completed: function() {
						count++;
					}
				});
			});
			
			when("typing and bluring", function() {
				$input.focus().mashKeys("12").blur();
			});
			
			then("the completed callback should fire once", function() {
				expect(count).toBe(1);
			});
			
		});
		
		scenario("The callback options from autoMask should behave exactly as the regular mask", function() {
			var input1, input2,
				$cont = $("#auto-mask-container"),
				$input = $cont.find("input");
			
			given("an autoMask with callbacks", function() {
				$cont.autoMask({
					completed: function() {
						input1 = this;
					},
					afterBlur: function() {
						input2 = this;
					}
				});
			});
			
			when("typing and bluring", function() {
				$input.focus().mashKeys("12").blur();
			});
			
			then("'this' should be correct", function() {
				expect(input1[0]).toBe($input[0]);
				expect(input2[0]).toBe($input[0]);
			});
		});
		
		scenario("Inputs to be handled", function() {
			
			$.fn.on = function( eventType, selector ) {
				then("should handle the inputs type='text', type='tel' and type='number'", function() {
					expect( selector ).toBe("input[type='text'][data-mask], input[type='tel'][data-mask], input[type='number'][data-mask]");
				});
			};
			
			when("calling an autoMask", function() {
				$("#auto-mask-container").autoMask();
			});
			
		});
		
		afterEach(function() {
			container1.remove();
			container2.remove();
			container1 = undefined;
			container2.remove();
			
			$.fn.on = oldJqueryOn;
		});
	});
})( jQuery );