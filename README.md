# 📘 FinacPlus Demo QA Automation Framework

This is a **Playwright-based UI + API automation framework** built using the **Page Object Model (POM)** design pattern and custom API client with fixtures. It covers end-to-end testing for both UI (Bookstore app) and API (ReqRes demo APIs).

---

## 🚀 Tech Stack

- Playwright Test Runner
- JavaScript (Node.js)
- Page Object Model (POM)
- Custom API Client Layer
- Playwright Fixtures
- dotenv (environment management)
- File System (fs module)

---

## 📂 Project Structure

```
.
├── fixtures/
│   ├── api.fixture.js
│   └── ui.fixture.js
│
├── pages/
│   ├── login.page.js
│   ├── bookstore.page.js
│   └── bookDetails.page.js
│
├── tests/
│   └── specs/
│       ├── ui/
│       │   └── bookstore.spec.js
│       └── api/
│           └── reqres.user.spec.js
│
├── utils/
│   ├── apiClient.js
│   └── fileHelper.js
│
├── files/
│   ├── bookDetails.json
│   └── bookDetails.txt
│
├── playwright.config.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Environment Setup

Create a `.env` file in root directory:

```
USERNAME=your_username
PASSWORD=your_password
SERVICE_BASE_URL=https://reqres.in/api
BASE_URL=https://demoqa.com
X_API_KEY=your_api_key_if_required
```

---

## 🔧 Playwright Configuration

The framework uses environment-driven configuration:

- `BASE_URL` → UI base URL
- `SERVICE_BASE_URL` → API base URL


---

## 🚀 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run UI tests only
```bash
npx playwright test tests/specs/ui
```

### Run API tests only
```bash
npx playwright test tests/specs/api
```

### Run headed mode
```bash
npx playwright test --headed
```

### View report
```bash
npx playwright show-report
```

---

## 🧪 API Automation Flow (ReqRes)

Base URL:
```
https://reqres.in/api
```

### Covered Flow

1. **Create User (POST)**
   - Create user via API
   - Validate response status code (201)
   - Capture and store `userId`

2. **Get User (GET)**
   - Fetch created user details
   - Validate response (200 / 404 for ReqRes mock behavior)

3. **Update User (PUT/PATCH)**
   - Update user's name
   - Validate updated response

---

### 🔐 Headers Handling

All API requests use a shared API client with headers support:

```
headers: {
  "x-api-key": process.env.X_API_KEY
}
```

---

## 🧱 Fixtures Design

### API Fixture

- Creates reusable `apiClient`
- Injects Playwright `request`
- Centralizes API calls

### Example
```js
exports.test = base.test.extend({
  apiClient: async ({ request }, use) => {
    const client = new ApiClient(request);
    await use(client);
  }
});
```

---

## 🧠 API Client Design

- Uses Playwright `request.newContext()`
- Base URL injected from `SERVICE_BASE_URL`
- Centralized methods:
  - `createUser()`
  - `getUser()`
  - `updateUser()`

---

## 📊 Test Reports

HTML report is generated automatically:

```
/playwright-report/index.html
```

---

## 📚 UI Automation Flow

### Bookstore Flow

- Login to application
- Search book
- Validate search results
- Open book details page
- Extract book metadata
- Save output to files

### Output Files
```
/files/bookDetails.json
/files/bookDetails.txt
```

---

## 🧩 Key Features

### UI
- Page Object Model (POM)
- Reusable page actions
- File export validation

### API
- End-to-end CRUD flow
- Fixture-based injection
- Environment-based config
- Header support (x-api-key)

---

## 🧪 Design Principles

- Modular architecture
- Separation of concerns
- Reusable API client layer
- Fixture-driven test injection
- Environment-based configuration

---

## 👨‍💻 Author

Suraj Saha
QA Automation Engineer

