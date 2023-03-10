const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
  } = require("discord.js");
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("suggestions")
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
