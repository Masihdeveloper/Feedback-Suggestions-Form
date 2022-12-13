const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isModalSubmit()) return;
    //Modl Submit Feedback/Suggestion
    if (interaction.customId === "SuggestionRequest") {
      const suggestion = interaction.fields.getTextInputValue("Suggestion");
      //add your channel ID
      const SuggestionsChannel = interaction.guild.channels.cache.get(
        'Channel ID'
      );

      await interaction.deferReply({ ephemeral: true });
      interaction.editReply({
        content:
          "Thanks I Submitted Your Feedback/Suggestion For The Server Admins❤",
      });

      const SubmitSuggestionEmbed = new MessageEmbed()

        .setTitle(`📝New Feedback/Suggestion!`)
        .setDescription(`${suggestion}`)
        .addFields(
          {
            name: `<:member:946163071611711519> Submited by:`,
            value: `${interaction.user} | ${interaction.user.tag}`,
            inline: true,
          },
          {
            name: `<:emoji_33:953427143411531867> Created At:`,
            value: `<t:${Math.round(
              interaction.user.createdTimestamp / 1000
            )}:f> | <t:${Math.round(
              interaction.user.createdTimestamp / 1000
            )}:R>`,
            inline: true,
          },
          {
            name: `<:emoji_32:953427114252697610> Joined At:`,
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
        .setColor("008BFF")
        .setFooter({
          text: `ID: ${interaction.user.id}`,
          iconURL: `${interaction.user.displayAvatarURL({
            size: 2048,
            dynamic: true,
            format: "png",
          })}`,
        })
        .setTimestamp();
      let msg = await SuggestionsChannel.send({
        embeds: [SubmitSuggestionEmbed],
      });
      await msg.react("👍");
      await msg.react("🤷");
      await msg.react("👎");
    }
  }
}
