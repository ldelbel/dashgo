import { createServer, Model } from "miragejs"

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },
    
    routes() {
      this.namespace = 'api';
      this.timing = 750; // simulating http delay

      this.get("/users");
      this.post("/users");

      this.namespace = ''; // this is to reset the route, so we don't have conflict between miragejs routes and possible future api routes using Next Routing
      this.passthrough(); // this is to make the next routes try miragejs routes first, and then move on if the request params are not found
    }
  })

  return server;
}