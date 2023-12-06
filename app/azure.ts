export function makeAzurePath(
  path: string,
  apiVersion: string,
  model?: string,
) {
  // should omit /v1 prefix
  // path = path.replaceAll("v1/", "");

  // should add api-key to query string
  // path += `${path.includes("?") ? "&" : "?"}api-version=${apiVersion}`;
  // 默认gpt-35-turbo
  model = model ?? "gpt-35-turbo";
  path = `/openai/deployments/${model}/chat/completions?api-version=${apiVersion}`;

  return path;
}
