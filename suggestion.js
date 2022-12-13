const {
    MessageEmbed,
    MessageActionRow,
    TextInputComponent,
    Modal,
  } = require("discord.js");
  const { SlashCommandBuilder } = require("@discordjs/builders");
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("suggestions")
      .setDescription("Give your suggestion to the server admins📝"),
    async execute(interaction, client) {
  
      const modal = new Modal()
        .setCustomId("SuggestionRequest")
        .setTitle(`${client.user.username} Suggestions`);
  
      const SuggestFormat = new TextInputComponent()
        .setCustomId("Suggestion")
        .setLabel("📝Feedback/Suggestion")
        .setPlaceholder("Please enter your feedback/suggestion or idea that you want to reviewed by our admins")
        .setMinLength(1)
        .setMaxLength(4000)
        .setRequired(true)
        .setStyle("PARAGRAPH");
  
      const FirstActionRow = new MessageActionRow().addComponents(SuggestFormat);
  
      modal.addComponents(FirstActionRow);
  
      await interaction.showModal(modal);
    },
  };
