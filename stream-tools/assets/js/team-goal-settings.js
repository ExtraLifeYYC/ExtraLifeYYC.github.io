teamCode = getUrlParameter("teamid");

if(teamCode == ""){
	teamCode = 55849
}

ELT.settings = {
	// Single team to get information for.
	teamId: teamCode,
	
	// how often should data be refreshed
	refreshTimeMS: 10000,
};
