var http = require("http");
const { Client } = require("@elastic/elasticsearch");

//create a server object:
http.createServer(async function (req, res) {
	const client = new Client({ node: "http://3.89.129.252:9200" });
	const dataRaw = await client.sql.query({
		query: "Select * FROM ignore-columns-test limit 50000",
		fetch_size: 50000,
	});

	console.log(dataRaw);

	res.write("He"); //write a response to the client
	res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
