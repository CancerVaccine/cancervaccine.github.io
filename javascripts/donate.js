$(document).ready(function () {
	var donationGroups = $(".donation");
	
	donationGroups.each(function() {
		var me = $(this);
		var donationInput = me.find(".donation-input");
		
		me.find(".donation-selection").click(function() {
			var data = $(this).attr("data-value");
			donationInput.val(data);
		});
		
		donationInput.change(function() {
			me.find(".donation-selection.active").removeClass("active");
		});
		
		me.find(".donate-button").click(function(){
			var donationType = $(this).attr("data-donation-type");
			var amount = donationInput.val();
			
			if(donationType && amount && amount > 0) {
				var targetUrl = "https://www.justgiving.com/donation/direct/charity/131180?currency=GBP"
				targetUrl += "&frequency=" + donationType;
				targetUrl += "&amount=" + amount;
				
				window.location.href = targetUrl;
			}
		});
	});
});