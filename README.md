# 🧠 BCI Frontend

This repository contains the frontend application for a Brain-Computer Interface (BCI) system that enables users to control a virtual keyboard using EEG signals.

---

## 📌 Project Overview

- **Goal**: Provide an interactive and user-friendly interface to visualize and interact with the output of a BCI system.
- **Framework**: Built using **Next.js** for React-based server-side rendering and frontend performance.
- **Backend**: Communicates with a FastAPI backend that handles signal processing, classification, and keyboard control logic.

---

## ✨ Features

- Real-time communication with BCI backend over WebSocket or REST API
- Visual feedback for user EEG-based selections
- Virtual keyboard interface for BCI-driven typing
- Responsive layout and minimalistic UI using TailwindCSS

---

## 🖼️ UI Components

- **Virtual Keyboard**: Circular layout with selectable characters
- **Signal Feedback**: Real-time indicator of current EEG classification
- **User Session Log**: Logs predictions, selections, and timestamps

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/bci-frontend.git
cd bci-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000  # Update if hosted elsewhere
```

### 4. Run the Application

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000`

---

## ⚙️ Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **State Management**: React Context / Zustand
- **Communication**: WebSocket or REST (Axios/Fetch)

---

## 🧪 Testing

To run unit or integration tests:

```bash
npm run test
```

---

## 📁 Folder Structure

```bash
.
├── auth            # Authentication-related pages and logic
├── about-us        # Static content for About page
├── assets          # Images and static media
├── components      # Reusable React components
├── contact         # Contact form or support section
├── dashboard       # Main EEG control and visualization UI
├── fonts           # Custom web fonts
├── how-it-works    # Educational or explanatory section
├── sections        # Page layout and composite sections
└── ...
```

---

## 🧠 Related Projects

- [BCI Backend (FastAPI)](https://github.com/umertariq22/bci-backend)

---

