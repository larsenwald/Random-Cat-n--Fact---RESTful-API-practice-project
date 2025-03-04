import express from "express";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.listen(port, () => {
    console.log(`Server's up! Listening on port ${port}`);
})

import axios from "axios";
//

app.get("/", async (req, res)=>{
    try {
        let fact = await axios.get("https://cat-fact.herokuapp.com/facts/random");
        let image = await axios.get("https://api.thecatapi.com/v1/images/search");
        fact = fact.data.text;
        image = image.data[0].url;
        console.log(fact)
        console.log(image)
        res.render("index.ejs", {fact: fact, image: image});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})