$(document).ready(function () {
	var justGivingId = "131180";

	// find all donations on the page
	$(".donation").each(function() {
		var me = $(this);
		var donationInput = me.find(".donation-input");

		// change the text entry when the a pre-defined button is clicked
		me.find(".donation-selection").click(function() {
			var data = $(this).attr("data-value");
			donationInput.val(data);
		});

		donationInput.change(function() {
			var val = $(this).val();

			// unselect all pre-defined buttons
			me.find(".donation-selection.active").removeClass("active");

			// reselect a pre-defined button
			me.find(".donation-selection").each(function() {
				var data = $(this).attr("data-value");
				if(data == val) {
					$(this).addClass("active");
				}
			});
		});

		// when the donate button is clicked
		me.find(".donate-button").click(function() {
			var donationType = $(this).attr("data-donation-type");
			var amount = donationInput.val();

			// only navigate when correct entries have been entered
			if(donationType && amount && amount > 0 && amount < 100000) {
				var targetUrl = "https://www.justgiving.com/donation/direct/charity/" + justGivingId;
				targetUrl +=  "?currency=GBP";
				targetUrl += "&frequency=" + donationType;
				targetUrl += "&amount=" + amount;

				window.location.href = targetUrl;
			}
		});
	});
});
