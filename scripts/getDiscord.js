// Get Discord invite link using the server widget JSON API
async function getDiscord() {
  const serverID = "1339520907688935528";
  const elements = document.querySelectorAll('[data-discord-invite]');
  try {
    const response = await fetch(`https://discord.com/api/guilds/${serverID}/widget.json`);
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const data = await response.json();

    if (elements.length > 0 && data.instant_invite) {
      elements.forEach(element => {
        element.href = data.instant_invite;
      });
    }
  } catch (error) {
    console.error('Failed to load Discord invite.', error);
    if (elements.length > 0) {
      elements.forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
        })
        element.classList.remove("hover:text-fvt-orange")
        element.classList.remove("hover:bg-orange-950")
        element.classList.add("text-neutral-500")
        element.setAttribute("title", "Unable to contact Discord API, check out our other socials!")
      })
    }
  }
}
getDiscord();