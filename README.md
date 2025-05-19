# React + Vite + Tailwind CSS


Always follow below steps to Install React


**Build Project**


https://vite.dev/guide/


npm create vite@latest ...


0. Create Location
1. npm install -g create-vite | (Only one time)
2. npx create-vite@latest test-project --template react
3. cd test-project
4. npm install
5. npm run dev
6. git init

---

**Install Tailwind CSS as a Vite plugin**


https://tailwindcss.com/docs/installation/using-vite


1. npm install tailwindcss @tailwindcss/vite
2. In file vite.config.js
   Add below code
   import tailwindcss from "@tailwindcss/vite";
   In the same code add
   plugins: [react(), tailwindcss()],
3. In file index.css
   @import "tailwindcss";
4. In file main.jsx
   import "./index.css";
   npm run dev

---

**Just in my case**


Will appear below issue


error when starting dev server: Error: EPERM: operation not permitted, rmdir 'C:...test-project\node_modules\.vite\deps'


Due to we have @ and space between words


**Solution**


1. rm -rf node_modules
2. npm i
