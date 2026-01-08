export const nearbyStarSystemsData = [
    {
        name: "Alpha Centauri",
        nameCH: "半人馬座 α",
        distanceFromSun: 276000,
        position: { x: -103000, y: -241000, z: -86000 },
        stars: [
            {
                name: "Alpha Centauri A",
                nameCH: "南門二 A",
                type: "star",
                radius: 1.1,
                color: 0xfff4e1,
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
                },
                planets: [
                    {
                        name: "Alpha Centauri B",
                        nameCH: "南門二 B",
                        type: "star",
                        radius: 0.86,
                        color: 0xffd2a1,
                        texture: "alphacentauri_b.png",
                        orbit: { radius: 1265, inclination: 15, speed: 0.2 },
                        description: "半人馬座 α B（南門二 B）是系統中的第二顆恆星，顏色稍橘，屬於 K 型主序星。",
                        details: { "質量": "0.907 太陽質量", "表面溫度": "5,260 K", "光譜類型": "K1V" }
                    }
                ]
            },
            {
                name: "Proxima Centauri",
                nameCH: "比鄰星",
                type: "star",
                radius: 0.15,
                color: 0xff4500,
                texture: "proxima.png",
                emissiveIntensity: 0.8,
                position: { x: -9912, y: 0, z: 0 },
                orbit: { radius: 9912, inclination: 45, speed: 0.05 },
                description: "比鄰星是一顆紅矮星，是目前已知距離太陽最近的個別恆星。",
                details: {
                    "質量": "0.122 太陽質量",
                    "表面溫度": "3,042 K",
                    "光譜類型": "M6Ve",
                    "距離": "4.24 光年"
                },
                planets: [
                    {
                        name: "Proxima Centauri d",
                        nameCH: "比鄰星 d",
                        type: "planet",
                        radius: 0.1,
                        color: 0x8b4513,
                        texture: "proxima_d.png",
                        orbit: { radius: 15, speed: 1.5, inclination: 0 },
                        description: "岩石行星，公轉週期僅 5.1 天。",
                        details: { "質量": "0.26 地球質量", "距離恆星": "0.029 AU" }
                    },
                    {
                        name: "Proxima Centauri b",
                        nameCH: "比鄰星 b",
                        type: "planet",
                        radius: 0.2,
                        color: 0xcd5c5c,
                        texture: "proxima_b.png",
                        orbit: { radius: 30, speed: 0.8, inclination: 0 },
                        description: "適居帶內的類地行星。",
                        details: { "質量": "1.07 地球質量", "距離恆星": "0.048 AU" }
                    }
                ]
            }
        ]
    },
    {
        name: "Barnard's Star",
        nameCH: "巴納德星",
        distanceFromSun: 376916,
        position: { x: -3600, y: -375400, z: 30800 },
        stars: [
            {
                name: "Barnard's Star",
                nameCH: "巴納德星",
                type: "star",
                radius: 0.196,
                color: 0xff4500,
                texture: "barnard_star.png",
                emissiveIntensity: 0.8,
                position: { x: 0, y: 0, z: 0 },
                description: "巴納德星是一顆紅矮星，擁有已知最快的自行運動。",
                details: { "質量": "0.144 太陽質量", "表面溫度": "3,134 K", "光譜類型": "M4V", "距離": "5.96 光年" }
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
                radius: 0.16,
                color: 0xff3300,
                texture: "wolf359.png",
                emissiveIntensity: 0.7,
                position: { x: 0, y: 0, z: 0 },
                description: "極暗淡且質量最低、活躍的閃焰星。",
                details: { "質量": "0.09 太陽質量", "表面溫度": "2,800 K", "光譜類型": "M6.5Ve", "距離": "7.86 光年" }
            }
        ]
    },
    {
        name: "Sirius",
        nameCH: "天狼星系",
        distanceFromSun: 543873,
        position: { x: -102000, y: -156000, z: 510000 },
        stars: [
            {
                name: "Sirius A",
                nameCH: "天狼星 A",
                type: "star",
                radius: 1.711,
                color: 0xbbccff,
                texture: "sirius_a.png",
                emissiveIntensity: 2.0,
                position: { x: 0, y: 0, z: 0 },
                description: "全天最亮的恆星。",
                details: { "質量": "2.06 太陽質量", "表面溫度": "9,940 K", "光譜類型": "A1V", "距離": "8.6 光年" },
                planets: [
                    {
                        name: "Sirius B",
                        nameCH: "天狼星 B",
                        type: "star",
                        radius: 0.1,
                        color: 0xffffff,
                        texture: "sirius_b.png",
                        orbit: { radius: 1100, inclination: 20, speed: 0.1 },
                        description: "著名的白矮星伴星。",
                        details: { "質量": "1.02 太陽質量", "表面溫度": "25,200 K", "光譜類型": "DA2" }
                    }
                ]
            }
        ]
    },
    {
        name: "Epsilon Eridani",
        nameCH: "天苑四",
        distanceFromSun: 661264,
        position: { x: 389800, y: 522300, z: -108400 },
        stars: [
            {
                name: "Epsilon Eridani",
                nameCH: "天苑四",
                type: "star",
                radius: 0.74,
                color: 0xffa500,
                texture: "epsilon_eridani.png",
                emissiveIntensity: 1.2,
                position: { x: 0, y: 0, z: 0 },
                description: "年輕的類太陽恆星，擁有兩個碎屑盤。",
                details: { "質量": "0.82 太陽質量", "表面溫度": "5,084 K", "光譜類型": "K2V", "距離": "10.47 光年" },
                planets: [
                    {
                        name: "Epsilon Eridani b",
                        nameCH: "天苑四 b",
                        type: "planet",
                        radius: 1.2,
                        color: 0x4682b4,
                        texture: "epsilon_eridani_b.png",
                        orbit: { radius: 600, speed: 0.15, inclination: 30 },
                        description: "氣態巨行星。",
                        details: { "質量": "1.55 木星質量", "公轉週期": "7.3 年" }
                    }
                ],
                belts: [
                    { nameCH: "內碎屑盤", minRadius: 5500, maxRadius: 6500, count: 1000, color: 0x888888, opacity: 0.6 },
                    { nameCH: "外碎屑盤", minRadius: 10500, maxRadius: 12500, count: 1500, color: 0x778899, opacity: 0.5 }
                ]
            }
        ]
    },
    {
        name: "Lacaille 9352",
        nameCH: "拉卡伊 9352",
        distanceFromSun: 678000,
        position: { x: 500000, y: -400000, z: -250000 },
        stars: [
            {
                name: "Lacaille 9352",
                nameCH: "拉卡伊 9352",
                type: "star",
                radius: 0.46,
                color: 0xff5a00,
                texture: "lacaille9352.png",
                emissiveIntensity: 0.9,
                position: { x: 0, y: 0, z: 0 },
                description: "高自行的明亮紅矮星。",
                details: { "質量": "0.48 太陽質量", "直徑": "0.46 太陽直徑", "光譜類型": "M0.5V", "距離": "10.74 光年" }
            }
        ]
    },
    {
        name: "Castor",
        nameCH: "北河二 (雙子座 α)",
        distanceFromSun: 3225291,
        position: { x: 1500000, y: 1200000, z: -2500000 },
        stars: [
            {
                name: "Castor Systems Barycenter",
                nameCH: "北河二總質心",
                type: "star",
                radius: 0,
                position: { x: 0, y: 0, z: 0 },
                planets: [
                    {
                        name: "Castor AB Barycenter",
                        nameCH: "北河二 AB 共同質心",
                        type: "star",
                        radius: 0,
                        orbit: { radius: 15000, speed: 0.05, inclination: 10, startAngle: 0 },
                        planets: [
                            {
                                name: "Castor A Barycenter",
                                nameCH: "北河二 A 系統質心",
                                type: "star",
                                radius: 0,
                                orbit: { radius: 6000, speed: 0.1, inclination: 5, startAngle: 0 },
                                planets: [
                                    {
                                        name: "Castor A1 (Aa)",
                                        nameCH: "北河二 A1",
                                        type: "star",
                                        radius: 2.3,
                                        color: 0xffffff,
                                        texture: "castor_a.png",
                                        orbit: { radius: 600, speed: 0.6, inclination: 0, startAngle: 0 },
                                        description: "A1V 型藍白主序星。",
                                        details: { "質量": "2.76 太陽質量", "光譜類型": "A1V" }
                                    },
                                    {
                                        name: "Castor A2 (Ab)",
                                        nameCH: "北河二 A2",
                                        type: "star",
                                        radius: 0.5,
                                        color: 0xff4500,
                                        texture: "castor_c.png",
                                        orbit: { radius: 600, speed: 0.6, inclination: 0, startAngle: Math.PI },
                                        description: "與 A1 互繞的紅矮星，週期約 9.2 天。",
                                        details: { "光譜類型": "dM1e", "公轉週期": "9.2 天" }
                                    }
                                ]
                            },
                            {
                                name: "Castor B Barycenter",
                                nameCH: "北河二 B 系統質心",
                                type: "star",
                                radius: 0,
                                orbit: { radius: 6000, speed: 0.1, inclination: 5, startAngle: Math.PI },
                                planets: [
                                    {
                                        name: "Castor B1 (Ba)",
                                        nameCH: "北河二 B1",
                                        type: "star",
                                        radius: 1.6,
                                        color: 0xffffff,
                                        texture: "castor_a.png",
                                        orbit: { radius: 500, speed: 0.8, inclination: 0, startAngle: 0 },
                                        description: "A5V 型白主序星。",
                                        details: { "質量": "2.14 太陽質量", "光譜類型": "A5V" }
                                    },
                                    {
                                        name: "Castor B2 (Bb)",
                                        nameCH: "北河二 B2",
                                        type: "star",
                                        radius: 0.4,
                                        color: 0xff4500,
                                        texture: "castor_c.png",
                                        orbit: { radius: 500, speed: 0.8, inclination: 0, startAngle: Math.PI },
                                        description: "與 B1 互繞的紅矮星，週期約 2.9 天。",
                                        details: { "光譜類型": "dM1e", "公轉週期": "2.9 天" }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Castor C Barycenter",
                        nameCH: "北河二 C 系統質心",
                        type: "star",
                        radius: 0,
                        orbit: { radius: 180000, speed: 0.005, inclination: 35, startAngle: Math.PI },
                        planets: [
                            {
                                name: "Castor C1 (Ca)",
                                nameCH: "北河二 C1",
                                type: "star",
                                radius: 0.62,
                                color: 0xff4500,
                                texture: "castor_c.png",
                                orbit: { radius: 800, speed: 1.2, inclination: 0, startAngle: 0 },
                                description: "YY Gem 紅矮星。",
                                details: { "質量": "0.6 太陽質量", "光譜類型": "M0.5Ve" }
                            },
                            {
                                name: "Castor C2 (Cb)",
                                nameCH: "北河二 C2",
                                type: "star",
                                radius: 0.62,
                                color: 0xff4500,
                                texture: "castor_c.png",
                                orbit: { radius: 800, speed: 1.2, inclination: 0, startAngle: Math.PI },
                                description: "互繞週期僅 19.5 小時。",
                                details: { "光譜類型": "M0.5Ve", "公轉週期": "19.5 小時" }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
