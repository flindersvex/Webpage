// Get Discord invite link using the server widget JSON API
async function getDiscord() {
  const serverID = "123";
  try {
    const response = await fetch(`https://discord.com/api/guilds/${serverID}/widget.json`);
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const data = await response.json();
    const elements = document.querySelectorAll('[data-discord-invite]');

    if (elements.length > 0 && data.instant_invite) {
      elements.forEach(element => {
        element.href = data.instant_invite;
      });
    }
  } catch (error) {
    console.error('Failed to load Discord invite.', error);
  }
}
getDiscord();