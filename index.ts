import express, {json, urlencoded} from 'express';
import errorHandler from './middleware/Error';
import connectDB from './config/db';
import todoRoutes from './routes/todoRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(json());
app.use(cors());
app.use(urlencoded({extended: false}));
app.use('/api/TodoApp', todoRoutes);
connectDB();

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server started ${PORT}`));
