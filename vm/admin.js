const ADMIN_PASSWORD = 'vm2026admin';

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

function flagUrl(teamName) {
    const code = teamToCode[teamName];
    return code ? `flags/${code}.png` : '';
}

// ── State ──

let currentTab = 'results';
let pendingResults = {};
let pendingMedals = { gold: null, silver: null, bronze: null };

function loadSavedData() {
    pendingResults = JSON.parse(localStorage.getItem('wc26-results') || '{}');
    pendingMedals = JSON.parse(localStorage.getItem('wc26-medals') || '{"gold":null,"silver":null,"bronze":null}');
}

// ── Login ──

function initLogin() {
    const loginScreen = document.getElementById('loginScreen');
    const adminContent = document.getElementById('adminContent');
    const passwordInput = document.getElementById('passwordInput');
    const loginBtn = document.getElementById('loginBtn');
    const loginError = document.getElementById('loginError');
    const logoutBtn = document.getElementById('logoutBtn');

    if (sessionStorage.getItem('wc26-admin-auth') === 'true') {
        loginScreen.classList.add('hidden');
        adminContent.classList.remove('hidden');
        loadSavedData();
        renderContent();
    }

    function doLogin() {
        if (passwordInput.value === ADMIN_PASSWORD) {
            sessionStorage.setItem('wc26-admin-auth', 'true');
            loginScreen.classList.add('hidden');
            adminContent.classList.remove('hidden');
            loginError.classList.add('hidden');
            loadSavedData();
            renderContent();
        } else {
            loginError.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    loginBtn.addEventListener('click', doLogin);
    passwordInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') doLogin();
    });

    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('wc26-admin-auth');
        adminContent.classList.add('hidden');
        loginScreen.classList.remove('hidden');
        passwordInput.value = '';
        passwordInput.focus();
    });
}

// ── Rendering ──

function renderContent() {
    const main = document.getElementById('mainContent');
    if (currentTab === 'results') {
        renderResults(main);
    } else {
        renderMedals(main);
    }
}

function renderResults(container) {
    const groups = {};
    schedule.forEach(m => {
        if (!groups[m.group]) groups[m.group] = [];
        groups[m.group].push(m);
    });

    let html = '';
    Object.keys(groups).sort().forEach(groupKey => {
        html += `<div class="group-section">
            <div class="group-header">Grupp ${groupKey}</div>`;

        groups[groupKey].forEach(match => {
            const result = pendingResults[match.id];
            const hasResult = result && result.home != null && result.away != null;

            html += `<div class="result-card ${hasResult ? 'has-result' : ''}">
                <div class="result-meta">${match.date} ${match.time}</div>
                <div class="result-row">
                    <div class="result-team home">
                        <span class="team-name">${match.home}</span>
                        <img class="team-flag" src="${flagUrl(match.home)}" alt="${match.home}">
                    </div>
                    <div class="result-inputs">
                        <input type="number" class="result-input" min="0" max="20"
                            data-match="${match.id}" data-side="home"
                            value="${hasResult ? result.home : ''}">
                        <span class="result-separator">–</span>
                        <input type="number" class="result-input" min="0" max="20"
                            data-match="${match.id}" data-side="away"
                            value="${hasResult ? result.away : ''}">
                    </div>
                    <div class="result-team away">
                        <img class="team-flag" src="${flagUrl(match.away)}" alt="${match.away}">
                        <span class="team-name">${match.away}</span>
                    </div>
                </div>
            </div>`;
        });

        html += `</div>`;
    });

    container.innerHTML = html;

    container.querySelectorAll('.result-input').forEach(input => {
        input.addEventListener('input', () => {
            const matchId = input.dataset.match;
            if (!pendingResults[matchId]) pendingResults[matchId] = {};
            const val = input.value === '' ? null : parseInt(input.value);
            pendingResults[matchId][input.dataset.side] = val;
        });
    });
}

function renderMedals(container) {
    const medals = [
        { key: 'gold', icon: '🥇', label: 'Guld (5p)' },
        { key: 'silver', icon: '🥈', label: 'Silver (3p)' },
        { key: 'bronze', icon: '🥉', label: 'Brons (2p)' }
    ];

    let html = `<div class="medal-section"><h2>Medaljvinnare</h2>`;

    medals.forEach(m => {
        const selected = pendingMedals[m.key] || '';
        html += `<div class="medal-row">
            <span class="medal-icon">${m.icon}</span>
            <span class="medal-label">${m.label}</span>
            <select class="medal-select" data-medal="${m.key}">
                <option value="">Ej satt</option>
                ${allTeams.map(t => `<option value="${t}" ${t === selected ? 'selected' : ''}>${t}</option>`).join('')}
            </select>
        </div>`;
    });

    html += `</div>`;
    container.innerHTML = html;

    container.querySelectorAll('.medal-select').forEach(sel => {
        sel.addEventListener('change', () => {
            pendingMedals[sel.dataset.medal] = sel.value || null;
        });
    });
}

// ── Save ──

function initSave() {
    const saveBtn = document.getElementById('saveBtn');
    const saveStatus = document.getElementById('saveStatus');

    saveBtn.addEventListener('click', () => {
        const cleanResults = {};
        for (const [id, r] of Object.entries(pendingResults)) {
            if (r.home != null && r.away != null) {
                cleanResults[id] = { home: r.home, away: r.away };
            }
        }

        localStorage.setItem('wc26-results', JSON.stringify(cleanResults));
        localStorage.setItem('wc26-medals', JSON.stringify(pendingMedals));

        saveStatus.textContent = 'Sparat!';
        setTimeout(() => { saveStatus.textContent = ''; }, 2000);
    });
}

// ── Init ──

function init() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.tab;
            renderContent();
        });
    });

    initLogin();
    initSave();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
