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
                    "表面溫度": "5,790 K",
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
                        orbit: { radius: 1265, inclination: 15, speed: 0.1 },
                        description: "半人馬座 α B（南門二 B）是系統中的第二顆恆星。",
                        details: { "質量": "0.907 太陽質量", "表面溫度": "5,260 K" }
                    }
                ]
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
                details: { "質量": "2.06 太陽質量", "表面溫度": "9,940 K", "光譜類型": "A1V" },
                planets: [
                    {
                        name: "Sirius B",
                        nameCH: "天狼星 B",
                        type: "star",
                        radius: 0.1,
                        color: 0xffffff,
                        texture: "sirius_b.png",
                        orbit: { radius: 1100, inclination: 20, speed: 0.05 },
                        description: "著名的白矮星伴星。",
                        details: { "質量": "1.02 太陽質量", "表面溫度": "25,200 K" }
                    }
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
                                orbit: { radius: 15000, speed: 0.05, inclination: 5, startAngle: 0 },
                                planets: [
                                    {
                                        name: "Castor A1 (Aa)",
                                        nameCH: "北河二 A1",
                                        type: "star",
                                        radius: 2.3,
                                        color: 0xffffff,
                                        texture: "castor_a.png",
                                        orbit: { radius: 800, speed: 0.3, inclination: 0, startAngle: 0 },
                                        description: "A1V 型藍白主序星。",
                                        details: { "質量": "2.76 太陽質量" }
                                    },
                                    {
                                        name: "Castor A2 (Ab)",
                                        nameCH: "北河二 A2",
                                        type: "star",
                                        radius: 0.5,
                                        color: 0xff4500,
                                        texture: "castor_c.png",
                                        orbit: { radius: 800, speed: 0.3, inclination: 0, startAngle: Math.PI },
                                        description: "紅矮星伴星，週期 9.2 天。"
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
                                orbit: { radius: 800, speed: 0.8, inclination: 0, startAngle: 0 },
                                description: "YY Gem 紅矮星。"
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
        distanceFromSun: 569000000,
        position: { x: 200000, y: -450000, z: 250000 },
        stars: [
            {
                name: "Scorpius X-1 (Neutron Star)",
                nameCH: "天蠍座 X-1 (中子星)",
                type: "star",
                radius: 0.1,
                color: 0xe0ffff,
                hasAccretionDisk: true,
                diskColor: 0x00ccff,
                diskRadius: 667,
                hasRelativisticJets: true,
                jetColor: 0x00ccff,
                position: { x: 0, y: 0, z: 0 },
                description: "由中子星吸取伴星物質形成吸積盤。",
                details: {
                    "核心天體": "中子星",
                    "距離": "9,000 光年"
                },
                planets: [
                    {
                        name: "V818 Scorpii",
                        nameCH: "天蠍座 V818",
                        type: "star",
                        radius: 1.2,
                        color: 0x4169e1,
                        isDistorted: true,
                        distortionAxes: { x: 1.0, y: 1.0, z: 2.2 },
                        hasGasStream: true,
                        orbit: { radius: 1500, speed: 1.5, inclination: 30, startAngle: 0 },
                        description: "已被潮汐力拉伸成明顯的淚滴狀，並向中子星輸送物質。",
                        details: {
                            "公轉週期": "18.9 小時",
                            "系統類型": "低質量 X 射線聯星 (LMXB)"
                        }
                    }
                ]
            }
        ]
    }
];
