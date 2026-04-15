// ── Supabase ──

const SUPABASE_URL = 'https://jnmbhzibjtnskpveciza.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpubWJoemlianRuc2twdmVjaXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNDIzMDIsImV4cCI6MjA5MTgxODMwMn0.5etgrvlR_A-MTF8mw-bsU68e0V-U-FvTV22Ns0Tx7F4';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

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

function formatDateShort(dateStr) {
    const parts = dateStr.trim().split(' ');
    const day = parts[0];
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    const month = monthMap[parts[1].toLowerCase()];
    return `${day} ${monthNames[month]}`;
}

// ── State ──

let currentTab = 'results';
let matchSort = 'date';
let pendingResults = {};
let pendingMedals = { gold: null, silver: null, bronze: null };
let unlockedMatches = new Set();

async function loadSavedData() {
    const { data: results } = await sb.from('match_results').select('*');
    pendingResults = {};
    (results || []).forEach(r => {
        pendingResults[r.match_id] = { home: r.home_score, away: r.away_score };
    });

    const { data: medals } = await sb
        .from('medal_results').select('gold, silver, bronze').eq('id', 1).single();
    pendingMedals = medals || { gold: null, silver: null, bronze: null };
}

async function saveResults() {
    const cleanResults = {};
    for (const [id, r] of Object.entries(pendingResults)) {
        if (r.home != null && r.away != null) {
            cleanResults[id] = { home: r.home, away: r.away };
        }
    }

    for (const [matchId, r] of Object.entries(cleanResults)) {
        await sb.from('match_results').upsert({
            match_id: parseInt(matchId),
            home_score: r.home,
            away_score: r.away
        }, { onConflict: 'match_id' });
    }

    pendingResults = cleanResults;
}

async function saveMedals() {
    const { data: existing } = await sb
        .from('medal_results').select('id').eq('id', 1).single();

    if (existing) {
        await sb.from('medal_results').update({
            gold: pendingMedals.gold,
            silver: pendingMedals.silver,
            bronze: pendingMedals.bronze
        }).eq('id', 1);
    } else {
        await sb.from('medal_results').insert({
            id: 1,
            gold: pendingMedals.gold,
            silver: pendingMedals.silver,
            bronze: pendingMedals.bronze
        });
    }
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
        loadSavedData().then(() => renderContent());
    }

    function doLogin() {
        if (passwordInput.value === ADMIN_PASSWORD) {
            sessionStorage.setItem('wc26-admin-auth', 'true');
            loginScreen.classList.add('hidden');
            adminContent.classList.remove('hidden');
            loginError.classList.add('hidden');
            loadSavedData().then(() => renderContent());
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

async function getPlayers() {
    const { data } = await sb.from('players').select('name').order('id');
    return (data || []).map(p => p.name);
}

async function addPlayer(name) {
    await sb.from('players').insert({ name });
}

async function removePlayer(name) {
    await sb.from('players').delete().eq('name', name);
}

async function renamePlayer(oldName, newName) {
    const players = await getPlayers();
    if (players.includes(newName)) return false;
    if (!players.includes(oldName)) return false;

    const { data: player } = await sb
        .from('players').select('id').eq('name', oldName).single();
    if (!player) return false;

    await sb.from('players').update({ name: newName }).eq('id', player.id);
    return true;
}

async function renderPlayers(container) {
    const players = await getPlayers();

    let html = `<div class="players-section">
        <h2>Spelare</h2>
        <div class="add-player-row">
            <input type="text" id="adminNewPlayer" placeholder="Namn..." maxlength="20">
            <button class="btn-add-player" id="adminAddPlayer">Lägg till</button>
        </div>
        <div class="player-list">`;

    if (players.length === 0) {
        html += `<div class="player-list-empty">Inga spelare tillagda.</div>`;
    } else {
        players.forEach(name => {
            html += `<div class="player-item" data-player="${name}">
                <span class="player-name">${name}</span>
                <div class="player-actions">
                    <button class="btn-rename-player" data-player="${name}" title="Byt namn">Byt namn</button>
                    <button class="btn-remove-player" data-player="${name}" title="Ta bort">Ta bort</button>
                </div>
            </div>`;
        });
    }

    html += `</div></div>`;
    container.innerHTML = html;

    const input = document.getElementById('adminNewPlayer');
    const addBtn = document.getElementById('adminAddPlayer');

    async function doAdd() {
        const name = input.value.trim();
        if (!name) return;
        await addPlayer(name);
        await renderPlayers(container);
    }

    addBtn.addEventListener('click', doAdd);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') doAdd(); });

    container.querySelectorAll('.btn-rename-player').forEach(btn => {
        btn.addEventListener('click', () => {
            const oldName = btn.dataset.player;
            const item = btn.closest('.player-item');
            item.innerHTML = `<input type="text" class="rename-input" value="${oldName}" maxlength="20">
                <div class="player-actions">
                    <button class="btn-rename-save">Spara</button>
                    <button class="btn-rename-cancel">Avbryt</button>
                </div>`;

            const renameInput = item.querySelector('.rename-input');
            renameInput.focus();
            renameInput.select();

            async function doRename() {
                const newName = renameInput.value.trim();
                if (!newName || newName === oldName) { await renderPlayers(container); return; }
                const success = await renamePlayer(oldName, newName);
                if (!success) {
                    alert('Namnet finns redan.');
                    renameInput.focus();
                    return;
                }
                await renderPlayers(container);
            }

            item.querySelector('.btn-rename-save').addEventListener('click', doRename);
            renameInput.addEventListener('keydown', async e => {
                if (e.key === 'Enter') await doRename();
                if (e.key === 'Escape') await renderPlayers(container);
            });
            item.querySelector('.btn-rename-cancel').addEventListener('click', async () => await renderPlayers(container));
        });
    });

    container.querySelectorAll('.btn-remove-player').forEach(btn => {
        btn.addEventListener('click', async () => {
            if (confirm(`Ta bort ${btn.dataset.player}?`)) {
                await removePlayer(btn.dataset.player);
                await renderPlayers(container);
            }
        });
    });
}

async function renderContent() {
    const main = document.getElementById('mainContent');
    if (currentTab === 'results') renderResults(main);
    else if (currentTab === 'medals') renderMedals(main);
    else if (currentTab === 'players') await renderPlayers(main);
}

function renderResultCard(match) {
    const result = pendingResults[match.id];
    const hasResult = result && result.home != null && result.away != null;
    const isLocked = hasResult && !unlockedMatches.has(match.id);

    return `<div class="result-card ${hasResult ? 'has-result' : ''} ${isLocked ? 'is-locked' : ''}">
        <div class="result-meta">${match.date} ${match.time}${matchSort === 'date' ? ` — Gr. ${match.group}` : ''}</div>
        <div class="result-row">
            <div class="result-team home">
                <span class="team-name">${match.home}</span>
                <img class="team-flag" src="${flagUrl(match.home)}" alt="${match.home}">
            </div>
            <div class="result-inputs">
                <input type="number" class="result-input" min="0" max="20"
                    data-match="${match.id}" data-side="home"
                    value="${hasResult ? result.home : ''}"
                    ${isLocked ? 'disabled' : ''}>
                <span class="result-separator">–</span>
                <input type="number" class="result-input" min="0" max="20"
                    data-match="${match.id}" data-side="away"
                    value="${hasResult ? result.away : ''}"
                    ${isLocked ? 'disabled' : ''}>
            </div>
            <div class="result-team away">
                <img class="team-flag" src="${flagUrl(match.away)}" alt="${match.away}">
                <span class="team-name">${match.away}</span>
            </div>
            ${isLocked ? `<button class="btn-unlock" data-match="${match.id}" title="Lås upp för att ändra">Ändra</button>` : ''}
        </div>
    </div>`;
}

function renderResults(container) {
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
            groups[groupKey].forEach(match => { html += renderResultCard(match); });
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
            html += renderResultCard(match);
        });
        if (currentDate) html += `</div>`;
    }

    container.innerHTML = html;

    container.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            matchSort = btn.dataset.sort;
            renderResults(container);
        });
    });

    container.querySelectorAll('.result-input').forEach(input => {
        input.addEventListener('input', () => {
            const matchId = input.dataset.match;
            if (!pendingResults[matchId]) pendingResults[matchId] = {};
            const val = input.value === '' ? null : parseInt(input.value);
            pendingResults[matchId][input.dataset.side] = val;
        });
    });

    container.querySelectorAll('.btn-unlock').forEach(btn => {
        btn.addEventListener('click', () => {
            unlockedMatches.add(parseInt(btn.dataset.match));
            renderResults(container);
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

    saveBtn.addEventListener('click', async () => {
        saveBtn.disabled = true;
        saveStatus.textContent = 'Sparar...';

        try {
            await saveResults();
            await saveMedals();
            unlockedMatches.clear();
            saveStatus.textContent = 'Sparat!';
            setTimeout(() => { saveStatus.textContent = ''; }, 2000);
            renderContent();
        } catch (err) {
            saveStatus.textContent = 'Fel vid sparning!';
            console.error(err);
        } finally {
            saveBtn.disabled = false;
        }
    });
}

// ── Init ──

function init() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.tab;
            await renderContent();
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
