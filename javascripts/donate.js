$(document).ready(function () {
	var justGivingId = "131180";

	// find all donations on the page
	$(".donation").each(function () {
		var me = $(this);
		var donationInput = me.find(".donation-input");
		var optionInput = me.find(".selected-option");

		// change the text entry when the a pre-defined button is clicked
		me.find(".donation-selection").click(function () {
			var data = $(this).data("value");
			donationInput.val(data);
		});

		me.find(".monthly-donation-selection").click(function () {
			var data = $(this).data("value");
			donationInput.val(data);

			var option = $(this).data("option");
			optionInput.val(option);
		});

		donationInput.change(function () {
			var val = $(this).val();

			// unselect all pre-defined buttons
			me.find(".donation-selection.active").removeClass("active");

			// reselect a pre-defined button
			me.find(".donation-selection").each(function () {
				var data = $(this).data("value");
				if (data == val) {
					$(this).addClass("active");
				}
			});
		});

		function submitDonation($target) {
			var donationType = $target.closest(".donation").data("donation-type");
			var amount = donationInput.val();

			// only navigate when correct entries have been entered
			if (donationType && amount && amount > 0 && amount < 100000) {
				if(donationType == "single") {
					var targetUrl = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations";
					targetUrl += "&business=marie@cancervaccine%2eorg%2euk";
					targetUrl += "&lc=GB";
					targetUrl += "&amount=" + amount;
					targetUrl += "&currency_code=GBP";
					targetUrl += "&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted";
					targetUrl += "&item_name=Donation from ICVI.org.uk";

					window.location.href = targetUrl;
				}
			}
		}

		me.find(".donation-input").on("keypress", function (evt) {
			if (evt.keyCode === 13) {
				submitDonation($(this));
			}
		});

		// when the donate button is clicked
		me.find(".donate-button").click(function () {
			submitDonation($(this));
		});
	});
});
