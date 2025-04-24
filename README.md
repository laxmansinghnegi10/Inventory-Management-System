## 📌 Project Overview
A responsive inventory table component built for Baaz Bikes' technical screening, featuring:

- Responsive → Desktop table → Tablet scroll → Mobile Phones
- Reusable, configurable table component
- Real API integration with error handling
- Complete sorting/filtering/pagination
- Mobile-first responsive design

![Screenshot 2025-04-24 060218](https://github.com/user-attachments/assets/a7c5322e-8e3c-4e75-94c0-240c79c6ebac)
![Screenshot 2025-04-24 060157](https://github.com/user-attachments/assets/67d6abdf-6819-4ef3-9de7-7f64dde092ee)
![Screenshot 2025-04-24 060111](https://github.com/user-attachments/assets/4e21c015-7fe3-41b5-9b3e-91bb65f995c2)
![Screenshot 2025-04-24 060040](https://github.com/user-attachments/assets/2528039b-853b-45d1-9f6f-792d255e4f15)
![Screenshot 2025-04-24 060017](https://github.com/user-attachments/assets/229a4d61-1b3f-44d8-9f14-02afa2080192)


## 🛠️ Features Implemented

| Feature | Implementation Details |
|---------|------------------------|
| **Reusable Table** | Dynamic column configuration via props |
| **Column Sorting** | Click headers for ASC/DESC with visual indicators |
| **Instant Filtering** | Per-column text search (ID, Name, Category) |
| **Pagination** | Client-side page controls (20 items/page) |
| **Responsive UI** | Optimized for mobile (320px+) and desktop |

## 🚀 Quick Setup

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

1- git clone https://github.com/laxmansinghnegi10/baaz-bikes-inventory.git

2-cd baaz-bikes-inventory

3-npm install


# Running Locally

npm run dev

Open: http://localhost:3000


# Building for Production

npm run build && npm start


# 🌐 Live Demo
Experience the deployed version: https://inventory-management-system-jvyssk70r.vercel.app/


# 📦 Dependency Management
Important Note About node_modules

This repository intentionally excludes the node_modules folder because:

1-It contains 10,000+ files (unnecessary for version control)

2-All dependencies can be reinstalled using package.json

3-Reduces repository size by 90%+

# How to Restore Dependencies

After cloning the repository, run:

npm install

# -> This will:

1-Install all required packages (listed in package.json)

2-Create a fresh node_modules folder

3-Generate a package-lock.json for consistent versions


# ⚠️ Known Limitations

1-Large datasets (>10,000 items) may impact client-side performance.

2-Filters reset when changing pages (by design).

3-No server-side pagination implemented.


# 🤝 Contributing

Pull requests welcome! For major changes, please open an issue first.










