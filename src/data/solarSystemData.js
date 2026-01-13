export const solarSystemData = [
    {
        name: "Sun",
        nameCH: "太陽",
        type: "star",
        radius: 5,
        realScaleRadius: 40, // Reduced from 109 to be visible but still huge
        color: 0xffff00,
        texture: "sun.jpg",
        distance: 0,
        realScaleDistance: 0,
        speed: 0,
        description: "太陽系的中心恆星，佔據了太陽系 99.8% 的質量。它是一顆黃矮星，透過核融合產生巨大的能量，支持地球上的生命。",
        details: {
            "質量": "1.989 × 10³⁰ kg",
            "體積": "1.412 × 10¹⁸ km³",
            "直徑": "1,392,700 km",
            "光度": "3.828 × 10²⁶ W",
            "核心溫度": "15,000,000 °C",
            "表面溫度": "5,500 °C",
            "光譜類型": "G2V"
        },
        obliquity: 7.25
    },
    {
        name: "Mercury",
        nameCH: "水星",
        type: "planet",
        radius: 0.5,
        realScaleRadius: 0.38,
        color: 0xaaaaaa,
        texture: "mercury.jpg",
        distance: 15,
        realScaleDistance: 60,
        speed: 0.02,
        inclination: 7.0,
        obliquity: 0.03,
        description: "最靠近太陽的行星。它沒有大氣層來調節溫度，導致晝夜溫差極大。其表面佈滿了數十億年來遭受撞擊留下的隕石坑。",
        details: {
            "質量": "3.301 × 10²³ kg",
            "體積": "6.083 × 10¹⁰ km³",
            "直徑": "4,879 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "-173°C 到 427°C"
        }
    },
    {
        name: "Venus",
        nameCH: "金星",
        type: "planet",
        radius: 0.9,
        realScaleRadius: 0.95,
        color: 0xffcc00,
        texture: "venus_surface.jpg",
        distance: 25,
        realScaleDistance: 90,
        speed: 0.015,
        inclination: 3.39,
        obliquity: 177.36,
        description: "被稱為地球的姊妹星，但極端惡劣。它擁有濃厚二氧化碳大氣層產生的劇烈溫室效應，使其成為太陽系中最熱的行星。",
        details: {
            "質量": "4.867 × 10²⁴ kg",
            "體積": "9.284 × 10¹¹ km³",
            "直徑": "12,104 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "462 °C"
        }
    },
    {
        name: "Earth",
        nameCH: "地球",
        type: "planet",
        radius: 1,
        realScaleRadius: 1,
        color: 0x2233ff,
        texture: "earth.jpg",
        distance: 40,
        realScaleDistance: 130,
        speed: 0.01,
        inclination: 0,
        obliquity: 23.44,
        description: "人類唯一的家園，是目前唯一已知存在生命的天體。地表約 71% 被海洋覆蓋。",
        details: {
            "質量": "5.972 × 10²⁴ kg",
            "體積": "1.083 × 10¹² km³",
            "直徑": "12,742 km",
            "光度": "N/A",
            "核心溫度": "6,000 °C",
            "表面溫度": "-88°C 到 58°C"
        },
        satellites: [
            {
                name: "ISS",
                nameCH: "國際太空站",
                type: "space_station",
                radius: 0.0125,
                realScaleRadius: 0.00125,
                color: 0xcccccc,
                distance: 1.25,
                realScaleDistance: 1.06,
                speed: 0.15,
                inclination: 51.6,
                description: "目前在軌運行的最大的空間站，由多國航天機構共同建造並運行。它是人類在太空進行長期科研的重要平台。",
                details: {
                    "質量": "450,000 kg",
                    "長度": "109 m",
                    "寬度": "73 m",
                    "乘員": "通常 7 人",
                    "發射時間": "1998年 (首模塊)",
                    "軌道高度": "約 408 km"
                }
            },
            {
                name: "CSS",
                nameCH: "天宮空間站",
                type: "space_station",
                radius: 0.01,
                realScaleRadius: 0.001,
                color: 0xffffff,
                distance: 1.4,
                realScaleDistance: 1.06,
                speed: 0.12,
                inclination: 41.5,
                description: "中國自主研發並建造的空間站，由天和核心艙、問天實驗艙、夢天實驗艙組成。它是中國載人航天工程的重要成果。",
                details: {
                    "質量": "約 100,000 kg",
                    "構成": "三艙 L 型",
                    "乘員": "通常 3 人",
                    "發射時間": "2021年 (核心艙)",
                    "軌道高度": "約 390 km"
                }
            },
            {
                name: "Moon",
                nameCH: "月球",
                type: "satellite",
                radius: 0.27,
                realScaleRadius: 0.27,
                color: 0x888888,
                texture: "moon.jpg",
                distance: 2.2,
                realScaleDistance: 3,
                speed: 0.05,
                inclination: 5.14,
                obliquity: 6.68,
                orbitRelativeToEquator: false,
                description: "地球唯一的天然衛星。它對地球的潮汐和自轉穩定起著關鍵作用，是人類唯一親自登陸過的地外天體。",
                details: {
                    "質量": "7.342 × 10²² kg",
                    "體積": "2.195 × 10¹⁰ km³",
                    "直徑": "3,474 km",
                    "光度": "N/A",
                    "核心溫度": "N/A",
                    "表面溫度": "-173°C 到 127°C"
                }
            }
        ]
    },
    {
        name: "Apophis",
        nameCH: "毀神星",
        type: "asteroid",
        radius: 0.15,
        realScaleRadius: 0.005,
        isIrregular: true,
        geometryScale: [2.5, 1.2, 1.2], // Elongated egg shape
        color: 0x666666,
        texture: "apophis.jpg",
        distance: 36,
        realScaleDistance: 120,
        speed: 0.012,
        inclination: 3.3,
        obliquity: 0,
        description: "一顆近地小行星，曾因極高的撞擊風險評估而聞名。它於 2029 年將在極近距離內掠過地球，提供絕佳的科學觀測機會。",
        details: {
            "質量": "6.1 × 10¹⁰ kg",
            "直徑": "370 m",
            "表面溫度": "N/A"
        }
    },
    {
        name: "1221 Amor",
        nameCH: "阿莫爾",
        type: "asteroid",
        radius: 0.1,
        realScaleRadius: 0.002,
        isIrregular: true,
        geometryScale: [1.8, 1.2, 1.2],
        color: 0xd2b48c,
        texture: "amor.jpg",
        distance: 48,
        realScaleDistance: 220,
        speed: 0.01,
        inclination: 11.9,
        obliquity: 0,
        description: "阿莫爾型小行星的代表天體，其軌道會跨越火星軌道並接近地球，但通常不會與地球軌道相交。",
        details: {
            "直徑": "1.0 km",
            "光譜類型": "S-type"
        }
    },
    {
        name: "Mars",
        nameCH: "火星",
        type: "planet",
        radius: 0.53,
        realScaleRadius: 0.53,
        color: 0xff3300,
        texture: "mars.jpg",
        distance: 55,
        realScaleDistance: 180,
        speed: 0.008,
        inclination: 1.85,
        obliquity: 25.19,
        description: "被稱為紅色星球，其顏色源於表面的氧化鐵。它擁有太陽系最高大的山脈（奧林帕斯山）和巨大的峽谷系統。",
        details: {
            "質量": "6.39 × 10²³ kg",
            "體積": "1.631 × 10¹¹ km³",
            "直徑": "6,779 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "-125°C 到 20°C"
        },
        satellites: [
            {
                name: "Phobos",
                nameCH: "火衛一 (福波斯)",
                radius: 0.15,
                realScaleRadius: 0.08,
                color: 0x888888,
                texture: "phobos.png",
                distance: 2,
                realScaleDistance: 2.5,
                speed: 0.08,
                inclination: 1.09,
                description: "火星最大的衛星，外型不規則且佈滿隕石坑。它離火星非常近，正緩慢地向火星靠近，預計在數千萬年後將會撞向火星或解體。",
                details: {
                    "質量": "1.066 × 10¹⁶ kg",
                    "直徑": "22.2 km",
                    "表面溫度": "-112 °C 到 -4 °C"
                }
            },
            {
                name: "Deimos",
                nameCH: "火衛二 (戴摩斯)",
                radius: 0.12,
                realScaleRadius: 0.05,
                color: 0x999999,
                texture: "deimos.png",
                distance: 3.5,
                realScaleDistance: 6,
                speed: 0.045,
                inclination: 0.93,
                description: "火星較小且較遠的衛星，表面覆蓋著厚厚的塵埃層，使其看起來比火衛一更平滑。",
                details: {
                    "質量": "1.476 × 10¹⁵ kg",
                    "直徑": "12.4 km",
                    "表面溫度": "-112 °C 到 -4 °C"
                }
            }
        ]
    },
    {
        name: "433 Eros",
        nameCH: "愛神星",
        type: "asteroid",
        radius: 0.28,
        realScaleRadius: 0.01,
        isIrregular: true, // Enable potato shape
        geometryScale: [3.2, 1.1, 1.1], // More elongated potato
        color: 0xc2a68d, // Refined stony color
        texture: "eros.jpg",
        distance: 68,
        realScaleDistance: 190,
        speed: 0.009,
        inclination: 10.8,
        obliquity: 0,
        description: "人類首顆近距離探測並登陸的小行星（由會合-舒梅克號完成）。它是一顆 S-型小行星，具有獨特的長條橢圓外型。",
        details: {
            "質量": "6.68 × 10¹⁵ kg",
            "直徑": "16.8 km",
            "表面溫度": "-150 °C 到 100 °C"
        }
    },
    {
        name: "887 Alinda",
        nameCH: "艾琳達",
        type: "asteroid",
        radius: 0.12,
        realScaleRadius: 0.008,
        isIrregular: true,
        geometryScale: [1.2, 1.1, 1.05], // Chunkier, less elongated "potato"
        color: 0x9a8c73,
        texture: "alinda.jpg",
        distance: 72,
        realScaleDistance: 280,
        speed: 0.007,
        inclination: 9.3,
        obliquity: 0,
        description: "一顆極具代表性的近地小行星，與木星具有 1:3 的平均運動共振，這也是艾琳達家族小行星的命名來源。",
        details: {
            "直徑": "4.2 km",
            "光譜類型": "S-type"
        }
    },
    {
        name: "4 Vesta",
        nameCH: "灶神星",
        type: "asteroid",
        radius: 0.32,
        realScaleRadius: 0.05,
        isIrregular: true, // It's somewhat squashed
        geometryScale: [1.15, 0.95, 1.15], // Oblate spheroid shape
        color: 0xc0c0c0,
        texture: "vesta.jpg",
        distance: 77,
        realScaleDistance: 275,
        speed: 0.0068,
        inclination: 7.1,
        obliquity: 27,
        description: "小行星帶中質量第二大的天體，被譽為「原行星」，擁有類似地球的分層結構和巨大的撞擊坑（雷亞希爾維亞坑）。",
        details: {
            "質量": "2.59 × 10²⁰ kg",
            "直徑": "525.4 km",
            "表面溫度": "-190 °C 到 -60 °C"
        }
    },
    {
        name: "Ceres",
        nameCH: "穀神星",
        type: "dwarf_planet",
        radius: 0.4,
        realScaleRadius: 0.075,
        color: 0x999999,
        texture: "ceres.jpg",
        distance: 88,
        realScaleDistance: 315,
        speed: 0.006,
        inclination: 10.6,
        obliquity: 4,
        description: "位於小行星帶中最大的天體，也是太陽系內側唯一的一顆矮行星。它主要由冰和岩石組成，表面可能存在含鹽的水冰。",
        details: {
            "質量": "8.96 × 10²⁰ kg",
            "體積": "4.21 × 10⁸ km³",
            "直徑": "950 km",
            "表面溫度": "-106 °C"
        }
    },
    {
        name: "Pallas",
        nameCH: "智神星",
        type: "asteroid",
        radius: 0.25,
        realScaleRadius: 0.04,
        color: 0x999999,
        texture: "pallas.jpg",
        distance: 93,
        realScaleDistance: 310,
        speed: 0.0055,
        inclination: 34.8,
        obliquity: 0,
        description: "小行星帶中第二大的天體，僅次於穀神星。它以極大傾角的軌道運行，表面成分與含碳球粒隕石相似。",
        details: {
            "質量": "2.04 × 10²⁰ kg",
            "直徑": "512 km",
            "表面溫度": "-100 °C"
        }
    },
    {
        name: "10 Hygeia",
        nameCH: "健神星",
        type: "dwarf_planet",
        radius: 0.22,
        realScaleRadius: 0.035,
        isIrregular: false, // It's surprisingly spherical
        geometryScale: [1.05, 1.0, 1.02],
        color: 0x444444,
        texture: "hygeia.jpg",
        distance: 98,
        realScaleDistance: 330,
        speed: 0.0052,
        inclination: 3.8,
        obliquity: 0,
        description: "小行星帶中第四大的天體。儘管位於小行星帶，但其極其接近球形的外觀使其成為矮行星的候選者。其表面非常黑暗，屬於 C-型小行星。",
        details: {
            "質量": "8.67 × 10¹⁸ kg",
            "直徑": "434 km",
            "表面溫度": "-110 °C"
        }
    },
    {
        name: "Juno",
        nameCH: "婚神星",
        type: "asteroid",
        radius: 0.22,
        realScaleRadius: 0.02,
        color: 0x888888,
        texture: "juno.jpg",
        distance: 82,
        realScaleDistance: 290,
        speed: 0.0065,
        inclination: 12.9,
        obliquity: 0,
        description: "小行星帶中的主要天體之一，也是首批被發現的四顆小行星中體積最小的一顆。其表面可能含有豐富的橄欖石。",
        details: {
            "質量": "2.7 × 10¹⁹ kg",
            "直徑": "233 km",
            "表面溫度": "-110 °C"
        }
    },
    {
        name: "16 Psyche",
        nameCH: "靈神星",
        type: "asteroid",
        radius: 0.22,
        realScaleRadius: 0.04,
        isIrregular: false, // More regular ellipsoidal shape
        geometryScale: [1.45, 1.25, 1.0], // Scientific ellipsoidal ratio
        color: 0x555555,
        texture: "psyche.jpg",
        distance: 104,
        realScaleDistance: 340,
        speed: 0.005,
        inclination: 3.1,
        obliquity: 0,
        description: "太陽系中最重金屬的小行星之一，被認為是早期行星暴露在外的鎳鐵核心。它接近規則的橢球體，表面呈現獨特的金屬光澤。",
        details: {
            "質量": "2.29 × 10¹⁹ kg",
            "直徑": "220 km",
            "成分": "鐵、鎳 (M-type)"
        }
    },
    {
        name: "Jupiter",
        nameCH: "木星",
        type: "planet",
        radius: 3,
        realScaleRadius: 11,
        color: 0xdcae96,
        texture: "jupiter_natural.png",
        distance: 120,
        realScaleDistance: 450,
        speed: 0.005,
        inclination: 1.3,
        obliquity: 3.13,
        description: "太陽系最大的行星，體積可容納 1,300 個地球。它是一個巨大的氣態巨行星，最著名的特徵是持續了數百年的大紅斑風暴。",
        details: {
            "質量": "1.898 × 10²⁷ kg",
            "體積": "1.431 × 10¹⁵ km³",
            "直徑": "139,820 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "-110 °C"
        },
        satellites: [
            {
                name: "Io",
                nameCH: "木衛一 (伊娥)",
                radius: 0.28,
                realScaleRadius: 0.285,
                color: 0xfff000,
                texture: "io_fixed.jpg",
                distance: 5,
                realScaleDistance: 13,
                speed: 0.04,
                inclination: 0.05,
                description: "太陽系中最活躍的火山天體。",
                details: {
                    "質量": "8.932 × 10²² kg",
                    "體積": "2.531 × 10¹⁰ km³",
                    "直徑": "3,643 km",
                    "表面溫度": "-143 °C"
                }
            },
            {
                name: "Europa",
                nameCH: "木衛二 (歐羅巴)",
                radius: 0.24,
                realScaleRadius: 0.245,
                color: 0xe0e0e0,
                texture: "europa.png",
                distance: 6,
                realScaleDistance: 21,
                speed: 0.03,
                inclination: 0.47,
                description: "表面被冰層覆蓋，下方可能隱藏著液態海洋。",
                details: {
                    "質量": "4.80 × 10²² kg",
                    "體積": "1.593 × 10¹⁰ km³",
                    "直徑": "3,122 km",
                    "表面溫度": "-160 °C"
                }
            },
            {
                name: "Ganymede",
                nameCH: "木衛三 (蓋尼米德)",
                radius: 0.41,
                realScaleRadius: 0.413,
                color: 0xa0a0a0,
                texture: "ganymede.png",
                distance: 7.5,
                realScaleDistance: 33,
                speed: 0.02,
                inclination: 0.2,
                description: "太陽系中最大的衛星，甚至比水星還要大。",
                details: {
                    "質量": "1.482 × 10²³ kg",
                    "體積": "7.66 × 10¹⁰ km³",
                    "直徑": "5,268 km",
                    "表面溫度": "-163 °C"
                }
            },
            {
                name: "Callisto",
                nameCH: "木衛四 (卡利斯托)",
                radius: 0.38,
                realScaleRadius: 0.378,
                color: 0x606060,
                texture: "callisto.png",
                distance: 9,
                realScaleDistance: 50,
                speed: 0.012,
                inclination: 0.2,
                description: "太陽系中隕石坑最密集的天體之一。",
                details: {
                    "質量": "1.076 × 10²³ kg",
                    "體積": "5.88 × 10¹⁰ km³",
                    "直徑": "4,821 km",
                    "表面溫度": "-139 °C"
                }
            }
        ]
    },
    {
        name: "Saturn",
        nameCH: "土星",
        type: "planet",
        radius: 2.5,
        realScaleRadius: 9.5,
        color: 0xf4d03f,
        texture: "saturn_ai.png",
        distance: 170,
        realScaleDistance: 800,
        speed: 0.004,
        inclination: 2.48,
        obliquity: 26.73,
        ring: {
            innerRadius: 3,
            outerRadius: 5,
            realInner: 11,
            realOuter: 18
        },
        description: "以其壯麗的環系統聞名，這些環主要由冰晶與塵埃組成。它是太陽系中密度最低的行星，如果把它放在水中，它會浮起來。",
        details: {
            "質量": "5.683 × 10²⁶ kg",
            "體積": "8.271 × 10¹⁴ km³",
            "直徑": "116,460 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "-140 °C"
        },
        satellites: [
            {
                name: "Mimas",
                nameCH: "土衛一 (米瑪斯)",
                radius: 0.15,
                realScaleRadius: 0.156,
                color: 0x999999,
                texture: "mimas.png",
                distance: 6,
                realScaleDistance: 25,
                speed: 0.045,
                inclination: 1.5,
                description: "以其巨大的赫歇爾撞擊坑聞名，使其外觀極其神似星際大戰中的「死星」。",
                details: {
                    "質量": "3.75 × 10¹⁹ kg",
                    "直徑": "396 km",
                    "表面溫度": "-209 °C"
                }
            },
            {
                name: "Enceladus",
                nameCH: "土衛二 (恩克拉多斯)",
                radius: 0.18,
                realScaleRadius: 0.198,
                color: 0xffffff,
                texture: "enceladus.png",
                distance: 7.5,
                realScaleDistance: 35,
                speed: 0.035,
                inclination: 0,
                description: "太陽系中最亮的天體之一，表面覆蓋著潔淨的冰層。其南極地區噴發出的水冰間歇泉證明了地下海洋的存在。",
                details: {
                    "質量": "1.08 × 10²⁰ kg",
                    "直徑": "504 km",
                    "表面溫度": "-201 °C"
                }
            },
            {
                name: "Tethys",
                nameCH: "土衛三 (特提斯)",
                radius: 0.22,
                realScaleRadius: 0.41,
                color: 0xcccccc,
                texture: "tethys.png",
                distance: 9,
                realScaleDistance: 45,
                speed: 0.028,
                inclination: 1.1,
                description: "一個冰冷的衛星，表面有巨大的奧德修斯撞擊坑以及貫穿半個星球的伊薩卡峽谷。",
                details: {
                    "質量": "6.17 × 10²⁰ kg",
                    "直徑": "1,062 km",
                    "表面溫度": "-187 °C"
                }
            },
            {
                name: "Dione",
                nameCH: "土衛四 (狄俄涅)",
                radius: 0.24,
                realScaleRadius: 0.44,
                color: 0xaaaaaa,
                texture: "dione.png",
                distance: 10.5,
                realScaleDistance: 55,
                speed: 0.022,
                inclination: 0,
                description: "表面佈滿隕石坑，其後隨半球擁有明亮的絲狀冰崖特徵。",
                details: {
                    "質量": "1.10 × 10²¹ kg",
                    "直徑": "1,122 km",
                    "表面溫度": "-186 °C"
                }
            },
            {
                name: "Rhea",
                nameCH: "土衛五 (瑞亞)",
                radius: 0.32,
                realScaleRadius: 0.6,
                color: 0xdddddd,
                texture: "rhea.png",
                distance: 12.5,
                realScaleDistance: 70,
                speed: 0.018,
                inclination: 0.3,
                description: "土星第二大的衛星，表面佈滿了古老的隕石坑，是一個典型的冰凍天體。",
                details: {
                    "質量": "2.31 × 10²¹ kg",
                    "直徑": "1,528 km",
                    "表面溫度": "-174 °C"
                }
            },
            {
                name: "Titan",
                nameCH: "土衛六 (泰坦)",
                radius: 0.65,
                realScaleRadius: 2.0,
                color: 0xffa500,
                texture: "titan.png",
                distance: 16,
                realScaleDistance: 100,
                speed: 0.012,
                inclination: 0.3,
                description: "太陽系唯一擁有濃厚大氣層的衛星。其表面存在液態甲烷湖泊，是除了地球以外唯一已知表面有液態河流、湖泊的天體。",
                details: {
                    "質量": "1.345 × 10²³ kg",
                    "直徑": "5,150 km",
                    "表面溫度": "-179 °C"
                }
            },
            {
                name: "Hyperion",
                nameCH: "土衛七 (海柏利昂)",
                radius: 0.12,
                realScaleRadius: 0.1,
                color: 0x8b4513,
                texture: "hyperion.png",
                distance: 18.5,
                realScaleDistance: 130,
                speed: 0.01,
                inclination: 0.5,
                description: "外觀極其獨特的衛星，表面佈滿了深邃且邊緣銳利的隕石坑，使其看起來像是一塊巨大的「海綿」。",
                details: {
                    "質量": "5.6 × 10¹⁸ kg",
                    "直徑": "270 km",
                    "表面溫度": "-180 °C"
                }
            },
            {
                name: "Iapetus",
                nameCH: "土衛八 (伊阿珀托斯)",
                radius: 0.28,
                realScaleRadius: 0.57,
                color: 0xffffff,
                texture: "iapetus.png",
                distance: 22,
                realScaleDistance: 180,
                speed: 0.008,
                inclination: 7.5,
                description: "著名的「陰陽衛星」，擁有黑白分明的雙色半球。它還有一條沿著赤道環繞的神祕山脈（赤道脊）。",
                details: {
                    "質量": "1.8 × 10²¹ kg",
                    "直徑": "1,469 km",
                    "表面溫度": "-143 °C 到 -173 °C"
                }
            },
            {
                name: "Phoebe",
                nameCH: "土衛九 (福柏)",
                radius: 0.1,
                realScaleRadius: 0.08,
                color: 0x333333,
                texture: "phoebe.png",
                distance: 26,
                realScaleDistance: 250,
                speed: 0.005,
                inclination: 175,
                description: "一顆極其黑暗的大型衛星，被認為是來自柯伊伯帶的捕獲天體。它以逆行軌道繞土星運行。",
                details: {
                    "質量": "8.29 × 10¹⁸ kg",
                    "直徑": "213 km",
                    "表面溫度": "-198 °C"
                }
            }
        ]
    },
    {
        name: "Uranus",
        nameCH: "天王星",
        type: "planet",
        radius: 1.5,
        realScaleRadius: 4,
        color: 0x73c6b6,
        texture: "uranus.jpg",
        distance: 230,
        realScaleDistance: 1500,
        speed: 0.003,
        inclination: 0.77,
        obliquity: 97.77,
        description: "一顆冰巨行星，大氣中含有甲烷使其呈現青藍色。它的自轉軸極度傾斜（約 98 度），看起來像是「躺著」繞太陽公轉。",
        details: {
            "質量": "8.681 × 10²⁵ kg",
            "體積": "6.833 × 10¹³ km³",
            "直徑": "50,724 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "-195 °C"
        },
        satellites: [
            {
                name: "Ariel",
                nameCH: "天衛一 (艾瑞爾)",
                radius: 0.22,
                realScaleRadius: 0.091,
                color: 0xcccccc,
                texture: "ariel.png",
                distance: 5,
                realScaleDistance: 14,
                speed: 0.025,
                inclination: 0.26,
                description: "天王星最亮的衛星，表面佈滿了巨大的峽谷和山脊，顯示出過去劇烈的地質活動。",
                details: {
                    "質量": "1.27 × 10²¹ kg",
                    "直徑": "1,158 km",
                    "表面溫度": "-189 °C"
                }
            },
            {
                name: "Umbriel",
                nameCH: "天衛二 (昂布里厄爾)",
                radius: 0.22,
                realScaleRadius: 0.092,
                color: 0x666666,
                texture: "umbriel.png",
                distance: 7.5,
                realScaleDistance: 20,
                speed: 0.015,
                inclination: 0.13,
                description: "天王星最黑暗、隕石坑最密集的衛星。它最醒目的特徵是一個被稱為「旺達」的明亮環狀坑。",
                details: {
                    "質量": "1.29 × 10²¹ kg",
                    "直徑": "1,169 km",
                    "表面溫度": "-198 °C"
                }
            },
            {
                name: "Titania",
                nameCH: "天衛三 (泰坦妮亞)",
                radius: 0.32,
                realScaleRadius: 0.124,
                color: 0xdddddd,
                texture: "titania.png",
                distance: 10.5,
                realScaleDistance: 32,
                speed: 0.012,
                inclination: 0.34,
                description: "天王星最大的衛星，表面佈滿了巨大的斷層崖與峽谷，顯示其內部曾發生過嚴酷的地質膨脹。",
                details: {
                    "質量": "3.49 × 10²¹ kg",
                    "直徑": "1,578 km",
                    "表面溫度": "-203 °C"
                }
            },
            {
                name: "Oberon",
                nameCH: "天衛四 (奧伯隆)",
                radius: 0.3,
                realScaleRadius: 0.12,
                color: 0xbbbbbb,
                texture: "oberon.png",
                distance: 13.5,
                realScaleDistance: 42,
                speed: 0.008,
                inclination: 0.1,
                description: "天王星最外層的主大衛星，表面極其古老且佈滿隕石坑，其大型撞擊坑底部常覆蓋著神祕的深色物質。",
                details: {
                    "質量": "3.01 × 10²¹ kg",
                    "直徑": "1,323 km",
                    "表面溫度": "-198 °C"
                }
            },
            {
                name: "Miranda",
                nameCH: "天衛五 (米蘭達)",
                radius: 0.18,
                realScaleRadius: 0.037,
                color: 0xeeeeee,
                texture: "miranda.png",
                distance: 3.5,
                realScaleDistance: 9,
                speed: 0.04,
                inclination: 4.34,
                description: "太陽系中最神祕、地質最為破碎且多樣的衛星之一。它擁有巨大的電路板狀地形（日冕）以及深達 20 公里的垂直斷崖。",
                details: {
                    "質量": "6.59 × 10¹⁹ kg",
                    "直徑": "471 km",
                    "表面溫度": "-187 °C 到 -213 °C"
                }
            }
        ]
    },
    {
        name: "Neptune",
        nameCH: "海王星",
        type: "planet",
        radius: 1.5,
        realScaleRadius: 3.9,
        color: 0x2e86c1,
        texture: "neptune_ai_v3.png",
        distance: 300,
        realScaleDistance: 2500,
        speed: 0.002,
        inclination: 1.77,
        obliquity: 28.32,
        description: "離太陽最遠的行星，風速高達每小時 2,100 公里，是太陽系中風速最高的天體。它呈現深藍色，同樣也是一顆冰巨行星。",
        details: {
            "質量": "1.024 × 10²⁶ kg",
            "體積": "6.254 × 10¹³ km³",
            "直徑": "49,244 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "-201 °C"
        },
        satellites: [
            {
                name: "Triton",
                nameCH: "海衛一 (崔頓)",
                radius: 0.45,
                realScaleRadius: 0.21,
                color: 0xffe4e1,
                texture: "triton.png",
                distance: 5,
                realScaleDistance: 13,
                speed: 0.015,
                inclination: 157,
                description: "海王星最大的衛星，也是太陽系中唯一逆行繞行行星的大衛星。表面有著名的「哈密瓜皮」地形，並噴發著氮氣間歇泉。",
                details: {
                    "質量": "2.14 × 10²² kg",
                    "直徑": "2,706 km",
                    "表面溫度": "-235 °C"
                }
            },
            {
                name: "Proteus",
                nameCH: "海衛八 (普羅透斯)",
                radius: 0.18,
                realScaleRadius: 0.033,
                color: 0x333333,
                texture: "proteus.png",
                distance: 2.5,
                realScaleDistance: 6,
                speed: 0.035,
                inclination: 0.55,
                description: "海王星第二大的衛星，也是太陽系中已知不規則形狀衛星中最大的一個。表面極其黑暗且佈滿密集的隕石坑。",
                details: {
                    "質量": "4.4 × 10¹⁹ kg",
                    "直徑": "418 km",
                    "表面溫度": "-222 °C"
                }
            }
        ]
    },
    {
        name: "Pluto",
        nameCH: "冥王星",
        type: "dwarf_planet",
        radius: 0.7,
        realScaleRadius: 0.186,
        color: 0xeac6a2,
        texture: "pluto.jpg",
        distance: 380,
        realScaleDistance: 3800,
        speed: 0.0015,
        inclination: 17.16,
        obliquity: 122.5,
        description: "太陽系中最著名的矮行星，曾被視為第九大行星。它與其衛星凱倫構成了一個雙星系統，其表面最顯眼的特徵是巨大的氮冰之心（湯博區）。",
        details: {
            "質量": "1.303 × 10²² kg",
            "體積": "7.057 × 10⁹ km³",
            "直徑": "2,376 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "-229 °C"
        },
        satellites: [
            {
                name: "Charon",
                nameCH: "冥衛一 (凱倫)",
                radius: 0.35,
                realScaleRadius: 0.095,
                color: 0x999999,
                texture: "charon.jpg",
                distance: 4,
                realScaleDistance: 10,
                speed: 0.02,
                inclination: 0,
                description: "冥王星最大的衛星，直徑超過冥王星的一半。兩者互相潮汐鎖定，始終以同一面朝向彼此。",
                details: {
                    "質量": "1.586 × 10²¹ kg",
                    "直徑": "1,212 km",
                    "表面溫度": "-220 °C"
                }
            }
        ]
    },
    {
        name: "Haumea",
        nameCH: "妊神星",
        type: "dwarf_planet",
        radius: 0.55,
        realScaleRadius: 0.136,
        geometryScale: [1, 0.75, 0.5],
        color: 0xeeeeee,
        texture: "haumea.jpg",
        distance: 460,
        realScaleDistance: 4310,
        speed: 0.0013,
        inclination: 28.2,
        obliquity: 126,
        description: "柯伊伯帶中形狀最奇特的矮行星，其形狀像一顆橄欖球（長橢球體）。這是因為它自轉極快（僅需不到四小時），其表面覆蓋著結晶水冰。",
        details: {
            "質量": "4 × 10²¹ kg",
            "直徑": "~1,600 km (橢球形平均)",
            "表面溫度": "-223 °C"
        }
    },
    {
        name: "Makemake",
        nameCH: "鳥神星",
        type: "dwarf_planet",
        radius: 0.5,
        realScaleRadius: 0.112,
        color: 0xcd7f32,
        texture: "makemake.jpg",
        distance: 600,
        realScaleDistance: 4550,
        speed: 0.0012,
        inclination: 29,
        obliquity: 0,
        description: "柯伊伯帶中較大、且表面顏色偏紅的矮行星。它是發現最晚、也是太陽系中最亮的幾個天體之一，表面覆蓋甲烷冰。",
        details: {
            "質量": "3 × 10²¹ kg",
            "直徑": "1,430 km",
            "表面溫度": "-243 °C"
        }
    },
    {
        name: "Eris",
        nameCH: "鬩神星",
        type: "dwarf_planet",
        radius: 0.72,
        realScaleRadius: 0.183,
        color: 0xffffff,
        texture: "eris.jpg",
        distance: 720,
        realScaleDistance: 6800,
        speed: 0.001,
        inclination: 44.2,
        obliquity: 78,
        description: "目前已知太陽系中最巨大的矮行星之一，位於離太陽極遠的散射盤。它的發現直接導致了冥王星被重新定義為矮行星。表面反照率極高，覆蓋著甲烷冰。",
        details: {
            "質量": "1.66 × 10²² kg",
            "直徑": "2,326 km",
            "表面溫度": "-243 °C"
        }
    },
    {
        name: "Halley",
        nameCH: "哈雷彗星",
        type: "comet",
        isComet: true,
        radius: 0.3,
        realScaleRadius: 0.008,
        color: 0x88ffcc,
        texture: "asteroid.jpg",
        distance: 280,
        realScaleDistance: 2600,
        speed: 0.003,
        inclination: 18,
        description: "哈雷彗星是目前已知最著名的週期性彗星。基於其逆行且高傾角的特殊軌道軌跡、長達數千年的活動史，以及沿途釋出的厚實碎屑雲帶，地球每年會兩度穿越這條由其留下的「塵埃河流」：5月時形成了寶瓶座η流星雨，而10月則迎來著名的獵戶座流星雨。",
        details: {
            "週期": "約 76 年",
            "核心大小": "約 15 × 8 km",
            "最後回歸": "1986 年",
            "下次預測": "2061 年"
        }
    },
    {
        name: "Swift-Tuttle",
        nameCH: "斯威夫特-塔特爾彗星 (109P)",
        type: "comet",
        isComet: true,
        radius: 0.35,
        realScaleRadius: 0.013,
        color: 0xaaffcc,
        texture: "asteroid.jpg",
        distance: 350,
        realScaleDistance: 5000,
        speed: 0.002,
        inclination: 113.5,
        description: "斯威夫特-塔特爾彗星是一顆極其龐大且具有潛在威脅的週期性彗星，其核心直徑達 26 公里。它是每年 8 月盛大的「英仙座流星雨」的高峰期來源。當地球穿過它在漫長軌跡上留下的塵埃帶時，這些顆粒進入大氣層即形成了壯麗的流星現象。",
        details: {
            "週期": "約 133 年",
            "核心直徑": "約 26 km",
            "最後回歸": "1992 年",
            "下次預測": "2126 年"
        }
    },
    {
        name: "Tempel-Tuttle",
        nameCH: "坦普爾-塔特爾彗星 (55P)",
        type: "comet",
        isComet: true,
        radius: 0.28,
        realScaleRadius: 0.002,
        color: 0xccffff,
        texture: "asteroid.jpg",
        distance: 240,
        realScaleDistance: 1500,
        speed: 0.004,
        inclination: 162.5,
        description: "坦普爾-塔特爾彗星是一顆週期約 33 年的週期性彗星，它是著名的「獅子座流星雨」的母彗星。由於其軌道碎屑雲帶的密度分佈非常集中，當地球穿過其留下的密集塵埃帶時，獅子座流星雨偶爾會在 11 月爆發成每小時數千顆以上的「流星暴」，是天文史上最具威力的流星現象之一。",
        details: {
            "週期": "約 33 年",
            "核心直徑": "約 3.6 km",
            "最後回歸": "1998 年",
            "下次預測": "2031 年"
        }
    },
    {
        name: "Hale-Bopp",
        nameCH: "海爾-博普彗星 (C/1995 O1)",
        type: "comet",
        isComet: true,
        radius: 0.6,
        realScaleRadius: 0.04,
        color: 0xffffff,
        texture: "asteroid.jpg",
        speed: 0.0001,
        isClosed: true,
        pathPoints: [
            [0, 10, 0],           // Perihelion (Just inside Earth orbit)
            [15, -20, 10],        // High speed departure, polar angle
            [100, -500, 30],      // Stretching out
            [180, -1800, 40],     // Side mid-point
            [100, -3200, 30],     // Curving back
            [0, -3700, 0],        // Aphelion (Deep Space)
            [-100, -3200, -30],
            [-180, -1800, -40],
            [-100, -500, -30],
            [-15, -20, -10]
        ],
        description: "20 世紀最壯觀的彗星之一，擁有巨大的彗核（直徑約 60 公里）。它以極高的軌道傾角與極長的週期（約 2,500 年）著稱。其標誌性的雙彗尾（藍色的離子尾與白色的塵埃尾）在 1997 年回歸時在北半球肉眼清晰可見長達 18 個月。",
        details: {
            "週期": "約 2,533 年",
            "核心直徑": "約 60 km",
            "近日點": "0.914 AU",
            "遠日點": "約 370 AU",
            "軌道傾角": "89.4° (近垂直)"
        }
    },
    {
        name: "3200 Phaethon",
        nameCH: "法厄同 (3200 Phaethon)",
        type: "asteroid",
        radius: 0.25,
        realScaleRadius: 0.003,
        color: 0x999999,
        texture: "asteroid.jpg",
        distance: 140,
        realScaleDistance: 130, // Very close perihelion simulation
        speed: 0.012,
        inclination: 22.2,
        description: "3200 Phaethon 是一顆軌道極其特殊的阿波羅型小行星，具有「岩石彗星」的特徵。它是每年 12 月「雙子座流星雨」的母體，這在流星雨起源中相當罕見（大多數流星雨源自彗星）。它在近日點時會極度接近太陽，表面溫度高達 750°C，導致其岩石表面因熱脹冷縮碎裂，並釋放出構成流星雨的塵埃粒子。",
        details: {
            "週期": "約 1.43 年",
            "直徑": "約 5.1 km",
            "分類": "阿波羅型小行星 / 岩石彗星",
            "近日點": "0.14 AU (極接近太陽)"
        }
    },
    {
        name: "Gonggong",
        nameCH: "共工星",
        type: "dwarf_planet_candidate",
        radius: 0.5,
        realScaleRadius: 0.1,
        color: 0xcc4422,
        texture: "gonggong.jpg",
        distance: 650,
        realScaleDistance: 6700,
        speed: 0.0009,
        inclination: 30.7,
        obliquity: 0,
        description: "柯伊伯帶中繞行太陽的大型天體，具有顯著的紅色表面。它是目前太陽系中已知最大的未命名天體之一（在正式命名前曾被稱為 2007 OR10）。",
        details: {
            "質量": "~1.75 × 10²¹ kg",
            "直徑": "1,230 km",
            "表面溫度": "-244 °C"
        }
    },
    {
        name: "Quaoar",
        nameCH: "創神星",
        type: "dwarf_planet_candidate",
        radius: 0.45,
        realScaleRadius: 0.086,
        color: 0x884422,
        texture: "quaoar.jpg",
        distance: 510,
        realScaleDistance: 4370,
        speed: 0.0013,
        inclination: 8,
        obliquity: 0,
        description: "柯伊伯帶中的大型傳統天體，曾被描述為具有結晶水冰的表面。最近發現它擁有一圈位於羅里不規則極限外的行星環。",
        details: {
            "質量": "1.4 × 10²¹ kg",
            "直徑": "1,110 km",
            "表面溫度": "-230 °C"
        }
    },
    {
        name: "Sedna",
        nameCH: "賽德娜",
        type: "dwarf_planet_candidate",
        radius: 0.42,
        realScaleRadius: 0.08,
        color: 0xff4500,
        texture: "sedna.jpg",
        distance: 850,
        realScaleDistance: 8500,
        speed: 0.0005,
        inclination: 11.9,
        obliquity: 0,
        description: "太陽系中最遙遠且最神祕的天體之一。它的軌道極端扁平，遠日點距離太陽約 937 AU。其驚人的紅色表面可能來自長期的宇宙射線照射。",
        details: {
            "質量": "約 1.0 × 10²¹ kg",
            "直徑": "約 1,000 km",
            "表面溫度": "-240 °C"
        }
    },
    {
        name: "Orcus",
        nameCH: "亡神星",
        type: "dwarf_planet_candidate",
        radius: 0.4,
        realScaleRadius: 0.075,
        color: 0xaaaaaa,
        texture: "orcus.jpg",
        distance: 420,
        realScaleDistance: 3940,
        speed: 0.0016,
        inclination: 20.5,
        obliquity: 0,
        description: "有時被稱為「反冥王星」，因為它的軌道與冥王星非常相似，但相位相反。它與冥王星一樣與海王星具有 2:3 的共振軌道。",
        details: {
            "質量": "6.4 × 10²⁰ kg",
            "直徑": "910 km",
            "表面溫度": "-230 °C"
        }
    },
    {
        name: "Salacia",
        nameCH: "薩拉客亞",
        type: "dwarf_planet_candidate",
        radius: 0.38,
        realScaleRadius: 0.07,
        color: 0x443322,
        texture: "salacia.jpg",
        distance: 480,
        realScaleDistance: 4220,
        speed: 0.0014,
        inclination: 23.9,
        obliquity: 0,
        description: "大型柯伊伯帶天體，具有極低的反照率，表面極其黑暗。目前尚未觀察到其表面存在顯著的冰層覆蓋。",
        details: {
            "質量": "4.5 × 10²⁰ kg",
            "直徑": "850 km",
            "表面溫度": "-230 °C"
        }
    },
    {
        name: "Varuna",
        nameCH: "伐樓拿",
        type: "asteroid",
        radius: 0.4,
        realScaleRadius: 0.07,
        geometryScale: [1.5, 1.0, 0.6], // Triaxial ellipsoid due to fast rotation
        color: 0xcc4422,
        texture: "varuna.jpg",
        distance: 530,
        realScaleDistance: 4300,
        speed: 0.0013,
        inclination: 17.2,
        obliquity: 0,
        description: "柯伊伯帶中大型的天體，也是首批被發現的偏遠天體之一。它以極快的自轉與長橢球體的造型著稱，表面覆蓋著豐富的水冰與托林。",
        details: {
            "質量": "3.7 × 10²⁰ kg",
            "直徑": "約 700 - 800 km",
            "表面溫度": "-230 °C"
        }
    },
    {
        name: "Máni",
        nameCH: "瑪尼 (2002 MS4)",
        type: "dwarf_planet_candidate",
        radius: 0.35,
        realScaleRadius: 0.065,
        color: 0x555555,
        texture: "mani.jpg",
        distance: 550,
        realScaleDistance: 4170,
        speed: 0.0014,
        inclination: 17.7,
        obliquity: 0,
        description: "大型柯伊伯帶天體，也是目前已知未命名（近期正式獲名為 Máni）的天體中最大的一個。它的直徑約為 800 公里，表面極其黑暗，主要由水冰和乾冰組成。",
        details: {
            "質量": "未知",
            "直徑": "約 800 km",
            "表面溫度": "-230 °C"
        }
    },
    {
        name: "Oumuamua",
        nameCH: "斥候星 (1I/ʻOumuamua)",
        type: "interstellar",
        radius: 0.3,
        realScaleRadius: 0.05,
        geometryScale: [2.5, 0.4, 0.4], // Cigar shape simulation
        color: 0x884444,
        texture: "oumuamua.jpg",
        distance: 0,
        speed: 0.002,
        pathPoints: [
            [-45000, 30000, -45000], // Deep Interstellar space (Direction of Lyra/Vega)
            [-15000, 10000, -15000], // Entering Oort Cloud
            [-400, 280, -400],       // Entering Inner System
            [-50, 40, -50],          // Close to planets
            [10, 5, 0],              // Perihelion (~0.25 AU)
            [60, -10, 80],           // Swing around sun
            [500, -150, 700],        // Leaving System
            [15000, -4000, 18000],   // Exiting Oort Cloud
            [40000, -12000, 55000]   // Deep Space (Towards Pegasus)
        ],
        description: "人類觀察到的首個太陽系外星際天體。它的形狀極端，呈現雪茄狀或盤狀，並在離開太陽系時表現出非引力加速度。",
        details: {
            "質量": "未知",
            "長度": "約 100-1,000 m",
            "最高速度": "87.7 km/s"
        }
    },
    {
        name: "2I/Borisov",
        nameCH: "鮑里索夫彗星",
        type: "interstellar",
        isComet: true,
        radius: 0.8,
        realScaleRadius: 0.6,
        color: 0x88ccff,
        texture: "borisov.jpg",
        distance: 0,
        speed: 0.00015,
        pathPoints: [
            [45000, 32000, 18000],    // Deep Interstellar (Direction of Cassiopeia)
            [18000, 12000, 6000],     // Entering Oort Cloud
            [600, 450, 250],          // Middle System
            [100, 80, 50],            // Approach
            [40, 30, 0],              // Perihelion (~2.0 AU)
            [100, -40, -200],         // Leaving
            [700, -300, -1000],       // Trans-Neptunian
            [12000, -6000, -20000],   // Exiting Oort Cloud
            [48000, -25000, -75000]   // Outer Interstellar (Towards Telescopium)
        ],
        description: "史上發現的第二個星際天體，也是第一顆星際彗星。它來自太陽系外，攜帶著異星系的冰與塵。當它接近太陽時，展現出了與太陽系彗星相似的噴發特徵。",
        details: {
            "發現時間": "2019年8月30日",
            "發現者": "珍納迪·鮑里索夫",
            "偏心率": "3.35 (極高雙曲線)",
            "核心直徑": "約 0.5 - 1 km",
            "主要成分": "富含一氧化碳與水冰",
            "特性": "典型的星際訪客"
        }
    },
    {
        name: "ATLAS",
        nameCH: "3I/亞特拉斯 (C/2019 Y4)",
        type: "interstellar",
        radius: 0.35,
        realScaleRadius: 0.07,
        color: 0x5588aa,
        texture: "atlas.jpg",
        isComet: true, // Enable comet effects for ATLAS too!
        distance: 0,
        speed: 0.0018,
        pathPoints: [
            [-50000, 5000, 20000],    // Deep Interstellar space
            [-18000, 1800, 7000],     // Outer Oort Cloud boundary
            [-2000, 200, 800],        // Kuiper Belt Outer
            [-150, 10, 40],           // Outer Planets
            [-10, 5, 0],              // Perihelion (~0.25 AU)
            [100, 30, -150],          // Post-perihelion
            [900, 300, -1500],        // Neptune orbit scale
            [15000, 5000, -25000],    // Exiting Oort Cloud
            [55000, 20000, -80000]    // Deep Outbound
        ],
        description: "一顆在接近太陽時碎裂的彗星，曾被預期將成為極亮的天體。它的軌道與 1844 年大彗星非常相似。",
        details: {
            "質量": "未知",
            "碎片數": "多個",
            "近日點": "0.25 AU"
        }
    }
];
