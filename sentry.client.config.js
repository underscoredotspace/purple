// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:
    "https://169bc0e6f1194b0f9ce597bcab686ebb@o1138904.ingest.sentry.io/6193708",
  tracesSampleRate: 1.0,
});
