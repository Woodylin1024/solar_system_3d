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
    }
];
