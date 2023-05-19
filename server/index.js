const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res)=> {
    res.render('home.ejs')
})

app.post('/postdata', (req, res)=> {
    let quoteObj = {quote: req.body.quote, user: 176234}

    const jsonData = JSON.stringify(quoteObj)

    fs.writeFile('formData.json', jsonData, err => {
        if (err) {
          console.error('Error writing to file:', err);
          return res.status(500).json({ message: 'Error saving form data' });
        }
    
        console.log('Form data saved to formData.json');
        res.json({ message: 'Form data received and saved successfully', jsonData })
    })
    res.send('successfully sent')
})

app.get('*', (req, res)=> {
    res.send('ERROR: Page not found')
})

app.listen(port, ()=>console.log(`server running on port ${port}`))