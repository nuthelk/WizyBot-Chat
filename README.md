# WizyBot Chat Interface - Technical Assessment

This project is a chat interface developed as part of a technical assessment. It simulates a basic interaction with an AI Customer Support agent, mimicking the Wizybot UI/UX experience.

## Overview

The chat interface allows users to send messages and receive responses from a simulated AI agent. Key features include:

* **User & AI Messages:** Displays messages from both the user (right side) and the AI (left side) in distinct chat bubbles.
* **Typing Indicator:** Shows a typing animation for 3 seconds after the user sends a message, simulating the AI preparing a response.
* **Dynamic Responses:** The AI provides randomly generated text responses to most user messages.
* **Product Recommendations:** If the user specifically types "I want product recommendations", the AI fetches product data from the Wizybot demo API and displays 3 random products in a carousel format, including product name, image, price, and a link.
* **Real-time Interaction:** Messages are listed chronologically, and the interface provides immediate feedback (typing indicator, response).

## Technologies Used

* **React:** JavaScript library for building user interfaces.
* **TypeScript:** Superset of JavaScript adding static typing.
* **Vite:** Fast frontend build tool and development server.
* **Tailwind CSS:** Utility-first CSS framework for styling.

## Getting Started

Follow these instructions to set up and run the project locally for development.

### Prerequisites

* Node.js (version 16.x or later recommended)
* npm (usually comes with Node.js) or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/nuthelk/WizyBot-Chat.git](https://github.com/nuthelk/WizyBot-Chat.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd WizyBot-Chat
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(If you prefer using yarn, run `yarn install`)*

### Running the Project Locally

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    *(If you prefer using yarn, run `yarn dev`)*

2.  **Open your browser:**
    Navigate to the local URL provided by Vite (usually `http://localhost:5173` or similar, check the terminal output).

The chat application should now be running in your browser.