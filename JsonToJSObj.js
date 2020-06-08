let text='{"Employee":['+
	'{"firstname":"umesh","lastname":"kumre"},'+
	'{"firstname":"akash","lastname":"jadhav"},'+
    '{"firstname":"ramesh","lastname":"yadav"}]}';
	
	let obj=JSON.parse(text);
	console.log(obj.Employee[2].firstname+ " "+obj.Employee[2].lastname);
