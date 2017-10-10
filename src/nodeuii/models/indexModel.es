import rp from 'request-promise';
class indexModel{
	constructor(ctx){
		this.ctx = ctx;
	}
	updateNum(){
		const options = {
			method:'get',
			url:'http://localhost/php/index.php'
		}
		return new Promise((resolved,reject)=>{
			rp(options).then((result)=>{
				const info = result;
				if(info){
					resolved({
						data:info
					})
				}else{
					reject({})
				}
			})
		})
	}
}
export default indexModel;