export const nearbyStarSystemsData = [
    {
        name: "Alpha Centauri",
        nameCH: "?犖擐砍漣 帢",
        distanceFromSun: 276000, // Roughly 4.37 light years in AU/Units
        position: { x: -103000, y: -241000, z: -86000 }, // Exact astronomical vector relative to Sun
        stars: [
            {
                name: "Alpha Centauri A",
                nameCH: "??鈭?A",
                type: "star",
                radius: 1.1, // Solar radii
                color: 0xfff4e1, // Warm white (G2V)
                texture: "alphacentauri_a.png",
                emissiveIntensity: 1.5,
                position: { x: 0, y: 0, z: 0 },
                description: "?犖擐砍漣 帢 A嚗??鈭?A嚗蝟餌絞銝剔?銝餅?嚗??憿? G2V ?云?賣扔?嗥隡潘??臬憭拍洵?漁????,
                details: {
                    "鞈芷?": "1.100 憭芷鞈芷?",
                    "?游?": "1.217 憭芷?游?",
                    "銵券皞怠漲": "5,790 K",
                    "??憿?": "G2V",
                    "頝": "4.37 ?僑"
                }
            },
            {
                name: "Alpha Centauri B",
                nameCH: "??鈭?B",
                type: "star",
                radius: 0.86, // Solar radii
                color: 0xffd2a1, // Pale orange (K1V)
                texture: "alphacentauri_b.png",
                emissiveIntensity: 1.2,
                position: { x: 1265, y: 0, z: 0 }, // Positioned exactly on orbit radius
                orbit: { radius: 1265, inclination: 15, speed: 0.2 },
                description: "?犖擐砍漣 帢 B嚗??鈭?B嚗蝟餌絞銝剔?蝚砌?憿???憿蝔?嚗惇??K ?蜓摨???,
                details: {
                    "鞈芷?": "0.907 憭芷鞈芷?",
                    "?游?": "0.865 憭芷?游?",
                    "銵券皞怠漲": "5,260 K",
                    "??憿?": "K1V",
                    "頝": "4.37 ?僑"
                }
            },
            {
                name: "Proxima Centauri",
                nameCH: "瘥??,
                type: "star",
                radius: 0.15, // Red dwarf size
                color: 0xff4500, // Deep red (M6Ve)
                texture: "proxima.png",
                emissiveIntensity: 0.8,
                position: { x: -9912, y: 0, z: 0 }, // Positioned exactly on orbit radius
                orbit: { radius: 9912, inclination: 45, speed: 0.05 },
                description: "瘥?銝憿??格?嚗?桀?撌脩頝憭芷?餈?????????喳?銝?撌脰◤霅祕?????,
                details: {
                    "鞈芷?": "0.122 憭芷鞈芷?",
                    "?游?": "0.154 憭芷?游?",
                    "銵券皞怠漲": "3,042 K",
                    "??憿?": "M6Ve",
                    "頝": "4.24 ?僑"
                },
                planets: [
                    {
                        name: "Proxima Centauri d",
                        nameCH: "瘥??d",
                        type: "planet",
                        radius: 0.1, // Approx 0.26 Earth radius
                        color: 0x8b4513,
                        texture: "proxima_d.png",
                        orbit: { radius: 15, speed: 1.5, inclination: 0 }, // Very close
                        description: "銝憿扔?????痔?唾????祈??望???5.1 憭押?,
                        details: { "鞈芷?": "0.26 ?啁?鞈芷?", "頝??": "0.029 AU" }
                    },
                    {
                        name: "Proxima Centauri b",
                        nameCH: "瘥??b",
                        type: "planet",
                        radius: 0.2, // Approx 1.07 Earth radius
                        color: 0xcd5c5c,
                        texture: "proxima_b.png",
                        orbit: { radius: 30, speed: 0.8, inclination: 0 },
                        description: "雿?拙?撣嗅???啗????臬??曉????賜?擐?格???,
                        details: { "鞈芷?": "1.07 ?啁?鞈芷?", "頝??": "0.048 AU" }
                    },
                    {
                        name: "Proxima Centauri c",
                        nameCH: "瘥??c",
                        type: "planet",
                        radius: 0.5, // Super-Earth / Mini-Neptune
                        color: 0x483d8b,
                        texture: "proxima_c.png",
                        orbit: { radius: 150, speed: 0.05, inclination: 10 },
                        description: "銝憿??Ｚ???撖頞??啁?嚗頧望?蝝?5.2 撟氬?,
                        details: { "鞈芷?": "7 ?啁?鞈芷?", "頝??": "1.48 AU" }
                    }
                ]
            }
        ]
    },
    {
        name: "Barnard's Star",
        nameCH: "撌渡?敺瑟?",
        distanceFromSun: 376916, // 5.96 Light years in units
        position: { x: -3600, y: -375400, z: 30800 },
        stars: [
            {
                name: "Barnard's Star",
                nameCH: "撌渡?敺瑟?",
                type: "star",
                radius: 0.196, // Solar radii
                color: 0xff4500, // Red dwarf
                texture: "barnard_star.png",
                emissiveIntensity: 0.8,
                position: { x: 0, y: 0, z: 0 },
                description: "撌渡?敺瑟??臭?憿??潸?憭怠漣???格?嚗?桀?撌脩?芾????敹怎???嚗銵??????詨??澆云?賜???嚗?,
                details: {
                    "鞈芷?": "0.144 憭芷鞈芷?",
                    "?游?": "0.196 憭芷?游?",
                    "銵券皞怠漲": "3,134 K",
                    "??憿?": "M4V",
                    "頝": "5.96 ?僑"
                }
            }
        ]
    },
    {
        name: "Wolf 359",
        nameCH: "瘝井 359",
        distanceFromSun: 497000,
        position: { x: -472150, y: 134190, z: 59640 },
        stars: [
            {
                name: "Wolf 359",
                nameCH: "瘝井 359",
                type: "star",
                radius: 0.16, // Solar radii
                color: 0xff3300, // Very cool red dwarf
                texture: "wolf359.png",
                emissiveIntensity: 0.7,
                position: { x: 0, y: 0, z: 0 },
                description: "瘝井 359 ?臭?憿??潛?摮漣???格?嚗??Ｗ云?賜? 7.86 ?僑???舀??楚銝釭??雿???銋?嚗????臭?憿?撣豢暑頨??渡霈?嚗??唳?嚗?,
                details: {
                    "鞈芷?": "0.09 憭芷鞈芷?",
                    "?游?": "0.16 憭芷?游?",
                    "銵券皞怠漲": "2,800 K",
                    "?漲": "0.001 憭芷?漲",
                    "??憿?": "M6.5Ve",
                    "頝": "7.86 ?僑"
                }
            }
        ]
    },
    {
        name: "Lalande 21185",
        nameCH: "?敺?21185",
        distanceFromSun: 525500, // 8.31 Light years in units
        position: { x: -412185, y: 308468, z: 104156 },
        stars: [
            {
                name: "Lalande 21185",
                nameCH: "?敺?21185",
                type: "star",
                radius: 0.39, // Solar radii
                color: 0xff6600, // Warm M2V orange-red
                texture: "lalande21185.png",
                emissiveIntensity: 0.9,
                position: { x: 0, y: 0, z: 0 },
                description: "?敺?21185 ?臭?憿??澆之?漣???格????臬?憭拍?頝憭芷?餈?蝝??銋撌脩擃??釭??憭抒?蝝??銝嚗漁摨行??詨????格?擃?,
                details: {
                    "鞈芷?": "0.46 憭芷鞈芷?",
                    "?游?": "0.39 憭芷?游?",
                    "銵券皞怠漲": "3,828 K",
                    "?漲": "0.025 憭芷?漲",
                    "??憿?": "M2V",
                    "頝": "8.31 ?僑"
                }
            }
        ]
    },
    {
        name: "Sirius",
        nameCH: "憭拍?頂",
        distanceFromSun: 543873, // 8.6 Light years in units
        position: { x: -102000, y: -156000, z: 510000 },
        stars: [
            {
                name: "Sirius A",
                nameCH: "憭拍??A",
                type: "star",
                radius: 1.711, // Solar radii
                color: 0xbbccff,
                texture: "sirius_a.png",
                emissiveIntensity: 2.0,
                position: { x: 0, y: 0, z: 0 },
                description: "憭拍??A ?臬憭拇?鈭桃???嚗?霅???A1V???臭?憿?脩?銝餃???鈭桀漲蝝憭芷??25 ??,
                details: {
                    "鞈芷?": "2.06 憭芷鞈芷?",
                    "?游?": "1.71 憭芷?游?",
                    "銵券皞怠漲": "9,940 K",
                    "?漲": "25.4 憭芷?漲",
                    "??憿?": "A1V",
                    "頝": "8.6 ?僑"
                }
            },
            {
                name: "Sirius B",
                nameCH: "憭拍??B",
                type: "star",
                radius: 0.1, // Solar radii (Enhanced for visibility, actual 0.0084)
                color: 0xffffff,
                texture: "sirius_b.png",
                emissiveIntensity: 1.0,
                position: { x: 1100, y: 0, z: 0 },
                orbit: { radius: 1100, inclination: 20, speed: 0.1 },
                description: "憭拍??B ?臭?憿?憭拍??A ??頂蝯梁??賜???臬歇?亦洵銝憿◤?潛??格?嚗??園?蝛??之撠?雿釭??憭芷?貊??,
                details: {
                    "鞈芷?": "1.02 憭芷鞈芷?",
                    "?游?": "0.0084 憭芷?游?",
                    "銵券皞怠漲": "25,200 K",
                    "?漲": "0.026 憭芷?漲",
                    "??憿?": "DA2",
                    "頝": "8.6 ?僑"
                }
            }
        ]
    },
    {
        name: "Luyten 726-8",
        nameCH: "擳臬 726-8",
        distanceFromSun: 550000, // 8.7 Light years in units
        position: { x: 120000, y: -500000, z: -150000 },
        stars: [
            {
                name: "BL Ceti",
                nameCH: "攳券?摨?BL (擳臬 726-8 A)",
                type: "star",
                radius: 0.14, // Solar radii
                color: 0xff4d00,
                texture: "luyten726_8a.png",
                emissiveIntensity: 0.8,
                position: { x: 0, y: 0, z: 0 },
                description: "攳券?摨?BL ?舀??剖噸 726-8 ?舀?蝟餌絞?蜓???臭?憿?霅? M5.5 ???格???,
                details: {
                    "鞈芷?": "0.102 憭芷鞈芷?",
                    "?游?": "0.14 憭芷?游?",
                    "銵券皞怠漲": "2,670 K",
                    "?漲": "0.0006 憭芷?漲",
                    "??憿?": "M5.5V",
                    "頝": "8.72 ?僑"
                }
            },
            {
                name: "UV Ceti",
                nameCH: "攳券?摨?UV (擳臬 726-8 B)",
                type: "star",
                radius: 0.14, // Solar radii
                color: 0xff3300,
                texture: "luyten726_8b.png",
                emissiveIntensity: 1.0,
                position: { x: 800, y: 0, z: 0 },
                orbit: { radius: 800, inclination: 35, speed: 0.15 },
                description: "攳券?摨?UV ?航????????撅祆????M6.0 ???格????蝜?扔?嗅????賡??渡嚗撟曉??鈭桀漲憓??詨???,
                details: {
                    "鞈芷?": "0.100 憭芷鞈芷?",
                    "?游?": "0.14 憭芷?游?",
                    "銵券皞怠漲": "2,600 K",
                    "?漲": "0.0004 憭芷?漲",
                    "??憿?": "M6.0V",
                    "頝": "8.72 ?僑"
                }
            }
        ]
    },
    {
        name: "Ross 154",
        nameCH: "蝢 154",
        distanceFromSun: 611800, // 9.68 Light years in units
        position: { x: -300000, y: -450000, z: -314000 },
        stars: [
            {
                name: "Ross 154",
                nameCH: "蝢 154",
                type: "star",
                radius: 0.24, // Solar radii
                color: 0xff3d00, // Red dwarf
                texture: "ross154.png",
                emissiveIntensity: 0.8,
                position: { x: 0, y: 0, z: 0 },
                description: "蝢 154嚗oss 154嚗銝憿??潔犖擐砍漣???格?嚗??Ｗ?? 9.68 ?僑???臭?憿暑頨???????漲?詨?頛翰??,
                details: {
                    "鞈芷?": "0.17 憭芷鞈芷?",
                    "?游?": "0.24 憭芷?游?",
                    "銵券皞怠漲": "3,340 K",
                    "?漲": "0.0038 憭芷?漲",
                    "??憿?": "M3.5Ve",
                    "頝": "9.68 ?僑"
                }
            }
        ]
    },
    {
        name: "Ross 248",
        nameCH: "蝢 248",
        distanceFromSun: 651341, // 10.3 Light years in units
        position: { x: 440000, y: 450000, z: -100000 },
        stars: [
            {
                name: "Ross 248",
                nameCH: "蝢 248",
                type: "star",
                radius: 0.16, // Solar radii
                color: 0xff4500, // Cool red dwarf
                texture: "ross248.png",
                emissiveIntensity: 0.7,
                position: { x: 0, y: 0, z: 0 },
                description: "蝢 248嚗oss 248嚗銝憿??潔?憟喳漣???格?嚗??Ｗ?? 10.3 ?僑???臭?憿??霈?嚗?閮蝝?33,000 撟游?撠?隞???唳??頝憭芷?餈?????,
                details: {
                    "鞈芷?": "0.12 憭芷鞈芷?",
                    "?游?": "0.16 憭芷?游?",
                    "銵券皞怠漲": "2,800 K",
                    "?漲": "0.0011 憭芷?漲",
                    "??憿?": "M6.0V",
                    "頝": "10.3 ?僑"
                }
            }
        ]
    },
    {
        name: "Epsilon Eridani",
        nameCH: "憭抵???,
        distanceFromSun: 661264, // 10.47 Light years in units
        position: { x: 389800, y: 522300, z: -108400 },
        stars: [
            {
                name: "Epsilon Eridani",
                nameCH: "憭抵???,
                type: "star",
                radius: 0.74, // Solar radii
                color: 0xffa500, // K2V orange-red
                texture: "epsilon_eridani.png",
                emissiveIntensity: 1.2,
                position: { x: 0, y: 0, z: 0 },
                description: "憭抵???Epsilon Eridani嚗銝憿??潭郭瘙漣???Ｗ云?賜? 10.5 ?僑??K2V ?蜓摨????舀???憭芷??憭芷??銋?銝?撣詨僑頛?蝝?8 ?僑嚗???銴??△?蝟餌絞?撠?憿Ⅱ摰?銵???,
                details: {
                    "鞈芷?": "0.82 憭芷鞈芷?",
                    "?游?": "0.74 憭芷?游?",
                    "銵券皞怠漲": "5,084 K",
                    "?漲": "0.34 憭芷?漲",
                    "??憿?": "K2V",
                    "頝": "10.47 ?僑"
                },
                planets: [
                    {
                        name: "Epsilon Eridani b",
                        nameCH: "憭抵???b",
                        type: "planet",
                        radius: 1.2, // Jupiter-like scale
                        color: 0x4682b4,
                        texture: "epsilon_eridani_b.png",
                        orbit: { radius: 600, speed: 0.15, inclination: 30 },
                        description: "憭抵???b ?臬?蝜瘥???銵?銝憿除?楊銵?嚗釭???箸?? 1.55 ?????憓?皛蹂?憛萄?蝣???,
                        details: { "鞈芷?": "1.55 ?冽?鞈芷?", "頝??": "3.39 AU", "?祈??望?": "7.3 撟? }
                    }
                ],
                belts: [
                    {
                        name: "Inner Debris Disk",
                        nameCH: "?抒?撅 (35 AU)",
                        minRadius: 5500,
                        maxRadius: 6500,
                        count: 1000,
                        color: 0x888888,
                        opacity: 0.6
                    },
                    {
                        name: "Outer Debris Disk",
                        nameCH: "憭?撅 (65 AU)",
                        minRadius: 10500,
                        maxRadius: 12500,
                        count: 1500,
                        color: 0x778899,
                        opacity: 0.5
                    }
                ]
            }
        ]
    },
    {
        name: "Lacaille 9352",
        nameCH: "?隡?9352",
        distanceFromSun: 678000, // 10.74 Light years in units
        position: { x: 500000, y: -400000, z: -250000 },
        stars: [
            {
                name: "Lacaille 9352",
                nameCH: "?隡?9352",
                type: "star",
                radius: 0.46, // Solar radii
                color: 0xff5a00, // Warm M0.5V orange-red
                texture: "lacaille9352.png",
                emissiveIntensity: 0.9,
                position: { x: 0, y: 0, z: 0 },
                description: "?隡?9352嚗acaille 9352嚗銝憿??澆?擳漣???格?嚗??Ｗ云?賜? 10.7 ?僑???臬憭拙歇?亥銵????洵????嚗??臬歇?仿?蝛?憭抒?蝝??銝嚗漁摨血蝝?葉?詨?頛???,
                details: {
                    "鞈芷?": "0.48 憭芷鞈芷?",
                    "?游?": "0.46 憭芷?游?",
                    "銵券皞怠漲": "3,690 K",
                    "?漲": "0.033 憭芷?漲",
                    "??憿?": "M0.5V",
                    "頝": "10.74 ?僑"
                }
            }
        ]
    },
    {
        name: "Castor",
        nameCH: "?眾鈭?(??摨?帢)",
        distanceFromSun: 3225291, // 51 Light years in units
        position: { x: 1500000, y: 1200000, z: -2500000 },
        stars: [
            {
                name: "Castor A1",
                nameCH: "?眾鈭?A1",
                type: "star",
                radius: 2.3,
                color: 0xffffff,
                texture: "castor_a.png",
                emissiveIntensity: 1.5,
                position: { x: 0, y: 0, z: 0 },
                orbit: { radius: 17700, speed: 0.05, inclination: 15 },
                description: "?眾鈭?A ?舐頂蝯曹葉?憭抒??舀?蝯辣?1 ?臭?憿??? A1V ???賭蜓摨???,
                details: {
                    "鞈芷?": "2.76 憭芷鞈芷?",
                    "?游?": "2.3 憭芷?游?",
                    "銵券皞怠漲": "9,500 K",
                    "?漲": "37 憭芷?漲",
                    "??憿?": "A1V",
                    "頝": "51 ?僑"
                },
                planets: [
                    {
                        name: "Castor A2",
                        nameCH: "?眾鈭?A2",
                        type: "star",
                        radius: 0.5,
                        color: 0xff4500,
                        texture: "castor_c.png",
                        orbit: { radius: 1500, speed: 0.4, inclination: 5 },
                        description: "?眾鈭?A2 ?臭?憿? A1 蝺??????格?嚗???????,
                        details: { "??憿?": "dM1e", "?祈??望?": "9.2 憭? }
                    }
                ]
            },
            {
                name: "Castor B1",
                nameCH: "?眾鈭?B1",
                type: "star",
                radius: 1.6,
                color: 0xffffff,
                texture: "castor_a.png",
                emissiveIntensity: 1.3,
                position: { x: 0, y: 0, z: 0 },
                orbit: { radius: 17700, speed: 0.05, inclination: 195 }, // Opposite side
                description: "?眾鈭?B ?舐頂蝯曹葉?洵鈭??舀??1 ?臭?憿?A5V ?銝餃???,
                details: {
                    "鞈芷?": "2.14 憭芷鞈芷?",
                    "?游?": "1.6 憭芷?游?",
                    "銵券皞怠漲": "8,300 K",
                    "?漲": "13 憭芷?漲",
                    "??憿?": "A5V",
                    "頝": "51 ?僑"
                },
                planets: [
                    {
                        name: "Castor B2",
                        nameCH: "?眾鈭?B2",
                        type: "star",
                        radius: 0.4,
                        color: 0xff4500,
                        texture: "castor_c.png",
                        orbit: { radius: 1200, speed: 0.5, inclination: 10 },
                        description: "?眾鈭?B2 ?臭?憿? B1 蝺??????格???,
                        details: { "??憿?": "dM1e", "?祈??望?": "2.9 憭? }
                    }
                ]
            },
            {
                name: "Castor C1",
                nameCH: "?眾鈭?C1 (YY Gem)",
                type: "star",
                radius: 0.62,
                color: 0xff4500,
                texture: "castor_c.png",
                emissiveIntensity: 1.0,
                position: { x: 0, y: 0, z: 0 },
                orbit: { radius: 194700, speed: 0.01, inclination: 45 },
                description: "?眾鈭?C (????摨?YY) ?臭?蝯?拚?蝝????憌????冽扔?????啁? A-B 撠?銵?,
                details: {
                    "鞈芷?": "0.6 憭芷鞈芷?",
                    "?游?": "0.62 憭芷?游?",
                    "銵券皞怠漲": "3,820 K",
                    "?漲": "0.07 憭芷?漲",
                    "??憿?": "M0.5Ve",
                    "頝": "51 ?僑"
                },
                planets: [
                    {
                        name: "Castor C2",
                        nameCH: "?眾鈭?C2",
                        type: "star",
                        radius: 0.62,
                        color: 0xff4500,
                        texture: "castor_c.png",
                        orbit: { radius: 1000, speed: 0.6, inclination: 2 },
                        description: "?眾鈭?C2 ??YY Gem 蝟餌絞銝剔?蝚砌?憿??格???,
                        details: { "??憿?": "M0.5Ve", "?祈??望?": "0.8 憭? }
                    }
                ]
            }
        ]
    }
];
