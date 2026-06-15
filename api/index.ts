declare module "../dist/server/server.js" {
  const handler: {
    fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response>;
  };
  export default handler;
}

import handler from "../dist/server/server.js";

export default handler;
