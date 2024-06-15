# Redux Example App

This is a simple React application demonstrating the use of Redux for state management. The app includes functionality to buy cakes and ice creams, with the respective counters being displayed on the screen and decremented upon each purchase.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

A live demo of the application can be found [here](#).

## Features

- Buy cakes and ice creams
- Decrement the counter on each purchase
- Display the updated counters on the screen

## Prerequisites

Before you begin, ensure you have the following tools installed on your system:

- [Node.js and npm](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install) (optional, but recommended)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YourUsername/redux-example-app.git
   cd redux-example-app
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

   or

   ```bash
   npm install
   ```

## Running the App

1. **Start the development server**

   ```bash
   yarn start
   ```

   or

   ```bash
   npm start
   ```

2. **Open your browser**

   Navigate to `http://localhost:3000` to view the app.

## Project Structure

```
root
├── src
│   ├── components
│   │   ├── CakeContainer.js
│   │   ├── IceCreamContainer.js
│   │   └── ...
│   ├── redux
│   │   ├── cake
│   │   │   ├── cakeActions.js
│   │   │   ├── cakeReducer.js
│   │   │   └── cakeTypes.js
│   │   ├── iceCream
│   │   │   ├── iceCreamActions.js
│   │   │   ├── iceCreamReducer.js
│   │   │   └── iceCreamTypes.js
│   │   ├── store.js
│   │   └── rootReducer.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── public
│   ├── index.html
│   └── ...
├── package.json
├── README.md
└── ...
```

## Usage

- **Buying Cakes**

  - Click the "Buy Cake" button to decrement the cake counter.

- **Buying Ice Creams**

  - Click the "Buy Ice Cream" button to decrement the ice cream counter.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Happy Coding!

If you have any questions or suggestions, feel free to contact me at [karandumbre1@gmail.com](mailto:karandumbre1@gmail.com).

---

© 2024 Redux Example App. All rights reserved.
