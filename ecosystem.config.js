module.exports = {
  apps: [
    {
      name: 'smartawnings-api',
      script: './server.js', // adjust if your entry point is different
      instances: 1, // or 'max' for all CPU cores
      exec_mode: 'fork', // or 'cluster' for multiple processes
      watch: false, // set to true if you want auto-restart on file change (for dev)
      
    }
  ]
};
