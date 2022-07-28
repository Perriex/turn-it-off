export function checkVPN() {
  var browser = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return fetch(`https://ipapi.co/json`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var client = data.timezone;
      console.warn(`browser timezone: ${browser}`, `ip timezone: ${client}`);
      return {
        browser: browser,
        ip: client,
        hasVPN: client != browser,
      };
    });
}