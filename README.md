# Cryptocurrency Price Overview App

This project is a simple React Native application that displays an overview of cryptocurrency prices using the CoinGecko API.

## Features

- Fetches cryptocurrency data from the CoinGecko API.
- Displays a list of the top 10 cryptocurrencies by market cap.
- Shows the following information for each cryptocurrency:
  - Image
  - Name
  - Symbol
  - Current price in USD
  - 24-hour price change percentage
- Has pull-to-refresh functionality.
- Has dark / light mode functionality.
- Has search functionality.

## Technical Specifications

### API Integration

- Utilized the built-in `fetch` package to make API calls.
- Implemented error handling for API requests to ensure a smooth user experience.

### State Management

- Used a state management solution of `Context` and `setState` together.

### UI Components

- Implemented granular design in ui components.
- Custom list item component for utilizing flatlist.
- Pull-to-refresh functionality for updating the list.

### Code Structure

- Organized into appropriate folders:
  - `hooks`: For helper hooks.
  - `context`: state management.
  - `component`: For reusable UI components.

## Bonus Features (Optional)

The following features can be added:

- Implemented Search functionality to filter cryptocurrencies.
- Dark mode toggle.
- Simple price chart for each cryptocurrency.

## How to Run the App

1. Clone the repository:

   ```bash
   git clone <repository-link>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   yarn
   ```

4. Run the app:
   ```bash
   yarn android
   ```

## Extra

- Chart place is shown in dataListItem.
