const config = require('./config');
const ExpressServer = require('./expressServer');
const open = require('open');

const launchServer = async () => {
    try {
      this.expressServer = new ExpressServer(config.URL_PORT);
      this.expressServer.launch();
      console.log('Express server running');
      await open('http://localhost:'+config.URL_PORT+'/Dashboard');
    } catch (error) {
      console.error('Express Server failure', error.message);
      await this.close();
    }
  };
  
  launchServer().catch(e => console.error(e));