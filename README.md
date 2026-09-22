<div align="center">

# 🎙️ 語音筆記

**打開就能用的語音轉文字筆記工具：說話自動變成文字，AI 幫你整理重點。**

不用安裝 App、不用註冊，在 LINE 裡或任何瀏覽器都能用。

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
![LINE LIFF](https://img.shields.io/badge/LINE-LIFF-06C755?logo=line&logoColor=white)
![Single HTML](https://img.shields.io/badge/架構-單一_HTML-blue)
![No Backend](https://img.shields.io/badge/後端-無-lightgrey)
![PWA](https://img.shields.io/badge/PWA-支援-5A0FC8)

[**🔗 立即使用**](https://kenyuiyui.github.io/voice-to-text-line-bot-LIFF/) ·
[回報問題](../../issues) ·
[English](#english)

</div>

---

## 📑 目錄

- [為什麼做這個](#why)
- [功能特色](#features)
- [快速開始](#quick-start)
- [使用說明](#usage)
- [使用限制](#limits)
- [隱私與安全](#privacy)
- [技術架構](#tech)
- [自行部署](#deploy)
- [回報問題與貢獻](#contributing)
- [授權](#license)

---

<a id="why"></a>

## 💡 為什麼做這個

上課或聽演講時，常常因為**全英文授課**，或單純**一時聽漏**，就跟不上內容；事後想回頭整理，卻記不起講過什麼。

市面上的語音轉文字工具大多要另外下載 App 或註冊帳號，所以我做了一個**打開連結就能用**的版本：邊聽邊轉成文字，聽不懂的地方還能同步翻譯，結束後再請 AI 整理成重點。

---

<a id="features"></a>

## ✨ 功能特色

### 🎙️ 錄音與轉文字
- **即時轉寫**：邊講邊出現文字，每 15 秒轉出一段，不用等整場錄完
- **多語言**：中文、英文、日文、韓文，也可選「自動」處理中英日韓混著講
- **即時翻譯**：錄音時同步翻譯成另一種語言，適合外語授課
- **上傳錄音檔**：LINE 語音訊息、手機錄音 App 的檔案都能轉；**長錄音會自動切段處理**
- **簡轉繁保險**：自動把偶爾出現的簡體字轉成繁體

### 📝 整理筆記
- **筆記本清單**：每次錄音自動存成一本，可改名、刪除
- 修改文字、合併句子、調整順序
- **中斷保護**：錄音時切出畫面，會先保存手上那段，回來自動接著錄

### ✨ AI 重點整理（需摘要金鑰，可不用）
- 依場合整理重點：**上課／開會／訪談／聊天**，各自抓不同的重點
- 自動整理**待辦事項**（作業、考試範圍、負責人、期限）
- 產生**心智圖**，可下載成圖片
- **專有名詞查證**：抽出逐字稿裡的專有名詞，產生可直接貼到 Gemini 網頁版的提問稿

### 📤 分享
- 傳回 LINE 聊天室、傳給 LINE 好友、用其他 App 分享、複製全文
- 內容太長時自動分批傳送，中途中斷可以接著傳

### 🧑‍💻 使用體驗
- **全中文介面**，三步驟新手教學，**金鑰設定精靈**一步步帶你申請
- **電腦版**自動變成左右兩欄，可以直接把錄音檔拖進視窗
- 支援 **PWA**，可以「加到主畫面」當成 App 使用

---

<a id="quick-start"></a>

## 🚀 快速開始

1. 打開 👉 **[語音筆記](https://kenyuiyui.github.io/voice-to-text-line-bot-LIFF/)**
2. 照新手教學設定「**語音金鑰**」（免費、不用信用卡，約 2 分鐘）
3. 按 **🎙️ 開始錄音**，說話就會變成文字

> 想用 AI 整理重點，再另外設定「**摘要金鑰**」（Google 帳號即可免費申請），工具內一樣有設定精靈。

---

<a id="usage"></a>

## 📖 使用說明

### 🎙️ 錄音

- 錄音時請**保持螢幕開著、不要切出 LINE**。這是瀏覽器的限制：網頁放到背景後，手機系統會關掉麥克風（iPhone 一定會）
- 想在背景錄音？用**手機內建的錄音 App** 錄完，再用 📁 上傳

### 📁 上傳錄音檔

| 項目 | 說明 |
|---|---|
| 支援格式 | m4a、mp3、wav、ogg、webm、flac、mp4 |
| 25 MB 以內 | 原檔直接送出轉寫 |
| 25 MB ～ 500 MB | 在瀏覽器裡自動壓縮成語音用格式，約每 10 分鐘切一段，同時送出 3 段，並顯示進度條與剩餘時間 |
| 處理時間 | 2 小時的錄音約 4～8 分鐘（主要取決於網路上傳速度） |
| 注意 | 處理期間請保持畫面開著；手機處理 1 小時以上的檔案可能記憶體不足，建議改用電腦 |

> LINE 語音訊息存下來是 m4a，可以直接上傳。

### ✨ 重點摘要

打開筆記 → 切到「✨ 重點摘要」→ 選場合 → 按「產生重點摘要」。預設整理整本筆記；只想整理其中幾段，可以從「⋯ → ☑️ 挑段落摘要」挑選。

### 📖 共享筆記（進階）

適合多人分工記錄的情況，例如一人錄上半場、另一人錄下半場，事後合併成一份摘要。

<details>
<summary>展開看做法與資料格式</summary>

**做法**

1. 每個人在筆記裡按「⋯ → 📋 存到共享表格」，複製內容後貼到同一份 Google 試算表的下一個空白儲存格（A1、A2、A3…）
2. 在「⋯ → 📖 共享筆記」貼上試算表連結並讀取
3. 勾選要一起摘要的內容，勾選順序就是摘要時的排列順序
4. 產生的摘要也可以存回試算表，讓其他人讀取

**資料格式**：每個儲存格存一筆 JSON，由工具自動產生，請不要手動修改。

```json
{"label": "上半場逐字稿", "content": "...", "timestamp": "2026-09-03 14:00", "type": "raw"}
```

`type` 是 `raw`（逐字稿）、`summary`（摘要）或 `mindmap`（心智圖大綱）。

**限制**

- 工具**只讀取、不寫入**試算表，加入內容都是手動貼上
- 試算表要設成「知道連結的使用者 → **檢視者**」。**請不要設成「編輯者」**，否則任何拿到連結的人都能修改或清空表格
- 只讀取第一個工作表
- 多人同時貼上時沒有鎖定機制，貼上前請確認是空白儲存格

</details>

---

<a id="limits"></a>

## ⚠️ 使用限制

| 項目 | 限制 |
|---|---|
| 語音轉寫額度 | 依 Groq 免費方案規定；每小時約可轉 2 小時的聲音，超過需等額度恢復 |
| 上傳單檔 | 最大 500 MB（超過 25 MB 會自動切段） |
| 即時翻譯 | 免費每天約 5,000 字元，在設定頁填電子信箱可提高到 50,000 |
| 背景錄音 | 網頁無法在背景錄音（瀏覽器限制） |
| 傳回聊天室 | 需要從 LINE 聊天室開啟本頁，並加官方帳號好友；電腦版 LINE 無法使用 |
| 服務保證 | 個人維護的小工具，沒有正式客服，可能因故調整或停止 |

各服務的免費額度以官方最新公告為準。

---

<a id="privacy"></a>

## 🔒 隱私與安全

### 資料會送去哪裡

| 資料 | 送往 | 用途 |
|---|---|---|
| 錄音、上傳的錄音檔 | Groq | 語音轉文字 |
| 逐字稿（使用 AI 摘要時） | Google Gemini | 整理重點、心智圖、專有名詞 |
| 逐字稿片段（開啟即時翻譯時） | MyMemory | 翻譯 |
| 試算表連結（使用共享筆記時） | Google 文件 | 讀取表格內容 |
| 要傳送的內容（使用 LINE 傳送時） | LINE | 傳送訊息 |

- **本工具沒有自己的伺服器**，不蒐集個人資料，沒有廣告與追蹤
- 金鑰、筆記、摘要都**只存在你這台裝置的瀏覽器裡**；借來的裝置可以到「⚙️ 設定」一鍵全部刪除
- 各第三方服務的資料政策：
  - **Groq**：依官方條款不用於訓練，預設不保留；排查異常時最長暫存 30 天
  - **Google Gemini 免費方案**：內容可能被用於改善 Google 產品，也可能被人工審閱
  - **MyMemory**：提交的內容可能被長期保存
- **不建議**用來處理機密或敏感內容（商業機密、他人個資、密碼、身分證字號等）
- 錄音前請先確認課程或會議是否允許錄音；把他人的授課或談話內容公開散布，可能涉及著作權問題

### 安全設計

- **Content-Security-Policy**：網頁只能連到必要的網域，由瀏覽器強制執行
- **SRI 完整性驗證**：從 jsDelivr 載入的元件（簡轉繁、心智圖）都會驗證雜湊值
- 顯示外部內容（AI 回應、共享試算表）時一律轉義，避免被注入惡意程式
- Service Worker 只快取同源的網頁檔案，**不快取任何 API 回應**

發現安全性問題？請參考[回報問題](#contributing)，可以私下回報。

---

<a id="tech"></a>

## 🛠️ 技術架構

純前端、單一 HTML 檔案、沒有後端伺服器。

| 用途 | 技術 |
|---|---|
| 錄音 | MediaRecorder API |
| 語音轉文字 | [Groq](https://console.groq.com/docs/speech-to-text) Whisper（`whisper-large-v3-turbo`） |
| 長檔案切段 | Web Audio API（解碼、降成 16kHz）＋ μ-law WAV 編碼，不使用任何套件 |
| AI 摘要 | Google Gemini API |
| 即時翻譯 | MyMemory API |
| LINE 整合 | LIFF SDK（傳送訊息、選擇分享對象） |
| 簡轉繁 | opencc-js |
| 心智圖 | markmap、d3 |
| 儲存 | localStorage（只存在使用者的裝置） |
| 離線與安裝 | Service Worker、Web App Manifest |

### 專案結構

```
├── index.html        # 整個應用程式（HTML／CSS／JS）
├── sw.js             # Service Worker（只快取網頁本身）
├── manifest.json     # PWA 設定
├── icons/            # App 圖示
├── robots.txt
└── sitemap.xml
```

---

<a id="deploy"></a>

## 📦 自行部署

想用自己的 LINE 官方帳號部署一份，可以照以下步驟：

1. **Fork** 這個專案
2. 到 [LINE Developers](https://developers.line.biz/) 建立 LINE Login channel 與 **LIFF app**
   - Endpoint URL 填你的 GitHub Pages 網址
   - 要用「傳回聊天室」時，scope 需要勾選 `chat_message.write`
   - 要用「傳給 LINE 好友」時，需要開啟 **Share target picker**
3. 修改 `index.html` 裡的設定：

   | 常數／位置 | 改成 |
   |---|---|
   | `LIFF_ID` | 你的 LIFF ID |
   | `OFFICIAL_ACCOUNT_URL` | 你的官方帳號加好友連結 |
   | `<meta property="og:url">` | 你的網址 |
   | `sitemap.xml`、`robots.txt` | 你的網址 |

4. 刪除 `google*.html`（原作者的 Google Search Console 驗證檔）
5. 到 repo 的 **Settings → Pages** 開啟 GitHub Pages（Branch：`main`／root）

> 使用者需要自己申請 Groq／Gemini 金鑰，所以部署者**不需要**提供任何 API 金鑰，也不會產生費用。

---

<a id="contributing"></a>

## 🤝 回報問題與貢獻

遇到問題或有功能建議，歡迎到 [Issues](../../issues) 回報。開新的 Issue 時請盡量附上：

- 做了什麼操作（例如「上傳錄音檔之後」）
- 預期結果和實際結果
- 裝置與瀏覽器（例如 iPhone LINE、Android Chrome、Windows Chrome）
- 截圖（方便的話）

**安全性問題**請不要公開在 Issue 裡，改透過 LINE 官方帳號私下回報。

歡迎提出 Pull Request。這是個人維護的專案，回覆可能比較慢，但每一則回報都會看。

---

<a id="license"></a>

## 📄 授權

[MIT License](./LICENSE) © kenyuiyui

可以自由使用、修改、散布，包含商業用途，只要保留原始的著作權聲明與授權條款。程式碼依現狀提供，不附帶任何擔保。

---

<a id="english"></a>

## English

**語音筆記 (Voice Notes)** is a zero-install voice-to-text notebook for Traditional Chinese users. It runs inside LINE (as a LIFF app) or in any browser.

- 🎙️ Live transcription (zh / en / ja / ko, plus auto-detect for mixed speech) with optional live translation
- 📁 Audio file upload; files over 25 MB are **decoded, downsampled to 16 kHz μ-law WAV, and split into ~10-minute chunks in the browser**, then transcribed in parallel
- ✨ AI summaries by scene (lecture / meeting / interview / chat), action items, mind maps, and term extraction
- 📤 Send to LINE chats or friends, share to other apps, or copy
- 🔒 No backend, no accounts, no tracking. API keys and notes stay in the user's browser; strict CSP, with SRI on jsDelivr components

**Stack:** single `index.html` · MediaRecorder · Web Audio · Groq Whisper · Google Gemini · MyMemory · LINE LIFF · PWA

Users bring their own free Groq (and optionally Gemini) API keys; the built-in setup wizard walks them through it.

Licensed under [MIT](./LICENSE) © kenyuiyui.
