// Biathlon World Cup Schedule 2025/2026
const biathlonSchedule = [
    {
        dates: "29 november–7 december 2025",
        location: "Östersund, Sverige",
        events: [
            { date: "29 november", races: ["Stafett 4x6 km, damer", "Stafett 4x7,5 km, herrar"] },
            { date: "30 november", races: ["Singelmixedstafett", "Mixedstafett"] },
            { date: "2 december", races: ["Distans 15 km, damer"] },
            { date: "3 december", races: ["Distans 20 km, herrar"] },
            { date: "5 december", races: ["Sprint 7,5 km, damer"] },
            { date: "6 december", races: ["Sprint 10 km, herrar"] },
            { date: "7 december", races: ["Jaktstart 10 km, damer", "Jaktstart 12,5 km, herrar"] }
        ]
    },
    {
        dates: "12–14 december 2025",
        location: "Hochfilzen, Österrike",
        events: [
            { date: "12 december", races: ["Sprint 10 km, herrar", "Sprint 7,5 km, damer"] },
            { date: "13 december", races: ["Jaktstart 12,5 km, herrar", "Stafett 4x6 km, damer"] },
            { date: "14 december", races: ["Stafett 4x7,5 km, herrar", "Jaktstart 10 km, damer"] }
        ]
    },
    {
        dates: "18–21 december 2025",
        location: "Annecy-Le Grand Bornand, Frankrike",
        events: [
            { date: "18 december", races: ["Sprint 7,5 km, damer"] },
            { date: "19 december", races: ["Sprint 10 km, herrar"] },
            { date: "20 december", races: ["Jaktstart 10 km, damer", "Jaktstart 12,5 km, herrar"] },
            { date: "21 december", races: ["Masstart 12,5 km, damer", "Masstart 15 km, herrar"] }
        ]
    },
    {
        dates: "8–11 januari 2026",
        location: "Oberhof, Tyskland",
        events: [
            { date: "8 januari", races: ["Sprint 10 km, herrar"] },
            { date: "9 januari", races: ["Sprint 7,5 km, damer"] },
            { date: "10 januari", races: ["Jaktstart 12,5 km, herrar", "Stafett 4x6 km, damer"] },
            { date: "11 januari", races: ["Stafett 4x7,5 km, herrar", "Jaktstart 10 km, damer"] }
        ]
    },
    {
        dates: "14–18 januari 2026",
        location: "Ruhpolding, Tyskland",
        events: [
            { date: "14 januari", races: ["Stafett 4x6 km, damer"] },
            { date: "15 januari", races: ["Stafett 4x7,5 km, herrar"] },
            { date: "16 januari", races: ["Sprint 7,5 km, damer"] },
            { date: "17 januari", races: ["Sprint 10 km, herrar"] },
            { date: "18 januari", races: ["Jaktstart 10 km, damer", "Jaktstart 12,5 km, herrar"] }
        ]
    },
    {
        dates: "22–25 januari 2026",
        location: "Nove Mesto na Morave, Tjeckien",
        events: [
            { date: "22 januari", races: ["Kortdistans 15 km, herrar"] },
            { date: "23 januari", races: ["Kortdistans 12,5 km, damer"] },
            { date: "24 januari", races: ["Singelmixedstafett", "Mixedstafett"] },
            { date: "25 januari", races: ["Masstart 15 km, herrar", "Masstart 12,5 km, damer"] }
        ]
    },
    {
        dates: "5–8 mars 2026",
        location: "Kontiolahti, Finland",
        events: [
            { date: "5 mars", races: ["Distans 15 km, damer"] },
            { date: "6 mars", races: ["Distans 20 km, herrar"] },
            { date: "7 mars", races: ["Masstart 12,5 km, damer", "Stafett 4x7,5 km, herrar"] },
            { date: "8 mars", races: ["Stafett 4x6 km, damer", "Masstart 15 km, herrar"] }
        ]
    },
    {
        dates: "12–15 mars 2026",
        location: "Otepää, Estland",
        events: [
            { date: "12 mars", races: ["Sprint 10 km, herrar"] },
            { date: "13 mars", races: ["Sprint 7,5 km, damer"] },
            { date: "14 mars", races: ["Jaktstart 12,5 km, herrar", "Jaktstart 10 km, damer"] },
            { date: "15 mars", races: ["Singelmixedstafett", "Mixedstafett"] }
        ]
    },
    {
        dates: "19–22 mars 2026",
        location: "Oslo, Norge",
        events: [
            { date: "19 mars", races: ["Sprint 7,5 km, damer"] },
            { date: "20 mars", races: ["Sprint 10 km, herrar"] },
            { date: "21 mars", races: ["Jaktstart 10 km, damer", "Jaktstart 12,5 km, herrar"] },
            { date: "22 mars", races: ["Masstart 12,5 km, damer", "Masstart 15 km, herrar"] }
        ]
    }
];

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

// Function to create a game card (for NFL)
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

// Function to create a biathlon event card
function createBiathlonCard(competition) {
    const card = document.createElement('div');
    card.className = 'game-card biathlon-card';
    
    let eventsHTML = '';
    competition.events.forEach(event => {
        const racesHTML = event.races.map(race => 
            `<li class="race-item">${race}</li>`
        ).join('');
        
        eventsHTML += `
            <div class="biathlon-day">
                <div class="day-header">${event.date}</div>
                <ul class="race-list">
                    ${racesHTML}
                </ul>
            </div>
        `;
    });
    
    card.innerHTML = `
        <div class="week-badge" style="background: linear-gradient(135deg, #4fc3f7, #2196f3);">📍 ${competition.location}</div>
        <div class="game-date">${competition.dates}</div>
        <div class="biathlon-events">
            ${eventsHTML}
        </div>
    `;
    
    return card;
}

// Function to display NFL schedule
function displaySchedule(schedule) {
    // Clear loading state
    scheduleContainer.innerHTML = '';
    
    // Create and append game cards
    schedule.forEach(game => {
        const card = createGameCard(game);
        scheduleContainer.appendChild(card);
    });
}

// Function to display biathlon schedule
function displayBiathlonSchedule(schedule) {
    // Clear loading state
    scheduleContainer.innerHTML = '';
    
    // Create and append biathlon cards
    schedule.forEach(competition => {
        const card = createBiathlonCard(competition);
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
        
        // Get selected sport
        const sport = this.dataset.team;
        
        // Show loading
        scheduleContainer.innerHTML = '<div class="loading"><div class="spinner"></div><p>Laddar schema...</p></div>';
        
        // Display appropriate schedule
        setTimeout(() => {
            if (sport === 'packers') {
                displaySchedule(packersSchedule);
            } else if (sport === 'biathlon') {
                displayBiathlonSchedule(biathlonSchedule);
            }
        }, 500);
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

