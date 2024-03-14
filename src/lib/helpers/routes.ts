export interface Route {
  path: string;
  title: string;
  external?: boolean;
  permissions?: string[];
}

type Routes = Route[];

export const routes: Routes = [
  {
    path: "/",
    title: "Welcome!",
  },
  {
    path: "/about-the-crew",
    title: "About the Crew",
  },
  // {
  //   path: "/wall-of-fame",
  //   title: "Wall of Fame",
  // },
  {
    path: "/crew-events",
    title: "Crew Events",
  },
  {
    path: "/gta-online",
    title: "GTA Online",
  },
  // {
  //   path: "/red-dead",
  //   title: "Red Dead Redemption",
  // },
  // {
  //   path: "/other-games",
  //   title: "Games We Play",
  // },
  // {
  //   path: "/meet-the-staff",
  //   title: "Meet the Staff",
  // },
  // {
  //   path: "/achievements",
  //   title: "Achievements",
  // },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
  },
  {
    path: "/admin/staff-profile",
    title: "Your Staff Profile",
    permissions: ["STAFF_PROFILE"],
  },
  // {
  //   path: "/admin/wall-of-fame",
  //   title: "Update Wall of Fame",
  //   permissions: ["UPDATE_WALL_OF_FAME"],
  // },
  {
    path: "/admin/manage-permissions",
    title: "Manage Permissions",
    permissions: ["MANAGE_PERMISSIONS", "SUPER_USER"],
  },
];

export const getRoute = (pathname: string): Route | undefined =>
  routes.find((route) => route.path === pathname);
