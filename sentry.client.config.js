import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:
    "https://169bc0e6f1194b0f9ce597bcab686ebb@o1138904.ingest.sentry.io/6193708",
  tracesSampleRate: 1.0,
});
