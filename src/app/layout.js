import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import { dbConnect } from '@/services/mongo';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LiLoop',
  description: 'An Online book store',
}

export default async function RootLayout({ children }) {
  // Try to connect to MongoDB but don't let connection failures crash the app
  try {
    const conn = await dbConnect();
    console.log("Database connection status:", conn.isConnected !== false ? "Connected" : "Not connected");
  } catch (error) {
    console.error("Error in root layout:", error);
    // Continue rendering the app even if DB connection fails
  }
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
