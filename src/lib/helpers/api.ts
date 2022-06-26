import { env } from "lib/helpers";
import { Member, Permission, Profile, Role, User } from "lib/types";
import { ParsedUrlQueryInput, stringify } from "querystring";

export const qs = (queryObject?: ParsedUrlQueryInput): string =>
  stringify(queryObject);

const apiUrl = (endpoint: string, qs?: string) =>
  `${env.API_URL}/${endpoint}${qs ? `?${qs}` : ""}`;

interface FetchJSONOptions {
  query?: any;
  body?: any;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
}

type FetchAPI = (endpoint: string, options?: FetchJSONOptions) => Promise<any>;

const fetchAPI: FetchAPI = (endpoint, { query, body, method } = {}) =>
  fetch(apiUrl(endpoint, query ? qs(query) : undefined), {
    method: method ?? "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then(async (res) => {
    if (res.status.toString().startsWith("2")) {
      return res.json().catch(() => ({})) as unknown;
    }

    throw new Error(await res.text());
  });

export async function getMembercount(): Promise<{
  ps: number;
  xbox: number;
}> {
  const { PlayStation: PS, Xbox: XBOX } = await fetchAPI("member-count");

  return { ps: Number(PS), xbox: Number(XBOX) };
}

export const getUser = (): Promise<User> => fetchAPI("auth/user");

export const getMembersByRole = (roleIds: string[]): Promise<Role[]> =>
  fetchAPI("member", { query: { roleIds } });

export const getProfile = (memberId: string): Promise<Member> =>
  fetchAPI(`profile/${memberId}`);

export const saveProfile = (profile: Profile): Promise<void> =>
  fetchAPI(`profile/${profile.id}`, { method: "POST", body: profile });

export const getStaffProfiles = (): Promise<Role[]> =>
  fetchAPI("profile/by-role", {
    query: {
      roleIds: [
        "546342033867014165",
        "549644467498516508",
        "568141992794783749",
      ],
    },
  }).then((roles: Role[]) => roles.sort((a, b) => b.position - a.position));

interface APIPermission {
  name: string;
  roles: string[];
}

export const getAllPermissions = (): Promise<{
  permissions: Permission[];
  roles: Role[];
}> => fetchAPI("permission");

export const updatePermission = (
  permission: APIPermission
): Promise<{ error?: string }> =>
  fetchAPI("permission", { method: "PATCH", body: permission });

export const addPermission = (
  permission: APIPermission
): Promise<{ error?: string }> =>
  fetchAPI("permission", { method: "POST", body: permission });

export const deletePermission = (name: string): Promise<{ error?: string }> =>
  fetchAPI(`permission/${name}`, { method: "DELETE" });
