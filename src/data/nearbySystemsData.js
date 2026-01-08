export const nearbyStarSystemsData = [
    {
        name: "Alpha Centauri",
        nameCH: "半人馬座 α",
        distanceFromSun: 276000, // Roughly 4.37 light years in AU/Units
        position: { x: -103000, y: -241000, z: -86000 }, // Exact astronomical vector relative to Sun
        stars: [
            {
                name: "Alpha Centauri A",
                nameCH: "南門二 A",
                type: "star",
                radius: 1.1, // Solar radii
                color: 0xfff4e1, // Warm white (G2V)
                texture: "alphacentauri_a.png",
                emissiveIntensity: 1.5,
                position: { x: 0, y: 0, z: 0 },
                description: "半人馬座 α A（南門二 A）是系統中的主星，其光譜類型 G2V 與太陽極其相似，是全天第四亮的恆星。",
                details: {
                    "質量": "1.100 太陽質量",
                    "直徑": "1.217 太陽直徑",
                    "表面溫度": "5,790 K",
                    "光譜類型": "G2V",
                    "距離": "4.37 光年"
                }
            },
            {
                name: "Alpha Centauri B",
                nameCH: "南門二 B",
                type: "star",
                radius: 0.86, // Solar radii
                color: 0xffd2a1, // Pale orange (K1V)
                texture: "alphacentauri_b.png",
                emissiveIntensity: 1.2,
                position: { x: 1265, y: 0, z: 0 }, // Positioned exactly on orbit radius
                orbit: { radius: 1265, inclination: 15, speed: 0.2 },
                description: "半人馬座 α B（南門二 B）是系統中的第二顆恆星，顏色稍橘，屬於 K 型主序星。",
                details: {
                    "質量": "0.907 太陽質量",
                    "直徑": "0.865 太陽直徑",
                    "表面溫度": "5,260 K",
                    "光譜類型": "K1V",
                    "距離": "4.37 光年"
                }
            },
            {
                name: "Proxima Centauri",
                nameCH: "比鄰星",
                type: "star",
                radius: 0.15, // Red dwarf size
                color: 0xff4500, // Deep red (M6Ve)
                texture: "proxima.png",
                emissiveIntensity: 0.8,
                position: { x: -9912, y: 0, z: 0 }, // Positioned exactly on orbit radius
                orbit: { radius: 9912, inclination: 45, speed: 0.05 },
                description: "比鄰星是一顆紅矮星，是目前已知距離太陽最近的個別恆星。它擁有至少三顆已被證實或候選的行星。",
                details: {
                    "質量": "0.122 太陽質量",
                    "直徑": "0.154 太陽直徑",
                    "表面溫度": "3,042 K",
                    "光譜類型": "M6Ve",
                    "距離": "4.24 光年"
                },
                planets: [
                    {
                        name: "Proxima Centauri d",
                        nameCH: "比鄰星 d",
                        type: "planet",
                        radius: 0.1, // Approx 0.26 Earth radius
                        color: 0x8b4513,
                        texture: "proxima_d.png",
                        orbit: { radius: 15, speed: 1.5, inclination: 0 }, // Very close
                        description: "一顆極靠近恆星的岩石行星，公轉週期僅 5.1 天。",
                        details: { "質量": "0.26 地球質量", "距離恆星": "0.029 AU" }
                    },
                    {
                        name: "Proxima Centauri b",
                        nameCH: "比鄰星 b",
                        type: "planet",
                        radius: 0.2, // Approx 1.07 Earth radius
                        color: 0xcd5c5c,
                        texture: "proxima_b.png",
                        orbit: { radius: 30, speed: 0.8, inclination: 0 },
                        description: "位於適居帶內的類地行星，是尋找外星生命的首選目標。",
                        details: { "質量": "1.07 地球質量", "距離恆星": "0.048 AU" }
                    },
                    {
                        name: "Proxima Centauri c",
                        nameCH: "比鄰星 c",
                        type: "planet",
                        radius: 0.5, // Super-Earth / Mini-Neptune
                        color: 0x483d8b,
                        texture: "proxima_c.png",
                        orbit: { radius: 150, speed: 0.05, inclination: 10 },
                        description: "一顆距離較遠的寒冷超級地球，公轉週期約 5.2 年。",
                        details: { "質量": "7 地球質量", "距離恆星": "1.48 AU" }
                    }
                ]
            }
        ]
    },
    {
        name: "Barnard's Star",
        nameCH: "巴納德星",
        distanceFromSun: 376916, // 5.96 Light years in units
        position: { x: -3600, y: -375400, z: 30800 },
        stars: [
            {
                name: "Barnard's Star",
                nameCH: "巴納德星",
                type: "star",
                radius: 0.196, // Solar radii
                color: 0xff4500, // Red dwarf
                texture: "barnard_star.png",
                emissiveIntensity: 0.8,
                position: { x: 0, y: 0, z: 0 },
                description: "巴納德星是一顆位於蛇夫座的紅矮星，是目前已知自行運動最快的恆星（自行運動指恆星相對於太陽的運動）。",
                details: {
                    "質量": "0.144 太陽質量",
                    "直徑": "0.196 太陽直徑",
                    "表面溫度": "3,134 K",
                    "光譜類型": "M4V",
                    "距離": "5.96 光年"
                }
            }
        ]
    },
    {
        name: "Wolf 359",
        nameCH: "沃夫 359",
        distanceFromSun: 497000,
        position: { x: -472150, y: 134190, z: 59640 },
        stars: [
            {
                name: "Wolf 359",
                nameCH: "沃夫 359",
                type: "star",
                radius: 0.16, // Solar radii
                color: 0xff3300, // Very cool red dwarf
                texture: "wolf359.png",
                emissiveIntensity: 0.7,
                position: { x: 0, y: 0, z: 0 },
                description: "沃夫 359 是一顆位於獅子座的紅矮星，距離太陽約 7.86 光年。它是最暗淡且質量最低的恆星之一，同時也是一顆非常活躍的噴發變星（閃焰星）。",
                details: {
                    "質量": "0.09 太陽質量",
                    "直徑": "0.16 太陽直徑",
                    "表面溫度": "2,800 K",
                    "光度": "0.001 太陽光度",
                    "光譜類型": "M6.5Ve",
                    "距離": "7.86 光年"
                }
            }
        ]
    },
    {
        name: "Lalande 21185",
        nameCH: "拉蘭德 21185",
        distanceFromSun: 525500, // 8.31 Light years in units
        position: { x: -412185, y: 308468, z: 104156 },
        stars: [
            {
                name: "Lalande 21185",
                nameCH: "拉蘭德 21185",
                type: "star",
                radius: 0.39, // Solar radii
                color: 0xff6600, // Warm M2V orange-red
                texture: "lalande21185.png",
                emissiveIntensity: 0.9,
                position: { x: 0, y: 0, z: 0 },
                description: "拉蘭德 21185 是一顆位於大熊座的紅矮星。它是北天球距離太陽最近的紅矮星，也是已知體積和質量較大的紅矮星之一，亮度比典型的紅矮星高。",
                details: {
                    "質量": "0.46 太陽質量",
                    "直徑": "0.39 太陽直徑",
                    "表面溫度": "3,828 K",
                    "光度": "0.025 太陽光度",
                    "光譜類型": "M2V",
                    "距離": "8.31 光年"
                }
            }
        ]
    },
    {
        name: "Sirius",
        nameCH: "天狼星系",
        distanceFromSun: 543873, // 8.6 Light years in units
        position: { x: -102000, y: -156000, z: 510000 },
        stars: [
            {
                name: "Sirius A",
                nameCH: "天狼星 A",
                type: "star",
                radius: 1.711, // Solar radii
                color: 0xbbccff,
                texture: "sirius_a.png",
                emissiveIntensity: 2.0,
                position: { x: 0, y: 0, z: 0 },
                description: "天狼星 A 是全天最亮的恆星，光譜型為 A1V。它是一顆白色的主序星，亮度約為太陽的 25 倍。",
                details: {
                    "質量": "2.06 太陽質量",
                    "直徑": "1.71 太陽直徑",
                    "表面溫度": "9,940 K",
                    "光度": "25.4 太陽光度",
                    "光譜類型": "A1V",
                    "距離": "8.6 光年"
                }
            },
            {
                name: "Sirius B",
                nameCH: "天狼星 B",
                type: "star",
                radius: 0.1, // Solar radii (Enhanced for visibility, actual 0.0084)
                color: 0xffffff,
                texture: "sirius_b.png",
                emissiveIntensity: 1.0,
                position: { x: 1100, y: 0, z: 0 },
                orbit: { radius: 1100, inclination: 20, speed: 0.1 },
                description: "天狼星 B 是一顆與天狼星 A 成聯星系統的白矮星。它是已知第一顆被發現的白矮星，雖然體積只有地球大小，但質量與太陽相當。",
                details: {
                    "質量": "1.02 太陽質量",
                    "直徑": "0.0084 太陽直徑",
                    "表面溫度": "25,200 K",
                    "光度": "0.026 太陽光度",
                    "光譜類型": "DA2",
                    "距離": "8.6 光年"
                }
            }
        ]
    },
    {
        name: "Luyten 726-8",
        nameCH: "魯坦 726-8",
        distanceFromSun: 550000, // 8.7 Light years in units
        position: { x: 120000, y: -500000, z: -150000 },
        stars: [
            {
                name: "BL Ceti",
                nameCH: "鯨魚座 BL (魯坦 726-8 A)",
                type: "star",
                radius: 0.14, // Solar radii
                color: 0xff4d00,
                texture: "luyten726_8a.png",
                emissiveIntensity: 0.8,
                position: { x: 0, y: 0, z: 0 },
                description: "鯨魚座 BL 是拉蘭德 726-8 聯星系統的主星，是一顆光譜型 M5.5 的紅矮星。",
                details: {
                    "質量": "0.102 太陽質量",
                    "直徑": "0.14 太陽直徑",
                    "表面溫度": "2,670 K",
                    "光度": "0.0006 太陽光度",
                    "光譜類型": "M5.5V",
                    "距離": "8.72 光年"
                }
            },
            {
                name: "UV Ceti",
                nameCH: "鯨魚座 UV (魯坦 726-8 B)",
                type: "star",
                radius: 0.14, // Solar radii
                color: 0xff3300,
                texture: "luyten726_8b.png",
                emissiveIntensity: 1.0,
                position: { x: 800, y: 0, z: 0 },
                orbit: { radius: 800, inclination: 35, speed: 0.15 },
                description: "鯨魚座 UV 是著名的閃焰星原型，屬於光譜型 M6.0 的紅矮星。它會頻繁發生極其劇烈的能量噴發，在幾分鐘內亮度增加數十倍。",
                details: {
                    "質量": "0.100 太陽質量",
                    "直徑": "0.14 太陽直徑",
                    "表面溫度": "2,600 K",
                    "光度": "0.0004 太陽光度",
                    "光譜類型": "M6.0V",
                    "距離": "8.72 光年"
                }
            }
        ]
    }
];
