
const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(express.static('stfn'));
app.listen(99);






var result;

app.get('/getid', function (req, res) {
	console.log("ajax called");
		const dbobject={
			host : 'localhost',
			user:'root',
			password:'cdac',
			database:'my_db',
			port:3306
		}
		const con = mysql.createConnection(dbobject);


		let output ={status: false,datail:{bookid: 0,bookname:"",price:0}}
		let bookid=req.query.bookid
		conn.query('select bookid name and price=?',[bookid],
		(error,res)=>{
			if (error){
				console.log(error);
			}

				else{
					if(rows.length>0{
						output.status=true;
						output.detail:rows[0];
					}
						else{
							console.log('no book' );
						}
				console.log(output);
				response.send(output)
					});		
		
    });

	app.get('/price', function (req, res) {
		console.log("ajax called");
			const dbobject={
				host : 'localhost',
				user:'root',
				password:'cdac',
				database:'my_db',
				port:3306
			}
			const con = mysql.createConnection(dbobject);
	
	
			let output ={status: false}
			let price=req.query.price
			conn.query('update price=?where bookid =?',[price,bookid],
			(error,res)=>{
				if (error){
					console.log(error);
				}
					else{
						if(rows.affectedrows>0{
							output.status=true;
						}
							else{
								console.log('no updated' );
							}
					console.log(output);
					response.send(output)
						});		
			
		});
	



