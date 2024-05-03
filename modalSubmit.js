const { EmbedBuilder } = require("discord.js");
const config = require("./config.json");
module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isModalSubmit()) return;
    // Modal Submit Feedback/Suggestion
    if (interaction.customId === "SuggestionModal") {
      await interaction.deferReply({ ephemeral: true });
      const suggestionValue =
        interaction.fields.getTextInputValue("SuggestionInput");
      // Add your channel ID
      const suggestionsChannel = interaction.guild.channels.cache.get(
        config.modalSubmitChannelId
      );
      const submitSuggestionEmbed = new EmbedBuilder()
        .setTitle(`📝 NEW Feedback/Suggestion!`)
        .setDescription(`${suggestionValue}`)
        .addFields(
          {
            name: `💡 Submitted by:`,
            value: `${interaction.user} | ${interaction.user.tag}`,
            inline: true,
          },
          {
            name: `📆 Account Created at:`,
            value: `<t:${Math.round(
              interaction.user.createdTimestamp / 1000
            )}:f> | <t:${Math.round(
              interaction.user.createdTimestamp / 1000
            )}:R>`,
            inline: true,
          },
          {
            name: `⏰ Joined Server at:`,
            value: `<t:${Math.round(
              interaction.member.joinedTimestamp / 1000
            )}:f> | <t:${Math.round(
              interaction.member.joinedTimestamp / 1000
            )}:R>`,
            inline: true,
          }
        )
        .setThumbnail(
          interaction.user.displayAvatarURL({
            size: 1024,
          })
        )
        .setColor(interaction.member.displayHexColor)
        .setFooter({
          text: `Member ID: ${interaction.user.id}`,
          iconURL: interaction.user.displayAvatarURL({
            size: 1024,
          }),
        })
        .setTimestamp();
      const msg = await suggestionsChannel.send({
        embeds: [submitSuggestionEmbed],
      });
      msg.react("👍");
      msg.react("🤷");
      await msg.react("👎");
      
      interaction.editReply({
        content:
          "Thanks I Submitted Your Feedback/Suggestion For The Server Admins ❤",
      });
    }
  },
};
