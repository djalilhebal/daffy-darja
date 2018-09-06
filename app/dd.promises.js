function api(action) {
	return new Promise((resolve, reject) => {
		console.info(`POST /v=0&action=${action}`);
		const res = {}
		resolve(res)
		throw Error('Yoooo!!!')
	})
}

api('login')
.then(console.log)
.catch(console.error)
