import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || '';

  try {
    const conn = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      colors.green.underline(`MongoDB connected: ${conn.connection.host}`)
    );
  } catch (error) {
    console.error(colors.red.underline.bold(`Error: ${error.message}`));
    process.exit(1);
  }
};

export default connectDB;
