import { site } from "../content/site";

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  language: string;
};

export type DeliveryResult = "sent" | "unconfigured";

type FormResponse = {
  success?: boolean;
  ok?: boolean;
};

export async function submitContact(data: ContactPayload): Promise<DeliveryResult> {
  const endpoint = site.formEndpoint;
  if (!endpoint) return "unconfigured";

  const body: Record<string, string> = {
    name: data.name,
    email: data.email,
    company: data.company,
    project_type: data.projectType,
    budget: data.budget,
    message: data.message,
    language: data.language,
  };

  if (site.formAccessKey) {
    body.access_key = site.formAccessKey;
    body.subject = `NOVA — ${data.projectType || "demande"}`;
    body.from_name = data.name;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(20000),
  });

  let payload: FormResponse | null = null;
  try {
    payload = (await response.json()) as FormResponse;
  } catch {
    payload = null;
  }

  if (!response.ok || payload?.success === false || payload?.ok === false) {
    throw new Error("Contact delivery failed");
  }

  return "sent";
}
