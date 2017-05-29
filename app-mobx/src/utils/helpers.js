export function formatTime(time) {
  const minutes = time % 60;
  const hours = (time - minutes) / 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export function formatTwitter(social) {
  if (social && social.twitter) {
    return {
      username: social.twitter,
      displayName: `@${social.twitter}`,
      link: `https://twitter.com/${social.twitter}`
    };
  }
  return {};
}

export function formatLinkedin(social) {
  if (social && social.linkedin) {
    return {
      link: social.linkedin,
      displayName: 'Link'
    };
  }
  return {};
}

export function formatGithub(social) {
  if (social && social.github) {
    return {
      username: social.github,
      displayName: `@${social.github}`,
      link: `https://github.com/${social.github}`
    };
  }
  return {};
}

export function talkId(talk) {
  return `${talk.title}-${talk.date}-${talk.time.start}-${talk.location}`;
}
