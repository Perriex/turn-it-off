// description
// Check both client and browser ips
export async function checkVPN() {
  let browser = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return fetch(`https://ipapi.co/json`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let client = data.timezone;
      console.warn(`browser timezone: ${browser}`, `ip timezone: ${client}`);
      return {
        browser: browser,
        ip: data,
        hasVPN: client != browser,
      };
    }).catch(console.warn);
}

// description
// Remove background & make it white

export default async function RemoveImgBackground(APIkey, file, setFileObj) {
  const formData = new FormData();

  formData.append("size", "auto");
  formData.append("bg_color", "fff");
  formData.append("image_file", file, file.name);
  console.log(file);
  const res = await fetch("https://api.remove.bg/v1.0/removebg", {
    headers: {
      "X-Api-Key": APIkey,
    },
    method: "POST",
    body: formData,
  });
  if (res.status < 400) {
    try {
      setFileObj(res);
      return;
    } catch (err) {
      return true;
    }
  }
  const error = await res.json();
  throw error;
}
