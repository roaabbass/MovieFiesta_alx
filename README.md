

# Movie Database Application  
A sleek and responsive Movie Database application built with **React** and optionally styled with **Tailwind CSS**. This project allows users to search for movies, view details, and interact with movie data fetched from a public API like OMDB.  

This app will give you hands-on experience with **frontend development**, **state management**, **API integration**, and **deployment**.  



## Features  

### **Search Movies**  
- Users can search for movies by typing the movie title.  
- Displays a list of relevant movies with:  
  - Movie Poster (Thumbnail)  
  - Title  
  - Release Year  

### **Movie Details View**  
- Clicking on a movie displays its full details:  
  - **Plot Summary**  
  - **Cast** and their roles  
  - **Ratings** (e.g., IMDb, Rotten Tomatoes)  
  - **Genres** (e.g., Drama, Action)  

### **Responsive UI Design**  
- Fully responsive for **desktop, tablet, and mobile** using Tailwind CSS.  
- User-friendly navigation to browse movies and access details seamlessly.  

### **Error Handling**  
- Displays appropriate messages when:  
  - No movies match the search query.  
  - Network issues occur during API requests.  

---

## **Tech Stack**  

- **React** – For building the user interface.  
- **JavaScript (ES6)** – Logic and functionality.  
- **Tailwind CSS** – Styling the app.  
- **OMDB API** – Fetching movie data.  
- **Vite** or **Create React App** – Project setup and bundling.  

---

##  **Installation & Setup**  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/roaabbass/MovieFiesta_alx.git
   cd MovieFiesta_alx

   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Get your API key:**  
   - Visit the [OMDB API](https://www.omdbapi.com/apikey.aspx) and sign up for a free API key.  

4. **Add the API key to your project:**  
   - Create a `.env` file in the root of your project and add:  
     ```bash
     REACT_APP_OMDB_API_KEY=4fdd443f
     ```

5. **Start the development server:**  
   ```bash
   npm run dev
   ```  
   The app will be running at `http://localhost:5173` (if using Vite) or `http://localhost:3000`.  

---

##  **Project Structure**  

```
movie-database-app/
│
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components (SearchBar, MovieCard, MovieDetails)
│   ├── App.js           # Main component
│   ├── index.js         # Entry point
│
├── .env                 # API key configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

---

##  **Usage**  

1. **Search for Movies:**  
   - Enter a movie name in the search bar and click the search button.  
   - If movies are found, a list with thumbnails will be displayed.  

2. **View Movie Details:**  
   - Click on a movie from the list to view its detailed information.  

3. **Error Handling:**  
   - If no movies are found, you will see a “No results found” message.  
   - If the API request fails, a network error message will appear.  

  

---

##  **Deployment**  

1. **Build the project for production:**  
   ```bash
   npm run build
   ```

2. **Deploy on Netlify / Vercel:**  
   - Log in to [Netlify](https://www.netlify.com/)   
   - Select the repository and follow the deployment steps.  
   - Once deployed, you will receive a public URL to access the app.  

---

##  **Error Handling Scenarios**  

1. **No search results:**  
   - Message: “No movies found. Try another search.”  

2. **Network or API Error:**  
   - Message: “Unable to fetch movies. Please try again later.”  

---

##  **Future Improvements**  

- **Sorting & Filtering:** Allow sorting by release date, rating, or genre.  
- **Multi-language Support:** Add internationalization for multiple languages.  
- **Advanced State Management:** Integrate Zustand or Redux for larger applications.  


##  **Contact**  

If you have any questions or feedback, feel free to reach out:  
- **Email:** roaabbass@gmail.com 
- **GitHub:** [roaabbass]
https://github.com/roaabbass
---

