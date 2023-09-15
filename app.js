var express  =  require('express');
var app = express();
const port = 9095;

app.get('/', (req, res) =>{
console.log('Inside / route');	
res.send('hello app is working fine')
})

app.listen(port, () => {
	console.log(`App Is Working On ${port}`)
});
