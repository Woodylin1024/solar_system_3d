一個基於 Three.js 打造的沉浸式動態太陽系探索器。本專案不僅提供了精美的視覺模型，更導入了「真實比例」與「藝術模型」的動態切換功能，讓使用者能直觀感受宇宙的浩瀚與天體的奧秘。

🎬 點此查看線上選Demo
https://woodylin1024.github.io/solar_system_3d/

✨ 核心特色  
🔭 雙重尺度切換 (View Mode Toggle)  
．藝術模式 (Artistic Mode)：縮小星際距離並放大行星體積，方便觀測模型細節與運作規律。  
．真實比例模式 (Real Scale)：還原物理世界的真實比例與空間距離，感受地球在太陽面前的渺小與星際空間的深邃。

📱 全平台適應 UI/UX  
．響應式設計：專為手機、平板與桌機優化。在行動裝置上，詳細資訊會以優雅的「底部抽屜」形式呈現。  
．智慧攝影機 (Smart Tracking)：採用 Delta-Tracking 演算法，無論行星跑多快，鏡頭都能絲滑鎖定中心，並自動避開 UI 遮擋。

📊 即時動態數據  
．整合八大行星與衛星的詳細天文參數。  
．支援時間流速調整（0.1x 至 10x），可隨時暫停捕捉完美瞬間。

🎨 極致視覺美學  
．使用高解析度星體貼圖、大氣層發光效果（Glow Effect）。  
．磨砂玻璃 (Glassmorphism) 風格的控制面板，兼具現代感與科技感。

🛠️ 技術棧  
．核心架構：Three.js (WebGL 3D Engine)  
．開發工具：Vite (高效能前端構建)  
．動畫處理：原生 RequestAnimationFrame 高頻更新  
．部署環境：GitHub Pages  
．語言：JavaScript (ES6+), CSS3 (Vanilla), HTML5

🚀 快速上手  
．本地開發
# 複製專案
git clone https://github.com/Woodylin1024/solar_system_3d.git

# 進入資料夾
cd solar_system_3d

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

．部署至 GitHub Pages
bash
npm run deploy

📸 畫面預覽  
．PC 介面：側邊資訊欄提供完整天體數據，支持縮放與 360 度旋轉。  
．Mobile 介面：底部抽屜設計，攝影機自動上移確保星體不被對話框遮擋。
