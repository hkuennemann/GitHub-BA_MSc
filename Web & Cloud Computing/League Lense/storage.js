// Detect current page
const currentPage = window.location.pathname;
console.log('Current page:', currentPage);

// Function to search leagues based on user input
function searchLeagues(query) {
    const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?search=${query}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': MY_API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => displaySearchResults(data))
        .catch(error => console.error('Error searching leagues:', error));
}

// Function to display search results
function displaySearchResults(data) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear existing results

    data.response.forEach(league => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result-item');
        resultItem.textContent = `${league.league.name} (${league.country.name})`;
        resultItem.onclick = () => addLeagueSelection(league);
        resultsContainer.appendChild(resultItem);
    });
}

// Function to fetch all leagues
function fetchAllLeagues() {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/leagues';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': MY_API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            // Assuming the data structure includes a 'response' array
            displayAllLeagues(data);
        })
        .catch(error => console.error('Error fetching all leagues:', error));
}

// Function to add a league to the selection and localStorage
function addLeagueSelection(league) {
    let favoriteLeagues = JSON.parse(localStorage.getItem('favoriteLeagues')) || [];
    const newSelection = {
        leagueId: league.league.id,
        leagueName: league.league.name,
        leagueType: league.league.type,
        leagueLogo: league.league.logo,
        countryName: league.country.name
    };

    // Prevent adding duplicate leagues
    const isDuplicate = favoriteLeagues.some(selected => selected.leagueId === newSelection.leagueId);
    if (!isDuplicate) {
        favoriteLeagues.push(newSelection);
        localStorage.setItem('favoriteLeagues', JSON.stringify(favoriteLeagues));

        // Notify the user
        alert(`${league.league.name} was added to favorites`);

        const favCheckbox = document.getElementById('show-fav-checkbox');
        if (favCheckbox.checked) {
            displayFavoriteLeagues(); // Refresh the display to include the newly added league
        } else {
            fetchAllLeagues(); // Refresh all leagues to update the checkbox status if viewing all leagues
        }
    } else {
        // Optionally, notify the user that the league is already in favorites
        alert(`${league.league.name} is already in favorites`);
    }

    // Clear the search results and reset the search input field
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('league-search-input').value = '';
}

// Updated displayLeagues function to include a checkbox for each league
function displayFavoriteLeagues() {
    // Fetch the selected leagues from localStorage
    const favoriteLeagues = JSON.parse(localStorage.getItem('favoriteLeagues')) || [];

    const tableBody = document.getElementById('current-selection-table').querySelector('tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    // Loop through the favoriteLeagues array to display them
    favoriteLeagues.forEach((league) => {
        const row = tableBody.insertRow();

        const logoCell = row.insertCell(0);
        const logoImg = document.createElement('img');
        logoImg.src = league.leagueLogo;
        logoImg.alt = `${league.leagueName} logo`;
        logoImg.style.width = '50px'; // Adjust according to your design needs
        logoCell.appendChild(logoImg);

        row.insertCell(1).textContent = league.leagueName;
        row.insertCell(2).textContent = league.countryName;
        row.insertCell(3).textContent = league.leagueType;

        // Checkbox for marking as favorite (already checked since it's in the selection)
        const favoriteCell = row.insertCell(4);
        const favoriteCheckbox = document.createElement('input');
        favoriteCheckbox.type = 'checkbox';
        favoriteCheckbox.checked = true;
        favoriteCheckbox.addEventListener('change', () => handleFavoriteChange(favoriteCheckbox.checked, league));
        favoriteCell.appendChild(favoriteCheckbox);

        const goCell = row.insertCell(5);
        const goLink = document.createElement('a');
        goLink.href = 'javascript:void(0);'; // Prevent navigation
        goLink.textContent = 'Go to league...';
        goLink.style.color = 'white';
        goLink.onclick = () => {
            localStorage.setItem('selectedLeagueId', league.leagueId);
            localStorage.setItem('selectedLeagueName', league.leagueName);
            localStorage.setItem('selectedLeagueLogo', league.leagueLogo);
            localStorage.setItem('selectedCountryName', league.countryName);
            window.location.href = 'standings.html';
        };
        goCell.appendChild(goLink);
    });
}

// Function to display all leagues
function displayAllLeagues(data) {
    const tableBody = document.getElementById('current-selection-table').querySelector('tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    // Fetch selected leagues from localStorage
    const favoriteLeagues = JSON.parse(localStorage.getItem('favoriteLeagues')) || [];

    data.response.forEach((resp) => {
        const row = tableBody.insertRow();

        const logoCell = row.insertCell(0);
        const logoImg = document.createElement('img');
        logoImg.src = resp.league.logo;
        logoImg.alt = `${resp.league.name} logo`;
        logoImg.style.width = '50px'; // Adjust according to your design needs
        logoCell.appendChild(logoImg);

        row.insertCell(1).textContent = resp.league.name;
        row.insertCell(2).textContent = resp.country.name;
        row.insertCell(3).textContent = resp.league.type;

        // Checkbox for marking as favorite
        const favoriteCell = row.insertCell(4);
        const favoriteCheckbox = document.createElement('input');
        favoriteCheckbox.type = 'checkbox';
        // Check the checkbox if this league is among the selected ones
        favoriteCheckbox.checked = favoriteLeagues.some(selected => selected.leagueId === resp.league.id);
        favoriteCheckbox.addEventListener('change', () => {
            // Handle checkbox change to add/remove from favorites
            handleFavoriteChange(favoriteCheckbox.checked, {
                leagueId: resp.league.id,
                leagueName: resp.league.name,
                leagueType: resp.league.type,
                leagueLogo: resp.league.logo,
                countryName: resp.country.name
            });
        });
        favoriteCell.appendChild(favoriteCheckbox);

        const goCell = row.insertCell(5);
        const goLink = document.createElement('a');
        goLink.href = 'javascript:void(0);'; // Prevent navigation
        goLink.textContent = 'Go to league...';
        goLink.style.color = 'white';
        goLink.onclick = () => {
            localStorage.setItem('selectedLeagueId', resp.leagueId);
            localStorage.setItem('selectedLeagueName', resp.leagueName);
            localStorage.setItem('selectedLeagueLogo', resp.leagueLogo);
            localStorage.setItem('selectedCountryName', resp.countryName);
            window.location.href = 'standings.html';
        };
        goCell.appendChild(goLink);
    });
}

// Function to handle favorite checkbox change
function handleFavoriteChange(isChecked, league) {
    let favoriteLeagues = JSON.parse(localStorage.getItem('favoriteLeagues')) || [];
    if (isChecked) {
        // Add to favoriteLeagues if not already present
        if (!favoriteLeagues.some(selected => selected.leagueId === league.leagueId)) {
            favoriteLeagues.push(league);
        }
    } else {
        // Remove from favoriteLeagues
        favoriteLeagues = favoriteLeagues.filter(selected => selected.leagueId !== league.leagueId);
    }

    // Update localStorage with the new state of favoriteLeagues
    localStorage.setItem('favoriteLeagues', JSON.stringify(favoriteLeagues));

    // Directly call the appropriate display function based on the "show favorite leagues only" checkbox
    const favCheckbox = document.getElementById('show-fav-checkbox');
    if (favCheckbox.checked) {
        displayFavoriteLeagues(); // This should correctly update the UI in a single click
    } else {
        fetchAllLeagues(); // Optionally, refresh all leagues if you want to keep the checkbox consistent in the "all leagues" view
    }
}

// Function to remove a league from selection and localStorage
function removeLeagueFromSelection(leagueId) {
    let favoriteLeagues = JSON.parse(localStorage.getItem('favoriteLeagues')) || [];
    // Filter out the league to be removed
    favoriteLeagues = favoriteLeagues.filter(league => league.leagueId !== leagueId);
    // Update localStorage with the filtered array
    localStorage.setItem('favoriteLeagues', JSON.stringify(favoriteLeagues));
    // Refresh the table display
    displayFavoriteLeagues();
}

// Function to populate the season selector
function populateSeasonSelector(season) {
    const seasonSelector = document.getElementById('season-selector');
    seasonSelector.innerHTML = ''; // Clear existing options

    for (let year = parseInt(2023); year >= 2013; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = `${year}/${year+1}`;
        seasonSelector.appendChild(option);
    }
    // Set the season selector to the current or previously selected season
    seasonSelector.value = season;
}

// Function to fetch and display standings
function fetchStandings() {
    const leagueId = localStorage.getItem('selectedLeagueId');
    const season = localStorage.getItem('selectedSeason') || '2023';
    const url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=${season}&league=${leagueId}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': MY_API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log('Standings data was fetched successfully!');
            
            const leagueName = localStorage.getItem('selectedLeagueName');
            const leagueLogo = localStorage.getItem('selectedLeagueLogo');
            const country = localStorage.getItem('selectedCountryName');
            showData_standings(data);
            updateHeader(leagueLogo, leagueName, country, season, container = '.standings-container h2');
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display the standings in a table
function showData_standings(data) {
    const table = document.getElementById('standings-table');

    const tableBody = document.querySelector('#standings-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    const leagueInfo = data.response[0];
    const standingsArray = leagueInfo.league.standings[0];
    standingsArray.forEach((teamStanding) => {
        let row = tableBody.insertRow();
        row.insertCell(0).textContent = teamStanding.rank;

        // Create a span element for the bullet point
        let bulletCell = row.insertCell(1);
        let bullet = document.createElement('span');
        bullet.classList.add('bullet'); // Add a class for styling
        bullet.textContent = '\u2022'; // Unicode character for bullet point
        bulletCell.appendChild(bullet); // Append the bullet point to the cell

        // Create an image element for the logo
        insertLogoCell(row, 2, teamStanding.team.logo, teamStanding.team.name);

        row.insertCell(3).textContent = teamStanding.team.name;
        row.insertCell(4).textContent = teamStanding.all.played;
        row.insertCell(5).textContent = teamStanding.all.win;
        row.insertCell(6).textContent = teamStanding.all.draw;
        row.insertCell(7).textContent = teamStanding.all.lose;
        row.insertCell(8).textContent = teamStanding.points;
        row.insertCell(9).textContent = `${teamStanding.all.goals.for}:${teamStanding.all.goals.against}`; // Combine goals for and against
        row.insertCell(10).textContent = teamStanding.goalsDiff;
        row.insertCell(11).textContent = teamStanding.form;
    });
}

// Function to fetch and display top scorers
function fetchTopScorers() {
    const leagueId = localStorage.getItem('selectedLeagueId');
    const season = localStorage.getItem('selectedSeason') || '2023';
    const url = `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${leagueId}&season=${season}`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': MY_API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => { 
            console.log('Top scorers data was fetched successfully!');

            const leagueName = localStorage.getItem('selectedLeagueName');
            const leagueLogo = localStorage.getItem('selectedLeagueLogo');
            const country = localStorage.getItem('selectedCountryName');
            showData_topScorers(data);
            updateHeader(leagueLogo, leagueName, country, season, container = '.top-scorers-container h2');
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display the top scorers in a table
function showData_topScorers(data) {
    const tableBody = document.querySelector('#top-scorers-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    data.response.forEach((playerData, index) => {
        const player = playerData.player;
        const statistics = playerData.statistics[0];

        let row = tableBody.insertRow();
        row.insertCell(0).textContent = index + 1; // Rank

        // Create a span element for the bullet point
        let bulletCell = row.insertCell(1);
        let bullet = document.createElement('span');
        bullet.classList.add('bullet');
        bullet.textContent = '\u2022'; // Unicode character for bullet point
        bulletCell.appendChild(bullet);

        // Create an image element for the player photo
        insertLogoCell(row, 2, player.photo, player.name);

        // Create a container for the player's name and team name
        let nameTeamCell = row.insertCell(3);
        let nameDiv = document.createElement('div');
        nameDiv.style.fontWeight = 'bold'; // Make the name bold
        nameDiv.textContent = `${player.firstname} ${player.lastname}`;
        
        let teamDiv = document.createElement('div');
        teamDiv.style.fontSize = 'smaller'; // Make the team name in a smaller font
        teamDiv.textContent = statistics.team.name;

        nameTeamCell.appendChild(nameDiv);
        nameTeamCell.appendChild(teamDiv); // Append both the name and team name to the cell

        // Continue with other cells
        let totalGoalsCell = row.insertCell(4); // Total goals
        totalGoalsCell.textContent = statistics.goals.total;

        let totalAssistsCell = row.insertCell(5); // Total assists
        totalAssistsCell.textContent = statistics.goals.assists;

        let totalPointsCell = row.insertCell(6); // Total scorer points
        totalPointsCell.textContent = statistics.goals.total + statistics.goals.assists;
    });
}

// Function to fetch and display top scorers
function fetchTopAssists() {
    const leagueId = localStorage.getItem('selectedLeagueId');
    const season = localStorage.getItem('selectedSeason') || '2023';
    const url = `https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=${leagueId}&season=${season}`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': MY_API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => { 
            console.log('Top assists data was fetched successfully!');
            showData_topAssists(data);

            const leagueName = localStorage.getItem('selectedLeagueName');
            const leagueLogo = localStorage.getItem('selectedLeagueLogo');
            const country = localStorage.getItem('selectedCountryName');
            updateHeader(leagueLogo, leagueName, country, season, container = '.top-assists-container h2');
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display the top assists in a table
function showData_topAssists(data) {
    const tableBody = document.querySelector('#top-assists-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    data.response.forEach((playerData, index) => {
        const player = playerData.player;
        const statistics = playerData.statistics[0];

        let row = tableBody.insertRow();
        row.insertCell(0).textContent = index + 1; // Rank

        // Create a span element for the bullet point
        let bulletCell = row.insertCell(1);
        let bullet = document.createElement('span');
        bullet.classList.add('bullet');
        bullet.textContent = '\u2022'; // Unicode character for bullet point
        bulletCell.appendChild(bullet);

        // Create an image element for the player photo
        insertLogoCell(row, 2, player.photo, player.name);

        // Create a container for the player's name and team name
        let nameTeamCell = row.insertCell(3);
        let nameDiv = document.createElement('div');
        nameDiv.style.fontWeight = 'bold'; // Make the name bold
        nameDiv.textContent = `${player.firstname} ${player.lastname}`;
        
        let teamDiv = document.createElement('div');
        teamDiv.style.fontSize = 'smaller'; // Make the team name in a smaller font
        teamDiv.textContent = statistics.team.name;

        nameTeamCell.appendChild(nameDiv);
        nameTeamCell.appendChild(teamDiv); // Append both the name and team name to the cell

        // Continue with other cells
        let totalGoalsCell = row.insertCell(4); // Total goals
        totalGoalsCell.textContent = statistics.goals.total;

        let totalAssistsCell = row.insertCell(5); // Total assists
        totalAssistsCell.textContent = statistics.goals.assists;

        let totalPointsCell = row.insertCell(6); // Total scorer points
        totalPointsCell.textContent = statistics.goals.total + statistics.goals.assists;
    });
}

// Function to fetch and display top scorers
function fetchFixtures() {
    const leagueId = localStorage.getItem('selectedLeagueId');
    const season = localStorage.getItem('selectedSeason') || '2023';
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueId}&season=${season}`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': MY_API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => { 
            console.log('Fixtures data was fetched successfully!');
            showData_Fixtures(data);

            const leagueName = localStorage.getItem('selectedLeagueName');
            const leagueLogo = localStorage.getItem('selectedLeagueLogo');
            const country = localStorage.getItem('selectedCountryName');
            updateHeader(leagueLogo, leagueName, country, season, container = '.fixtures-container h2');
        })
        .catch(error => console.error('Error fetching data:', error));
}

function showData_Fixtures(data) {
    console.log("showing data");
    const tableBody = document.querySelector('#fixtures-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    // Step 1: Group fixtures by matchday
    const fixturesByMatchday = data.response.reduce((acc, game) => {
        const matchday = game.league.round;
        if (!acc[matchday]) {
            acc[matchday] = [];
        }
        acc[matchday].push(game);
        return acc;
    }, {});

    // Step 2: Create table sections for each matchday
    Object.entries(fixturesByMatchday).forEach(([matchday, games], index) => {
        // Insert a blank row as a spacer before each matchday, except before the first one
        let spacerRow = tableBody.insertRow();
        let spacerCell = spacerRow.insertCell(0);
        spacerCell.colSpan = 9; // Span across all columns
        spacerCell.style.height = '1px'; // Set the height of the spacer
        spacerCell.style.border = 'none'; // Ensure there's no border to maintain it as invisible
        spacerCell.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    
        // Matchday header row
        let headerRow = tableBody.insertRow();
        let headerCell = headerRow.insertCell(0);
        headerCell.colSpan = 9; // Span across all columns
        headerCell.textContent = matchday;
        headerCell.className = 'matchday-header'; // Add class for styling
    
        // Fixture rows for the matchday
        games.forEach((game) => {
            let row = tableBody.insertRow();
    
            // Continue with the rest of your fixture row setup as before...
            const dateString = game.fixture.date;
            const date = new Date(dateString);
            const day = date.toISOString().split('T')[0]; // YYYY-MM-DD format
            const time = date.toTimeString().split(' ')[0]; // HH:MM:SS format
            const dayAndTime = `${day} - ${time.substring(0, 5)}`; // Trims seconds for HH:MM format
            row.insertCell(0).textContent = dayAndTime;
    
            // Home team logo and name
            insertLogoCell(row, 1, game.teams.home.logo, game.teams.home.name);
            row.insertCell(2).textContent = game.teams.home.name;
            row.insertCell(3).textContent = game.goals.home;

            // League logo
            insertLogoCell(row, 4, game.league.logo, game.league.name);

            // Away team score, name, and logo
            row.insertCell(5).textContent = game.goals.away;
            row.insertCell(6).textContent = game.teams.away.name;
            insertLogoCell(row, 7, game.teams.away.logo, game.teams.away.name);

            const goCell = row.insertCell(8);
            const goLink = document.createElement('a');
            goLink.href = 'javascript:void(0);'; // Prevent navigation
            goLink.textContent = 'See more...';
            goLink.style.color = 'white';
            goLink.onclick = () => {
                localStorage.setItem('selectedFixture', game.fixture.id);
                window.location.href = 'lineUp.html';
            };
            goCell.appendChild(goLink);
        });
    });
}

// Function to fetch and display top scorers
function fetchLineUps() {
    const fixtureId = localStorage.getItem('selectedFixture');
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/lineups?fixture=${fixtureId}`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': MY_API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => { 
            console.log('Fixtures data was fetched successfully!');
            console.log(data);
            showData_lineUps(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display the lineups in a grid
function showData_lineUps(data) {
    const applyLogoBackground = (team, teamId) => {
        const formationContainer = document.querySelector(`#${teamId} .formation-container`);
        if (!formationContainer) return;

        // Ensure container is positioned to contain the absolute elements
        formationContainer.style.position = 'relative';

        let bgDiv = formationContainer.querySelector('.team-logo-bg');
        if (!bgDiv) {
            bgDiv = document.createElement('div');
            bgDiv.className = 'team-logo-bg';
            formationContainer.prepend(bgDiv); // Insert as first child to stay under content
        }

        // Apply styles directly for semi-transparent background
        bgDiv.style.position = 'absolute';
        bgDiv.style.top = 0;
        bgDiv.style.left = 0;
        bgDiv.style.width = '100%';
        bgDiv.style.height = '100%';
        bgDiv.style.backgroundImage = `url('${team.team.logo}')`;
        bgDiv.style.backgroundSize = 'cover';
        bgDiv.style.backgroundPosition = 'center';
        bgDiv.style.opacity = '0.25'; // Adjust for desired transparency
        bgDiv.style.zIndex = '1'; // Behind the formation content but above container's background
    };

    // Process for Team 1
    const team1 = data.response[0];
    document.getElementById('team1-name').innerHTML = `<img src="${team1.team.logo}" alt="Team Logo" style="width: 50px; height: 50px; vertical-align: middle;"> ${team1.team.name} - Formation: ${team1.formation}`;
    document.getElementById('team1-coach').textContent = "Coach: " + team1.coach.name;
    generateFormationGrid('team1-formation', team1.formation, team1.startXI);
    populatePlayers('team1-starting', team1.startXI);
    populatePlayers('team1-subs', team1.substitutes);
    applyLogoBackground(team1, 'team1');

    // Process for Team 2
    const team2 = data.response[1];
    document.getElementById('team2-name').innerHTML = `<img src="${team2.team.logo}" alt="Team Logo" style="width: 50px; height: 50px; vertical-align: middle;"> ${team2.team.name} - Formation: ${team2.formation}`;
    document.getElementById('team2-coach').textContent = "Coach: " + team2.coach.name;
    generateFormationGrid('team2-formation', team2.formation, team2.startXI);
    populatePlayers('team2-starting', team2.startXI);
    populatePlayers('team2-subs', team2.substitutes);
    applyLogoBackground(team2, 'team2');
}

// Function to generate the formation grid
function generateFormationGrid(formationDivId, formation, startXI) {
    const formationDiv = document.getElementById(formationDivId);
    formationDiv.innerHTML = ''; // Clear previous contents

    // Constant size for the circles in viewport units
    const circleSize = '5vw'; // 5% of the viewport width

    // Create a map to track player positions
    let playerPositions = {};

    // Populate playerPositions with player data using their grid position
    startXI.forEach(player => {
        const [x, y] = player.player.grid.split(':').map(Number);
        if (!playerPositions[x]) {
            playerPositions[x] = [];
        }
        playerPositions[x][y] = player;
    });

    // Determine the number of rows needed for the formation
    const numberOfRows = Math.max(...Object.keys(playerPositions).map(Number));

    // Generate the grid rows in reverse order
    for (let i = numberOfRows; i >= 1; i--) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';

        // Find the max column number in this row for spacing
        const maxColumn = playerPositions[i] ? Math.max(...Object.keys(playerPositions[i]).map(Number)) : 0;

        for (let j = 1; j <= maxColumn; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.style.height = circleSize; // Use constant size for height
            cellDiv.style.width = circleSize; // Use constant size for width to maintain circle shape
            cellDiv.style.borderRadius = '50%'; // Make the cell a circle

            // If there's a player for this position, add them
            if (playerPositions[i] && playerPositions[i][j]) {
                const player = playerPositions[i][j];
                // Optional: Adjust text size or content to fit the circles
                cellDiv.textContent = player.player.number; // Use player's number
                cellDiv.classList.add('player'); // Style the player cell
            }

            rowDiv.appendChild(cellDiv);
        }

        formationDiv.appendChild(rowDiv);
    }
}

// Function to populate the players list
function populatePlayers(listId, players) {
    const list = document.getElementById(listId);
    list.innerHTML = ''; // Clear existing list items
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player.player.name + ' (' + player.player.number + ')';
        list.appendChild(li);
    });
}

// Function to insert a logo cell
function insertLogoCell(row, index, logoSrc, altText) {
    let logoCell = row.insertCell(index);
    let logo = document.createElement('img');
    logo.src = logoSrc;
    logo.alt = `${altText} image`;
    logoCell.appendChild(logo);
}

// Function to update the standings header
function updateHeader(leagueLogo, leagueName, country, season, container) {
    const header = document.querySelector(container);
    console.log('Header:', header);
    const parsedSeason = parseInt(season); // Parse season as an integer
    header.innerHTML = `<img src="${leagueLogo}" alt="${leagueName} logo" class="league-logo"> 
                        ${leagueName} (${country}) - Season: ${parsedSeason}/${parsedSeason + 1}`;
}

document.addEventListener('DOMContentLoaded', () => {

    if (!currentPage.includes('index.html') && !currentPage.includes('lineUp.html')) {
        const seasonSelector = document.getElementById('season-selector');

        seasonSelector.addEventListener('change', () => {
            console.log('Season selector change event fired');

            // Update selectedSeason with the new value and save it to localStorage
            selectedSeason = seasonSelector.value;
            localStorage.setItem('selectedSeason', selectedSeason);

            // Fetch new data based on the updated season
            fetchDataBasedOnPage();
        });
    }

    function fetchDataBasedOnPage() {
        if (currentPage.includes('index.html')) {
            console.log('Landing page: Fetching data...');
            const favCheckbox = document.getElementById('show-fav-checkbox');

            if (favCheckbox.checked) {
                displayFavoriteLeagues();
            } else {
                fetchAllLeagues(); // Fetch and display all leagues initially if checkbox is unchecked.
            }

            favCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    displayFavoriteLeagues();
                } else {
                    fetchAllLeagues(); // Fetch and display all leagues when checkbox is unchecked.
                }
            });

            const searchInput = document.getElementById('league-search-input');

            searchInput.addEventListener('input', () => {
                const query = searchInput.value.trim();
                if (query.length > 2) {
                    searchLeagues(query);
                } else {
                    document.getElementById('search-results').innerHTML = '';
                }
            });
        } else if (currentPage.includes('lineUp.html')) {
            console.log('Lineup page: Fetching data...');
            fetchLineUps();
        } else {
            let selectedSeason = localStorage.getItem('selectedSeason') || '2023';
            populateSeasonSelector(selectedSeason);

            if (currentPage.includes('standings.html')) {
                console.log('Standings page: Fetching data...');
                fetchStandings();
            } else if (currentPage.includes('topScorers.html')) {
                console.log('Top scorers page: Fetching data...');
                fetchTopScorers();
            } else if (currentPage.includes('topAssists.html')) {
                console.log('Results page: Fetching data...');
                fetchTopAssists();
            } else if (currentPage.includes('fixtures.html')) {
                console.log('Fixtures page: Fetching data...');
                fetchFixtures();
            }
        }
    }

    // Initial data fetch based on the stored selections
    fetchDataBasedOnPage();
});
