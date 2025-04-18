const express = require("express")
const app = express()
const PORT = process.env.PORT | 3000

app.get("/", (req, res) => {
	res.send("Welcome to Shiyas Site")
})

const server = app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`)
})

module.exports = {
	server,
	app
}
