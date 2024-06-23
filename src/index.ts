import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors' 
import helmet from 'helmet'


//App Varaibles 
dotenv.config()

//intializing the express app 
const app = express(); 

//using the dependencies
app.use(helmet()); 
app.use(cors()); 
app.use(express.json())

//exporting app
const PORT = process.env.PORT || 3000

//Listing to the app and running it on PORT 5000
app.listen(PORT, async () => {
   console.log(`Listening on port ${PORT}`)
})

