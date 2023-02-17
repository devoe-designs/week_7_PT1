const http = require("http")

const server = http.createServer((req, res)=> {
    console.log("server is created")
})

const PORT = 42;

server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))
