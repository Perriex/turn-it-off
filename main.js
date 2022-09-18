export async function checkVPN() {
  let browser = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return fetch(`http://ip-api.com/json/`)
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
