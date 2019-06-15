var path = require('path'),
config;

config = {
  production: {
    url: 'http://mytestblog.com',
    main: {},
    database: {
        client: 'mysql',
	connection: {
	    host: 'db',
	    user: 'ghost',
	    password : 'ghost',
	    database : 'ghost',
	    port: '3306',
	    charset : 'utf8'
	},
	debug: false
    },
    paths: {
	contentPath: path.join(process.env.GHOST_CONTENT, '/')
    },
    mail: {  
        from: '418364620@qq.com',
        transport: 'SMTP',
        options: {
            host: 'smtp.exmail.qq.com',
            secureConnection: false,
            port: 25,
            auth: {
                user: '418364620@qq.com',
                pass: 'yuerong145'
            }
        }
    },
    server: {
	host: '0.0.0.0',
	port: '2368'
    }
  }
};




module.exports = config;
