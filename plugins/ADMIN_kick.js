const handler = async (m, {conn, participants, usedPrefix, command}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw 'attivare restrict';
  const kicktext = `chi? tagga qualcuno`;
  if (!m.mentionedJid[0] && !m.quoted) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.command = /^(kick|ban|addio|puffo)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
