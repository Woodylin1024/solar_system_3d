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
                description: "半人馬座 α A 是該三合星系統中的主星，其光譜類型與太陽極其相似。"
            },
            {
                name: "Alpha Centauri B",
                nameCH: "南門二 B",
                type: "star",
                radius: 0.86, // Solar radii
                color: 0xffd2a1, // Pale orange (K1V)
                emissiveIntensity: 1.2,
                position: { x: 1200, y: 100, z: 400 }, // Scaled separation
                orbit: { radius: 1265, inclination: 15 },
                description: "半人馬座 α B 是系統中的第二顆恆星，顏色稍橘，體積略小於太陽。"
            },
            {
                name: "Proxima Centauri",
                nameCH: "比鄰星",
                type: "star",
                radius: 0.15, // Red dwarf size
                color: 0xff4500, // Deep red (M6Ve)
                emissiveIntensity: 0.8,
                position: { x: -8000, y: -2000, z: -5500 }, // Much further out
                orbit: { radius: 9912, inclination: 45 },
                description: "比鄰星是距離太陽最近的單一恆星，也是一個紅矮星。"
            }
        ]
    }
];
