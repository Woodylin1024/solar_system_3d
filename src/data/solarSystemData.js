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
            "表面溫度": "5,500 °C"
        }
    },
    {
        name: "Mercury",
        nameCH: "水星",
        type: "planet",
        radius: 0.5,
        realScaleRadius: 0.38,
        color: 0xaaaaaa,
        texture: "mercury.jpg",
        distance: 10,
        realScaleDistance: 60,
        speed: 0.02,
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
        distance: 15,
        realScaleDistance: 90,
        speed: 0.015,
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
        distance: 20,
        realScaleDistance: 130,
        speed: 0.01,
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
                name: "Moon",
                nameCH: "月球",
                radius: 0.27,
                realScaleRadius: 0.27,
                color: 0x888888,
                texture: "moon.jpg",
                distance: 2,
                realScaleDistance: 3,
                speed: 0.05,
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
        name: "Mars",
        nameCH: "火星",
        type: "planet",
        radius: 0.53,
        realScaleRadius: 0.53,
        color: 0xff3300,
        texture: "mars.jpg",
        distance: 25,
        realScaleDistance: 180,
        speed: 0.008,
        description: "被稱為紅色星球，其顏色源於表面的氧化鐵。它擁有太陽系最高大的山脈（奧林帕斯山）和巨大的峽谷系統。",
        details: {
            "質量": "6.39 × 10²³ kg",
            "體積": "1.631 × 10¹¹ km³",
            "直徑": "6,779 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "-125°C 到 20°C"
        }
    },
    {
        name: "Jupiter",
        nameCH: "木星",
        type: "planet",
        radius: 3,
        realScaleRadius: 11,
        color: 0xdcae96,
        texture: "jupiter.jpg",
        distance: 35,
        realScaleDistance: 450,
        speed: 0.005,
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
                texture: "io.jpg",
                distance: 5,
                realScaleDistance: 13,
                speed: 0.04,
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
                distance: 6,
                realScaleDistance: 21,
                speed: 0.03,
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
                distance: 7.5,
                realScaleDistance: 33,
                speed: 0.02,
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
                distance: 9,
                realScaleDistance: 50,
                speed: 0.012,
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
        texture: "saturn.jpg",
        distance: 45,
        realScaleDistance: 800,
        speed: 0.004,
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
        }
    },
    {
        name: "Uranus",
        nameCH: "天王星",
        type: "planet",
        radius: 1.5,
        realScaleRadius: 4,
        color: 0x73c6b6,
        texture: "uranus.jpg",
        distance: 55,
        realScaleDistance: 1500,
        speed: 0.003,
        description: "一顆冰巨行星，大氣中含有甲烷使其呈現青藍色。它的自轉軸極度傾斜（約 98 度），看起來像是「躺著」繞太陽公轉。",
        details: {
            "質量": "8.681 × 10²⁵ kg",
            "體積": "6.833 × 10¹³ km³",
            "直徑": "50,724 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "-195 °C"
        }
    },
    {
        name: "Neptune",
        nameCH: "海王星",
        type: "planet",
        radius: 1.5,
        realScaleRadius: 3.9,
        color: 0x2e86c1,
        texture: "neptune.jpg",
        distance: 65,
        realScaleDistance: 2500,
        speed: 0.002,
        description: "離太陽最遠的行星，風速高達每小時 2,100 公里，是太陽系中風速最高的天體。它呈現深藍色，同樣也是一顆冰巨行星。",
        details: {
            "質量": "1.024 × 10²⁶ kg",
            "體積": "6.254 × 10¹³ km³",
            "直徑": "49,244 km",
            "光度": "N/A",
            "核心溫度": "N/A",
            "表面溫度": "-201 °C"
        }
    }
];
