import mongoose from "mongoose";

export async function dbConnect() {
  try {
    // Check if the MongoDB URI is correctly set
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      console.error("MongoDB URI is not defined in environment variables");
      // Return a dummy connection for development purposes
      return { isConnected: false, message: "No MongoDB URI provided" };
    }
    
    // Validate URI format
    if (!mongoURI.startsWith('mongodb://') && !mongoURI.startsWith('mongodb+srv://')) {
      console.error("Invalid MongoDB URI format. URI must start with mongodb:// or mongodb+srv://");
      return { isConnected: false, message: "Invalid MongoDB URI format" };
    }
    
    // Connect to MongoDB
    const connection = await mongoose.connect(String(mongoURI));
    console.log("MongoDB connected successfully");
    return connection;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    // Return a dummy connection so app doesn't crash in development
    return { isConnected: false, error: err.message };
  }
}
