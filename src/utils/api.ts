export const apiPost = async (payload: any, url: string) => {
  return await fetch(`/.netlify/functions${url}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};
