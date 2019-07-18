function fn(func){
	let x = 0;
	func(x)
}

function func(x){
	console.log(x)
}
fn((x)=>{
	func(x)
})