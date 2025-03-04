# MovieHive

MovieHive is a React-based movie discovery app that allows users to browse popular movies, search for specific titles, and save favorites. Built with Vite, React Router, and The Movie Database (TMDb) API, it provides an intuitive interface for movie lovers.

## Features

- **Browse Popular Movies**: Displays a grid of trending movies.
- **Search Movies**: Search for specific movie titles using TMDb API.
- **Favourite Movies**: Save movies to a personal favorites list.
- **Persisted Favorites**: Uses local storage to remember favourites.

## Future Enhancements

- **Movie Details Page**: Clicking a movie should navigate to a detailed description page.
- **Watch Trailer Button**: Integrate YouTube API to play trailers.
- **Improved UI/UX**: Add animations and better styling for a modern look.
- **Pagination for Movie Lists**: Implement infinite scroll or paginated results.
- **Dark Mode Support**: Allow users to toggle between light and dark themes.

## Project Structure

```
MovieHive/
├── src/
│   ├── assets/             # Static assets (images, icons, etc.)
│   ├── components/         # Reusable UI components (NavBar, MovieCard)
│   ├── contexts/           # Context API for global state management
│   ├── pages/              # Main pages (Home, Favourites)
│   ├── services/           # API calls (TMDb integration)
│   ├── css/                # Stylesheets
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
├── .env                    # (To be used for storing API keys securely)
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML file
├── package-lock.json       # Lock file for dependencies
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── vite.config.js          # Vite configuration
```

## Installation & Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/gamson3/MovieHive.git
   cd movie-hive
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up API key**

   - Create a `.env` file in the root directory.
   - Add your TMDb API key:
     ```sh
     VITE_TMDB_API_KEY=your_api_key_here
     ```

4. **Start the development server**

   ```sh
   npm run dev
   ```

   The app will be available at `http://localhost:5173/`.

## Usage Guide

- **Browse Movies**: On the homepage, view a list of popular movies.
- **Search**: Use the search bar to find specific movies.
- **Add to Favorites**: Click the heart icon on a movie card to add/remove it from favorites.
- **View Favorites**: Navigate to the "Favorites" page to see saved movies.

## Lessons Learned

During the development of MovieHive, we gained valuable experience in:

1. **Environment Variables and Security**

    Using **`.env` files** to store sensitive API keys securely.

    Learning that Vite requires environment variables to be prefixed with `Vite_` for them to be accessible in the frontend.

2. **React Router for Navigation**

    Implementing React Router to switch between the Home and Favorites pages.

    Understanding how `useLocation` helps reset the state when navigating between pages.

3. **Context API for Global State Management**

    Using Context API to manage and persist favorite movies across different components.

    Storing favorites in localStorage to keep data after page reloads.

4. **API Integration with TMDb**

    Fetching data from The Movie Database (TMDb) API and handling responses properly.

    Implementing error handling when fetching fails.

5. **Future Improvements & Scalability**

    Realizing the need for a Movie Details Page to show more information about a movie.

    Planning to add trailers, dark mode, and better pagination for a smoother user experience.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make changes and commit: `git commit -m "Added new feature"`.
4. Push changes: `git push origin feature-branch`.
5. Open a pull request.

## License

This project is licensed under the MIT License.

