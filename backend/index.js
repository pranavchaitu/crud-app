const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/employees/data',async (req,res) => {
	try {
		let data = await Employees.findOne({});
		res.json({
			data	
		})
	} catch(e) {
		res.status(500).send("BAD REQUEST");
	}
})

