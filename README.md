# 📘 FinacPlus Demo QA Automation Framework

This is a **Playwright-based UI automation framework** built using the **Page Object Model (POM)** design pattern. It automates end-to-end testing of the Book Store application including login, book search, validation, and book details extraction.

---

## 🚀 Tech Stack

- Playwright Test Runner
- JavaScript (Node.js)
- Page Object Model (POM)
- dotenv (environment management)
- File System (fs module for file writing)

---

## 📂 Project Structure

```
.
├── fixtures/              # Custom Playwright fixtures
│   └── ui.fixture.js
├── pages/                 # Page Object Models
│   ├── login.page.js
│   ├── bookstore.page.js
│   └── bookDetails.page.js
├── tests/                 # Test specifications
│   └── specs/
│       ├── ui/
│       │   └── bookstore.spec.js
│       └── api/
├── utils/                 # Helper utilities
│   └── fileHelper.js
├── files/                 # Output files (JSON/Text)
│   ├── bookDetails.json
│   └── bookDetails.txt
├── playwright.config.js
├── .env
└── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone repository
```bash
git clone https://github.com/surajsaha2512/FinacPlusDemoQA.git
cd FinacPlusDemoQA
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in root directory:

```
USERNAME=your_username
PASSWORD=your_password
```

---

## ▶️ Running Tests

### Run all tests
```bash
npx playwright test
```

### Run UI tests only
```bash
npx playwright test tests/specs/ui
```

### Run tests in headed mode
```bash
npx playwright test --headed
```

### Run on Chromium only
```bash
npx playwright test --project=chromium
```

---

## 📊 Test Reports

Generate and view HTML report:
```bash
npx playwright show-report
```

---

## 🔍 Framework Features

### ✅ UI Automation Flow
- Login to Book Store application
- Validate successful login
- Search for books
- Validate search results
- Navigate to book details page
- Extract complete book information

---

### 📚 Book Details Extracted

- ISBN
- Title
- Subtitle
- Author
- Publisher
- Total Pages
- Description
- Website

Output is stored in:
```
/files/bookDetails.json
/files/bookDetails.txt
```

---

```

---

## 🧱 Design Pattern

This framework follows:
- Page Object Model (POM)
- Modular architecture
- Reusable utility functions
- Separation of test data and logic

---


## 👨‍💻 Author

Suraj Saha
QA Automation Engineer

