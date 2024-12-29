# Historical Places App

This is a Historical Places App built with React, Redux Toolkit, RTK Query, Redux Persist, React Router, and Tailwind CSS. The app displays a list of historical places, allows users to mark places as visited, includes navigation between screens, and features a fun interactive element to suggest a random place.

## Features

- Fetch and display a list of historical places
- Mark and unmark places as visited with immediate UI updates
- Suggest a random historical place
- View details of a historical place
- Persist visited places using Redux Persist
- Smooth navigation between screens using React Router

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/smyaseen/historical-places-react
   cd historical-places-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install the JSON server:

   ```bash
   npm install -g json-server
   ```

4. Start the JSON server:

   ```bash
   json-server --watch db.json --port 5000
   ```

5. Start the React app:

   ```bash
   npm run dev
   ```
