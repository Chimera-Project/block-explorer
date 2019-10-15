var api = 'http://185.105.4.162:43111';
	var donationAddress = "";
	var blockTargetInterval = 60; // enter the block interval in seconds
	var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
	var totalSupply =  100000000000; // enter the total supply in atomic units
	var symbol = 'CMRA'; // enter the coin's ticker
	var refreshDelay = 30000;
	
	// pools stats by MainCoins
	var networkStat = {
	 "CMRA": [
		[""]
	 ]
	};
	
	var networkStat2 = {
	    "CMRA": [
		[""]
	 ]
	};
