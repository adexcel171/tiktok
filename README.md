TikTok Clone - Built with Next.js 13 and TypeScript

Welcome to my TikTok Clone, a full-stack web application built to sharpen my TypeScript skills and demonstrate proficiency in modern web development. This project replicates core TikTok functionalities, including video uploads, user profiles, likes, comments, and real-time data handling, all powered by Next.js 13, TypeScript, and AppWrite. The app emphasizes type safety, real-time error catching, and a seamless user experience, showcasing my ability to build scalable, production-ready applications.

Explore the live demo: [Insert Live Demo Link Here]
Watch the tutorial: YouTube Tutorial
Connect with me: LinkedIn | X

🚀 Features





User Authentication: Secure registration, login, and logout using AppWrite's authentication system.



Video Uploads: Upload, preview, and post videos (MP4, up to 30 minutes, <2GB) with captions.



User Profiles: Display user information, bio, and uploaded videos with dynamic profile images.



Social Interactions: Like, comment, and follow users, with real-time updates.



Type Safety: Leverages TypeScript for robust type checking and error prevention, ensuring maintainable code.



Responsive Design: Optimized for desktop and mobile using Tailwind CSS.



Real-Time Data: Integrates AppWrite for efficient data storage and retrieval of posts, likes, and comments.



Video Navigation: Seamless navigation through posts with up/down controls.



Error Handling: Client-side validation for uploads and real-time error feedback.

🛠️ Tech Stack





Frontend: Next.js 13 (App Router), React, TypeScript, Tailwind CSS



Backend: AppWrite (Database, Storage, Authentication)



State Management: Zustand for lightweight, type-safe state management



Hooks: Custom React hooks for reusable logic (e.g., useCreateBucketUrl, useCreatePost)



Icons: React Icons for intuitive UI elements



Deployment: Vercel (recommended for hosting)

📸 Screenshots

[Add screenshots or GIFs of the app in action, e.g., video upload, profile page, post view]

🏗️ Project Structure





app/: Contains Next.js pages (Home, Profile, Post, Upload) and layouts.



components/: Reusable React components (e.g., PostMain, Comments, ClientOnly).



hooks/: Custom hooks for authentication (useUser), data fetching (useCreateBucketUrl), and post creation (useCreatePost).



stores/: Zustand stores for managing posts, profiles, likes, and comments.



types/: TypeScript interfaces for type safety across users, posts, comments, and components.

🔧 Setup Instructions

Prerequisites





Node.js (v16 or higher)



AppWrite account (free tier available)



Git

Steps





Clone the Repository

git clone https://github.com/John-Weeks-Dev/tiktok-clone-nextjs.git
cd tiktok-clone-nextjs



Set Up Environment Variables





Copy .env.example to .env:

cp .env.example .env



Create an AppWrite project and add the following to .env:

NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id



Configure AppWrite Schema





Database Name: tiktok-clone



Collections: Profile, Post, Like, Comment (see schema details below)



Permissions: Grant read access to guests and full CRUD to authenticated users.

Profile Collection:





Attributes: user_id (string), name (string), image (string), bio (string)



Indexes: user_id (key, asc), name (fulltext, asc)

Post Collection:





Attributes: user_id (string), video_url (string), text (string), created_at (string)



Indexes: user_id (key, asc)

Like Collection:





Attributes: user_id (string), post_id (string)



Indexes: user_id (key, asc), id (unique, asc), post_id (key, asc)

Comment Collection:





Attributes: user_id (string), post_id (string), text (string), created_at (string)



Indexes: post_id (key, asc)



Install Dependencies

npm install



Run the Application

npm run dev

Open http://localhost:3000 in your browser.

🌟 Why This Project Stands Out





TypeScript Mastery: Demonstrates advanced TypeScript usage with interfaces (User, Post, Comment) and type-safe state management, reducing runtime errors.



Modern Architecture: Utilizes Next.js 13 App Router for server-side rendering and client-side interactivity.



Scalable Backend: Integrates AppWrite for secure, real-time data operations.



Developer Experience: Clean code structure, reusable components, and custom hooks for maintainability.



Portfolio Highlight: A production-ready app showcasing full-stack development skills for recruiters and tech enthusiasts.

🤝 Contributing

Contributions are welcome! Please:





Fork the repository.



Create a feature branch (git checkout -b feature/YourFeature).



Commit changes (git commit -m 'Add YourFeature').



Push to the branch (git push origin feature/YourFeature).



Open a pull request.

📬 Contact

I’m a passionate Full-Stack Developer specializing in TypeScript, React, and Next.js. Let’s connect to discuss opportunities or collaborations!





Email: godwillokenyi@gmail.com



LinkedIn:https://www.linkedin.com/in/godswill-okenyi-561837304/








Star this repo if you found it useful! 🌟
