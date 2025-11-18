Kitchen Kompanion - Chef's Digital Menu App
Developer: Rayan Jaymar Bvulani

Student Number: ST10497168

Group: 3

Course: Higher Certificate In Mobile And Web App Development

Subject: Introduction To Mobile Application

Links
GitHub Repository: https://github.com/VCSTDN2024/imad5112-practicum-2025-ST10497168

Project Overview
The app "Kitchen Kompanion" is a mobile application developed as part of a practicum in the Higher Certificate In Mobile And Web App Development subject. This application was created using React Native, TypeScript, and Expo. The app's primary purpose is to allow Chef Christoffel to create, manage, and display his digital menu with different courses (Starters, Mains, Desserts) and provide clients with an easy way to browse the menu.

The app was developed to meet the requirements of the assignment Part 2, which includes creating a functional mobile app with specific features for menu management and utilizing GitHub for version control.

Purpose and Features
Purpose:
The purpose of "Kitchen Kompanion" is to provide Chef Christoffel with a digital solution for managing his frequently updated dining menus. Instead of relying on printed menus or manual updates, the app allows him to dynamically add, view, and organize menu items by course, while giving clients a streamlined browsing experience.

Key Features:
Add Menu Items: Allows the chef to enter dish name, description, select course from predefined list, and set price

Course Selection: Predefined list of courses (Starters, Mains, Desserts) for consistent categorization

Home Screen Display: Shows the prepared menu with total item count and preview

Real-time Count: Displays total number of menu items dynamically

Role Toggle: Switch between Chef Mode (edit capabilities) and Client Mode (view-only)

Filtering: Filter menu items by course type

Responsive Design: Works seamlessly across different mobile screen sizes

These features aim to provide an efficient digital menu management system that eliminates the need for printed menus and allows instant updates that clients can access immediately.

Design Considerations
The design of Kitchen Kompanion was based on the following key considerations:

User Experience (UX): The app was designed with two distinct user flows - one for the chef (admin) with full editing capabilities, and one for clients (view-only) with simple browsing functionality.

Intuitive Navigation: Clear navigation patterns using React Navigation stack for seamless screen transitions between Home, Add Menu Item, and Full Menu screens.

Visual Hierarchy: Consistent use of colors, typography, and spacing to create a professional culinary app appearance with proper information hierarchy.

Form Validation: Comprehensive input validation ensuring data integrity when adding new menu items.

Performance: Optimized component structure and state management to ensure smooth performance on mobile devices.

Accessibility: Proper contrast ratios, touch targets, and readable font sizes for inclusive design.

GitHub and GitHub Actions
This project was managed using GitHub for version control, where all code changes were committed and pushed regularly. GitHub enabled organized development workflow, allowing me to maintain project integrity and track progress throughout the development process.

GitHub Usage:
Regular commits with descriptive messages following conventional commit standards

Proper branch management for feature development

Comprehensive README documentation

Code organization with proper file structure

Screenshots
App Screenshots:
Splash Screen: Branded entry point with app logo and tagline

![IMG-20251022-WA0066](https://github.com/user-attachments/assets/000aef58-5423-4036-be59-167543c53454)


Home Screen: Dashboard showing total menu items, preview, and navigation options

![IMG-20251022-WA0065](https://github.com/user-attachments/assets/97bac0c0-2da6-415c-b11a-9ed90603c4d9)


Add Menu Item Screen: Form with input fields and course selection modal

![IMG-20251022-WA0064](https://github.com/user-attachments/assets/dd1f9539-16cc-4a32-bfdb-517563eb8a2c)

Full Menu Screen: Complete menu view with filtering options

IMG-20251022-WA0062

Video Demo
[YouTube Unlisted Link - To be added after recording]

Challenges and Learnings
During the development of this project, I encountered several challenges, including:

State Management Complexity: Managing the menu items state across multiple screens while maintaining data consistency.

Solution: Implemented proper state lifting and passing callbacks between screens to ensure real-time updates.

TypeScript Integration: Setting up proper TypeScript configurations and type definitions for React Native components.

Solution: Researched React Native with TypeScript best practices and created comprehensive interface definitions for all data structures.

Navigation Params: Handling navigation parameters between screens while maintaining type safety.

Solution: Implemented proper TypeScript typing for React Navigation stack parameters.

UI Consistency: Maintaining consistent styling and layout across different screen sizes and components.

Solution: Created a centralized stylesheet with reusable style patterns and consistent color scheme.

From these challenges, I learned important lessons in React Native development, TypeScript integration, state management patterns, and creating professional mobile app interfaces.

Future Enhancements
Potential future enhancements for Kitchen Kompanion include:

Persistent Storage: Implement AsyncStorage or SQLite to save menu data between app sessions

Edit/Delete Functionality: Add ability to modify or remove existing menu items

Image Support: Allow chefs to add photos for each menu item

Menu Sharing: Enable sharing menu via QR codes or links

Advanced Filtering: Add search functionality and price range filters

Offline Support: Implement offline capability for menu browsing

Backend Integration: Connect to a cloud database for multi-device synchronization

Print Functionality: Generate printable versions of the menu

Multiple Menus: Support for creating different menus for different events or clients

Analytics: Track popular dishes and client preferences

These enhancements would improve the app's usability and make it even more versatile for professional chef usage.

References
HAW MAST Practicum 2024 Assignment Brief

React Native Documentation: https://reactnative.dev/docs/getting-started

React Navigation Documentation: https://reactnavigation.org/docs/getting-started

Expo Documentation: https://docs.expo.dev/

TypeScript with React Native Guide: https://reactnative.dev/docs/typescript

Material Design Guidelines: https://material.io/design

React Native Elements UI Library Inspiration

List of Figures
Splash Screen Design: Initial loading screen with app branding

Home Screen Layout: Main dashboard with menu preview and navigation

Add Menu Item Form: Input form with course selection modal

Full Menu Interface: Complete menu display with filtering options

Course Selection Modal: Dropdown-style course picker interface
