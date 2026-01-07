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
                emissiveIntensity: 1.2,
                position: { x: 1265, y: 0, z: 0 }, // Positioned exactly on orbit radius
                orbit: { radius: 1265, inclination: 15 },
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
                emissiveIntensity: 0.8,
                position: { x: -9912, y: 0, z: 0 }, // Positioned exactly on orbit radius
                orbit: { radius: 9912, inclination: 45 },
                description: "比鄰星是一顆紅矮星，是目前已知距離太陽最近的個別恆星。它擁有至少兩顆行星，其中一顆位於適居帶內。",
                details: {
                    "質量": "0.122 太陽質量",
                    "直徑": "0.154 太陽直徑",
                    "表面溫度": "3,042 K",
                    "光譜類型": "M6Ve",
                    "距離": "4.24 光年"
                }
            }
        ]
    }
];
