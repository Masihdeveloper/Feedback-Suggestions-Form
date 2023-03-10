const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isModalSubmit()) return;
    //Modl Submit Feedback/Suggestion
    if (interaction.customId === "SuggestionRequest") {
      const SuggestionValue = interaction.fields.getTextInputValue("Suggestion");
      //add your channel ID
      const SuggestionsChannel = interaction.guild.channels.cache.get(
        'Channel ID'
      );

      const SubmitSuggestionEmbed = new EmbedBuilder()

        .setTitle(`📝 NEW Feedback/Suggestion!`)
        .setDescription(`${SuggestionValue}`)
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
          `${interaction.user.displayAvatarURL({
            size: 2048,
            dynamic: true,
            format: "png",
          })}`
        )
        .setColor(`${interaction.member.displayHexColor}`)
        .setFooter({
          text: `ID: ${interaction.user.id}`,
          iconURL: `${interaction.user.displayAvatarURL({
            size: 2048,
            dynamic: true,
            format: "png",
          })}`,
        })
        .setTimestamp();
      const msg = await SuggestionsChannel.send({
        embeds: [SubmitSuggestionEmbed],
      });
      await msg.react("👍");
      await msg.react("🤷");
      await msg.react("👎");
      
      await interaction.deferReply({ ephemeral: true });
      interaction.editReply({
        content:
          "Thanks I Submitted Your Feedback/Suggestion For The Server Admins❤",
      });
    }
  }
}
