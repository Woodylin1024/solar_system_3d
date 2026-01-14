/**
 * InterstellarSystems v40.8.1 - "Physical Precision"
 * - Precision Refinement: Updated Epsilon Eridani with HD 22049b details (1.5x Jupiter mass) and asteroid belts at 30/60 AU.
 */
export const nearbyStarSystemsData = [
    {
        name: "Alpha Centauri",
        nameCH: "半人馬座 α",
        distanceFromSun: 276000,
        menuIcon: "textures/alphacentauri_a.png",
        position: { x: -103000, y: -241000, z: -86000 },
        stars: [
            {
                name: "Alpha Centauri A",
                nameCH: "南門二 A",
                type: "star",
                radius: 1.227,
                color: 0xfff4e1,
                texture: "alphacentauri_a.png",
                emissiveIntensity: 1.5,
                position: { x: 0, y: 0, z: 0 },
                description: "半人馬座 α A（南門二 A）是南門二雙星系統中的主星，其光譜類型 G2V 與太陽相似，但體積稍大且更亮。",
                details: {
                    "質量": "1.100 太陽質量",
                    "半徑": "1.227 太陽半徑",
                    "直徑": "1.227 太陽直徑",
                    "光度": "1.519 太陽光度",
                    "視星等": "-0.01",
                    "絕對星等": "4.38",
                    "核心溫度": "5,790 K",
                    "光譜類型": "G2V",
                    "自轉週期": "22 天"
                },
                planets: [
                    {
                        name: "Alpha Centauri B",
                        nameCH: "南門二 B",
                        type: "star",
                        radius: 0.865,
                        color: 0xffd2a1,
                        texture: "alphacentauri_b.png",
                        orbit: { radius: 1265, inclination: 15, speed: 0.1 },
                        description: "半人馬座 α B（南門二 B）是南門二雙星系統中的伴星，是一顆橙色的 K1V 型主序星，體積與亮度均略小於太陽。",
                        details: {
                            "質量": "0.907 太陽質量",
                            "半徑": "0.865 太陽半徑",
                            "直徑": "0.865 太陽直徑",
                            "光度": "0.500 太陽光度",
                            "視星等": "+1.33",
                            "絕對星等": "5.71",
                            "核心溫度": "5,260 K",
                            "光譜類型": "K1V",
                            "自轉週期": "41 天"
                        }
                    },
                    {
                        name: "Proxima Centauri",
                        nameCH: "比鄰星",
                        type: "star",
                        radius: 0.141,
                        color: 0xff4500,
                        texture: "proxima_real.png",
                        orbit: { radius: 6500, inclination: 45, speed: 0.05 },
                        description: "距離太陽最近的恆星，是一顆活躍的紅矮星，屬於閃焰星（變星編號為半人馬座 V645），擁有三顆已知行星。",
                        details: {
                            "質量": "0.122 太陽質量",
                            "半徑": "0.141 太陽半徑",
                            "直徑": "0.141 太陽直徑",
                            "光度": "0.0017 太陽光度",
                            "視星等": "11.13",
                            "絕對星等": "15.60",
                            "表面溫度": "3,042 K",
                            "光譜類型": "M5.5Ve",
                            "年齡": "48.5 億年"
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
                                description: "2022年發現的次地球質量行星，其軌道極其接近主星。質量至少是地球質量的四分之一（或火星質量的兩倍），是目前已知質量最輕的系外行星之一。",
                                details: {
                                    "質量": "≥ 0.26 ± 0.05 地球質量",
                                    "平均半徑": "≃ 0.81 ± 0.08 地球半徑",
                                    "半長軸": "0.029 AU (4.3 × 10⁶ km)",
                                    "表面溫度": "360 K (87 °C)",
                                    "公轉週期": "5.122 天",
                                    "發現日期": "2022 年"
                                }
                            },
                            {
                                name: "Proxima Centauri b",
                                nameCH: "比鄰星 b",
                                type: "planet",
                                radius: 0.22, // 1.1 * original radius (0.2) or mapped to visual scale
                                color: 0xcd5c5c,
                                texture: "proxima_b.png",
                                orbit: { radius: 30, speed: 0.8, inclination: 0 },
                                description: "位於適居帶內的類地行星，是已知距離太陽系最近的系外行星。其質量下限為 1.27 地球質量，若密度與地球相當，半徑約為 1.1 地球半徑。",
                                details: {
                                    "質量": "≥ 1.27 地球質量",
                                    "直徑": "≥ 1.1 地球直徑",
                                    "表面溫度": "234 K",
                                    "公轉週期": "11.2 天",
                                    "發現日期": "2016 年"
                                }
                            },
                            {
                                name: "Proxima Centauri c",
                                nameCH: "比鄰星 c",
                                type: "planet",
                                radius: 0.5,
                                color: 0x483d8b,
                                texture: "proxima_c.png",
                                orbit: { radius: 149, speed: 0.05, inclination: 133 },
                                description: "一顆超級地球或迷你海王星，被認為是系統中的『海王星』。質量約為地球的 7 倍，距離主星約 1.49 AU，環境極其寒冷。",
                                details: {
                                    "質量": "7.0 ± 1.0 地球質量",
                                    "半長軸": "1.489 AU",
                                    "離心率": "0.04",
                                    "軌道傾角": "133°",
                                    "表面溫度": "39 K",
                                    "公轉週期": "1,928 天 (5.28 年)",
                                    "發現日期": "2019 年"
                                }
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Barnard's Star",
        nameCH: "巴納德星",
        distanceFromSun: 376916,
        menuIcon: "textures/barnard_star.png",
        position: { x: -3600, y: -375400, z: 30800 },
        stars: [
            {
                name: "Barnard's Star",
                nameCH: "巴納德星",
                type: "star",
                radius: 0.196,
                color: 0xff4f00,
                texture: "barnard_star_real.png",
                emissiveIntensity: 2.2,
                description: "巴納德星是已知自行運動最快的恆星，也是一顆非常古老的紅矮星，年齡約為 100 億年。",
                details: {
                    "質量": "0.162 太陽質量",
                    "半徑": "0.196 太陽半徑",
                    "光度": "0.0035 太陽光度",
                    "視星等": "9.51",
                    "絕對星等": "13.24",
                    "核心溫度": "3,223 K",
                    "表面溫度": "3,223 K",
                    "光譜類型": "M4V"
                }
            }
        ]
    },
    {
        name: "Wolf 359",
        nameCH: "沃夫 359",
        distanceFromSun: 497074,
        menuIcon: "textures/wolf359.png",
        position: { x: -264000, y: 154000, z: -389000 },
        stars: [
            {
                name: "Wolf 359",
                nameCH: "沃夫 359",
                type: "star",
                radius: 0.16,
                color: 0x881100,
                texture: "wolf359_real.png",
                emissiveIntensity: 1.2,
                description: "沃夫 359 是一顆極其暗淡且低溫的紅矮星，也是著名的閃焰星（CN Leonis）。",
                details: {
                    "質量": "0.09 太陽質量",
                    "半徑": "0.16 太陽半徑",
                    "光度": "0.00002 太陽光度",
                    "視星等": "13.54",
                    "絕對星等": "16.64",
                    "核心溫度": "2,800 K",
                    "表面溫度": "2,800 K",
                    "光譜類型": "M6.5Ve"
                }
            }
        ]
    },
    {
        name: "Lalande 21185",
        nameCH: "拉蘭德 21185",
        distanceFromSun: 525532,
        menuIcon: "textures/lalande21185.png",
        position: { x: -84000, y: 512000, z: 98000 },
        stars: [
            {
                name: "Lalande 21185",
                nameCH: "拉蘭德 21185",
                type: "star",
                radius: 0.393,
                color: 0xff4400,
                texture: "lalande21185_real.png",
                emissiveIntensity: 3.0,
                description: "拉蘭德 21185 是北天球最接近太陽系的紅矮星系統之一，位於大熊座。",
                details: {
                    "質量": "0.46 太陽質量",
                    "半徑": "0.393 太陽半徑",
                    "光度": "0.025 太陽光度",
                    "視星等": "7.52",
                    "絕對星等": "10.48",
                    "核心溫度": "3,828 K",
                    "表面溫度": "3,828 K",
                    "光譜類型": "M2V"
                }
            }
        ]
    },
    {
        name: "Sirius",
        nameCH: "天狼星系",
        distanceFromSun: 543873,
        menuIcon: "textures/sirius_a.png",
        position: { x: -102000, y: -156000, z: 510000 },
        stars: [
            {
                name: "Sirius A",
                nameCH: "天狼星 A",
                type: "star",
                radius: 1.711,
                color: 0xbbccff,
                texture: "sirius_a_real.png",
                emissiveIntensity: 3.5,
                description: "全天最亮的恆星，是一顆藍白色的主序星。",
                details: {
                    "質量": "2.02 太陽質量",
                    "半徑": "1.711 太陽半徑",
                    "光度": "25.4 太陽光度",
                    "視星等": "-1.47",
                    "絕對星等": "1.42",
                    "核心溫度": "9,940 K",
                    "表面溫度": "9,940 K",
                    "光譜類型": "A1V"
                },
                planets: [
                    {
                        name: "Sirius B",
                        nameCH: "天狼星 B",
                        type: "star",
                        radius: 0.05,
                        color: 0xccddff,
                        texture: "sirius_b_real.png",
                        emissiveIntensity: 1.5,
                        orbit: { radius: 1100, inclination: 20, speed: 0.05 },
                        description: "著名的白矮星伴星，密度極高，體積僅與地球相當。",
                        details: {
                            "質量": "0.978 太陽質量",
                            "體積": "與地球相當",
                            "半徑": "0.0084 ± 3% 太陽半徑",
                            "光度": "0.026 太陽光度",
                            "視星等": "8.30",
                            "絕對星等": "11.18",
                            "核心溫度": "25,200 K",
                            "表面溫度": "25,200 K",
                            "光譜類型": "DA2"
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Luyten 726-8",
        nameCH: "魯坦 726-8 (鯨魚座 BL/UV)",
        distanceFromSun: 550196,
        menuIcon: "textures/luyten726_8b.png",
        position: { x: 52000, y: -480000, z: -210000 },
        stars: [
            {
                name: "Luyten 726-8 Barycenter",
                nameCH: "魯坦 726-8 質心",
                type: "star",
                radius: 0,
                planets: [
                    {
                        name: "Luyten 726-8 A (BL Ceti)",
                        nameCH: "魯坦 726-8 A (鯨魚座 BL)",
                        type: "star",
                        radius: 0.14,
                        color: 0xff4f00,
                        texture: "bl_ceti_real.png",
                        orbit: { radius: 250, eccentricity: 0.621, speed: 0.15, inclination: 10, startAngle: 0 },
                        description: "聯星系統中的 A 星，變星編號為鯨魚座 BL (BL Ceti)。這是一顆典型的 M 型紅矮星，也是一顆閃焰星。",
                        details: {
                            "質量": "0.10 太陽質量",
                            "半徑": "0.14 太陽半徑",
                            "光度": "0.00006 太陽光度",
                            "視星等": "12.54",
                            "絕對星等": "14.92",
                            "核心溫度": "2,670 K",
                            "表面溫度": "2,670 K",
                            "光譜類型": "M5.5 V"
                        }
                    },
                    {
                        name: "Luyten 726-8 B (UV Ceti)",
                        nameCH: "魯坦 726-8 B (鯨魚座 UV)",
                        type: "star",
                        radius: 0.14,
                        color: 0xff3300,
                        texture: "uv_ceti_real.png",
                        orbit: { radius: 250, eccentricity: 0.621, speed: 0.15, inclination: 10, startAngle: Math.PI },
                        description: "著名的閃焰星原型（鯨魚座 UV 型變星）。其表面活動極其劇烈，耀斑爆發時亮度可瞬間暴增。",
                        details: {
                            "質量": "0.10 太陽質量",
                            "半徑": "0.14 太陽半徑",
                            "光度": "0.00004 太陽光度",
                            "視星等": "12.99",
                            "絕對星等": "15.37",
                            "核心溫度": "2,670 K",
                            "表面溫度": "2,670 K",
                            "光譜類型": "M6 V"
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Ross 154",
        nameCH: "羅斯 154",
        distanceFromSun: 612173,
        menuIcon: "textures/ross154.png",
        position: { x: 580000, y: -190000, z: -45000 },
        stars: [
            {
                name: "Ross 154",
                nameCH: "羅斯 154",
                type: "star",
                radius: 0.24,
                color: 0xff4400,
                texture: "ross154.png",
                description: "著名的閃焰星，光譜類型 M3.5Ve。",
                details: { "距離": "9.68 光年" }
            }
        ]
    },
    {
        name: "Ross 248",
        nameCH: "羅斯 248",
        distanceFromSun: 651382,
        menuIcon: "textures/ross248.png",
        position: { x: 74000, y: 110000, z: 630000 },
        stars: [
            {
                name: "Ross 248",
                nameCH: "羅斯 248",
                type: "star",
                radius: 0.16,
                color: 0xff3300,
                texture: "ross248.png",
                description: "預計未來將成為距離太陽最近的恆星。",
                details: { "距離": "10.3 光年" }
            }
        ]
    },
    {
        name: "Epsilon Eridani",
        nameCH: "波江座 ε (天苑四)",
        distanceFromSun: 664030,
        menuIcon: "textures/epsilon_eridani.png",
        position: { x: -340000, y: -540000, z: -150000 },
        stars: [
            {
                name: "Epsilon Eridani",
                nameCH: "波江座 ε",
                type: "star",
                radius: 0.84,
                color: 0xffdbac,
                texture: "epsilon_eridani.png",
                description: "一顆年輕的 K2V 型主序星（天龍座 BY 型變星），擁有明顯的岩屑盤與已知行星。其特徵與早期太陽系極其相似，在 30 AU 與 60 AU 處擁有極為濃密的岩屑盤結構。",
                details: {
                    "距離": "10.50 光年",
                    "質量": "0.85 太陽質量",
                    "半徑": "0.84 太陽半徑",
                    "亮度": "0.28 太陽亮度",
                    "表面溫度": "5,073 K",
                    "光譜類型": "K2V",
                    "自轉週期": "11.1 天",
                    "年齡": "約 8 億年 (0.5-1.0 Gyr)",
                    "變星類型": "天龍座 BY 型變星"
                },
                planets: [
                    {
                        name: "Epsilon Eridani b",
                        nameCH: "天苑四 b (HD 22049b)",
                        type: "planet",
                        radius: 1.2,
                        color: 0x4682b4,
                        texture: "epsilon_eridani_b_real.png",
                        orbit: { radius: 600, speed: 0.15, inclination: 30.1, eccentricity: 0.702, startAngle: 0.59 }, // 34 deg = 0.59 rad
                        description: "行星編號為 HD 22049b，是一顆質量約為木星 1.55 倍的極高離心率氣態巨行星。",
                        details: {
                            "質量": "1.55 木星質量",
                            "離心率": "0.702",
                            "公轉週期": "6.85 年 (2502 天)",
                            "發現日期": "2000 年"
                        }
                    }
                ],
                belts: [
                    {
                        name: "Inner Asteroid Belt",
                        nameCH: "類古柏帶內環 (30 AU)",
                        minRadius: 5200,
                        maxRadius: 5600,
                        count: 2000,
                        color: 0x888888,
                        opacity: 0.6
                    },
                    {
                        name: "Outer Asteroid Belt",
                        nameCH: "類古柏帶外環 (60 AU)",
                        minRadius: 10600,
                        maxRadius: 11800,
                        count: 15000, // 10x density in shader, visually representing the massive dust amount
                        color: 0xaaccff,
                        opacity: 0.8
                    }
                ]
            }
        ]
    },
    {
        name: "Lacaille 9352",
        nameCH: "拉卡伊 9352",
        distanceFromSun: 676678,
        menuIcon: "textures/lacaille9352.png",
        position: { x: 420000, y: -480000, z: -250000 },
        stars: [
            {
                name: "Lacaille 9352",
                nameCH: "拉卡伊 9352",
                type: "star",
                radius: 0.46,
                color: 0xff5500,
                texture: "lacaille9352.png",
                description: "南魚座中的紅矮星，具備極高的自行運動。",
                details: { "距離": "10.7 光年", "光譜類型": "M0.5V" }
            }
        ]
    },
    {
        name: "Castor",
        nameCH: "北河二 (Castor)",
        distanceFromSun: 3225291,
        menuIcon: "textures/castor_a.png",
        position: { x: 1500000, y: 1200000, z: -2500000 },
        stars: [
            {
                name: "Castor Total Barycenter",
                nameCH: "北河二總系質心",
                type: "star",
                radius: 0,
                planets: [
                    {
                        name: "Castor AB Barycenter",
                        nameCH: "北河二 AB 質心",
                        type: "star",
                        radius: 0,
                        orbit: { radius: 100000, speed: 0.005, inclination: 10, startAngle: 0 },
                        planets: [
                            {
                                name: "Castor A Barycenter",
                                nameCH: "北河二 A 質心",
                                type: "star",
                                radius: 0,
                                orbit: { radius: 8000, speed: 0.05, inclination: 5, startAngle: 0 },
                                planets: [
                                    {
                                        name: "Castor A1 (Aa)",
                                        nameCH: "北河二 A1",
                                        type: "star",
                                        radius: 2.3,
                                        color: 0xffffff,
                                        texture: "castor_a.png",
                                        orbit: { radius: 400, speed: 0.3, inclination: 0, startAngle: 0 },
                                        description: "A1V 型藍白主序星 (Aa)。"
                                    },
                                    {
                                        name: "Castor A2 (Ab)",
                                        nameCH: "北河二 A2",
                                        type: "star",
                                        radius: 0.5,
                                        color: 0xff4500,
                                        texture: "castor_c.png",
                                        orbit: { radius: 1200, speed: 0.3, inclination: 0, startAngle: Math.PI },
                                        description: "紅矮星伴星 (Ab)。"
                                    }
                                ]
                            },
                            {
                                name: "Castor B Barycenter",
                                nameCH: "北河二 B 質心",
                                type: "star",
                                radius: 0,
                                orbit: { radius: 8000, speed: 0.05, inclination: 5, startAngle: Math.PI },
                                planets: [
                                    {
                                        name: "Castor B1 (Ba)",
                                        nameCH: "北河二 B1",
                                        type: "star",
                                        radius: 1.6,
                                        color: 0xffffff,
                                        texture: "castor_a.png",
                                        orbit: { radius: 350, speed: 0.5, inclination: 0, startAngle: 0 },
                                        description: "A2V/A5V 型藍白主序星 (Ba)。"
                                    },
                                    {
                                        name: "Castor B2 (Bb)",
                                        nameCH: "北河二 B2",
                                        type: "star",
                                        radius: 0.5,
                                        color: 0xff4500,
                                        texture: "castor_c.png",
                                        orbit: { radius: 1000, speed: 0.5, inclination: 0, startAngle: Math.PI },
                                        description: "紅矮星伴星 (Bb)。"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Castor C Barycenter",
                        nameCH: "北河二 C 質心 (YY Gem)",
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
                                orbit: { radius: 400, speed: 0.8, inclination: 0, startAngle: 0 },
                                description: "YY Gem 紅矮星 A。"
                            },
                            {
                                name: "Castor C2 (Cb)",
                                nameCH: "北河二 C2",
                                type: "star",
                                radius: 0.62,
                                color: 0xff4500,
                                texture: "castor_c.png",
                                orbit: { radius: 400, speed: 0.8, inclination: 0, startAngle: Math.PI },
                                description: "YY Gem 紅矮星 B。"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Beta Lyrae",
        nameCH: "漸臺二 (Beta Lyrae)",
        distanceFromSun: 60600000,
        menuIcon: "gradient:beta-lyrae",
        position: { x: -5000000, y: 3000000, z: 8000000 },
        stars: [
            {
                name: "Beta Lyrae Barycenter",
                nameCH: "漸臺二質心",
                type: "star",
                radius: 0,
                planets: [
                    {
                        name: "Beta Lyrae B (Accretor)",
                        nameCH: "漸臺二 B (伴星)",
                        type: "star",
                        radius: 1.4,
                        color: 0x00ccff,
                        isDistorted: true,
                        distortionAxes: { x: 1.2, y: 1.2, z: 1.5 },
                        hasAccretionDisk: true,
                        diskColor: 0xffffcc,
                        diskRadius: 1500,
                        orbit: { radius: 800, speed: 2.2, inclination: 0, startAngle: Math.PI },
                        description: "吸積者 B，直徑約 12-14 太陽半徑。",
                        details: { "質量": "~13 太陽質量", "光譜類型": "B0.5V" }
                    },
                    {
                        name: "Beta Lyrae A (Donor)",
                        nameCH: "漸臺二 A (主星)",
                        type: "star",
                        radius: 3.2,
                        color: 0xccccff,
                        isDistorted: true,
                        distortionAxes: { x: 1.3, y: 1.3, z: 2.8 },
                        hasGasStream: true,
                        gasStreamTarget: "Beta Lyrae B (Accretor)",
                        orbit: { radius: 2400, speed: 2.2, inclination: 0, startAngle: 0 },
                        description: "供體星 A，直徑約 30-34 太陽半徑。",
                        details: { "質量": "~3 太陽質量", "光譜類型": "B7II" }
                    }
                ]
            }
        ]
    },
    {
        name: "Scorpius X-1",
        nameCH: "天蠍座 X-1",
        distanceFromSun: 569169000,
        menuIcon: "gradient:scorpius",
        position: { x: 200000, y: -450000, z: 250000 },
        stars: [
            {
                name: "Scorpius X-1 (Neutron Star)",
                nameCH: "天蠍座 X-1 (中子星)",
                type: "star",
                radius: 0.1,
                color: 0xe0ffff,
                hasAccretionDisk: true,
                useProceduralDisk: true,
                diskColor: 0x88ccff, // Hotter blue-white disk for Neutron Star
                diskRadius: 1200,
                diskHeight: 0.6,
                hasRelativisticJets: true,
                jetColor: 0xe0ffff,
                description: "由中子星吸取伴星物質形成吸積盤。",
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
                        orbit: { radius: 3000, speed: 1.5, inclination: 30 },
                        description: "潮汐畸變的淚滴狀供體星。"
                    }
                ]
            }
        ]
    },
    {
        name: "Gaia BH1",
        nameCH: "蓋亞 BH1",
        distanceFromSun: 98656116,
        menuIcon: "textures/sun.jpg",
        position: { x: -25400000, y: -95300000, z: 0 },
        stars: [
            {
                name: "Gaia BH1 Barycenter",
                nameCH: "蓋亞 BH1 質心",
                type: "star",
                radius: 0,
                planets: [
                    {
                        name: "Gaia BH1 Star",
                        nameCH: "蓋亞 BH1 伴星",
                        type: "star",
                        radius: 0.99,
                        color: 0xfff4e1,
                        texture: "sun.jpg",
                        orbit: { radius: 1200, speed: 0.25, inclination: 0 },
                        description: "一顆與太陽極其相似的 G 型主序星，與黑洞以 185.59 天的週期互繞。",
                        details: {
                            "類型": "G型主序星",
                            "質量": "0.93 太陽質量",
                            "半徑": "0.99 太陽半徑",
                            "表面溫度": "5,850 K",
                            "公轉週期": "185.59 天"
                        }
                    },
                    {
                        name: "Gaia BH1 Black Hole",
                        nameCH: "蓋亞 BH1 黑洞",
                        type: "star",
                        isBlackHole: true,
                        radius: 0.15,
                        color: 0x000000,
                        texture: null,
                        emissiveIntensity: 0,
                        orbit: { radius: 1200, speed: 0.25, inclination: 0, startAngle: Math.PI },
                        description: "目前已知距離地球最近的黑洞（約 1,560 光年）。這是一個處於休眠狀態的恆星級黑洞，不具備明顯的吸積盤。",
                        details: {
                            "類型": "恆星黑洞",
                            "質量": "9.62 太陽質量",
                            "史瓦西半徑": "28 km",
                            "離心率": "0.45",
                            "狀態": "休眠 (Quiescent)"
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Sagittarius A*",
        nameCH: "人馬座 A*",
        distanceFromSun: 1644268600,
        menuIcon: "gradient:galactic-center",
        position: { x: 50000000, y: -120000000, z: -80000000 },
        stars: [
            {
                name: "Sagittarius A*",
                nameCH: "人馬座 A*",
                type: "star",
                isBlackHole: true,
                hasAccretionDisk: true,
                diskColor: 0xffaa33,
                diskRadius: 2000,
                radius: 17.2,
                color: 0x000000,
                texture: null,
                emissiveIntensity: 0,
                description: "位於銀河系中心的超大質量黑洞。它是銀河系的引力核心，所有的恆星都圍繞著它運行。其強大的引力能扭曲時空，使周圍吸積盤的光線發生劇烈彎曲。",
                details: {
                    "類型": "超大質量黑洞",
                    "質量": "~410 萬 太陽質量",
                    "史瓦西半徑": "1,200 萬 km",
                    "距離地球": "約 2.6 萬 光年",
                    "位置": "銀河系中心"
                },
                planets: [
                    {
                        name: "S0-102",
                        nameCH: "S0-102",
                        type: "star",
                        radius: 5.0,
                        color: 0xbbccff,
                        texture: "sirius_a_real.png",
                        emissiveIntensity: 3.5,
                        orbit: {
                            radius: 25000,
                            eccentricity: 0.7209,
                            inclination: 150.1,
                            argumentOfPeriapsis: 331.5,
                            longitudeOfAscendingNode: 325.5,
                            speed: 0.15
                        },
                        description: "目前已知距離人馬座 A* 最近的恆星之一，軌道週期約為 11.5 年。它是研究黑洞引力與廣義相對論的重要觀測對象。",
                        details: {
                            "類型": "B型主序星",
                            "質量": "~15 太陽質量",
                            "半徑": "~5 太陽半徑",
                            "直徑": "~10 太陽直徑",
                            "公轉週期": "11.52 年",
                            "離心率": "0.7209",
                            "軌道傾角": "150.1°",
                            "光譜類型": "B0-B3 V",
                            "表面溫度": "約 20,000 K",
                            "位置": "銀河系中心 (S星團)"
                        }
                    },
                    {
                        name: "S2",
                        nameCH: "S2",
                        type: "star",
                        radius: 8.0,
                        color: 0xaaccff,
                        texture: "sirius_a_real.png",
                        emissiveIntensity: 4.5,
                        orbit: {
                            radius: 38000,
                            eccentricity: 0.88466,
                            inclination: 133.818,
                            argumentOfPeriapsis: 66.13,
                            longitudeOfAscendingNode: 227.85,
                            speed: 0.11
                        },
                        description: "銀河中心最著名的恆星之一，軌道極其靠近人馬座 A*。2018 年觀測到其近日點通過時產生的引力紅移，完美驗證了廣義相對論。",
                        details: {
                            "類型": "B型主序星",
                            "質量": "~14 太陽質量",
                            "半徑": "~8 太陽半徑",
                            "直徑": "~16 太陽直徑",
                            "公轉週期": "16.05 年",
                            "離心率": "0.88466",
                            "軌道傾角": "133.8°",
                            "光譜類型": "B0-B2.5 V",
                            "表面溫度": "25,000 K – 30,000 K",
                            "近日點距離": "120 AU (~17 小時光程)",
                            "近日點速率": "7650 km/s"
                        }
                    }
                ]
            }
        ]
    }
];
