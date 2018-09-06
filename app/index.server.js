// fake server ?
var server = {};
server.data = {};

server.data.users = {}
server.data.englishs = {}
server.data.darjas = {}

server.send = function send(obj) {
	switch (obj.action) {
		case 'signup':
			var users = server.data.users;
			if (typeof users[obj.user] !== undefined)
				return 'already used';
			var rUsername = /^[_a-zA-Z0-9]+$/
			var rPassword = /^.{6, }$/
			users...
			break;
	}
}
