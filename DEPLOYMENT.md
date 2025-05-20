# LitLoop Deployment Guide

This guide will help you set up and deploy the LitLoop application properly on Vercel.

## MongoDB Configuration

The application requires a MongoDB connection to function properly. You need to set up environment variables in Vercel:

1. Go to your project in the Vercel Dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add the following environment variable:
   - **Name**: `MONGODB_URI`
   - **Value**: Your MongoDB connection string (must start with `mongodb://` or `mongodb+srv://`)
   
Example connection string:
```
mongodb+srv://username:password@cluster.mongodb.net/litloop?retryWrites=true&w=majority
```

## Common Deployment Issues

### 1. MongoDB Connection Errors

If you see errors like `MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"`, check your MONGODB_URI format. It must:

- Start with either `mongodb://` or `mongodb+srv://`
- Include your username and password
- Point to your MongoDB cluster
- Specify the database name (e.g., `litloop`)

### 2. Missing Icons

The application uses Heroicons, and some may have specific names. If you see errors about missing icons, make sure you're using icons that are actually available in the Heroicons library.

For example, this app uses:
- CheckCircleIcon
- TruckIcon
- HomeIcon
- ArchiveBoxIcon (instead of PackageIcon which doesn't exist)

## Development vs. Production

- In development mode, the app can fall back to sample data if MongoDB is not available
- In production, you should always ensure your MongoDB connection is properly configured

## Vercel Configuration Tips

- Make sure to enable "Automatically expose System Environment Variables" in your Vercel project settings
- Consider using Preview Environment Variables for testing deployments before production
- Use the Vercel Logs to debug deployment issues 