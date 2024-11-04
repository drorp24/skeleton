# React + Vite

To adapt this fullstack skeleton for a pure frontend React exercise, you can simply focus on the client (React) part of the setup and ignore or disable the backend (server) folder.

Here’s a quick guide to make this work for a frontend-only setup:

1. Ignore the Server Folder
   Since this exercise is frontend-only, you can simply ignore or remove the server folder if you don’t need it. This will reduce the clutter and make the setup simpler.

2. Modify the package.json at the Root Level
   In the root package.json, remove the backend-related scripts to avoid any confusion or unnecessary commands:

```json
{
  "name": "react-exercises-skeleton",
  "version": "1.0.0",
  "private": true,
  "workspaces": ["client"],
  "scripts": {
    "start": "yarn workspace client dev", // Only start the frontend
    "lint": "eslint 'client/**/*.{js,jsx,ts,tsx}'",
    "format": "prettier --write 'client/**/*.{js,jsx,ts,tsx}'"
  },
  "devDependencies": {
    "concurrently": "^8.0.1",
    "eslint": "^8.0.0",
    "eslint-config-prettier": "^8.0.0",
    "eslint-plugin-prettier": "^4.0.0",
    "prettier": "^2.0.0"
  }
}
```

3. Update the client/vite.config.js (Remove Proxy)
   If your Vite config is set up to proxy requests to the backend, you can remove the proxy settings since there’s no backend API to connect to:

```javascript
// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

4. Adjust App.tsx to Remove API Calls
   If your App.tsx or any other component is making API calls to the backend, update it to use mock data or remove the API calls. Here’s an example of a simplified App.tsx:

```typescript
// client/src/App.tsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>React Exercise</h1>
      <p>This is a frontend-only setup for a React exercise.</p>
    </div>
  );
}
```

Start the Project
With this setup, you can start the React development server directly from the client workspace:

```bash
yarn start

```
