// Packers 2024-2025 NFL Season Schedule
const packersSchedule = [
    {
        week: 1,
        date: "September 6, 2024",
        time: "8:15 PM ET",
        opponent: "Philadelphia Eagles",
        location: "away",
        stadium: "Lincoln Financial Field"
    },
    {
        week: 2,
        date: "September 15, 2024",
        time: "1:00 PM ET",
        opponent: "Indianapolis Colts",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 3,
        date: "September 22, 2024",
        time: "1:00 PM ET",
        opponent: "Tennessee Titans",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 4,
        date: "September 29, 2024",
        time: "1:00 PM ET",
        opponent: "Minnesota Vikings",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 5,
        date: "October 6, 2024",
        time: "4:25 PM ET",
        opponent: "Los Angeles Rams",
        location: "away",
        stadium: "SoFi Stadium"
    },
    {
        week: 6,
        date: "October 13, 2024",
        time: "1:00 PM ET",
        opponent: "Arizona Cardinals",
        location: "away",
        stadium: "State Farm Stadium"
    },
    {
        week: 7,
        date: "October 20, 2024",
        time: "1:00 PM ET",
        opponent: "Houston Texans",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 8,
        date: "October 27, 2024",
        time: "4:25 PM ET",
        opponent: "Jacksonville Jaguars",
        location: "away",
        stadium: "EverBank Stadium"
    },
    {
        week: 9,
        date: "November 3, 2024",
        time: "4:25 PM ET",
        opponent: "Detroit Lions",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 10,
        date: "November 10, 2024",
        time: "BYE WEEK",
        opponent: null,
        location: null,
        stadium: null
    },
    {
        week: 11,
        date: "November 17, 2024",
        time: "1:00 PM ET",
        opponent: "Chicago Bears",
        location: "away",
        stadium: "Soldier Field"
    },
    {
        week: 12,
        date: "November 24, 2024",
        time: "4:25 PM ET",
        opponent: "San Francisco 49ers",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 13,
        date: "November 28, 2024",
        time: "8:20 PM ET",
        opponent: "Miami Dolphins",
        location: "away",
        stadium: "Hard Rock Stadium"
    },
    {
        week: 14,
        date: "December 5, 2024",
        time: "8:15 PM ET",
        opponent: "Detroit Lions",
        location: "away",
        stadium: "Ford Field"
    },
    {
        week: 15,
        date: "December 15, 2024",
        time: "8:20 PM ET",
        opponent: "Seattle Seahawks",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 16,
        date: "December 23, 2024",
        time: "8:15 PM ET",
        opponent: "New Orleans Saints",
        location: "away",
        stadium: "Caesars Superdome"
    },
    {
        week: 17,
        date: "December 29, 2024",
        time: "1:00 PM ET",
        opponent: "Minnesota Vikings",
        location: "away",
        stadium: "U.S. Bank Stadium"
    },
    {
        week: 18,
        date: "January 5, 2025",
        time: "TBD",
        opponent: "Chicago Bears",
        location: "home",
        stadium: "Lambeau Field"
    }
];

// DOM Elements
const scheduleContainer = document.getElementById('schedule-container');

// Function to create a game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    // Handle BYE week
    if (game.opponent === null) {
        card.innerHTML = `
            <div class="week-badge">Week ${game.week}</div>
            <div class="game-date">${game.date}</div>
            <div class="matchup">
                <div class="team" style="width: 100%; text-align: center;">
                    <div class="team-name" style="font-size: 1.5rem;">BYE WEEK</div>
                    <div style="color: var(--text-secondary); margin-top: 8px;">Time to rest and recover 🏖️</div>
                </div>
            </div>
        `;
        return card;
    }
    
    const isHome = game.location === 'home';
    const locationClass = isHome ? 'home' : 'away';
    
    card.innerHTML = `
        <div class="week-badge">Week ${game.week}</div>
        <div class="game-date">${game.date}</div>
        <div class="matchup">
            <div class="team ${isHome ? 'home' : ''}">
                <div class="team-name">${isHome ? 'Packers' : game.opponent}</div>
            </div>
            <div class="vs">VS</div>
            <div class="team ${!isHome ? 'home' : ''}">
                <div class="team-name">${!isHome ? 'Packers' : game.opponent}</div>
            </div>
        </div>
        <div class="game-info">
            <div class="location ${locationClass}">${game.stadium}</div>
            <div class="time">${game.time}</div>
        </div>
    `;
    
    return card;
}

// Function to display schedule
function displaySchedule(schedule) {
    // Clear loading state
    scheduleContainer.innerHTML = '';
    
    // Create and append game cards
    schedule.forEach(game => {
        const card = createGameCard(game);
        scheduleContainer.appendChild(card);
    });
}

// Initialize the page
function init() {
    try {
        // Simulate loading delay for better UX
        setTimeout(() => {
            displaySchedule(packersSchedule);
        }, 500);
    } catch (error) {
        console.error('Error loading schedule:', error);
        scheduleContainer.innerHTML = `
            <div class="error">
                <h3>⚠️ Error Loading Schedule</h3>
                <p>We couldn't load the schedule. Please try refreshing the page.</p>
            </div>
        `;
    }
}

// Team selector functionality
document.querySelectorAll('.team-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.team-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get selected team
        const team = this.dataset.team;
        
        // For now, we only have Packers data
        if (team === 'packers') {
            scheduleContainer.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading schedule...</p></div>';
            setTimeout(() => {
                displaySchedule(packersSchedule);
            }, 500);
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

