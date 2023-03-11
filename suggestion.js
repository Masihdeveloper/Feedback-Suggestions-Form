/* 
Feedback/Suggestion Form in Discord.js V14
Hope you Enjoy, Made with 💜 by Masih#0258
Github: https://github.com/Masihdev1 | Don't forget to ⭐
Website: https://masihdev.tk/
Copyright Masih 2024 All Right Reserved!
*/

const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
  } = require("discord.js");
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("suggestion")
      .setDescription("Give your suggestion to the server admins📝"),
    async execute(interaction, client) {
  
      const SuggestionModal = new ModalBuilder()
        .setCustomId("SuggestionModal")
        .setTitle(`${client.user.username} Suggestions`);
  
      const SuggestionInput = new TextInputBuilder()
        .setCustomId("SuggestionInput")
        .setLabel("📝Feedback/Suggestion")
        .setPlaceholder("Please enter your feedback/suggestion or idea that you want to reviewed by our admins")
        .setMinLength(1)
        .setMaxLength(4000)
        .setRequired(true)
        .setStyle(TextInputStyle.Paragraph);
  
      const FirstActionRow = new ActionRowBuilder().addComponents(SuggestionInput);
  
      SuggestionModal.addComponents(FirstActionRow);
  
      await interaction.showModal(SuggestionModal);
    },
  };
