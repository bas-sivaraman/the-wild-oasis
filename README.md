# The Wild Oasis

An internal hotel management application made with React.js, using ```react-router```, ```react-query```, ```styled-components``` and more, and Supabase as the backend.

## Overview

The project was developed as part of a learning experience. I had a great time working on it as I got to learn many new tools, patterns of development and best practices. It is an internal application used to manage bookings, checkin, checkout and more, all by an authenticated employee. As said, a new employee or user can only be created inside the application. Let's dive into the features.

## Features

The application has a lot of features such as checking in and out a guest, update bookings, create new user, update cabins and so on. Navigation between pages was done with the help of another popular library called **react router**. Most importantly the application required an effective remote state management strategy, for which I used **react query**. 

###Dashboard
  * It includes bookings stats and filters.
  * An activities container displaying the current day's expected checkin and checkout
  * A piechart showing ratios of different duration of stays against the whole pie of stay duration.
  * A linechart depicting total sales and extras sales plotted against each other.

###Bookings
  * It displays a booking table with individual rows for each booking.
  * An activities container displaying the current day's expected checkin and checkout
  * A piechart showing ratios of different duration of stays against the whole pie of stay duration.
  * A linechart depicting total sales and extras sales plotted against each other.
