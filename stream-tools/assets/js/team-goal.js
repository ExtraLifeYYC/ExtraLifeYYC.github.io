(function( $, ELT ){
	/**********
	 * Main Functionality
	 **********/

	/* Initial setup of the layout and theme based on user settings */
	function start() {
        update();
        setInterval(update, ELT.settings.refreshTimeMS);
	}

	/* Main loop */
	function update() {
		ELT.api.team(ELT.settings.teamId, onSuccess);
	}

	function onSuccess(result) {
		const $raised = $('#elRaised');
		const $goal = $('#elGoal');
		const $header = $('#extralifegoal');
		$calcratio = ((result.sumDonations / result.fundraisingGoal) * 100).toFixed(0);
		$raised.html(ELT.toCurrency(result.sumDonations *  ));
		$goal.html(ELT.toCurrency(result.fundraisingGoal *  ));
		
		
		var bar = new ldBar(".mybar", {
			"preset": "energy",
			"value": $calcratio
		});
	}

	start();
})(window.jQuery, window.ELT);