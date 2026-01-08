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
        name: "Ross 154",
        nameCH: "羅斯 154",
        distanceFromSun: 611800,
        position: { x: -300000, y: -450000, z: -314000 },
        stars: [
            {
                name: "Ross 154",
                nameCH: "羅斯 154",
                type: "star",
                radius: 0.24,
                color: 0xff3d00,
                texture: "ross154.png",
                emissiveIntensity: 0.8,
                position: { x: 0, y: 0, z: 0 },
                description: "位於人馬座的紅矮星，活躍的閃焰星。",
                details: { "質量": "0.17 太陽質量", "表面溫度": "3,340 K", "光度": "0.0038 太陽光度", "光譜類型": "M3.5Ve" }
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
                description: "擁有複雜碎屑盤系統的年輕類太陽恆星。",
                details: { "質量": "0.82 太陽質量", "表面溫度": "5,084 K", "光譜類型": "K2V" },
                belts: [
                    { nameCH: "內碎屑盤", minRadius: 5500, maxRadius: 6500, count: 1000, color: 0x888888, opacity: 0.6 },
                    { nameCH: "外碎屑盤", minRadius: 10500, maxRadius: 12500, count: 1500, color: 0x778899, opacity: 0.5 }
                ]
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
                name: "Castor Total Barycenter",
                nameCH: "北河二總系質心",
                type: "star",
                radius: 0,
                position: { x: 0, y: 0, z: 0 },
                planets: [
                    {
                        name: "Castor AB Barycenter",
                        nameCH: "北河二 AB 共同體",
                        type: "star",
                        radius: 0,
                        orbit: { radius: 100000, speed: 0.005, inclination: 10, startAngle: 0 },
                        planets: [
                            {
                                name: "Castor A Barycenter",
                                nameCH: "北河二 A 質心",
                                type: "star",
                                radius: 0,
                                orbit: { radius: 15000, speed: 0.1, inclination: 5, startAngle: 0 },
                                planets: [
                                    {
                                        name: "Castor A1 (Aa)",
                                        nameCH: "北河二 A1",
                                        type: "star",
                                        radius: 2.3,
                                        color: 0xffffff,
                                        texture: "castor_a.png",
                                        orbit: { radius: 800, speed: 0.6, inclination: 0, startAngle: 0 },
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
                                        orbit: { radius: 800, speed: 0.6, inclination: 0, startAngle: Math.PI },
                                        description: "紅矮星伴星，週期 9.2 天。",
                                        details: { "光譜類型": "dM1e", "公轉週期": "9.2 天" }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Castor C Barycenter",
                        nameCH: "北河二 C 質心",
                        type: "star",
                        radius: 0,
                        orbit: { radius: 100000, speed: 0.005, inclination: 10, startAngle: Math.PI },
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
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Scorpius X-1",
        nameCH: "天蠍座 X-1",
        distanceFromSun: 569000000, // ~9000 ly
        position: { x: 200000000, y: -450000000, z: 250000000 },
        stars: [
            {
                name: "Scorpius X-1 (Neutron Star)",
                nameCH: "天蠍座 X-1 (中子星)",
                type: "star",
                radius: 0.1,
                color: 0xe0ffff,
                emissiveIntensity: 5.0,
                hasAccretionDisk: true,
                diskColor: 0x00ccff,
                position: { x: 0, y: 0, z: 0 },
                description: "天蠍座 X-1 是一個 X 射線聯星系統，核心是一顆極其緻密的中子星，正不斷吸取伴星的質量並形成耀眼的吸積盤。",
                details: {
                    "類型": "低質量 X 射線聯星",
                    "核心天體": "中子星",
                    "視星等": "12.2",
                    "距離": "9,000 光年",
                    "首例發現": "1962 年"
                },
                planets: [
                    {
                        name: "V818 Scorpii",
                        nameCH: "天蠍座 V818",
                        type: "star",
                        radius: 1.2,
                        color: 0x4169e1,
                        isDistorted: true,
                        distortionAxes: { x: 2.2, y: 1.0, z: 1.0 }, // Teardrop effect
                        orbit: { radius: 3000, speed: 2.5, inclination: 30, startAngle: 0 },
                        description: "受中子星強大引力影響，這顆恆星已被潮汐力拉伸成顯著的淚滴狀，物質正通往質點流向中子星。",
                        details: {
                            "質量": "~0.4 太陽質量",
                            "週期": "18.9 小時",
                            "形狀": "潮汐畸變 (淚滴狀)",
                            "光譜": "低質量伴星"
                        }
                    }
                ]
            }
        ]
    }
];
