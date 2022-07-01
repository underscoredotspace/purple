import * as Sentry from "@sentry/browser";
import { BreadcrumbCategory } from "./types";

interface Breadcrumb {
  category: BreadcrumbCategory;
  message: string;
  level: "info";
}

const disabled = process.env.NODE_ENV === "development";

export const addBreadcrumb = ({ category, message, level }: Breadcrumb) => {
  if (disabled) {
    console.log("addBreadcrumb", { category, message, level });
    return;
  }

  Sentry.addBreadcrumb({
    category,
    message,
    level,
  });
};
