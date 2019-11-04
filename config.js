var api = 'http://207.148.77.219:11246';
	var donationAddress = "cmracVJ2XfqQjS2jmx8eYXJ9QJ2AHPsWf2SWDypr1FNyUA7fH8aNiLqCVUqPW49RMxYCAUC1mv3qw9jWMr99oyVbbhn6muisxdk";
	var blockTargetInterval = 60; // enter the block interval in seconds
	var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
	var totalSupply =  100000000000; // enter the total supply in atomic units
	var symbol = 'CMRA'; // enter the coin's ticker
	var refreshDelay = 30000;
	
	// pools stats by MainCoins
	var networkStat = {
	 "CMRA": [
		["http://54.172.240.25"]
	 ]
	};
	
	var networkStat2 = {
	    "CMRA": [
		[""]
	 ]
	};
