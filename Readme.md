# Search Application

This repository contains the implementation of a Search Application that allows users to search for machine manuals and view the results in a user-friendly interface.

## Features

- **Search Functionality**: Users can search for documents by entering a query.
- **Results Display**: Displays search results with details like filename, content snippet, upload date, page count, and file size.
- **Responsive UI**: Built with React and styled using Tailwind CSS for a responsive and visually appealing design.
- **Error Handling**: Provides meaningful feedback to users in case of errors or missing information.

## Project Structure

```
.
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Background.jsx
│   │   ├── SearchInterface.jsx
│   │   └── ResultsDisplay.jsx
│   ├── pages
│   │   └── Search.jsx
│   └── App.jsx
└── public
    └── index.html
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/search-application.git
   cd search-application
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Use the search bar to enter a query and press the search button.
3. View the search results below the search interface.

## API Endpoint

The application fetches search results from the following endpoint:

```
GET http://127.0.0.1:5000/search?query=<search_query>
```

Ensure the backend server is running and accessible at the specified URL.

## Dependencies

- **React**: For building the user interface.
- **Axios**: For making HTTP requests to the backend.
- **Tailwind CSS**: For styling the components.
- **React-Toastify**: For displaying notifications.

## Error Handling

- Displays a warning if the search query is empty.
- Notifies the user if the search fails.
- Handles cases where search results have missing or undefined properties.

## Future Enhancements

- Add pagination to the search results.
- Enhance the backend to support advanced search filters.
- Implement user authentication for personalized search experiences.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the open-source community for providing excellent libraries and tools.

---

Feel free to fork this repository and contribute to its development! If you have any questions, please open an issue or contact me directly.
