
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({path: './.env'});

/**
const app = express();
( async () => {
  try {
    await mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}')
    app.on('error', (err) => {
      console.error('Express app error:', err)
      throw err
    })
    app.listen(process.env.PORT, () => {
      console.log(`app is runningor listening  on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
})();
*/