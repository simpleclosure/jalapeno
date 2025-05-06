## 🎬 Goal

Using this starter repo, build a page that fetches movies from **The Movie Database (TMDB) API** and displays them in a styled grid of cards with basic styling and interactivity.

## 🧰 Tech Stack
- **Framework:** Next.js (already configured)
- **Styling:** Tailwind CSS (included) or plain CSS
- **Environment:** Use any IDE (e.g., Cursor, VS Code)

## 🚀 Setup
1. Install dependencies:
```bash
npm i
```

2. Run the development server:
```bash
npm run dev
```

3. Start coding!
Open [http://localhost:3000](http://localhost:3000) with your browser to view the app.

## 🔗 TMDB API
- **API Key**: 62df2cd3a4881de6558bc68cd67cca20
- **Endpoint**: GET /discover/movie
    - Base URL: `https://api.themoviedb.org/3/discover/movie?**api_key=api_key**`
    - Documentation: [TMDB Discover Movie](https://developer.themoviedb.org/reference/discover-movie)
- **Images**: Construct poster image URLs by appending *poster_path* to `https://image.tmdb.org/t/p/w500/`

## ✅ Requirements

1. **Fetch Movies**: 
Fetch movies from the */discover/movie* endpoint (first page is sufficient). 
You must:
    - Apply **one filter** to the API request (e.g., by genre, release year – your choice)
    - **Sort** the movies using a method and property of your choice
2. **Styling**: 
    - Display movies in a grid. Each card must have:
        - Poster image
        - Title
        - One additional property of your choice
        - One interactive element (e.g., hover effect)
    - Use Tailwind or method of your choosing
3. **Code**: 
Use clear, modular code. Break things into reusable components when it makes sense.

## ✨ Extras (if time permits)

- **UI Improvements:**
    - Make the grid responsive
    - Add a UI for filtering and/or sorting
    - Handle missing poster images gracefully
    - Add a loading state
- **Testing**: How would you approach testing this feature?
- **Caching**: How would you approach caching the API response for performance?
