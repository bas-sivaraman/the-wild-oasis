# The Wild Oasis

An internal hotel management application made with React.js, using ```react-router```, ```react-query```, ```styled-components``` and more, and Supabase as the backend.

## Overview

The project was developed as part of a learning experience. I had a great time working on it as I got to learn many new tools, patterns of development and best practices. While working on it I developed reusable react components, reusable custom hooks, hooks using context API for global state management and more. It is an internal application used to manage bookings, checkin, checkout and more, all by an authenticated employee. As said, a new employee or user can only be created inside the application. Let's dive into the features.

## Features

The application has a lot of features such as checking in and out a guest, update bookings, create new user, update cabins and so on. Navigation between pages was done with the help of another popular library called **react router**. Most importantly the application required an effective remote state management strategy, for which I used **react query**. I have implemented little pop-up menus using a react development pattern called **Compound Component** that uses react's context API.

### Dashboard
  * It includes bookings stats and filters.
  * An activities container displaying the current day's expected checkin and checkout.
  * A piechart showing ratios of different duration of stays against the whole pie of stay duration.
  * A linechart depicting total sales and extras sales plotted against each other.

### Bookings
  * It displays a booking table with individual rows for each booking.
  * A pop-up menu with options to update the booking.
  * Filter and sort options that fetches data accordingly modified on the server-side.
  * Pagination to prefetch data when the user is just a page away from moving to the next page.

### Cabins
  * It again includes a cabin table with filter and sort options with an 'add new cabin' button.
  * It also has an option to duplicate, delete and edit cabins.
  * I have implemented a modal window that opens out at the top-level of html's body element.

### More features
  * **Users** displays a form to create new users.
  * **Settings** exposes a form to modify certain aspects of hotel's service.
  * **Account** page in the header menu lets a user update his/her information.

## Guidelines to use the project
  As a new user can only be created inside the application, I have left a user credential in the login page for use. Please login with it and create a new user and get authenticated by verifying the confirmation email. The application already has a sample data to work with, please make sure to use it with care while modifying or deleting a booking. I will also try to keep updating sample data until I release a feature to create new bookings. Hope you have fun!

## Helpful Links
  * [The Wild Oasis - Project link](https://the-wild-oasis-ashy-beta.vercel.app)
  * Other projects
    * [Pizza Stop](https://github.com/bas-sivaraman/pizza-stop)
