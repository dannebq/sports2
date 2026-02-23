// Biathlon World Cup Schedule 2025/2026
const biathlonSchedule = [
    {
        dates: "29 november–7 december 2025",
        location: "Östersund, Sverige",
        events: [
            { 
                date: "29 november", 
                races: [
                    { name: "Stafett 4x6 km, damer", tv: "13:15-14:35, SVT1/SVT Play" },
                    { name: "Stafett 4x7,5 km, herrar", tv: "16:55-18:15, SVT1/SVT Play" }
                ]
            },
            { 
                date: "30 november", 
                races: [
                    { name: "Singelmixedstafett", tv: "14:00-14:45, SVT1/SVT Play" },
                    { name: "Mixedstafett", tv: "16:40-17:50, SVT1/SVT Play" }
                ]
            },
            { 
                date: "2 december", 
                races: [
                    { name: "Distans 15 km, damer", tv: "15:20-17:20, SVT1/SVT Play" }
                ]
            },
            { 
                date: "3 december", 
                races: [
                    { name: "Distans 20 km, herrar", tv: "15:20-17:20, SVT1/SVT Play" }
                ]
            },
            { 
                date: "5 december", 
                races: [
                    { name: "Sprint 7,5 km, damer", tv: "15:50-17:25, SVT1/SVT Play" }
                ]
            },
            { 
                date: "6 december", 
                races: [
                    { name: "Sprint 10 km, herrar", tv: "16:30-17:50, SVT1/SVT Play" }
                ]
            },
            { 
                date: "7 december", 
                races: [
                    { name: "Jaktstart 10 km, damer", tv: "13:15-14:00, SVT1/SVT Play" },
                    { name: "Jaktstart 12,5 km, herrar", tv: "15:15-16:00, SVT1/SVT Play" }
                ]
            }
        ]
    },
    {
        dates: "12–14 december 2025",
        location: "Hochfilzen, Österrike",
        events: [
            { 
                date: "12 december", 
                races: [
                    { name: "Sprint 10 km, herrar", tv: "11:15-12:55, SVT1/SVT Play" },
                    { name: "Sprint 7,5 km, damer", tv: "14:05-15:45, SVT1/SVT Play" }
                ]
            },
            { 
                date: "13 december", 
                races: [
                    { name: "Jaktstart 12,5 km, herrar", tv: "12:00-12:45, SVT1/SVT Play" },
                    { name: "Stafett 4x6 km, damer", tv: "14:15-15:35, SVT1/SVT Play" }
                ]
            },
            { 
                date: "14 december", 
                races: [
                    { name: "Stafett 4x7,5 km, herrar", tv: "12:00-13:20, SVT1/SVT Play" },
                    { name: "Jaktstart 10 km, damer", tv: "14:45-15:30, SVT1/SVT Play" }
                ]
            }
        ]
    },
    {
        dates: "18–21 december 2025",
        location: "Annecy-Le Grand Bornand, Frankrike",
        events: [
            { 
                date: "18 december", 
                races: [
                    { name: "Sprint 7,5 km, damer", tv: "14:05-15:45, SVT1/SVT Play" }
                ]
            },
            { 
                date: "19 december", 
                races: [
                    { name: "Sprint 10 km, herrar", tv: "14:05-15:40, SVT1/SVT Play" }
                ]
            },
            { 
                date: "20 december", 
                races: [
                    { name: "Jaktstart 10 km, damer", tv: "12:15-13:00, SVT1/SVT Play" },
                    { name: "Jaktstart 12,5 km, herrar", tv: "14:45-15:30, SVT1/SVT Play" }
                ]
            },
            { 
                date: "21 december", 
                races: [
                    { name: "Masstart 12,5 km, damer", tv: "12:15-13:00, SVT1/SVT Play" },
                    { name: "Masstart 15 km, herrar", tv: "14:45-15:30, SVT1/SVT Play" }
                ]
            }
        ]
    },
    {
        dates: "8–11 januari 2026",
        location: "Oberhof, Tyskland",
        events: [
            { 
                date: "8 januari", 
                races: [
                    { name: "Sprint 10 km, herrar", tv: "11:20, SVT1/SVT Play" },
                    { name: "Sprint 7,5 km, damer", tv: "14:05, SVT1/SVT Play" }
                ]
            },
            { 
                date: "10 januari", 
                races: [
                    { name: "Jaktstart 12,5 km, herrar", tv: "12:00, SVT/SVT Play" },
                    { name: "Stafett 4×6 km, damer", tv: "14:25, SVT/SVT Play" }
                ]
            },
            { 
                date: "11 januari", 
                races: [
                    { name: "Stafett 4×7,5 km, herrar", tv: "11:00, SVT/SVT Play" },
                    { name: "Jaktstart 10 km, damer", tv: "14:30, SVT/SVT Play" }
                ]
            }
        ]
    },
    {
        dates: "14–18 januari 2026",
        location: "Ruhpolding, Tyskland",
        events: [
            { 
                date: "14 januari", 
                races: [
                    { name: "Stafett 4×6 km, damer", tv: "14:30, SVT/SVT Play" }
                ]
            },
            { 
                date: "15 januari", 
                races: [
                    { name: "Stafett 4×7,5 km, herrar", tv: "14:30, SVT/SVT Play" }
                ]
            },
            { 
                date: "16 januari", 
                races: [
                    { name: "Sprint 7,5 km, damer", tv: "14:30, SVT/SVT Play" }
                ]
            },
            { 
                date: "17 januari", 
                races: [
                    { name: "Sprint 10 km, herrar", tv: "14:30, SVT/SVT Play" }
                ]
            },
            { 
                date: "18 januari", 
                races: [
                    { name: "Jaktstart 10 km, damer", tv: "12:30, SVT/SVT Play" },
                    { name: "Jaktstart 12,5 km, herrar", tv: "15:00, SVT/SVT Play" }
                ]
            }
        ]
    },
    {
        dates: "22–25 januari 2026",
        location: "Nove Mesto, Tjeckien",
        events: [
            { 
                date: "22 januari", 
                races: [
                    { name: "Distans 15 km, herrar", tv: "18:15, SVT/SVT Play" }
                ]
            },
            { 
                date: "23 januari", 
                races: [
                    { name: "Distans 12,5 km, damer", tv: "18:15, SVT/SVT Play" }
                ]
            },
            { 
                date: "24 januari", 
                races: [
                    { name: "Singelmixedstafett", tv: "13:15, SVT/SVT Play" },
                    { name: "Mixedstafett", tv: "15:15, SVT/SVT Play" }
                ]
            },
            { 
                date: "25 januari", 
                races: [
                    { name: "Masstart 15 km, herrar", tv: "15:15, SVT/SVT Play" },
                    { name: "Masstart 12,5 km, damer", tv: "18:15, SVT/SVT Play" }
                ]
            }
        ]
    },
    {
        dates: "5–8 mars 2026",
        location: "Kontiolahti, Finland",
        events: [
            { 
                date: "5 mars", 
                races: [
                    { name: "Distans 15 km, damer", tv: "17:05, SVT/SVT Play" }
                ]
            },
            { 
                date: "6 mars", 
                races: [
                    { name: "Distans 20 km, herrar", tv: "17:10, SVT/SVT Play" }
                ]
            },
            { 
                date: "7 mars", 
                races: [
                    { name: "Masstart 12,5 km, damer", tv: "13:40, SVT/SVT Play" },
                    { name: "Stafett 4×7,5 km, herrar", tv: "15:40, SVT/SVT Play" }
                ]
            },
            { 
                date: "8 mars", 
                races: [
                    { name: "Stafett 4×6 km, damer", tv: "13:30, SVT/SVT Play" },
                    { name: "Masstart 15 km, herrar", tv: "16:55, SVT/SVT Play" }
                ]
            }
        ]
    },
    {
        dates: "12–15 mars 2026",
        location: "Otepää, Estland",
        events: [
            { 
                date: "12 mars", 
                races: [
                    { name: "Sprint 10 km, herrar", tv: "15:15, SVT/SVT Play" }
                ]
            },
            { 
                date: "13 mars", 
                races: [
                    { name: "Sprint 7,5 km, damer", tv: "15:15, SVT/SVT Play" }
                ]
            },
            { 
                date: "14 mars", 
                races: [
                    { name: "Jaktstart 12,5 km, herrar", tv: "13:30, SVT/SVT Play" },
                    { name: "Jaktstart 10 km, damer", tv: "16:00, SVT/SVT Play" }
                ]
            },
            { 
                date: "15 mars", 
                races: [
                    { name: "Singelmixedstafett", tv: "12:35, SVT/SVT Play" },
                    { name: "Mixedstafett", tv: "14:40, SVT/SVT Play" }
                ]
            }
        ]
    },
    {
        dates: "19–22 mars 2026",
        location: "Oslo, Norge",
        events: [
            { 
                date: "19 mars", 
                races: [
                    { name: "Sprint 7,5 km, damer", tv: "16:15" }
                ]
            },
            { 
                date: "20 mars", 
                races: [
                    { name: "Sprint 10 km, herrar", tv: "16:15" }
                ]
            },
            { 
                date: "21 mars", 
                races: [
                    { name: "Jaktstart 10 km, damer", tv: "13:45" },
                    { name: "Jaktstart 12,5 km, herrar", tv: "16:15" }
                ]
            },
            { 
                date: "22 mars", 
                races: [
                    { name: "Masstart 12,5 km, damer", tv: "13:45" },
                    { name: "Masstart 15 km, herrar", tv: "16:45" }
                ]
            }
        ]
    }
];

// Cross Country Skiing World Cup 2025/2026
const crossCountrySchedule = [
    { date: "2025-11-28", location: "Ruka", time: "10.30", event: "10 km, klassisk stil, intervallstart, damer" },
    { date: "2025-11-28", location: "Ruka", time: "13.15", event: "10 km, klassisk stil, intervallstart, herrar" },
    { date: "2025-11-29", location: "Ruka", time: "08.55", event: "Sprint, klassisk stil, kval, herrar och damer" },
    { date: "2025-11-29", location: "Ruka", time: "11.25", event: "Sprint, klassisk stil, finalpass, herrar och damer" },
    { date: "2025-11-30", location: "Ruka", time: "10.00", event: "20 km, fristil, masstart, herrar" },
    { date: "2025-11-30", location: "Ruka", time: "11.45", event: "20 km, fristil, masstart, damer" },
    { date: "2025-12-05", location: "Trondheim", time: "09.45", event: "Sprint, klassisk stil, kval" },
    { date: "2025-12-05", location: "Trondheim", time: "12.15", event: "Sprint, klassisk stil, final" },
    { date: "2025-12-06", location: "Trondheim", time: "11.10", event: "Skiathlon, 20 km, herrar" },
    { date: "2025-12-06", location: "Trondheim", time: "13.00", event: "Skiathlon, 20 km, damer" },
    { date: "2025-12-07", location: "Trondheim", time: "09.30", event: "10 km, fristil, damer" },
    { date: "2025-12-07", location: "Trondheim", time: "11.55", event: "10 km, fristil, herrar" },
    { date: "2025-12-12", location: "Davos", time: "15.00", event: "Lagsprint, fristil, kval" },
    { date: "2025-12-12", location: "Davos", time: "17.00", event: "Lagsprint, fristil, finaler" },
    { date: "2025-12-13", location: "Davos", time: "13.45", event: "Sprint, fristil, kval" },
    { date: "2025-12-13", location: "Davos", time: "16.15", event: "Sprint, fristil, finaler" },
    { date: "2025-12-14", location: "Davos", time: "09.50", event: "10 km, fristil, herrar" },
    { date: "2025-12-14", location: "Davos", time: "13.45", event: "10 km, fristil, damer" },
    { date: "2025-12-28", location: "Toblach (Tour de Ski)", time: "11.45", event: "Sprintkval, fristil (d/h)" },
    { date: "2025-12-28", location: "Toblach (Tour de Ski)", time: "14.15", event: "Sprintfinaler, fristil (d/h)" },
    { date: "2025-12-29", location: "Toblach (Tour de Ski)", time: "11.45", event: "10 km klassiskt, intervallstart (h)" },
    { date: "2025-12-29", location: "Toblach (Tour de Ski)", time: "14.15", event: "10 km klassiskt, intervallstart (d)" },
    { date: "2025-12-31", location: "Toblach (Tour de Ski)", time: "11.30", event: "5 km fristil, masstart (h)" },
    { date: "2025-12-31", location: "Toblach (Tour de Ski)", time: "14.30", event: "5 km fristil, masstart (d)" },
    { date: "2026-01-01", location: "Toblach (Tour de Ski)", time: "10.30", event: "20 km klassiskt, jaktstart (h)" },
    { date: "2026-01-01", location: "Toblach (Tour de Ski)", time: "12.30", event: "20 km klassiskt, jaktstart (d)" },
    { date: "2026-01-03", location: "Val di Fiemme (Tour de Ski)", time: "12.15", event: "Sprintkval, klassiskt (d/h)" },
    { date: "2026-01-03", location: "Val di Fiemme (Tour de Ski)", time: "14.45", event: "Sprintfinaler, klassiskt (d/h)" },
    { date: "2026-01-04", location: "Val di Fiemme (Tour de Ski)", time: "11.30", event: "Finalklättring, 10 km masstart (h)" },
    { date: "2026-01-04", location: "Val di Fiemme (Tour de Ski)", time: "15.30", event: "Finalklättring, 10 km masstart (d)" },
    { date: "2026-01-17", location: "Oberhof", time: "13:35", event: "Sprint (f) kval, damer" },
    { date: "2026-01-17", location: "Oberhof", time: "13:35", event: "Sprint (f) kval, herrar" },
    { date: "2026-01-17", location: "Oberhof", time: "16:05", event: "Sprint (f) final, damer" },
    { date: "2026-01-17", location: "Oberhof", time: "16:05", event: "Sprint (f) final, herrar" },
    { date: "2026-01-18", location: "Oberhof", time: "10:45", event: "10 km (k) intervallstart, herrar" },
    { date: "2026-01-18", location: "Oberhof", time: "12:55", event: "10 km (k) intervallstart, damer" },
    { date: "2026-01-23", location: "Goms", time: "12:30", event: "Lagsprint (f) kval, damer" },
    { date: "2026-01-23", location: "Goms", time: "12:30", event: "Lagsprint (f) kval, herrar" },
    { date: "2026-01-23", location: "Goms", time: "14:30", event: "Lagsprint (f) final, damer" },
    { date: "2026-01-23", location: "Goms", time: "14:30", event: "Lagsprint (f) final, herrar" },
    { date: "2026-01-24", location: "Goms", time: "10:00", event: "Sprint (k) kval, damer" },
    { date: "2026-01-24", location: "Goms", time: "10:00", event: "Sprint (k) kval, herrar" },
    { date: "2026-01-24", location: "Goms", time: "12:30", event: "Sprint (k) final, damer" },
    { date: "2026-01-24", location: "Goms", time: "12:30", event: "Sprint (k) final, herrar" },
    { date: "2026-01-25", location: "Goms", time: "11:15", event: "20 km (k) masstart, damer" },
    { date: "2026-01-25", location: "Goms", time: "14:15", event: "20 km (k) masstart, herrar" },
    { date: "2026-02-28", location: "Falun", time: "13:00", event: "Sprint kval, herrar" },
    { date: "2026-02-28", location: "Falun", time: "13:00", event: "Sprint kval, damer" },
    { date: "2026-02-28", location: "Falun", time: "15:30", event: "Sprint final, herrar" },
    { date: "2026-02-28", location: "Falun", time: "15:30", event: "Sprint final, damer" },
    { date: "2026-03-01", location: "Falun", time: "12:30", event: "20 km skiathlon, herrar" },
    { date: "2026-03-01", location: "Falun", time: "16:05", event: "20 km skiathlon, damer" },
    { date: "2026-03-07", location: "Lahtis", time: "–", event: "Sprint fristil" },
    { date: "2026-03-08", location: "Lahtis", time: "–", event: "10 km fristil, individuell start" },
    { date: "2026-03-12", location: "Drammen", time: "–", event: "Sprint klassiskt" },
    { date: "2026-03-14", location: "Oslo", time: "–", event: "50 km fristil, masstart" },
    { date: "2026-03-20", location: "Lake Placid", time: "–", event: "10 km klassiskt, individuell start" },
    { date: "2026-03-21", location: "Lake Placid", time: "–", event: "Sprint fristil" },
    { date: "2026-03-22", location: "Lake Placid", time: "–", event: "20 km fristil, masstart" }
];

// Ski Classics 2025/2026
const skiClassicsSchedule = [
    { date: "2025-12-13", location: "Sportgastein, Österrike", time: "08:15–11:30", event: "Bad Gastein – individuell 7 km" },
    { date: "2025-12-14", location: "Sportgastein, Österrike", time: "08:20–11:30", event: "Bad Gastein – Criterium 36 km" },
    { date: "2026-01-17", location: "Pontresina–Zuoz, Schweiz", time: "09:33", event: "Engadin La Diagonela, 55 km (herrar)" },
    { date: "2026-01-17", location: "Pontresina–Zuoz, Schweiz", time: "09:39", event: "Engadin La Diagonela, 55 km (damer)" },
    { date: "2026-01-25", location: "Moena–Cavalese, Italien", time: "08:00", event: "Marcialonga, 70 km (herrar)" },
    { date: "2026-01-25", location: "Moena–Cavalese, Italien", time: "08:05", event: "Marcialonga, 70 km (damer)" },
    { date: "2026-01-30", location: "Bedřichov, Tjeckien", time: "16:00", event: "Bedřichov Sprint, 1,5 km (damer)" },
    { date: "2026-01-30", location: "Bedřichov, Tjeckien", time: "16:30", event: "Bedřichov Sprint, 1,5 km (herrar)" },
    { date: "2026-02-01", location: "Bedřichov, Tjeckien", time: "08:00", event: "Jizerská50, 50 km (damer)" },
    { date: "2026-02-01", location: "Bedřichov, Tjeckien", time: "08:30", event: "Jizerská50, 50 km (herrar)" },
    { date: "2026-03-01", location: "Sälen–Mora, Sverige", time: "08:00", event: "Vasaloppet, 90 km" },
    { date: "2026-03-07", location: "Grönklitt, Sverige", time: "08:00", event: "Orsa Grönklitt 50k ITT damer, 50 km" },
    { date: "2026-03-08", location: "Grönklitt, Sverige", time: "08:00", event: "Orsa Grönklitt 50k ITT herrar, 50 km" },
    { date: "2026-03-14", location: "Rena–Lillehammer, Norge", time: "07:45", event: "Birkebeinerrennet, 54 km (herrar)" },
    { date: "2026-03-14", location: "Rena–Lillehammer, Norge", time: "08:00", event: "Birkebeinerrennet, 54 km (damer)" },
    { date: "2026-03-21", location: "Bodø, Norge", time: "10:15", event: "Marcialonga Bodø, 50 km (herrar)" },
    { date: "2026-03-21", location: "Bodø, Norge", time: "10:20", event: "Marcialonga Bodø, 50 km (damer)" },
    { date: "2026-03-28", location: "Setermoen–Bardufoss, Norge", time: "10:00", event: "Reistadløpet, 46 km (damer)" },
    { date: "2026-03-28", location: "Setermoen–Bardufoss, Norge", time: "11:00", event: "Reistadløpet, 46 km (herrar)" },
    { date: "2026-03-29", location: "Bardufoss–Finnsnes, Norge", time: "08:30", event: "Grand Finale Summit 2 Senja, 60 km (herrar)" },
    { date: "2026-03-29", location: "Bardufoss–Finnsnes, Norge", time: "08:35", event: "Grand Finale Summit 2 Senja, 60 km (damer)" }
];

// IFK Kristianstad Schedule 2025/2026
const handballLeagueSchedule = [
    { date: "2026-02-10", time: "19:00", home: "IFK Kristianstad", away: "VästeråsIrsta HF" },
    { date: "2026-02-13", time: "19:00", home: "HK Malmö", away: "IFK Kristianstad" },
    { date: "2026-02-17", time: "20:45", home: "MT Melsungen", away: "IFK Kristianstad" },
    { date: "2026-02-20", time: "19:00", home: "Ystads IF HF", away: "IFK Kristianstad" },
    { date: "2026-02-24", time: "18:45", home: "IFK Kristianstad", away: "Sport Lisboa e Benfica" },
    { date: "2026-02-28", time: "16:00", home: "IFK Kristianstad", away: "Eskilstuna Guif" },
    { date: "2026-03-03", time: "18:45", home: "IFK Kristianstad", away: "MT Melsungen" },
    { date: "2026-03-07", time: "16:30", home: "Hammarby IF HF", away: "IFK Kristianstad" },
    { date: "2026-03-10", time: "19:00", home: "Sport Lisboa e Benfica", away: "IFK Kristianstad" },
    { date: "2026-03-12", time: "19:00", home: "IFK Kristianstad", away: "OV Helsingborg HK" },
    { date: "2026-03-25", time: "19:00", home: "IFK Skövde HK", away: "IFK Kristianstad" },
    { date: "2026-03-28", time: "13:00", home: "HF Karlskrona", away: "IFK Kristianstad" }
];

// Allsvenskan 2026
const allsvenskanSchedule = [
    { round: 1, dates: "4-6 april", matches: [
        { date: "2026-04-04", home: "Hammarby", away: "Mjällby AIF", time: "15:00" },
        { date: "2026-04-04", home: "Degerfors IF", away: "IK Sirius", time: "15:00" },
        { date: "2026-04-05", home: "AIK", away: "Halmstads BK", time: "14:00" },
        { date: "2026-04-05", home: "Kalmar FF", away: "Västerås SK", time: "14:00" },
        { date: "2026-04-05", home: "Örgryte IS", away: "Malmö FF", time: "16:30", malmoff: true },
        { date: "2026-04-06", home: "BK Häcken", away: "IF Brommapojkarna", time: "14:00" },
        { date: "2026-04-06", home: "IF Elfsborg", away: "IFK Göteborg", time: "14:00" },
        { date: "2026-04-06", home: "GAIS", away: "Djurgårdens IF", time: "16:30" }
    ]},
    { round: 2, dates: "11-13 april", matches: [
        { date: "2026-04-11", home: "IFK Göteborg", away: "BK Häcken", time: "15:00" },
        { date: "2026-04-11", home: "Mjällby AIF", away: "Örgryte IS", time: "15:00" },
        { date: "2026-04-11", home: "Västerås SK", away: "IF Elfsborg", time: "15:00" },
        { date: "2026-04-12", home: "Djurgårdens IF", away: "Kalmar FF", time: "14:00" },
        { date: "2026-04-12", home: "Halmstads BK", away: "Degerfors IF", time: "14:00" },
        { date: "2026-04-12", home: "Malmö FF", away: "GAIS", time: "16:30", malmoff: true },
        { date: "2026-04-13", home: "IF Brommapojkarna", away: "AIK", time: "19:00" },
        { date: "2026-04-13", home: "IK Sirius", away: "Hammarby", time: "19:00" }
    ]},
    { round: 3, dates: "17-19 april", matches: [
        { date: "2026-04-17", home: "Djurgårdens IF", away: "Malmö FF", time: "19:00", malmoff: true },
        { date: "2026-04-17", home: "Degerfors IF", away: "IF Elfsborg", time: "19:00" },
        { date: "2026-04-18", home: "Hammarby", away: "Örgryte IS", time: "15:00" },
        { date: "2026-04-18", home: "Mjällby AIF", away: "IF Brommapojkarna", time: "15:00" },
        { date: "2026-04-18", home: "IK Sirius", away: "Västerås SK", time: "15:00" },
        { date: "2026-04-18", home: "Halmstads BK", away: "IFK Göteborg", time: "15:00" },
        { date: "2026-04-19", home: "AIK", away: "Kalmar FF", time: "14:00" },
        { date: "2026-04-19", home: "BK Häcken", away: "GAIS", time: "16:30" }
    ]},
    { round: 4, dates: "22-23 april", matches: [
        { date: "2026-04-22", home: "Hammarby", away: "Halmstads BK", time: "19:00" },
        { date: "2026-04-22", home: "Örgryte IS", away: "IF Brommapojkarna", time: "19:00" },
        { date: "2026-04-22", home: "IF Elfsborg", away: "Djurgårdens IF", time: "19:00" },
        { date: "2026-04-22", home: "Västerås SK", away: "BK Häcken", time: "19:00" },
        { date: "2026-04-23", home: "GAIS", away: "Mjällby AIF", time: "19:00" },
        { date: "2026-04-23", home: "Malmö FF", away: "IK Sirius", time: "19:00", malmoff: true },
        { date: "2026-04-23", home: "Degerfors IF", away: "AIK", time: "19:00" },
        { date: "2026-04-23", home: "Kalmar FF", away: "IFK Göteborg", time: "19:00" }
    ]},
    { round: 5, dates: "26-27 april", matches: [
        { date: "2026-04-26", home: "Djurgårdens IF", away: "Hammarby", time: "14:00" },
        { date: "2026-04-26", home: "IFK Göteborg", away: "GAIS", time: "16:30" },
        { date: "2026-04-26", home: "IF Brommapojkarna", away: "Västerås SK", time: "16:30" },
        { date: "2026-04-27", home: "AIK", away: "Malmö FF", time: "19:00", malmoff: true },
        { date: "2026-04-27", home: "Örgryte IS", away: "Degerfors IF", time: "19:00" },
        { date: "2026-04-27", home: "BK Häcken", away: "IK Sirius", time: "19:00" },
        { date: "2026-04-27", home: "Mjällby AIF", away: "Halmstads BK", time: "19:00" },
        { date: "2026-04-27", home: "Kalmar FF", away: "IF Elfsborg", time: "19:00" }
    ]},
    { round: 6, dates: "2-4 maj", matches: [
        { date: "2026-05-02", home: "Degerfors IF", away: "BK Häcken", time: "15:00" },
        { date: "2026-05-02", home: "IK Sirius", away: "Kalmar FF", time: "15:00" },
        { date: "2026-05-03", home: "Hammarby", away: "Västerås SK", time: "14:00" },
        { date: "2026-05-03", home: "Malmö FF", away: "Mjällby AIF", time: "14:00", malmoff: true },
        { date: "2026-05-03", home: "GAIS", away: "Örgryte IS", time: "16:30" },
        { date: "2026-05-03", home: "IF Elfsborg", away: "AIK", time: "16:30" },
        { date: "2026-05-04", home: "Djurgårdens IF", away: "IFK Göteborg", time: "19:00" },
        { date: "2026-05-04", home: "Halmstads BK", away: "IF Brommapojkarna", time: "19:00" }
    ]},
    { round: 7, dates: "8-11 maj", matches: [
        { date: "2026-05-08", home: "IF Elfsborg", away: "IF Brommapojkarna", time: "19:00" },
        { date: "2026-05-09", home: "Degerfors IF", away: "Mjällby AIF", time: "15:00" },
        { date: "2026-05-09", home: "Västerås SK", away: "GAIS", time: "15:00" },
        { date: "2026-05-10", home: "AIK", away: "Djurgårdens IF", time: "14:00" },
        { date: "2026-05-10", home: "Kalmar FF", away: "Halmstads BK", time: "14:00" },
        { date: "2026-05-10", home: "BK Häcken", away: "Malmö FF", time: "16:30", malmoff: true },
        { date: "2026-05-11", home: "IFK Göteborg", away: "Hammarby", time: "19:00" },
        { date: "2026-05-11", home: "IK Sirius", away: "Örgryte IS", time: "19:00" }
    ]},
    { round: 8, dates: "16-18 maj", matches: [
        { date: "2026-05-16", home: "GAIS", away: "Degerfors IF", time: "15:00" },
        { date: "2026-05-16", home: "Halmstads BK", away: "IF Elfsborg", time: "15:00" },
        { date: "2026-05-17", home: "Hammarby", away: "Malmö FF", time: "14:00", malmoff: true },
        { date: "2026-05-17", home: "IF Brommapojkarna", away: "Kalmar FF", time: "14:00" },
        { date: "2026-05-17", home: "Mjällby AIF", away: "BK Häcken", time: "16:30" },
        { date: "2026-05-18", home: "Djurgårdens IF", away: "IK Sirius", time: "19:00" },
        { date: "2026-05-18", home: "Örgryte IS", away: "IFK Göteborg", time: "19:00" },
        { date: "2026-05-18", home: "Västerås SK", away: "AIK", time: "19:00" }
    ]},
    { round: 9, dates: "22-25 maj", matches: [
        { date: "2026-05-22", home: "Djurgårdens IF", away: "IF Brommapojkarna", time: "19:00" },
        { date: "2026-05-23", home: "Kalmar FF", away: "Degerfors IF", time: "15:00" },
        { date: "2026-05-23", home: "Halmstads BK", away: "Örgryte IS", time: "15:00" },
        { date: "2026-05-24", home: "Hammarby", away: "AIK", time: "14:00" },
        { date: "2026-05-24", home: "IK Sirius", away: "GAIS", time: "14:00" },
        { date: "2026-05-24", home: "Malmö FF", away: "Västerås SK", time: "16:30", malmoff: true },
        { date: "2026-05-25", home: "IFK Göteborg", away: "Mjällby AIF", time: "19:00" },
        { date: "2026-05-25", home: "IF Elfsborg", away: "BK Häcken", time: "19:00" }
    ]},
    { round: 10, dates: "29-31 maj", matches: [
        { date: "2026-05-29", home: "Örgryte IS", away: "IF Elfsborg", time: "19:00" },
        { date: "2026-05-30", home: "AIK", away: "IK Sirius", time: "15:00" },
        { date: "2026-05-30", home: "GAIS", away: "Kalmar FF", time: "15:00" },
        { date: "2026-05-30", home: "Malmö FF", away: "Halmstads BK", time: "15:00", malmoff: true },
        { date: "2026-05-31", home: "BK Häcken", away: "Hammarby", time: "14:00" },
        { date: "2026-05-31", home: "Degerfors IF", away: "IF Brommapojkarna", time: "14:00" },
        { date: "2026-05-31", home: "Västerås SK", away: "IFK Göteborg", time: "14:00" },
        { date: "2026-05-31", home: "Mjällby AIF", away: "Djurgårdens IF", time: "16:30" }
    ]},
    { round: 11, dates: "04/7-06/7", matches: [
        { home: "IFK Göteborg", away: "AIK", time: "–" },
        { home: "BK Häcken", away: "Djurgården", time: "–" },
        { home: "IF Elfsborg", away: "Hammarby", time: "–" },
        { home: "BP", away: "GAIS", time: "–" },
        { home: "Degerfors IF", away: "Malmö FF", time: "–" },
        { home: "IK Sirius", away: "Mjällby AIF", time: "–" },
        { home: "Kalmar FF", away: "Örgryte IS", time: "–" },
        { home: "Halmstads BK", away: "Västerås SK", time: "–" }
    ]},
    { round: 12, dates: "11/7-13/7", matches: [
        { home: "Djurgården", away: "Halmstads BK", time: "–" },
        { home: "Hammarby", away: "Kalmar FF", time: "–" },
        { home: "GAIS", away: "IF Elfsborg", time: "–" },
        { home: "Örgryte IS", away: "BK Häcken", time: "–" },
        { home: "Mjällby AIF", away: "AIK", time: "–" },
        { home: "Malmö FF", away: "IFK Göteborg", time: "–" },
        { home: "BP", away: "IK Sirius", time: "–" },
        { home: "Västerås SK", away: "Degerfors IF", time: "–" }
    ]},
    { round: 13, dates: "18/7-20/7", matches: [
        { home: "AIK", away: "GAIS", time: "–" },
        { home: "Hammarby", away: "Degerfors IF", time: "–" },
        { home: "IFK Göteborg", away: "BP", time: "–" },
        { home: "Örgryte IS", away: "Djurgården", time: "–" },
        { home: "Mjällby AIF", away: "Västerås SK", time: "–" },
        { home: "IF Elfsborg", away: "IK Sirius", time: "–" },
        { home: "Kalmar FF", away: "Malmö FF", time: "–" },
        { home: "Halmstads BK", away: "BK Häcken", time: "–" }
    ]},
    { round: 14, dates: "25/7-27/7", matches: [
        { home: "GAIS", away: "Halmstads BK", time: "–" },
        { home: "BK Häcken", away: "AIK", time: "–" },
        { home: "Malmö FF", away: "IF Elfsborg", time: "–" },
        { home: "BP", away: "Hammarby", time: "–" },
        { home: "Degerfors IF", away: "Djurgården", time: "–" },
        { home: "IK Sirius", away: "IFK Göteborg", time: "–" },
        { home: "Västerås SK", away: "Örgryte IS", time: "–" },
        { home: "Kalmar FF", away: "Mjällby AIF", time: "–" }
    ]},
    { round: 15, dates: "01/8-03/8", matches: [
        { home: "AIK", away: "Örgryte IS", time: "–" },
        { home: "Djurgården", away: "Västerås SK", time: "–" },
        { home: "IFK Göteborg", away: "Degerfors IF", time: "–" },
        { home: "GAIS", away: "Hammarby", time: "–" },
        { home: "BK Häcken", away: "Kalmar FF", time: "–" },
        { home: "IF Elfsborg", away: "Mjällby AIF", time: "–" },
        { home: "BP", away: "Malmö FF", time: "–" },
        { home: "Halmstads BK", away: "IK Sirius", time: "–" }
    ]},
    { round: 16, dates: "08/8-10/8", matches: [
        { home: "Hammarby", away: "BK Häcken", time: "–" },
        { home: "IFK Göteborg", away: "Kalmar FF", time: "–" },
        { home: "Örgryte IS", away: "AIK", time: "–" },
        { home: "Mjällby AIF", away: "IF Elfsborg", time: "–" },
        { home: "Malmö FF", away: "Degerfors IF", time: "–" },
        { home: "IK Sirius", away: "BP", time: "–" },
        { home: "Västerås SK", away: "Djurgården", time: "–" },
        { home: "Halmstads BK", away: "GAIS", time: "–" }
    ]},
    { round: 17, dates: "15/8-17/8", matches: [
        { home: "Djurgården", away: "AIK", time: "–" },
        { home: "GAIS", away: "Malmö FF", time: "–" },
        { home: "BK Häcken", away: "Halmstads BK", time: "–" },
        { home: "Mjällby AIF", away: "IK Sirius", time: "–" },
        { home: "IF Elfsborg", away: "Västerås SK", time: "–" },
        { home: "BP", away: "Örgryte IS", time: "–" },
        { home: "Degerfors IF", away: "IFK Göteborg", time: "–" },
        { home: "Kalmar FF", away: "Hammarby", time: "–" }
    ]},
    { round: 18, dates: "22/8-24/8", matches: [
        { home: "AIK", away: "Mjällby AIF", time: "–" },
        { home: "Hammarby", away: "GAIS", time: "–" },
        { home: "IFK Göteborg", away: "IF Elfsborg", time: "–" },
        { home: "Örgryte IS", away: "Halmstads BK", time: "–" },
        { home: "BP", away: "Degerfors IF", time: "–" },
        { home: "IK Sirius", away: "BK Häcken", time: "–" },
        { home: "Västerås SK", away: "Kalmar FF", time: "–" },
        { home: "Malmö FF", away: "Djurgården", time: "–" }
    ]},
    { round: 19, dates: "29/8-31/8", matches: [
        { home: "AIK", away: "Hammarby", time: "–" },
        { home: "Djurgården", away: "Mjällby AIF", time: "–" },
        { home: "IFK Göteborg", away: "Örgryte IS", time: "–" },
        { home: "GAIS", away: "BP", time: "–" },
        { home: "BK Häcken", away: "Västerås SK", time: "–" },
        { home: "IF Elfsborg", away: "Degerfors IF", time: "–" },
        { home: "IK Sirius", away: "Malmö FF", time: "–" },
        { home: "Halmstads BK", away: "Kalmar FF", time: "–" }
    ]},
    { round: 20, dates: "05/9-07/9", matches: [
        { home: "GAIS", away: "BK Häcken", time: "–" },
        { home: "Örgryte IS", away: "Hammarby", time: "–" },
        { home: "Mjällby AIF", away: "IFK Göteborg", time: "–" },
        { home: "Malmö FF", away: "AIK", time: "–" },
        { home: "BP", away: "IF Elfsborg", time: "–" },
        { home: "Degerfors IF", away: "Halmstads BK", time: "–" },
        { home: "Västerås SK", away: "IK Sirius", time: "–" },
        { home: "Kalmar FF", away: "Djurgården", time: "–" }
    ]},
    { round: 21, dates: "12/9-14/9", matches: [
        { home: "AIK", away: "Västerås SK", time: "–" },
        { home: "Djurgården", away: "GAIS", time: "–" },
        { home: "Hammarby", away: "BP", time: "–" },
        { home: "IFK Göteborg", away: "Halmstads BK", time: "–" },
        { home: "BK Häcken", away: "Mjällby AIF", time: "–" },
        { home: "Malmö FF", away: "Örgryte IS", time: "–" },
        { home: "IF Elfsborg", away: "Kalmar FF", time: "–" },
        { home: "IK Sirius", away: "Degerfors IF", time: "–" }
    ]},
    { round: 22, dates: "19/9-20/9", matches: [
        { home: "Djurgården", away: "IF Elfsborg", time: "–" },
        { home: "Örgryte IS", away: "IK Sirius", time: "–" },
        { home: "Mjällby AIF", away: "GAIS", time: "–" },
        { home: "BP", away: "IFK Göteborg", time: "–" },
        { home: "Degerfors IF", away: "Hammarby", time: "–" },
        { home: "Västerås SK", away: "Malmö FF", time: "–" },
        { home: "Kalmar FF", away: "BK Häcken", time: "–" },
        { home: "Halmstads BK", away: "AIK", time: "–" }
    ]},
    { round: 23, dates: "10/10-12/10", matches: [
        { home: "AIK", away: "BP", time: "–" },
        { home: "Hammarby", away: "Djurgården", time: "–" },
        { home: "IFK Göteborg", away: "Västerås SK", time: "–" },
        { home: "GAIS", away: "IK Sirius", time: "–" },
        { home: "BK Häcken", away: "Örgryte IS", time: "–" },
        { home: "Mjällby AIF", away: "Degerfors IF", time: "–" },
        { home: "Malmö FF", away: "Kalmar FF", time: "–" },
        { home: "IF Elfsborg", away: "Halmstads BK", time: "–" }
    ]},
    { round: 24, dates: "17/10-19/10", matches: [
        { home: "AIK", away: "IFK Göteborg", time: "–" },
        { home: "Örgryte IS", away: "GAIS", time: "–" },
        { home: "Malmö FF", away: "BK Häcken", time: "–" },
        { home: "BP", away: "Djurgården", time: "–" },
        { home: "Degerfors IF", away: "Kalmar FF", time: "–" },
        { home: "IK Sirius", away: "IF Elfsborg", time: "–" },
        { home: "Västerås SK", away: "Mjällby AIF", time: "–" },
        { home: "Halmstads BK", away: "Hammarby", time: "–" }
    ]},
    { round: 25, dates: "24/10-26/10", matches: [
        { home: "Djurgården", away: "Örgryte IS", time: "–" },
        { home: "GAIS", away: "IFK Göteborg", time: "–" },
        { home: "BK Häcken", away: "Degerfors IF", time: "–" },
        { home: "Mjällby AIF", away: "Hammarby", time: "–" },
        { home: "IF Elfsborg", away: "Malmö FF", time: "–" },
        { home: "IK Sirius", away: "AIK", time: "–" },
        { home: "Västerås SK", away: "Halmstads BK", time: "–" },
        { home: "Kalmar FF", away: "BP", time: "–" }
    ]},
    { round: 26, dates: "28/10-29/10", matches: [
        { home: "AIK", away: "IF Elfsborg", time: "–" },
        { home: "Hammarby", away: "IK Sirius", time: "–" },
        { home: "IFK Göteborg", away: "Djurgården", time: "–" },
        { home: "Örgryte IS", away: "Mjällby AIF", time: "–" },
        { home: "BP", away: "BK Häcken", time: "–" },
        { home: "Degerfors IF", away: "Västerås SK", time: "–" },
        { home: "Kalmar FF", away: "GAIS", time: "–" },
        { home: "Halmstads BK", away: "Malmö FF", time: "–" }
    ]},
    { round: 27, dates: "31/10-01/11", matches: [
        { home: "Djurgården", away: "Degerfors IF", time: "–" },
        { home: "GAIS", away: "AIK", time: "–" },
        { home: "BK Häcken", away: "IFK Göteborg", time: "–" },
        { home: "Mjällby AIF", away: "Kalmar FF", time: "–" },
        { home: "Malmö FF", away: "Hammarby", time: "–" },
        { home: "IF Elfsborg", away: "Örgryte IS", time: "–" },
        { home: "IK Sirius", away: "Halmstads BK", time: "–" },
        { home: "Västerås SK", away: "BP", time: "–" }
    ]},
    { round: 28, dates: "07/11-08/11", matches: [
        { home: "AIK", away: "BK Häcken", time: "–" },
        { home: "Hammarby", away: "IF Elfsborg", time: "–" },
        { home: "IFK Göteborg", away: "Malmö FF", time: "–" },
        { home: "Örgryte IS", away: "Västerås SK", time: "–" },
        { home: "BP", away: "Mjällby AIF", time: "–" },
        { home: "Degerfors IF", away: "GAIS", time: "–" },
        { home: "Kalmar FF", away: "IK Sirius", time: "–" },
        { home: "Halmstads BK", away: "Djurgården", time: "–" }
    ]},
    { round: 29, dates: "21/11-24/11", matches: [
        { home: "AIK", away: "Degerfors IF", time: "–" },
        { home: "Hammarby", away: "IFK Göteborg", time: "–" },
        { home: "GAIS", away: "Västerås SK", time: "–" },
        { home: "Örgryte IS", away: "Kalmar FF", time: "–" },
        { home: "BK Häcken", away: "IF Elfsborg", time: "–" },
        { home: "Mjällby AIF", away: "Malmö FF", time: "–" },
        { home: "BP", away: "Halmstads BK", time: "–" },
        { home: "IK Sirius", away: "Djurgården", time: "–" }
    ]},
    { round: 30, dates: "29/11", matches: [
        { home: "Djurgården", away: "BK Häcken", time: "–" },
        { home: "IFK Göteborg", away: "IK Sirius", time: "–" },
        { home: "Malmö FF", away: "BP", time: "–" },
        { home: "IF Elfsborg", away: "GAIS", time: "–" },
        { home: "Degerfors IF", away: "Örgryte IS", time: "–" },
        { home: "Västerås SK", away: "Hammarby", time: "–" },
        { home: "Kalmar FF", away: "AIK", time: "–" },
        { home: "Halmstads BK", away: "Mjällby AIF", time: "–" }
    ]}
];

// Svenska Cupen 2026 - Group Stage
const svenskaCupenSchedule = [
    { date: "2026-02-20", time: "19:00", match: "Hammarby - IK Brage", group: 2 },
    { date: "2026-02-20", time: "19:00", match: "IFK Skövde - IF Brommapojkarna", group: 5 },
    { date: "2026-02-21", time: "13:00", match: "Mjällby AIF - Kalmar FF", group: 1 },
    { date: "2026-02-21", time: "13:00", match: "IFK Göteborg - Östersund", group: 4 },
    { date: "2026-02-21", time: "15:00", match: "Östers IF - Örebro", group: 2 },
    { date: "2026-02-21", time: "15:00", match: "Djurgården - Falkenbergs FF", group: 5 },
    { date: "2026-02-21", time: "17:00", match: "IFK Norrköping - Sandvikens IF", group: 3 },
    { date: "2026-02-21", time: "17:00", match: "IK Sirius - GIF Sundsvall", group: 8 },
    { date: "2026-02-22", time: "13:00", match: "IFK Värnamo - Örgryte IS", group: 1 },
    { date: "2026-02-22", time: "13:00", match: "AIK - Västerås SK", group: 7 },
    { date: "2026-02-22", time: "13:00", match: "BK Häcken - IK Oddevold", group: 7 },
    { date: "2026-02-22", time: "15:00", match: "Degerfors IF - Trelleborgs FF", group: 4 },
    { date: "2026-02-22", time: "15:00", match: "IF Elfsborg - Helsingborgs IF", group: 8 },
    { date: "2026-02-22", time: "17:00", match: "Malmö FF - Varbergs BoIS", group: 6, malmoff: true },
    { date: "2026-02-22", time: "17:00", match: "IF Karlstad - Halmstad", group: 6 },
    { date: "2026-02-23", time: "19:00", match: "GAIS - Landskrona BoIS", group: 3 },
    { date: "2026-02-27", time: "19:00", match: "Örgryte IS - Mjällby AIF", group: 1 },
    { date: "2026-02-28", time: "13:00", match: "Östers IF - IK Brage", group: 2 },
    { date: "2026-02-28", time: "13:00", match: "IK Oddevold - AIK", group: 7 },
    { date: "2026-02-28", time: "15:00", match: "Trelleborgs FF - IFK Göteborg", group: 4 },
    { date: "2026-02-28", time: "15:00", match: "GIF Sundsvall - IF Elfsborg", group: 8 },
    { date: "2026-02-28", time: "17:00", match: "IFK Norrköping - Landskrona BoIS", group: 3 },
    { date: "2026-02-28", time: "17:00", match: "Degerfors IF - Östersund", group: 4 },
    { date: "2026-03-01", time: "13:00", match: "IFK Värnamo - Kalmar FF", group: 1 },
    { date: "2026-03-01", time: "13:00", match: "IF Brommapojkarna - Falkenbergs FF", group: 5 },
    { date: "2026-03-01", time: "13:00", match: "Halmstad - Varbergs BoIS", group: 6 },
    { date: "2026-03-01", time: "15:00", match: "IF Karlstad - Malmö FF", group: 6, malmoff: true },
    { date: "2026-03-01", time: "15:00", match: "BK Häcken - Västerås SK", group: 7 },
    { date: "2026-03-01", time: "17:00", match: "IFK Skövde - Djurgården", group: 5 },
    { date: "2026-03-01", time: "17:00", match: "IK Sirius - Helsingborgs IF", group: 8 },
    { date: "2026-03-02", time: "19:00", match: "Örebro - Hammarby", group: 2 },
    { date: "2026-03-02", time: "19:00", match: "Sandvikens IF - GAIS", group: 3 },
    { date: "2026-03-07", time: "13:00", match: "Kalmar FF - Örgryte IS", group: 1 },
    { date: "2026-03-07", time: "13:00", match: "Mjällby AIF - IFK Värnamo", group: 1 },
    { date: "2026-03-07", time: "13:00", match: "IK Brage - Örebro", group: 2 },
    { date: "2026-03-07", time: "13:00", match: "Hammarby - Östers IF", group: 2 },
    { date: "2026-03-07", time: "15:00", match: "Landskrona BoIS - Sandvikens IF", group: 3 },
    { date: "2026-03-07", time: "15:00", match: "GAIS - IFK Norrköping", group: 3 },
    { date: "2026-03-08", time: "13:00", match: "Falkenbergs FF - IFK Skövde", group: 5 },
    { date: "2026-03-08", time: "13:00", match: "Djurgården - IF Brommapojkarna", group: 5 },
    { date: "2026-03-08", time: "13:00", match: "Helsingborgs IF - GIF Sundsvall", group: 8 },
    { date: "2026-03-08", time: "13:00", match: "IF Elfsborg - IK Sirius", group: 8 },
    { date: "2026-03-08", time: "15:00", match: "Östersund - Trelleborgs FF", group: 4 },
    { date: "2026-03-08", time: "15:00", match: "IFK Göteborg - Degerfors IF", group: 4 },
    { date: "2026-03-08", time: "17:00", match: "Varbergs BoIS - IF Karlstad", group: 6 },
    { date: "2026-03-08", time: "17:00", match: "Malmö FF - Halmstad", group: 6, malmoff: true },
    { date: "2026-03-09", time: "19:00", match: "Västerås SK - IK Oddevold", group: 7 },
    { date: "2026-03-09", time: "19:00", match: "AIK - BK Häcken", group: 7 }
];

// Vinterstudion Schedule 2025/2026
const vinterstudionSchedule = [
    { date: "2025-11-15", time: "09:30–13:45", sport: "Vinterstudion", event: "–" },
    { date: "2025-11-15", time: "10:00–11:30", sport: "Skidskytte, Idre", event: "Sprint (d)" },
    { date: "2025-11-15", time: "12:30–14:15", sport: "Skidskytte, Idre", event: "Sprint (h)" },
    { date: "2025-11-16", time: "09:15–13:45", sport: "Vinterstudion", event: "–" },
    { date: "2025-11-16", time: "10:00–11:30", sport: "Skidskytte, Idre", event: "Sprint (d)" },
    { date: "2025-11-16", time: "12:30–14:15", sport: "Skidskytte, Idre", event: "Sprint (h)" },
    { date: "2025-11-21", time: "09:40–11:20", sport: "Längdskidor, Gällivare", event: "Prolog sprint" },
    { date: "2025-11-21", time: "12:00–14:15", sport: "Längdskidor, Gällivare", event: "Final sprint" },
    { date: "2025-11-22", time: "10:00–13:30", sport: "Vinterstudion", event: "–" },
    { date: "2025-11-22", time: "10:25–11:15", sport: "Längdskidor, Gällivare", event: "10 km klassiskt (h)" },
    { date: "2025-11-22", time: "12:15–13:05", sport: "Längdskidor, Gällivare", event: "10 km klassiskt (d)" },
    { date: "2025-11-23", time: "10:00–13:30", sport: "Vinterstudion", event: "–" },
    { date: "2025-11-23", time: "10:25–11:15", sport: "Längdskidor, Gällivare", event: "10 km fristil (h)" },
    { date: "2025-11-23", time: "12:15–13:05", sport: "Längdskidor, Gällivare", event: "10 km fristil (d)" },
    { date: "2025-11-29", time: "12:45–18:30", sport: "Vinterstudion", event: "–" },
    { date: "2025-11-29", time: "13:15–14:35", sport: "Skidskytte, Östersund", event: "Stafett (d)" },
    { date: "2025-11-29", time: "16:55–18:15", sport: "Skidskytte, Östersund", event: "Stafett (h)" },
    { date: "2025-11-30", time: "13:45–18:00", sport: "Vinterstudion", event: "–" },
    { date: "2025-11-30", time: "14:00–14:45", sport: "Skidskytte, Östersund", event: "Singlemixed stafett" },
    { date: "2025-11-30", time: "16:40–17:50", sport: "Skidskytte, Östersund", event: "Mixed stafett" },
    { date: "2025-12-02", time: "15:20–17:20", sport: "Skidskytte, Östersund", event: "Individuell start 15 km (d)" },
    { date: "2025-12-03", time: "15:20–17:20", sport: "Skidskytte, Östersund", event: "Individuell start 20 km (h)" },
    { date: "2025-12-05", time: "15:50–17:25", sport: "Skidskytte, Östersund", event: "Sprint (d)" },
    { date: "2025-12-06", time: "16:00–18:00", sport: "Vinterstudion", event: "–" },
    { date: "2025-12-06", time: "16:30–17:50", sport: "Skidskytte, Östersund", event: "Sprint (h)" },
    { date: "2025-12-07", time: "13:00–16:30", sport: "Vinterstudion", event: "–" },
    { date: "2025-12-07", time: "13:15–14:00", sport: "Skidskytte, Östersund", event: "Jaktstart (d)" },
    { date: "2025-12-07", time: "15:15–16:00", sport: "Skidskytte, Östersund", event: "Jaktstart (h)" },
    { date: "2025-12-12", time: "11:15–12:55", sport: "Skidskytte, Hochfilzen", event: "Sprint (h)" },
    { date: "2025-12-12", time: "14:05–15:45", sport: "Skidskytte, Hochfilzen", event: "Sprint (d)" },
    { date: "2025-12-13", time: "11:30–15:50", sport: "Vinterstudion", event: "–" },
    { date: "2025-12-13", time: "08:15–11:30", sport: "Ski Classics, Bad Gastein", event: "Individuell 7 km" },
    { date: "2025-12-13", time: "12:00–12:45", sport: "Skidskytte, Hochfilzen", event: "Jaktstart (h)" },
    { date: "2025-12-13", time: "14:15–15:35", sport: "Skidskytte, Hochfilzen", event: "Stafett (d)" },
    { date: "2025-12-14", time: "11:30–15:50", sport: "Vinterstudion", event: "–" },
    { date: "2025-12-14", time: "08:20–11:30", sport: "Ski Classics, Bad Gastein", event: "Criterium 36 km" },
    { date: "2025-12-14", time: "12:00–13:20", sport: "Skidskytte, Hochfilzen", event: "Stafett (h)" },
    { date: "2025-12-14", time: "14:45–15:30", sport: "Skidskytte, Hochfilzen", event: "Jaktstart (d)" },
    { date: "2025-12-18", time: "14:05–15:45", sport: "Skidskytte, Annecy", event: "Sprint (d)" },
    { date: "2025-12-19", time: "14:05–15:40", sport: "Skidskytte, Annecy", event: "Sprint (h)" },
    { date: "2025-12-20", time: "12:00–16:00", sport: "Vinterstudion", event: "–" },
    { date: "2025-12-20", time: "12:15–13:00", sport: "Skidskytte, Annecy", event: "Jaktstart (d)" },
    { date: "2025-12-20", time: "14:45–15:30", sport: "Skidskytte, Annecy", event: "Jaktstart (h)" },
    { date: "2025-12-21", time: "12:00–16:00", sport: "Vinterstudion", event: "–" },
    { date: "2025-12-21", time: "12:15–13:00", sport: "Skidskytte, Annecy", event: "Masstart (d)" },
    { date: "2025-12-21", time: "14:45–15:30", sport: "Skidskytte, Annecy", event: "Masstart (h)" },
    { date: "2026-01-08", time: "11:20–12:50", sport: "Skidskytte, Oberhof", event: "Sprint (h)" },
    { date: "2026-01-08", time: "14:05–15:35", sport: "Skidskytte, Oberhof", event: "Sprint (d)" },
    { date: "2026-01-10", time: "11:30–16:00", sport: "Vinterstudion", event: "–" },
    { date: "2026-01-10", time: "12:00–12:45", sport: "Skidskytte, Oberhof", event: "Jaktstart (h)" },
    { date: "2026-01-10", time: "14:25–15:40", sport: "Skidskytte, Oberhof", event: "Stafett (d)" },
    { date: "2026-01-11", time: "10:45–15:30", sport: "Vinterstudion", event: "–" },
    { date: "2026-01-11", time: "11:00–12:20", sport: "Skidskytte, Oberhof", event: "Stafett (h)" },
    { date: "2026-01-11", time: "14:15–15:00", sport: "Skidskytte, Oberhof", event: "Jaktstart (h)" },
    { date: "2026-01-14", time: "14:20–15:55", sport: "Skidskytte, Ruhpolding", event: "Stafett (d)" },
    { date: "2026-01-15", time: "14:20–15:55", sport: "Skidskytte, Ruhpolding", event: "Stafett (h)" },
    { date: "2026-01-16", time: "14:20–15:55", sport: "Skidskytte, Ruhpolding", event: "Sprint (d)" },
    { date: "2026-01-17", time: "14:00–16:15", sport: "Vinterstudion", event: "–" },
    { date: "2026-01-17", time: "09:33–12:50", sport: "Längdskidor, Engadin La Diagonela", event: "55 km" },
    { date: "2026-01-17", time: "14:30–15:50", sport: "Skidskytte, Ruhpolding", event: "Sprint (h)" },
    { date: "2026-01-18", time: "12:15–16:00", sport: "Vinterstudion", event: "–" },
    { date: "2026-01-18", time: "12:30–13:15", sport: "Skidskytte, Ruhpolding", event: "Jaktstart (d)" },
    { date: "2026-01-18", time: "15:00–15:45", sport: "Skidskytte, Ruhpolding", event: "Jaktstart (h)" },
    { date: "2026-01-22", time: "18:05–20:00", sport: "Skidskytte, Nove Mesto", event: "Individuell start 15 km (h)" },
    { date: "2026-01-23", time: "12:30", sport: "Längdskidor, Goms", event: "Lagsprint (f) kval, damer" },
    { date: "2026-01-23", time: "12:30", sport: "Längdskidor, Goms", event: "Lagsprint (f) kval, herrar" },
    { date: "2026-01-23", time: "14:30", sport: "Längdskidor, Goms", event: "Lagsprint (f) final, damer" },
    { date: "2026-01-23", time: "14:30", sport: "Längdskidor, Goms", event: "Lagsprint (f) final, herrar" },
    { date: "2026-01-23", time: "18:05–20:00", sport: "Skidskytte, Nove Mesto", event: "Individuell start 12.5 km (d)" },
    { date: "2026-01-24", time: "12:45–16:45", sport: "Vinterstudion", event: "–" },
    { date: "2026-01-24", time: "10:00", sport: "Längdskidor, Goms", event: "Sprint (k) kval, damer" },
    { date: "2026-01-24", time: "10:00", sport: "Längdskidor, Goms", event: "Sprint (k) kval, herrar" },
    { date: "2026-01-24", time: "12:30", sport: "Längdskidor, Goms", event: "Sprint (k) final, damer" },
    { date: "2026-01-24", time: "12:30", sport: "Längdskidor, Goms", event: "Sprint (k) final, herrar" },
    { date: "2026-01-24", time: "13:15–14:00", sport: "Skidskytte, Nove Mesto", event: "Singlemixed stafett" },
    { date: "2026-01-24", time: "15:15–16:25", sport: "Skidskytte, Nove Mesto", event: "Mixed stafett" },
    { date: "2026-01-25", time: "15:00–19:15", sport: "Vinterstudion", event: "–" },
    { date: "2026-01-25", time: "07:50–11:30", sport: "Längdskidor, Marcialonga", event: "70 km" },
    { date: "2026-01-25", time: "11:15", sport: "Längdskidor, Goms", event: "20 km (k) masstart, damer" },
    { date: "2026-01-25", time: "14:15", sport: "Längdskidor, Goms", event: "20 km (k) masstart, herrar" },
    { date: "2026-01-25", time: "15:15–16:00", sport: "Skidskytte, Nove Mesto", event: "Masstart (h)" },
    { date: "2026-01-25", time: "18:15–19:00", sport: "Skidskytte, Nove Mesto", event: "Masstart (d)" }
];

// Packers 2025 NFL Season Schedule (Swedish Times)
const packersSchedule = [
    {
        week: 1,
        date: "September 7, 2025",
        time: "22:25",
        opponent: "Detroit Lions",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 2,
        date: "September 11, 2025",
        time: "02:15",
        opponent: "Washington Commanders",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 3,
        date: "September 21, 2025",
        time: "19:00",
        opponent: "Cleveland Browns",
        location: "away",
        stadium: "Cleveland Browns Stadium"
    },
    {
        week: 4,
        date: "September 28, 2025",
        time: "00:20",
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
        time: "22:25",
        opponent: "Cincinnati Bengals",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 7,
        date: "October 19, 2025",
        time: "22:25",
        opponent: "Arizona Cardinals",
        location: "away",
        stadium: "State Farm Stadium"
    },
    {
        week: 8,
        date: "October 26, 2025",
        time: "02:20",
        opponent: "Pittsburgh Steelers",
        location: "away",
        stadium: "Acrisure Stadium"
    },
    {
        week: 9,
        date: "November 2, 2025",
        time: "19:00",
        opponent: "Carolina Panthers",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 10,
        date: "November 10, 2025",
        time: "01:15",
        opponent: "Philadelphia Eagles",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 11,
        date: "November 16, 2025",
        time: "19:00",
        opponent: "New York Giants",
        location: "away",
        stadium: "MetLife Stadium"
    },
    {
        week: 12,
        date: "November 23, 2025",
        time: "19:00",
        opponent: "Minnesota Vikings",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 13,
        date: "November 27, 2025",
        time: "19:00",
        opponent: "Detroit Lions",
        location: "away",
        stadium: "Ford Field"
    },
    {
        week: 14,
        date: "December 7, 2025",
        time: "22:25",
        opponent: "Chicago Bears",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 15,
        date: "December 14, 2025",
        time: "22:25",
        opponent: "Denver Broncos",
        location: "away",
        stadium: "Empower Field at Mile High"
    },
    {
        week: 16,
        date: "December 20, 2025",
        time: "02:20",
        opponent: "Chicago Bears",
        location: "away",
        stadium: "Soldier Field"
    },
    {
        week: 17,
        date: "December 28, 2025",
        time: "02:00",
        opponent: "Baltimore Ravens",
        location: "home",
        stadium: "Lambeau Field"
    },
    {
        week: 18,
        date: "January 4, 2026",
        time: "TBD",
        opponent: "Minnesota Vikings",
        location: "away",
        stadium: "U.S. Bank Stadium"
    }
];


// NFL Playoffs 2026
const nflPlayoffsSchedule = [
    // NFC Wild Card
    { date: "2026-01-10", time: "22:30", home: "Panthers", away: "Rams", conference: "NFC", round: "Wild Card" },
    { date: "2026-01-11", time: "02:00", home: "Bears", away: "Packers", conference: "NFC", round: "Wild Card", packers: true },
    { date: "2026-01-11", time: "22:30", home: "Eagles", away: "49ers", conference: "NFC", round: "Wild Card" },
    // AFC Wild Card
    { date: "2026-01-11", time: "19:00", home: "Jaguars", away: "Bills", conference: "AFC", round: "Wild Card" },
    { date: "2026-01-12", time: "02:00", home: "Patriots", away: "Chargers", conference: "AFC", round: "Wild Card" },
    { date: "2026-01-13", time: "02:15", home: "Steelers", away: "Texans", conference: "AFC", round: "Wild Card" },
    // Divisional Round
    { date: "2026-01-17", time: "22:30", home: "Broncos", away: "Bills", conference: "AFC", round: "Divisional" },
    { date: "2026-01-18", time: "02:00", home: "Seahawks", away: "49ers", conference: "NFC", round: "Divisional" },
    { date: "2026-01-18", time: "21:00", home: "Patriots", away: "Texans", conference: "AFC", round: "Divisional" },
    { date: "2026-01-19", time: "00:30", home: "Bears", away: "Rams", conference: "NFC", round: "Divisional" },
    // Conference Championships
    { date: "2026-01-25", time: "21:00", home: "Broncos", away: "Patriots", conference: "AFC", round: "AFC Championship" },
    { date: "2026-01-26", time: "00:30", home: "Seahawks", away: "Rams", conference: "NFC", round: "NFC Championship" },
    // Super Bowl
    { date: "2026-02-08", time: "00:30", home: "Seahawks", away: "Patriots", conference: "", round: "Super Bowl LX" }
];

// DOM Elements
const scheduleContainer = document.getElementById('schedule-container');

// Helper function to parse dates from different formats
function parseDate(dateString) {
    // Remove day names in parentheses like (Tors), (Lör), (Mån)
    let cleanDate = dateString.replace(/\s*\([^)]*\)/g, '');
    
    // Try ISO format first: "2025-11-15"
    const isoMatch = cleanDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoMatch) {
        const year = parseInt(isoMatch[1]);
        const month = parseInt(isoMatch[2]) - 1; // Month is 0-indexed
        const day = parseInt(isoMatch[3]);
        return new Date(year, month, day);
    }
    
    // Swedish month names to numbers
    const monthMap = {
        'januari': 0, 'februari': 1, 'mars': 2, 'april': 3,
        'maj': 4, 'juni': 5, 'juli': 6, 'augusti': 7,
        'september': 8, 'oktober': 9, 'november': 10, 'december': 11,
        'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3,
        'maj': 4, 'jun': 5, 'jul': 6, 'aug': 7,
        'sep': 8, 'okt': 9, 'nov': 10, 'dec': 11
    };
    
    // Try Swedish format: "29 november" or "7 december 2025"
    const swedishMatch = cleanDate.match(/(\d{1,2})\s+(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december|jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)(?:\s+(\d{4}))?/i);
    if (swedishMatch) {
        const day = parseInt(swedishMatch[1]);
        const month = monthMap[swedishMatch[2].toLowerCase()];
        let year = swedishMatch[3] ? parseInt(swedishMatch[3]) : null;
        
        // If no year specified, determine based on current date
        if (!year) {
            const now = new Date();
            const currentYear = now.getFullYear();
            const currentMonth = now.getMonth();
            
            // For winter sports season spanning Oct-Mar:
            // - If we're in Jan-Jun and month is Oct-Dec, it's previous year
            // - If we're in Jul-Dec and month is Jan-May, it's next year
            // - Otherwise, it's current year
            if (currentMonth <= 5 && month >= 9) {
                // We're in Jan-Jun, event is in Oct-Dec -> previous year
                year = currentYear - 1;
            } else if (currentMonth >= 6 && month <= 4) {
                // We're in Jul-Dec, event is in Jan-May -> next year
                year = currentYear + 1;
            } else {
                year = currentYear;
            }
        }
        return new Date(year, month, day);
    }
    
    // Try American format: "September 7, 2025" or "November 16, 2025"
    const americanMatch = cleanDate.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})/i);
    if (americanMatch) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames.findIndex(m => m.toLowerCase() === americanMatch[1].toLowerCase());
        const day = parseInt(americanMatch[2]);
        const year = parseInt(americanMatch[3]);
        return new Date(year, month, day);
    }
    
    return null;
}

// Helper function to format date to "27 nov (Tors)" format
function formatDateSwedish(date) {
    if (!date || !(date instanceof Date)) return '';
    
    const dayNames = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'];
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const dayName = dayNames[date.getDay()];
    
    return `${day} ${month} (${dayName})`;
}

// Function to get all events from all sports
function getAllEvents() {
    const events = [];
    
    // Add Packers regular season games
    packersSchedule.forEach(game => {
        if (game.opponent !== null) {
            const date = parseDate(game.date);
            if (date) {
                const description = game.location === 'home' 
                    ? `Packers – ${game.opponent}` 
                    : `${game.opponent} – Packers`;
                    
                events.push({
                    date: date,
                    dateString: formatDateSwedish(date),
                    sport: 'NFL',
                    team: 'Green Bay Packers',
                    description: description,
                    location: game.stadium,
                    time: game.time
                });
            }
        }
    });
    
    // Add NFL Playoffs games
    nflPlayoffsSchedule.forEach(game => {
        const date = parseDate(game.date);
        if (date) {
            const description = `${game.home} – ${game.away}`;
            const isPackersGame = game.packers === true;
            
            events.push({
                date: date,
                dateString: formatDateSwedish(date),
                sport: `NFL Playoffs`,
                team: isPackersGame ? 'Packers' : game.round,
                description: `${game.round}: ${description}`,
                location: game.conference,
                time: game.time
            });
        }
    });
    
    // Add Biathlon events
    biathlonSchedule.forEach(competition => {
        competition.events.forEach(event => {
            const date = parseDate(event.date);
            if (date) {
                event.races.forEach(race => {
                    // Format time: take only start time, remove channel info
                    // Example: "13:15-14:35, SVT1/SVT Play" -> "13:15"
                    let time = race.tv;
                    // Remove channel info
                    time = time.split(',')[0].trim();
                    // Take only start time if range
                    time = time.split('–')[0].split('-')[0].trim();
                    
                    events.push({
                        date: date,
                        dateString: formatDateSwedish(date),
                        sport: 'Skidskytte',
                        team: competition.location,
                        description: race.name,
                        location: competition.location,
                        time: time
                    });
                });
            }
        });
    });
    
    // Add Cross Country Skiing events
    crossCountrySchedule.forEach(race => {
        const date = parseDate(race.date);
        if (date) {
            events.push({
                date: date,
                dateString: formatDateSwedish(date),
                sport: 'Längdskidor',
                team: race.location,
                description: race.event,
                location: race.location,
                time: race.time
            });
        }
    });
    
    // Add Ski Classics events
    skiClassicsSchedule.forEach(race => {
        const date = parseDate(race.date);
        if (date) {
            events.push({
                date: date,
                dateString: formatDateSwedish(date),
                sport: 'Ski Classics',
                team: race.location,
                description: race.event,
                location: race.location,
                time: race.time
            });
        }
    });
    
    // Add IFK Kristianstad matches
    handballLeagueSchedule.forEach(game => {
        const date = parseDate(game.date);
        if (date) {
            events.push({
                date: date,
                dateString: formatDateSwedish(date),
                sport: 'Handboll',
                team: 'IFK Kristianstad',
                description: `${game.home} – ${game.away}`,
                location: '-',
                time: game.time
            });
        }
    });
    
    // Add Svenska Cupen matches (only Malmö FF's matches for overview)
    svenskaCupenSchedule.forEach(game => {
        if (game.malmoff) {
            const date = parseDate(game.date);
            if (date) {
                events.push({
                    date: date,
                    dateString: formatDateSwedish(date),
                    sport: 'Svenska Cupen',
                    team: 'Malmö FF',
                    description: game.match,
                    location: '-',
                    time: game.time,
                    isHighlightedTeam: true
                });
            }
        }
    });
    
    // Add Allsvenskan matches (only Malmö FF's matches for overview)
    allsvenskanSchedule.forEach(round => {
        round.matches.forEach(match => {
            if (match.malmoff) {
                const date = parseDate(match.date);
                if (date) {
                    events.push({
                        date: date,
                        dateString: formatDateSwedish(date),
                        sport: 'Allsvenskan',
                        team: 'Malmö FF',
                        description: `${match.home} – ${match.away}`,
                        location: '-',
                        time: match.time,
                        isHighlightedTeam: true
                    });
                }
            }
        });
    });
    
    return events;
}

// Helper function to compare events by date and time
function compareEvents(a, b) {
    // First compare dates
    const dateDiff = a.date - b.date;
    if (dateDiff !== 0) return dateDiff;
    
    // If dates are same, compare times
    const getTimeValue = (timeStr) => {
        if (!timeStr || timeStr === 'TBD' || timeStr === '–') return 9999; // Put unknown times last
        
        // Extract hours and minutes
        // Matches HH:MM or HH.MM
        const match = timeStr.match(/(\d{1,2})[:.](\d{2})/);
        if (match) {
            return parseInt(match[1]) * 60 + parseInt(match[2]);
        }
        return 9999;
    };
    
    return getTimeValue(a.time) - getTimeValue(b.time);
}

// Function to filter events for today
function getTodaysEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const allEvents = getAllEvents();
    return allEvents.filter(event => {
        return event.date >= today && event.date < tomorrow;
    }).sort(compareEvents);
}

// Function to filter events for next 7 days (excluding today)
function getUpcomingEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 8);
    
    const allEvents = getAllEvents();
    return allEvents.filter(event => {
        return event.date >= tomorrow && event.date < nextWeek;
    }).sort(compareEvents);
}

// Function to create NFL table
function createNFLTable(schedule) {
    const table = document.createElement('table');
    table.className = 'schedule-table';
    
    // Find next game
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let nextGameIndex = -1;
    for (let i = 0; i < schedule.length; i++) {
        if (schedule[i].opponent !== null) {
            const gameDate = parseDate(schedule[i].date);
            if (gameDate && gameDate >= today) {
                nextGameIndex = i;
                break;
            }
        }
    }
    
    let html = `
        <caption>Packers - 2025 Schedule</caption>
        <thead>
            <tr>
                <th>Week</th>
                <th>Date</th>
                <th>Match</th>
                <th>Location</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    schedule.forEach((game, index) => {
        // Skip games that have already occurred
        const gameDate = parseDate(game.date);
        if (gameDate && gameDate < today && game.opponent !== null) {
            return; // Skip past games
        }
        
        // Skip BYE WEEK (opponent is null)
        if (game.opponent === null) {
            return;
        }
        
        const isNextGame = index === nextGameIndex;
        const rowClass = isNextGame ? ' class="next-event"' : '';
        
        // Format date to Swedish format
        const formattedDate = gameDate ? formatDateSwedish(gameDate) : game.date;
        
        const match = game.location === 'home' 
            ? `Packers – ${game.opponent}` 
            : `${game.opponent} – Packers`;
            
        html += `
            <tr${rowClass}>
                <td>${game.week}</td>
                <td>${formattedDate}</td>
                <td>${match}</td>
                <td>${game.stadium}</td>
                <td>${game.time}</td>
            </tr>
        `;
    });
    
    html += `</tbody>`;
    table.innerHTML = html;
    return table;
}

// Function to create biathlon tables
function createBiathlonTables(schedule) {
    const container = document.createElement('div');
    
    // Find next event date across all competitions
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let nextEventDate = null;
    for (const competition of schedule) {
        for (const event of competition.events) {
            const eventDate = parseDate(event.date);
            if (eventDate && eventDate >= today) {
                if (!nextEventDate || eventDate < nextEventDate) {
                    nextEventDate = eventDate;
                }
            }
        }
    }
    
    schedule.forEach(competition => {
        // Check if competition has any future events
        const hasFutureEvents = competition.events.some(event => {
            const eventDate = parseDate(event.date);
            return eventDate && eventDate >= today;
        });
        
        // Skip competition if all events have passed
        if (!hasFutureEvents) {
            return;
        }
        
        const section = document.createElement('div');
        section.className = 'competition-section';
        
        const title = document.createElement('div');
        title.className = 'competition-title';
        title.textContent = competition.location;
        
        const dates = document.createElement('div');
        dates.className = 'competition-dates';
        dates.textContent = competition.dates;
        
        const table = document.createElement('table');
        table.className = 'schedule-table';
        
        let html = `
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Event</th>
                    <th>SVT Broadcast</th>
                </tr>
            </thead>
            <tbody>
        `;
        
        competition.events.forEach(event => {
            const eventDate = parseDate(event.date);
            
            // Skip events that have already occurred
            if (!eventDate || eventDate < today) {
                return;
            }
            
            const isNextEvent = nextEventDate && eventDate && 
                               eventDate.getTime() === nextEventDate.getTime();
            const rowClass = isNextEvent ? ' class="next-event"' : '';
            
            // Format date to Swedish format
            const formattedDate = formatDateSwedish(eventDate);
            
            event.races.forEach((race, index) => {
                html += `
                    <tr${rowClass}>
                        <td>${index === 0 ? formattedDate : ''}</td>
                        <td>${race.name}</td>
                        <td>${race.tv}</td>
                    </tr>
                `;
            });
        });
        
        html += `</tbody>`;
        table.innerHTML = html;
        
        section.appendChild(title);
        section.appendChild(dates);
        section.appendChild(table);
        container.appendChild(section);
    });
    
    return container;
}

// Function to display NFL schedule
function displaySchedule(schedule) {
    scheduleContainer.innerHTML = '';
    const table = createNFLTable(schedule);
    scheduleContainer.appendChild(table);
}

// Function to display biathlon schedule
function displayBiathlonSchedule(schedule) {
    scheduleContainer.innerHTML = '';
    const tables = createBiathlonTables(schedule);
    scheduleContainer.appendChild(tables);
}

// Function to create Handball League table
function createHandballLeagueTable(schedule) {
    const table = document.createElement('table');
    table.className = 'schedule-table';
    
    // Find next match
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let nextMatchIndex = -1;
    for (let i = 0; i < schedule.length; i++) {
        const matchDate = parseDate(schedule[i].date);
        if (matchDate && matchDate >= today) {
            nextMatchIndex = i;
            break;
        }
    }
    
    let html = `
        <caption>IFK Kristianstad 2025/2026</caption>
        <thead>
            <tr>
                <th>Datum</th>
                <th>Tid</th>
                <th>Hemmalag</th>
                <th>Bortalag</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    schedule.forEach((game, index) => {
        // Skip matches that have already occurred
        const matchDate = parseDate(game.date);
        if (!matchDate || matchDate < today) {
            return;
        }
        
        const isNextMatch = index === nextMatchIndex;
        const rowClass = isNextMatch ? ' class="next-event"' : '';
        
        // Format date to Swedish format
        const formattedDate = formatDateSwedish(matchDate);
        
        html += `
            <tr${rowClass}>
                <td>${formattedDate}</td>
                <td>${game.time}</td>
                <td>${game.home}</td>
                <td>${game.away}</td>
            </tr>
        `;
    });
    
    html += `</tbody>`;
    table.innerHTML = html;
    return table;
}

// Function to display Handball League schedule
function displayHandballLeagueSchedule(schedule) {
    scheduleContainer.innerHTML = '';
    const table = createHandballLeagueTable(schedule);
    scheduleContainer.appendChild(table);
}

// Function to create Allsvenskan table
function createAllsvenskanTable(schedule) {
    const container = document.createElement('div');
    
    // Find next match date for Malmö
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let nextMalmoMatchDate = null;
    for (const round of schedule) {
        for (const match of round.matches) {
            if (match.malmoff) {
                const matchDate = parseDate(match.date);
                if (matchDate && matchDate >= today) {
                    nextMalmoMatchDate = matchDate;
                    break;
                }
            }
        }
        if (nextMalmoMatchDate) break;
    }
    
    schedule.forEach(round => {
        const section = document.createElement('div');
        section.className = 'competition-section';
        
        const title = document.createElement('div');
        title.className = 'competition-title';
        title.textContent = `Omgång ${round.round}`;
        
        const dates = document.createElement('div');
        dates.className = 'competition-dates';
        dates.textContent = round.dates;
        
        const table = document.createElement('table');
        table.className = 'schedule-table';
        
        let html = `
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>Tid</th>
                    <th>Match</th>
                </tr>
            </thead>
            <tbody>
        `;
        
        round.matches.forEach(match => {
            const isMalmoMatch = match.malmoff;
            const matchDate = match.date ? parseDate(match.date) : null;
            const isNextMalmoMatch = nextMalmoMatchDate && matchDate && 
                                     matchDate.getTime() === nextMalmoMatchDate.getTime() && isMalmoMatch;
            
            let rowClass = '';
            if (isNextMalmoMatch) rowClass = 'next-event sweden-match';
            else if (isMalmoMatch) rowClass = 'sweden-match';
            
            // Format date to Swedish format, or show dash if no date
            const formattedDate = matchDate ? formatDateSwedish(matchDate) : '–';
            
            html += `
                <tr${rowClass ? ` class="${rowClass}"` : ''}>
                    <td>${formattedDate}</td>
                    <td>${match.time}</td>
                    <td>${match.home} – ${match.away}</td>
                </tr>
            `;
        });
        
        html += `</tbody>`;
        table.innerHTML = html;
        
        section.appendChild(title);
        section.appendChild(dates);
        section.appendChild(table);
        container.appendChild(section);
    });
    
    return container;
}

// Function to display Allsvenskan schedule
function displayAllsvenskanSchedule(schedule) {
    scheduleContainer.innerHTML = '';
    const tables = createAllsvenskanTable(schedule);
    scheduleContainer.appendChild(tables);
}

// Function to create Svenska Cupen table
function createSvenskaCupenTable(schedule) {
    const table = document.createElement('table');
    table.className = 'schedule-table';
    
    // Find next match
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let nextMatchDate = null;
    for (let i = 0; i < schedule.length; i++) {
        const matchDate = parseDate(schedule[i].date);
        if (matchDate && matchDate >= today) {
            nextMatchDate = matchDate;
            break;
        }
    }
    
    let html = `
        <caption>Svenska Cupen 2026 - Gruppspel</caption>
        <thead>
            <tr>
                <th>Datum</th>
                <th>Tid</th>
                <th>Match</th>
                <th>Grupp</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    schedule.forEach((game) => {
        // Skip matches that have already occurred
        const matchDate = parseDate(game.date);
        if (!matchDate || matchDate < today) {
            return;
        }
        
        const isNextMatch = nextMatchDate && matchDate && 
                           matchDate.getTime() === nextMatchDate.getTime();
        const isMalmoFFMatch = game.malmoff;
        let rowClass = '';
        if (isNextMatch) rowClass = 'next-event';
        if (isMalmoFFMatch) rowClass = 'sweden-match';
        if (isNextMatch && isMalmoFFMatch) rowClass = 'next-event sweden-match';
        
        // Format date to Swedish format
        const formattedDate = formatDateSwedish(matchDate);
        
        html += `
            <tr${rowClass ? ` class="${rowClass}"` : ''}>
                <td>${formattedDate}</td>
                <td>${game.time}</td>
                <td>${game.match}</td>
                <td>Grupp ${game.group}</td>
            </tr>
        `;
    });
    
    html += `</tbody>`;
    table.innerHTML = html;
    return table;
}

// Function to display Svenska Cupen schedule
function displaySvenskaCupenSchedule(schedule) {
    scheduleContainer.innerHTML = '';
    const table = createSvenskaCupenTable(schedule);
    scheduleContainer.appendChild(table);
}

// Function to create cross country skiing table
function createCrossCountryTable(schedule) {
    const table = document.createElement('table');
    table.className = 'schedule-table';
    
    // Find next race
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let nextRaceIndex = -1;
    for (let i = 0; i < schedule.length; i++) {
        const raceDate = parseDate(schedule[i].date);
        if (raceDate && raceDate >= today) {
            nextRaceIndex = i;
            break;
        }
    }
    
    let html = `
        <caption>Längdskidor - Världscupen 2025/2026</caption>
        <thead>
            <tr>
                <th>Datum</th>
                <th>Ort</th>
                <th>Tid</th>
                <th>Gren</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    schedule.forEach((race, index) => {
        // Skip races that have already occurred
        const raceDate = parseDate(race.date);
        if (!raceDate || raceDate < today) {
            return;
        }
        
        const isNextRace = index === nextRaceIndex;
        const rowClass = isNextRace ? ' class="next-event"' : '';
        
        // Format date to Swedish format
        const formattedDate = formatDateSwedish(raceDate);
        
        html += `
            <tr${rowClass}>
                <td>${formattedDate}</td>
                <td>${race.location}</td>
                <td>${race.time}</td>
                <td>${race.event}</td>
            </tr>
        `;
    });
    
    html += `</tbody>`;
    table.innerHTML = html;
    return table;
}

// Function to display cross country skiing schedule
function displayCrossCountrySchedule(schedule) {
    scheduleContainer.innerHTML = '';
    const table = createCrossCountryTable(schedule);
    scheduleContainer.appendChild(table);
}

// Function to create Ski Classics table
function createSkiClassicsTable(schedule) {
    const table = document.createElement('table');
    table.className = 'schedule-table';
    
    // Find next race
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let nextRaceIndex = -1;
    for (let i = 0; i < schedule.length; i++) {
        const raceDate = parseDate(schedule[i].date);
        if (raceDate && raceDate >= today) {
            nextRaceIndex = i;
            break;
        }
    }
    
    let html = `
        <caption>Ski Classics 2025/2026</caption>
        <thead>
            <tr>
                <th>Datum</th>
                <th>Tid</th>
                <th>Lopp</th>
                <th>Plats</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    schedule.forEach((race, index) => {
        // Skip races that have already occurred
        const raceDate = parseDate(race.date);
        if (!raceDate || raceDate < today) {
            return;
        }
        
        const isNextRace = index === nextRaceIndex;
        const rowClass = isNextRace ? ' class="next-event"' : '';
        
        // Format date to Swedish format
        const formattedDate = formatDateSwedish(raceDate);
        
        html += `
            <tr${rowClass}>
                <td>${formattedDate}</td>
                <td>${race.time}</td>
                <td>${race.event}</td>
                <td>${race.location}</td>
            </tr>
        `;
    });
    
    html += `</tbody>`;
    table.innerHTML = html;
    return table;
}

// Function to display Ski Classics schedule
function displaySkiClassicsSchedule(schedule) {
    scheduleContainer.innerHTML = '';
    const table = createSkiClassicsTable(schedule);
    scheduleContainer.appendChild(table);
}

// Function to create Vinterstudion table
function createVinterstudionTable(schedule) {
    const table = document.createElement('table');
    table.className = 'schedule-table';
    
    // Find next event
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let nextEventDate = null;
    for (let i = 0; i < schedule.length; i++) {
        const eventDate = parseDate(schedule[i].date);
        if (eventDate && eventDate >= today) {
            nextEventDate = eventDate;
            break;
        }
    }
    
    let html = `
        <caption>Vinterstudion 2025/2026 - SVT</caption>
        <thead>
            <tr>
                <th>Datum</th>
                <th>Tid</th>
                <th>Sport / Plats</th>
                <th>Gren</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    schedule.forEach(item => {
        const itemDate = parseDate(item.date);
        
        // Skip events that have already occurred
        if (!itemDate || itemDate < today) {
            return;
        }
        
        const isNextEvent = nextEventDate && itemDate && 
                           itemDate.getTime() === nextEventDate.getTime();
        const rowClass = isNextEvent ? ' class="next-event"' : '';
        
        // Format date to Swedish format
        const formattedDate = formatDateSwedish(itemDate);
        
        html += `
            <tr${rowClass}>
                <td>${formattedDate}</td>
                <td>${item.time}</td>
                <td>${item.sport}</td>
                <td>${item.event}</td>
            </tr>
        `;
    });
    
    html += `</tbody>`;
    table.innerHTML = html;
    return table;
}

// Function to display Vinterstudion schedule
function displayVinterstudionSchedule(schedule) {
    scheduleContainer.innerHTML = '';
    const table = createVinterstudionTable(schedule);
    scheduleContainer.appendChild(table);
}

// Function to create overview table
function createOverviewTable(events, title) {
    const container = document.createElement('div');
    
    // Always create and add the title
    const titleElement = document.createElement('h2');
    titleElement.style.marginBottom = '20px';
    titleElement.style.fontSize = '24px';
    titleElement.style.fontWeight = 'bold';
    
    // If it's today's events and there are events, add the date to the title
    if (title === 'Dagens händelser' && events.length > 0) {
        titleElement.textContent = `${title} (${events[0].dateString})`;
    } else {
        titleElement.textContent = title;
    }
    
    container.appendChild(titleElement);
    
    if (events.length === 0) {
        const noEvents = document.createElement('p');
        noEvents.style.padding = '20px';
        noEvents.style.color = '#666';
        noEvents.textContent = 'Inga händelser';
        container.appendChild(noEvents);
        return container;
    }
    
    const table = document.createElement('table');
    table.className = 'schedule-table';
    
    let html = `
        <thead>
            <tr>
                <th>Tid/TV</th>
                <th>Sport</th>
                <th>Händelse</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    events.forEach(event => {
        const sportWithLocation = event.location && event.location !== '-' 
            ? `${event.sport}, ${event.location}` 
            : event.sport;
        
        const rowClass = event.isHighlightedTeam ? ' class="sweden-match"' : '';
            
        html += `
            <tr${rowClass}>
                <td>${event.time}</td>
                <td>${sportWithLocation}</td>
                <td>${event.description}</td>
            </tr>
        `;
    });
    
    html += `</tbody>`;
    table.innerHTML = html;
    container.appendChild(table);
    return container;
}

// Function to create upcoming events grouped by day
function createUpcomingEventsGroupedByDay(events, title) {
    const container = document.createElement('div');
    
    // Always create and add the main title
    const titleElement = document.createElement('h2');
    titleElement.style.marginBottom = '20px';
    titleElement.style.fontSize = '24px';
    titleElement.style.fontWeight = 'bold';
    titleElement.textContent = title;
    container.appendChild(titleElement);
    
    if (events.length === 0) {
        const noEvents = document.createElement('p');
        noEvents.style.padding = '20px';
        noEvents.style.color = '#666';
        noEvents.textContent = 'Inga händelser';
        container.appendChild(noEvents);
        return container;
    }
    
    // Group events by date
    const eventsByDate = {};
    events.forEach(event => {
        const dateKey = event.date.toDateString();
        if (!eventsByDate[dateKey]) {
            eventsByDate[dateKey] = [];
        }
        eventsByDate[dateKey].push(event);
    });
    
    // Create a section for each date
    Object.keys(eventsByDate).forEach((dateKey, index) => {
        const dayEvents = eventsByDate[dateKey];
        
        // Create date header
        const dateHeader = document.createElement('h3');
        dateHeader.style.marginTop = index > 0 ? '30px' : '10px';
        dateHeader.style.marginBottom = '10px';
        dateHeader.style.fontSize = '18px';
        dateHeader.style.fontWeight = 'bold';
        dateHeader.textContent = dayEvents[0].dateString;
        container.appendChild(dateHeader);
        
        // Create table for this day's events
        const table = document.createElement('table');
        table.className = 'schedule-table';
        
        let html = `
            <thead>
                <tr>
                    <th>Tid/TV</th>
                    <th>Sport</th>
                    <th>Händelse</th>
                </tr>
            </thead>
            <tbody>
        `;
        
        dayEvents.forEach(event => {
            const rowClass = event.isHighlightedTeam ? ' class="sweden-match"' : '';
            
            html += `
                <tr${rowClass}>
                    <td>${event.time}</td>
                    <td>${event.sport}</td>
                    <td>${event.description}</td>
                </tr>
            `;
        });
        
        html += `</tbody>`;
        table.innerHTML = html;
        container.appendChild(table);
    });
    
    return container;
}

// Function to display overview page
function displayOverview() {
    scheduleContainer.innerHTML = '';
    
    const todaysEvents = getTodaysEvents();
    const upcomingEvents = getUpcomingEvents();
    
    // Create container for both sections
    const container = document.createElement('div');
    
    // Special buttons section
    const specialSection = document.createElement('div');
    specialSection.style.marginBottom = '30px';
    specialSection.style.display = 'flex';
    specialSection.style.flexDirection = 'column';
    specialSection.style.gap = '12px';
    
    // NFL Playoffs button (dark blue/football theme) - hidden, event has passed
    /*
    const nflPlayoffsButton = document.createElement('a');
    nflPlayoffsButton.href = 'nfl-playoffs.html';
    nflPlayoffsButton.style.display = 'flex';
    nflPlayoffsButton.style.alignItems = 'center';
    nflPlayoffsButton.style.justifyContent = 'center';
    nflPlayoffsButton.style.gap = '12px';
    nflPlayoffsButton.style.padding = '16px 24px';
    nflPlayoffsButton.style.background = 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)';
    nflPlayoffsButton.style.color = '#fff';
    nflPlayoffsButton.style.borderRadius = '12px';
    nflPlayoffsButton.style.textDecoration = 'none';
    nflPlayoffsButton.style.fontWeight = 'bold';
    nflPlayoffsButton.style.fontSize = '18px';
    nflPlayoffsButton.style.boxShadow = '0 4px 15px rgba(30, 58, 95, 0.3)';
    nflPlayoffsButton.style.transition = 'transform 0.2s, box-shadow 0.2s';
    nflPlayoffsButton.innerHTML = '<span style="font-size: 24px;">🏈</span> NFL Playoff Bracket 2026';
    nflPlayoffsButton.onmouseenter = function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(30, 58, 95, 0.4)';
    };
    nflPlayoffsButton.onmouseleave = function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(30, 58, 95, 0.3)';
    };
    
    specialSection.appendChild(nflPlayoffsButton);
    */
    
    // Mystery button - Herrgårdens Hemlighet (hidden)
    /*
    const mysteryButton = document.createElement('a');
    mysteryButton.href = 'mystery-2.html';
    mysteryButton.style.display = 'flex';
    mysteryButton.style.alignItems = 'center';
    mysteryButton.style.justifyContent = 'center';
    mysteryButton.style.gap = '12px';
    mysteryButton.style.padding = '16px 24px';
    mysteryButton.style.background = 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)';
    mysteryButton.style.color = '#fff';
    mysteryButton.style.borderRadius = '12px';
    mysteryButton.style.textDecoration = 'none';
    mysteryButton.style.fontWeight = 'bold';
    mysteryButton.style.fontSize = '18px';
    mysteryButton.style.boxShadow = '0 4px 15px rgba(109, 40, 217, 0.3)';
    mysteryButton.style.transition = 'transform 0.2s, box-shadow 0.2s';
    mysteryButton.innerHTML = '<span style="font-size: 24px;">📜</span> Herrgårdens Hemlighet';
    mysteryButton.onmouseenter = function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(109, 40, 217, 0.4)';
    };
    mysteryButton.onmouseleave = function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(109, 40, 217, 0.3)';
    };
    
    specialSection.appendChild(mysteryButton);
    */
    container.appendChild(specialSection);
    
    // Today's events section
    const todaySection = document.createElement('div');
    todaySection.style.marginBottom = '50px';
    const todayTable = createOverviewTable(todaysEvents, 'Dagens händelser');
    todaySection.appendChild(todayTable);
    container.appendChild(todaySection);
    
    // Upcoming events section (grouped by day)
    const upcomingSection = document.createElement('div');
    const upcomingView = createUpcomingEventsGroupedByDay(upcomingEvents, 'Kommande händelser (7 dagar)');
    upcomingSection.appendChild(upcomingView);
    container.appendChild(upcomingSection);
    
    scheduleContainer.appendChild(container);
}

// Initialize the page
function init() {
    try {
        // Show overview by default
        setTimeout(() => {
            displayOverview();
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

// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const teamSelector = document.getElementById('teamSelector');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('open');
        teamSelector.classList.toggle('open');
    });
}

// Team selector functionality
document.querySelectorAll('.team-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.team-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Close mobile menu after selection
        if (menuToggle && window.innerWidth <= 768) {
            menuToggle.classList.remove('open');
            teamSelector.classList.remove('open');
        }
        
        // Get selected sport
        const sport = this.dataset.team;
        
        // Show loading
        scheduleContainer.innerHTML = '<div class="loading"><div class="spinner"></div><p>Laddar schema...</p></div>';
        
        // Display appropriate schedule
        setTimeout(() => {
            if (sport === 'overview') {
                displayOverview();
            } else if (sport === 'vinterstudion') {
                displayVinterstudionSchedule(vinterstudionSchedule);
            } else if (sport === 'packers') {
                displaySchedule(packersSchedule);
            } else if (sport === 'biathlon') {
                displayBiathlonSchedule(biathlonSchedule);
            } else if (sport === 'crosscountry') {
                displayCrossCountrySchedule(crossCountrySchedule);
            } else if (sport === 'skiclassics') {
                displaySkiClassicsSchedule(skiClassicsSchedule);
            } else if (sport === 'handball-league') {
                displayHandballLeagueSchedule(handballLeagueSchedule);
            } else if (sport === 'allsvenskan') {
                displayAllsvenskanSchedule(allsvenskanSchedule);
            } else if (sport === 'svenska-cupen') {
                displaySvenskaCupenSchedule(svenskaCupenSchedule);
            }
        }, 500);
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

