import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected`.cyan.underline);
  } catch (err) {
    console.error(`Mongo error: ${err}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
