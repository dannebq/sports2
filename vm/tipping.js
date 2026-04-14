// ── Data ──

const TOURNAMENT_START = new Date(2026, 5, 11, 21, 0, 0); // June 11, 2026 21:00

const teamToCode = {
    "Mexiko": "MEX", "Sydafrika": "RSA", "Sydkorea": "KOR", "Tjeckien": "CZE",
    "Kanada": "CAN", "Bosnien & Hercegovina": "BIH", "USA": "USA", "Paraguay": "PAR",
    "Qatar": "QAT", "Schweiz": "SUI", "Brasilien": "BRA", "Marocko": "MAR",
    "Haiti": "HAI", "Skottland": "SCO", "Australien": "AUS", "Turkiet": "TUR",
    "Tyskland": "GER", "Curacao": "CUW", "Nederländerna": "NED", "Japan": "JPN",
    "Elfenbenskusten": "CIV", "Ecuador": "ECU", "Sverige": "SWE", "Tunisien": "TUN",
    "Spanien": "ESP", "Kap Verde": "CPV", "Belgien": "BEL", "Egypten": "EGY",
    "Saudiarabien": "KSA", "Uruguay": "URU", "Iran": "IRN", "Nya Zeeland": "NZL",
    "Frankrike": "FRA", "Senegal": "SEN", "Irak": "IRQ", "Norge": "NOR",
    "Argentina": "ARG", "Algeriet": "ALG", "Österrike": "AUT", "Jordanien": "JOR",
    "Portugal": "POR", "DR Kongo": "COD", "England": "ENG", "Kroatien": "CRO",
    "Ghana": "GHA", "Panama": "PAN", "Uzbekistan": "UZB", "Colombia": "COL"
};

const allTeams = Object.keys(teamToCode).sort((a, b) => a.localeCompare(b, 'sv'));

const schedule = [
    { id: 1, date: "11 juni", time: "21:00", home: "Mexiko", away: "Sydafrika", group: "A" },
    { id: 2, date: "12 juni", time: "04:00", home: "Sydkorea", away: "Tjeckien", group: "A" },
    { id: 3, date: "12 juni", time: "21:00", home: "Kanada", away: "Bosnien & Hercegovina", group: "B" },
    { id: 4, date: "13 juni", time: "03:00", home: "USA", away: "Paraguay", group: "D" },
    { id: 5, date: "13 juni", time: "21:00", home: "Qatar", away: "Schweiz", group: "B" },
    { id: 6, date: "14 juni", time: "00:00", home: "Brasilien", away: "Marocko", group: "C" },
    { id: 7, date: "14 juni", time: "03:00", home: "Haiti", away: "Skottland", group: "C" },
    { id: 8, date: "14 juni", time: "06:00", home: "Australien", away: "Turkiet", group: "D" },
    { id: 9, date: "14 juni", time: "19:00", home: "Tyskland", away: "Curacao", group: "E" },
    { id: 10, date: "14 juni", time: "22:00", home: "Nederländerna", away: "Japan", group: "F" },
    { id: 11, date: "15 juni", time: "01:00", home: "Elfenbenskusten", away: "Ecuador", group: "E" },
    { id: 12, date: "15 juni", time: "04:00", home: "Sverige", away: "Tunisien", group: "F" },
    { id: 13, date: "15 juni", time: "18:00", home: "Spanien", away: "Kap Verde", group: "H" },
    { id: 14, date: "15 juni", time: "21:00", home: "Belgien", away: "Egypten", group: "G" },
    { id: 15, date: "16 juni", time: "00:00", home: "Saudiarabien", away: "Uruguay", group: "H" },
    { id: 16, date: "16 juni", time: "03:00", home: "Iran", away: "Nya Zeeland", group: "G" },
    { id: 17, date: "16 juni", time: "21:00", home: "Frankrike", away: "Senegal", group: "I" },
    { id: 18, date: "17 juni", time: "00:00", home: "Irak", away: "Norge", group: "I" },
    { id: 19, date: "17 juni", time: "03:00", home: "Argentina", away: "Algeriet", group: "J" },
    { id: 20, date: "17 juni", time: "06:00", home: "Österrike", away: "Jordanien", group: "J" },
    { id: 21, date: "17 juni", time: "19:00", home: "Portugal", away: "DR Kongo", group: "K" },
    { id: 22, date: "17 juni", time: "22:00", home: "England", away: "Kroatien", group: "L" },
    { id: 23, date: "18 juni", time: "01:00", home: "Ghana", away: "Panama", group: "L" },
    { id: 24, date: "18 juni", time: "04:00", home: "Uzbekistan", away: "Colombia", group: "K" },
    { id: 25, date: "18 juni", time: "18:00", home: "Tjeckien", away: "Sydafrika", group: "A" },
    { id: 26, date: "18 juni", time: "21:00", home: "Schweiz", away: "Bosnien & Hercegovina", group: "B" },
    { id: 27, date: "19 juni", time: "00:00", home: "Kanada", away: "Qatar", group: "B" },
    { id: 28, date: "19 juni", time: "03:00", home: "Mexiko", away: "Sydkorea", group: "A" },
    { id: 29, date: "19 juni", time: "21:00", home: "USA", away: "Australien", group: "D" },
    { id: 30, date: "20 juni", time: "00:00", home: "Skottland", away: "Marocko", group: "C" },
    { id: 31, date: "20 juni", time: "03:00", home: "Brasilien", away: "Haiti", group: "C" },
    { id: 32, date: "20 juni", time: "06:00", home: "Turkiet", away: "Paraguay", group: "D" },
    { id: 33, date: "20 juni", time: "19:00", home: "Nederländerna", away: "Sverige", group: "F" },
    { id: 34, date: "20 juni", time: "22:00", home: "Tyskland", away: "Elfenbenskusten", group: "E" },
    { id: 35, date: "21 juni", time: "02:00", home: "Ecuador", away: "Curacao", group: "E" },
    { id: 36, date: "21 juni", time: "06:00", home: "Tunisien", away: "Japan", group: "F" },
    { id: 37, date: "21 juni", time: "18:00", home: "Spanien", away: "Saudiarabien", group: "H" },
    { id: 38, date: "21 juni", time: "21:00", home: "Belgien", away: "Iran", group: "G" },
    { id: 39, date: "22 juni", time: "00:00", home: "Uruguay", away: "Kap Verde", group: "H" },
    { id: 40, date: "22 juni", time: "03:00", home: "Nya Zeeland", away: "Egypten", group: "G" },
    { id: 41, date: "22 juni", time: "19:00", home: "Argentina", away: "Österrike", group: "J" },
    { id: 42, date: "22 juni", time: "23:00", home: "Frankrike", away: "Irak", group: "I" },
    { id: 43, date: "23 juni", time: "02:00", home: "Norge", away: "Senegal", group: "I" },
    { id: 44, date: "23 juni", time: "05:00", home: "Jordanien", away: "Algeriet", group: "J" },
    { id: 45, date: "23 juni", time: "19:00", home: "Portugal", away: "Uzbekistan", group: "K" },
    { id: 46, date: "23 juni", time: "22:00", home: "England", away: "Ghana", group: "L" },
    { id: 47, date: "24 juni", time: "01:00", home: "Panama", away: "Kroatien", group: "L" },
    { id: 48, date: "24 juni", time: "04:00", home: "Colombia", away: "DR Kongo", group: "K" },
    { id: 49, date: "24 juni", time: "21:00", home: "Schweiz", away: "Kanada", group: "B" },
    { id: 50, date: "24 juni", time: "21:00", home: "Bosnien & Hercegovina", away: "Qatar", group: "B" },
    { id: 51, date: "25 juni", time: "00:00", home: "Marocko", away: "Haiti", group: "C" },
    { id: 52, date: "25 juni", time: "00:00", home: "Skottland", away: "Brasilien", group: "C" },
    { id: 53, date: "25 juni", time: "03:00", home: "Sydafrika", away: "Sydkorea", group: "A" },
    { id: 54, date: "25 juni", time: "03:00", home: "Tjeckien", away: "Mexiko", group: "A" },
    { id: 55, date: "25 juni", time: "22:00", home: "Curacao", away: "Elfenbenskusten", group: "E" },
    { id: 56, date: "25 juni", time: "22:00", home: "Ecuador", away: "Tyskland", group: "E" },
    { id: 57, date: "26 juni", time: "01:00", home: "Tunisien", away: "Nederländerna", group: "F" },
    { id: 58, date: "26 juni", time: "01:00", home: "Japan", away: "Sverige", group: "F" },
    { id: 59, date: "26 juni", time: "04:00", home: "Turkiet", away: "USA", group: "D" },
    { id: 60, date: "26 juni", time: "04:00", home: "Paraguay", away: "Australien", group: "D" },
    { id: 61, date: "26 juni", time: "21:00", home: "Norge", away: "Frankrike", group: "I" },
    { id: 62, date: "26 juni", time: "21:00", home: "Senegal", away: "Irak", group: "I" },
    { id: 63, date: "27 juni", time: "02:00", home: "Kap Verde", away: "Saudiarabien", group: "H" },
    { id: 64, date: "27 juni", time: "02:00", home: "Uruguay", away: "Spanien", group: "H" },
    { id: 65, date: "27 juni", time: "05:00", home: "Nya Zeeland", away: "Belgien", group: "G" },
    { id: 66, date: "27 juni", time: "05:00", home: "Egypten", away: "Iran", group: "G" },
    { id: 67, date: "27 juni", time: "23:00", home: "Panama", away: "England", group: "L" },
    { id: 68, date: "27 juni", time: "23:00", home: "Kroatien", away: "Ghana", group: "L" },
    { id: 69, date: "28 juni", time: "01:30", home: "DR Kongo", away: "Uzbekistan", group: "K" },
    { id: 70, date: "28 juni", time: "01:30", home: "Colombia", away: "Portugal", group: "K" },
    { id: 71, date: "28 juni", time: "04:00", home: "Algeriet", away: "Österrike", group: "J" },
    { id: 72, date: "28 juni", time: "04:00", home: "Jordanien", away: "Argentina", group: "J" }
];

// ── Storage (localStorage placeholder, swap later) ──

const Storage = {
    _key(player) { return `wc26-tips-${player}`; },

    getPlayers() {
        return JSON.parse(localStorage.getItem('wc26-players') || '[]');
    },

    addPlayer(name) {
        const players = this.getPlayers();
        if (!players.includes(name)) {
            players.push(name);
            localStorage.setItem('wc26-players', JSON.stringify(players));
        }
    },

    load(player) {
        return JSON.parse(localStorage.getItem(this._key(player)) || '{"medals":{},"matches":{}}');
    },

    save(player, data) {
        localStorage.setItem(this._key(player), JSON.stringify(data));
    },

    getResults() {
        return JSON.parse(localStorage.getItem('wc26-results') || '{}');
    },

    getMedals() {
        return JSON.parse(localStorage.getItem('wc26-medals') || '{"gold":null,"silver":null,"bronze":null}');
    },

    loadAll() {
        const players = this.getPlayers();
        const all = {};
        players.forEach(p => { all[p] = this.load(p); });
        return all;
    }
};

// ── Date helpers ──

const monthMap = {
    'januari': 0, 'februari': 1, 'mars': 2, 'april': 3, 'maj': 4, 'juni': 5,
    'juli': 6, 'augusti': 7, 'september': 8, 'oktober': 9, 'november': 10, 'december': 11
};

function parseMatchDateTime(dateStr, timeStr) {
    const parts = dateStr.trim().split(' ');
    const day = parseInt(parts[0]);
    const month = monthMap[parts[1].toLowerCase()];
    const [hours, minutes] = timeStr.split(':').map(Number);
    return new Date(2026, month, day, hours, minutes, 0);
}

function isMatchLocked(match) {
    return new Date() >= parseMatchDateTime(match.date, match.time);
}

function isTournamentStarted() {
    return new Date() >= TOURNAMENT_START;
}

function formatDateShort(dateStr) {
    const parts = dateStr.trim().split(' ');
    const day = parts[0];
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    const month = monthMap[parts[1].toLowerCase()];
    return `${day} ${monthNames[month]}`;
}

// ── Scoring ──

function calcMatchPoints(predHome, predAway, actHome, actAway) {
    if (predHome == null || predAway == null || actHome == null || actAway == null) return null;
    if (predHome === actHome && predAway === actAway) return 2;
    const pOutcome = Math.sign(predHome - predAway);
    const aOutcome = Math.sign(actHome - actAway);
    return pOutcome === aOutcome ? 1 : 0;
}

function calcMedalPoints(predicted, actual) {
    let pts = 0;
    if (actual.gold && predicted.gold === actual.gold) pts += 5;
    if (actual.silver && predicted.silver === actual.silver) pts += 3;
    if (actual.bronze && predicted.bronze === actual.bronze) pts += 2;
    return pts;
}

function calcTotalPoints(playerData) {
    const results = Storage.getResults();
    const medals = Storage.getMedals();
    let matchPts = 0;
    for (const [matchId, pred] of Object.entries(playerData.matches || {})) {
        const result = results[matchId];
        if (result) {
            const pts = calcMatchPoints(pred.home, pred.away, result.home, result.away);
            if (pts !== null) matchPts += pts;
        }
    }
    const medalPts = calcMedalPoints(playerData.medals || {}, medals);
    return { matchPts, medalPts, total: matchPts + medalPts };
}

// ── UI State ──

let currentPlayer = null;
let currentTab = 'medals';
let matchSort = 'date';

// ── Flag helper ──

function flagUrl(teamName) {
    const code = teamToCode[teamName];
    return code ? `flags/${code}.png` : '';
}

// ── Rendering ──

function renderPlayerTabs() {
    const container = document.getElementById('playerTabs');
    const players = Storage.getPlayers();
    container.innerHTML = '';

    players.forEach(name => {
        const btn = document.createElement('button');
        btn.className = 'player-tab' + (name === currentPlayer ? ' active' : '');
        const data = Storage.load(name);
        const pts = calcTotalPoints(data);
        btn.innerHTML = `${name}<span class="points-badge">${pts.total}p</span>`;
        btn.addEventListener('click', () => {
            currentPlayer = name;
            renderPlayerTabs();
            renderContent();
        });
        container.appendChild(btn);
    });
}

function renderContent() {
    const main = document.getElementById('mainContent');

    if (!currentPlayer) {
        main.innerHTML = '<div class="no-player-message"><p>Lägg till en spelare för att börja tippa!</p></div>';
        return;
    }

    switch (currentTab) {
        case 'medals': renderMedals(main); break;
        case 'matches': renderMatches(main); break;
        case 'leaderboard': renderLeaderboard(main); break;
    }
}

// ── Medal tab ──

function renderMedals(container) {
    const data = Storage.load(currentPlayer);
    const locked = isTournamentStarted();

    const medals = [
        { key: 'gold', icon: '🥇', label: 'Guld', pts: 5 },
        { key: 'silver', icon: '🥈', label: 'Silver', pts: 3 },
        { key: 'bronze', icon: '🥉', label: 'Brons', pts: 2 }
    ];

    let html = `<div class="medal-section">
        <h2>Medaljerna</h2>
        <p class="medal-lock-info ${locked ? 'locked' : ''}">
            ${locked ? 'Tipset är låst sedan turneringen startade.' : 'Tippa vinnare, tvåa och trea. Låses när turneringen startar (11 juni 21:00).'}
        </p>`;

    const allData = Storage.loadAll();
    const players = Storage.getPlayers();

    medals.forEach(m => {
        const selected = (data.medals && data.medals[m.key]) || '';

        const otherTips = players.map(name => {
            const pick = (allData[name].medals && allData[name].medals[m.key]) || null;
            if (!pick) return null;
            const isCurrent = name === currentPlayer;
            return `<span class="others-tip${isCurrent ? ' is-current' : ''}">${name}: ${pick}</span>`;
        }).filter(Boolean);

        html += `<div class="medal-row">
            <span class="medal-icon">${m.icon}</span>
            <div>
                <div class="medal-label">${m.label}</div>
                <div class="medal-points">${m.pts} poäng</div>
            </div>
            <div class="medal-select-wrapper">
                <select class="medal-select" data-medal="${m.key}" ${locked ? 'disabled' : ''}>
                    <option value="">Välj lag...</option>
                    ${allTeams.map(t => `<option value="${t}" ${t === selected ? 'selected' : ''}>${t}</option>`).join('')}
                </select>
            </div>
        </div>
        ${otherTips.length > 0 ? `<div class="others-tips-row medal-tips">${otherTips.join('')}</div>` : ''}`;
    });

    const actualMedals = Storage.getMedals();
    if (actualMedals.gold) {
        const pts = calcMedalPoints(data.medals || {}, actualMedals);
        html += `<div class="match-result-row" style="margin-top:12px;padding:12px;background:#fafafa;border-radius:8px;">
            <span>Facit: 🥇 ${actualMedals.gold} 🥈 ${actualMedals.silver} 🥉 ${actualMedals.bronze}</span>
            <span class="match-points-badge">${pts}p</span>
        </div>`;
    }

    html += `</div>`;
    container.innerHTML = html;

    container.querySelectorAll('.medal-select').forEach(sel => {
        sel.addEventListener('change', () => {
            const d = Storage.load(currentPlayer);
            if (!d.medals) d.medals = {};
            d.medals[sel.dataset.medal] = sel.value || null;
            Storage.save(currentPlayer, d);
            renderPlayerTabs();
        });
    });
}

// ── Matches tab ──

function renderOthersTips(match, allData, result) {
    const players = Storage.getPlayers();
    const tips = players.map(name => {
        const p = (allData[name].matches && allData[name].matches[match.id]) || {};
        if (p.home == null && p.away == null) return null;
        const tipStr = `${p.home ?? '?'}–${p.away ?? '?'}`;
        let pts = '';
        if (result) {
            const score = calcMatchPoints(p.home, p.away, result.home, result.away);
            if (score !== null) pts = ` (${score}p)`;
        }
        const isCurrent = name === currentPlayer;
        return `<span class="others-tip${isCurrent ? ' is-current' : ''}">${name}: ${tipStr}${pts}</span>`;
    }).filter(Boolean);

    if (tips.length === 0) return '';
    return `<div class="others-tips-row">${tips.join('')}</div>`;
}

function renderMatchCard(match, pred, result, locked, allData) {
    const pts = result ? calcMatchPoints(pred.home, pred.away, result.home, result.away) : null;
    return `<div class="match-card ${locked ? 'locked' : ''}">
        <div class="match-meta">
            <span>${formatDateShort(match.date)} ${match.time}${matchSort === 'date' ? ` — Gr. ${match.group}` : ''}</span>
            <span>
                ${pts !== null ? `<span class="match-points-badge">${pts}p</span>` : ''}
                <span class="match-lock-badge ${locked ? 'is-locked' : ''}">${locked ? 'Låst' : 'Öppen'}</span>
            </span>
        </div>
        <div class="match-row">
            <div class="match-team home">
                <span class="team-name">${match.home}</span>
                <img class="team-flag" src="${flagUrl(match.home)}" alt="${match.home}">
            </div>
            <div class="score-inputs">
                <input type="number" class="score-input" min="0" max="20"
                    data-match="${match.id}" data-side="home"
                    value="${pred.home != null ? pred.home : ''}"
                    ${locked ? 'disabled' : ''}>
                <span class="score-separator">–</span>
                <input type="number" class="score-input" min="0" max="20"
                    data-match="${match.id}" data-side="away"
                    value="${pred.away != null ? pred.away : ''}"
                    ${locked ? 'disabled' : ''}>
            </div>
            <div class="match-team away">
                <img class="team-flag" src="${flagUrl(match.away)}" alt="${match.away}">
                <span class="team-name">${match.away}</span>
            </div>
        </div>
        ${result ? `<div class="match-result-row">
            Slutresultat: <span class="actual-result">${result.home} – ${result.away}</span>
        </div>` : ''}
        ${renderOthersTips(match, allData, result)}
    </div>`;
}

function renderMatches(container) {
    const data = Storage.load(currentPlayer);
    const allResults = Storage.getResults();
    const allData = Storage.loadAll();

    let html = `<div class="sort-toggle">
        <button class="sort-btn ${matchSort === 'group' ? 'active' : ''}" data-sort="group">Grupper</button>
        <button class="sort-btn ${matchSort === 'date' ? 'active' : ''}" data-sort="date">Datum</button>
    </div>`;

    if (matchSort === 'group') {
        const groups = {};
        schedule.forEach(m => {
            if (!groups[m.group]) groups[m.group] = [];
            groups[m.group].push(m);
        });

        Object.keys(groups).sort().forEach(groupKey => {
            html += `<div class="group-section"><div class="group-header">Grupp ${groupKey}</div>`;
            groups[groupKey].forEach(match => {
                const pred = (data.matches && data.matches[match.id]) || {};
                html += renderMatchCard(match, pred, allResults[match.id], isMatchLocked(match), allData);
            });
            html += `</div>`;
        });
    } else {
        const sorted = [...schedule].sort((a, b) =>
            parseMatchDateTime(a.date, a.time) - parseMatchDateTime(b.date, b.time)
        );
        let currentDate = '';
        sorted.forEach(match => {
            const dateLabel = formatDateShort(match.date);
            if (dateLabel !== currentDate) {
                if (currentDate) html += `</div>`;
                currentDate = dateLabel;
                html += `<div class="group-section"><div class="group-header">${match.date}</div>`;
            }
            const pred = (data.matches && data.matches[match.id]) || {};
            html += renderMatchCard(match, pred, allResults[match.id], isMatchLocked(match), allData);
        });
        if (currentDate) html += `</div>`;
    }

    container.innerHTML = html;

    container.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            matchSort = btn.dataset.sort;
            renderMatches(container);
        });
    });

    container.querySelectorAll('.score-input').forEach(input => {
        input.addEventListener('change', () => {
            const d = Storage.load(currentPlayer);
            if (!d.matches) d.matches = {};
            const matchId = input.dataset.match;
            if (!d.matches[matchId]) d.matches[matchId] = {};
            const val = input.value === '' ? null : parseInt(input.value);
            d.matches[matchId][input.dataset.side] = val;
            Storage.save(currentPlayer, d);
            renderPlayerTabs();
        });
    });
}

// ── Leaderboard tab ──

function renderLeaderboard(container) {
    const players = Storage.getPlayers();
    if (players.length === 0) {
        container.innerHTML = `<div class="leaderboard"><div class="leaderboard-empty">Inga spelare tillagda ännu.</div></div>`;
        return;
    }

    const rows = players.map(name => {
        const data = Storage.load(name);
        const pts = calcTotalPoints(data);
        return { name, ...pts };
    }).sort((a, b) => b.total - a.total);

    let html = `<div class="leaderboard">
        <div class="leaderboard-header">
            <span>#</span>
            <span>Spelare</span>
            <span style="text-align:center">Matcher</span>
            <span style="text-align:center">Medaljer</span>
            <span style="text-align:center">Totalt</span>
        </div>`;

    rows.forEach((row, i) => {
        html += `<div class="leaderboard-row">
            <span class="leaderboard-rank">${i + 1}</span>
            <span class="leaderboard-name">${row.name}</span>
            <span class="leaderboard-pts">${row.matchPts}</span>
            <span class="leaderboard-pts">${row.medalPts}</span>
            <span class="leaderboard-total">${row.total}</span>
        </div>`;
    });

    html += `</div>`;
    container.innerHTML = html;
}

// ── Event wiring ──

function init() {
    // Wire up all event handlers first
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.tab;
            renderContent();
        });
    });

    const addBtn = document.getElementById('btnAddPlayer');
    const addForm = document.getElementById('addPlayerForm');
    const nameInput = document.getElementById('newPlayerName');
    const confirmBtn = document.getElementById('btnConfirmPlayer');
    const cancelBtn = document.getElementById('btnCancelPlayer');

    addBtn.addEventListener('click', () => {
        addForm.classList.toggle('hidden');
        if (!addForm.classList.contains('hidden')) nameInput.focus();
    });

    cancelBtn.addEventListener('click', () => {
        addForm.classList.add('hidden');
        nameInput.value = '';
    });

    function addPlayer() {
        const name = nameInput.value.trim();
        if (!name) return;
        Storage.addPlayer(name);
        currentPlayer = name;
        nameInput.value = '';
        addForm.classList.add('hidden');
        renderPlayerTabs();
        renderContent();
    }

    confirmBtn.addEventListener('click', addPlayer);
    nameInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') addPlayer();
    });

    // Then do initial render
    const players = Storage.getPlayers();
    if (players.length > 0) {
        currentPlayer = players[0];
    }

    renderPlayerTabs();
    renderContent();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
