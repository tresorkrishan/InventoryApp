module.exports = {
  apps: [
    {
      name: "InventoryApp",
      script:
        "/Users/apple/Desktop/Krishan Kumar/My-Project/Inventory-Frontend ", // the path of the script you want to execute,
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: false,
      error_file: "err.log",
      out_file: "out.log",
      log_file: "combined.log",
      time: true,
      env: {},
    },
  ],

  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
