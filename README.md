# Cosmic Encyclopedia

An interactive React web application for exploring celestial categories—including planets, stars, and galaxies—built with **React**, **React Router v6**, and **Material UI**.

## Features

- **Dynamic Routing:** Uses React Router v6 URL parameters (`/:id`) and `useParams` to dynamically render category pages through a single `ContentPage` component.
- **Custom Navigation History:** Tracks visited routes in application state to power custom **Back** and **Forward** navigation buttons built with Material UI (`@mui/material`), automatically disabling when no history is available.
- **Active Navigation & Error Handling:** Highlights the active category using `NavLink` and gracefully handles unknown routes with a fallback "Topic Not Found" view.

## Tech Stack

- **React**
- **React Router DOM (v6)**
- **Material UI (`@mui/material`)**
- **CSS**