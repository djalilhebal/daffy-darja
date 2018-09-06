function signup() {
	var req = {action: 'signup', info}
	server.send(req)
}

function login(user, pass) {
	state.set('loading');
	var req = {action: 'login', pass: pass, user: user};
	server.send(req)
}

function logout() {
	var req = {action: 'logout'}
	server.send(req)
}

function react(darjaId, reaction) {
	var req = {action: 'react', darjaId, reaction}
	server.send(req)
}

function addDarja(englishId, input) {
	var req = {action: 'addDarja', englishId, input}
	server.send(req)
}

function addEnglish(input) {
	var req = {action: 'addEnglish', input}
	server.send(req)
}

function editDarja(darjaId, newContent) {
	var req = {action: 'editDarja', newContent}
	server.send(req)
}

function editEnglish(englishId, newContent) {
	var req = {action: 'editEnglish', newContent}
	server.send(req)	
}
