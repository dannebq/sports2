// Packers 2025 NFL Season Schedule (Swedish Times)
const packersSchedule = [
    {
        week: 1,
        date: "September 7, 2025",
        time: "22:25 (Swedish Time)",
        opponent: "Detroit Lions",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 2,
        date: "September 11, 2025",
        time: "02:15 (Sept 12, Swedish Time)",
        opponent: "Washington Commanders",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 3,
        date: "September 21, 2025",
        time: "19:00 (Swedish Time)",
        opponent: "Cleveland Browns",
        location: "away",
        stadium: "Cleveland Browns Stadium"
    },
    {
        week: 4,
        date: "September 28, 2025",
        time: "00:20 (Sept 29, Swedish Time)",
        opponent: "Dallas Cowboys",
        location: "away",
        stadium: "AT&T Stadium"
    },
    {
        week: 5,
        date: "October 5, 2025",
        time: "BYE WEEK",
        opponent: null,
        location: null,
        stadium: null
    },
    {
        week: 6,
        date: "October 12, 2025",
        time: "20:25 (Swedish Time)",
        opponent: "Cincinnati Bengals",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 7,
        date: "October 19, 2025",
        time: "20:25 (Swedish Time)",
        opponent: "Arizona Cardinals",
        location: "away",
        stadium: "State Farm Stadium"
    },
    {
        week: 8,
        date: "October 26, 2025",
        time: "02:20 (Oct 27, Swedish Time)",
        opponent: "Pittsburgh Steelers",
        location: "away",
        stadium: "Acrisure Stadium"
    },
    {
        week: 9,
        date: "November 2, 2025",
        time: "19:00 (Swedish Time)",
        opponent: "Carolina Panthers",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 10,
        date: "November 10, 2025",
        time: "01:15 (Nov 11, Swedish Time)",
        opponent: "Philadelphia Eagles",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 11,
        date: "November 16, 2025",
        time: "19:00 (Swedish Time)",
        opponent: "New York Giants",
        location: "away",
        stadium: "MetLife Stadium"
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

