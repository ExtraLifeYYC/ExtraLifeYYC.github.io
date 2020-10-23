teamCode = getUrlParameter("teamid");

if(teamCode == ""){
	teamCode = 50312
}

ELT.settings = {
	// Single team to get information for.
	teamId: teamCode,
	
	// how often should data be refreshed
	refreshTimeMS: 10000,
};
