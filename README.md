# WIP, please no not use.

## Stack Logic

- [Vercel](https://vercel.com)
  - Hosting + Edge functions
- [PlanetScale](https://planetscale.com)
  - DB Hosting
- [database-js](https://github.com/planetscale/database-js)
  - Fetch API-compatible PlanetScale database driver.
  - This allows for using edge functions. Since Sveltekit uses Fetch-API on backend as well, this is perfect.

## FAQ

### But what about speed?

If you need speed for a specific task, add a message queue, write a consumer in Go / Rust, and let that crunch the data asynchronously at bare metal speeds. RabbitMQ, Soketi, Pocketbase are common solutions for this.

## TODO:

- setup planetscale integration
- test orm
- find ui for viewing database
- learn more about edge functions
- figure out how sign-up works
