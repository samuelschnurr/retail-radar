using Azure.AI.OpenAI.Assistants;
using Io.Schnurr.RetailRadar.Backend.Api.Dtos;

namespace Io.Schnurr.RetailRadar.Backend.Api.Utils;

internal static class Messages
{
    internal static MessageDto GetWelcomeMessage(string threadId)
    {
        var welcomeMessages = Thread.CurrentThread.CurrentCulture.Name switch
        {
            "de" => welcomeMessagesDE,
            "en" => welcomeMessagesEN,
            _ => welcomeMessagesEN
        };

        Random random = new();
        int randomIndex = random.Next(0, welcomeMessages.Length);

        var welcomeMessage = new MessageDto("0", threadId, welcomeMessages[randomIndex], MessageRole.Assistant.ToString(), null);

        return welcomeMessage;
    }

    private static readonly string[] welcomeMessagesDE =
    [
        "Ein freundliches Hallo! Bei der Produktsuche und -beratung stehe ich dir gerne zur Seite. Welche Produkte interessieren dich besonders?",
        "Ein freundliches Hallo! Ich bin hier, um dir als dein persönlicher Berater bei deiner Suche nach Produkten zu helfen. Welche Artikel suchst du heute?",
        "Ein herzliches Willkommen! Als dein Berater stehe ich dir gerne zur Verfügung, um deine Einkaufswünsche zu erfüllen. Wonach suchst du?",
        "Ein herzliches Willkommen! Ich bin hier, um dir als dein persönlicher Berater bei der Produktauswahl zu helfen. Was möchtest du entdecken?",
        "Ein herzliches Willkommen! Ich bin dein persönlicher Berater und stehe dir mit Rat und Tat zur Seite. Wie kann ich dir heute bei der Produktsuche behilflich sein?",
        "Ein herzliches Willkommen! Mit mir als deinem persönlichen Berater wird dein Einkauf zum Kinderspiel. Welches Produkt interessiert dich heute?",
        "Ein herzliches Willkommen! Mit mir als deinem persönlichen Berater wird deine Suche nach dem perfekten Produkt ein Erfolg. Welche Ware benötigst du?",
        "Guten Tag und herzlich willkommen! Als dein Berater bin ich hier, um dir bei der Auswahl behilflich zu sein. Welcher Artikel interessiert dich besonders?",
        "Guten Tag und herzlich willkommen! Als dein Berater bin ich hier, um sicherzustellen, dass du die besten Angebote erhältst. Wie kann ich dir helfen?",
        "Guten Tag und herzlich willkommen! Als dein Berater bin ich hier, um sicherzustellen, dass du die richtigen Kaufentscheidungen triffst. Wie kann ich dir behilflich sein?",
        "Guten Tag und herzlich willkommen! Als dein Berater freue ich mich darauf, dir bei deinem Einkauf zu helfen. Wie kann ich dir dienen?",
        "Guten Tag und herzlich willkommen! Als dein Berater freue ich mich darauf, dir die besten Produkte zu präsentieren. Wie kann ich dir helfen?",
        "Guten Tag und herzlich willkommen! Als dein Berater möchte ich sicherstellen, dass du das beste Produkt findest. Welcher Artikel interessiert dich?",
        "Guten Tag und herzlich willkommen! Ich bin hier, um als dein persönlicher Berater Produkte für dich zu entdecken. Was soll ich für dich finden?",
        "Guten Tag und herzlich willkommen! Ich bin dein persönlicher Berater und unterstütze dich bei der Suche nach Produkten. Was darf ich für dich finden?",
        "Guten Tag und herzlich willkommen! Ich möchte als dein Berater dein Einkaufserlebnis verbessern. Wie kann ich dir helfen?",
        "Guten Tag und herzlich willkommen! Mein Ziel als dein Berater ist es, dich heute beim Einkauf zu unterstützen. Wie kann ich dir behilflich sein?",
        "Guten Tag! Als dein persönlicher Berater bin ich hier, um dir bei der Produktauswahl zu helfen. Welche Produkte interessieren dich heute besonders?",
        "Guten Tag! Als dein Berater bin ich darauf spezialisiert, deine Bedürfnisse zu verstehen und die besten Produkte für dich zu finden. Wie kann ich dir helfen?",
        "Guten Tag! Als dein Berater möchte ich dir helfen, das perfekte Produkt zu finden. Wie kann ich dir heute helfen?",
        "Guten Tag! Als dein Berater stehe ich dir gerne zur Verfügung. Welche Produkte darf ich für dich finden?",
        "Guten Tag! Ich bin hier, um dich als dein persönlicher Berater bei deiner Suche zu unterstützen. Welches Produkt suchst du heute?",
        "Guten Tag! Mein Ziel ist es, dir als dein persönlicher Berater bei deinem Online-Einkauf behilflich zu sein. Wie kann ich dir helfen?",
        "Guten Tag! Mein Ziel ist es, dir als dein persönlicher Berater den Einkauf zu erleichtern. Wie kann ich dir heute helfen?",
        "Hallo und herzlich willkommen! Als dein Berater freue ich mich darauf, dich durch die Welt des Online-Shoppings zu führen. Welcher Artikel interessiert dich?",
        "Hallo und herzlich willkommen! Ich bin hier, um dir als dein persönlicher Berater bei deinem Einkaufsprozess zu helfen. Wie kann ich dir behilflich sein?",
        "Hallo und herzlich willkommen! Ich stehe dir als dein persönlicher Berater zur Seite. Wonach suchst du?",
        "Hallo und herzlich willkommen! Mein Ziel als dein Berater ist es, dein Shopping-Erlebnis zu verbessern. Wie kann ich dir helfen?",
        "Hallo und herzlich willkommen! Mit mir als deinem persönlichen Berater findest du garantiert das Passende. Wie kann ich dir helfen?",
        "Hallo und schön, dass du da bist! Als dein Berater stehe ich dir mit meiner Expertise zur Verfügung. Wie kann ich dir helfen?",
        "Hallo und willkommen! Ich bin dein Berater und freue mich darauf, dir bei der Auswahl der besten Produkte zu helfen. Was darf ich für dich entdecken?",
        "Hallo und willkommen! Mit mir als deinem persönlichen Berater wirst du das beste Produkt für deine Bedürfnisse finden. Wonach suchst du heute?",
        "Hallo und willkommen! Mit mir als deinem Berater finden wir garantiert das, wonach du suchst. Wie kann ich dir heute behilflich sein?",
        "Herzlich willkommen! Als dein Berater bin ich darauf spezialisiert, dir dabei zu helfen, das ideale Produkt zu finden. Was darf ich für dich finden?",
        "Herzlich willkommen! Als dein Berater bin ich darauf spezialisiert, dir die bestmögliche Unterstützung zu bieten. Welchen Artikel benötigst du?",
        "Herzlich willkommen! Als dein Berater bin ich hier, um sicherzustellen, dass dein Einkaufserlebnis optimal verläuft. Wonach suchst du?",
        "Herzlich willkommen! Als dein Berater bin ich hier, um sicherzustellen, dass dein Einkaufserlebnis reibungslos verläuft. Wie kann ich dir behilflich sein?",
        "Herzlich willkommen! Als dein Berater bin ich hier, um sicherzustellen, dass du die besten Angebote erhältst. Wie kann ich dir helfen?",
        "Herzlich willkommen! Als dein Berater bin ich hier, um sicherzustellen, dass du die richtigen Kaufentscheidungen triffst. Wie kann ich dich unterstützen?",
        "Herzlich willkommen! Als dein Berater stehe ich dir mit professionellem Rat zur Seite. Wie kann ich dir bei deinem Einkauf helfen?",
        "Herzlich willkommen! Mit mir als deinem persönlichen Berater finden wir gemeinsam die besten Produkte für dich. Welcher Artikel interessiert dich?",
        "Schön, dass du hier bist! Als dein Berater bin ich bereit, dir bei deinem Einkauf zu helfen. Wie kann ich dir heute weiterhelfen?",
        "Schön, dass du hier bist! Ich bin dein Berater und freue mich darauf, dir bei der Suche nach dem perfekten Produkt zu helfen. Was möchtest du finden?",
        "Schön, dass du dich für meine Unterstützung entschieden hast! Als dein Berater bin ich hier, um dir bei deinem Einkauf zu helfen. Wie kann ich dir dienen?",
        "Schön, dass du dich für meine Unterstützung entschieden hast! Als dein Berater bin ich hier, um sicherzustellen, dass du das perfekte Produkt findest. Wie kann ich dir dienen?",
        "Schön, dass du dich für meine Unterstützung entschieden hast! Ich bin dein persönlicher Berater und stehe dir bei allen Fragen rund um deinen Einkauf zur Verfügung. Wie kann ich dir heute weiterhelfen?",
        "Willkommen bei deinem persönlichen Berater! Gemeinsam finden wir das beste Produkt für deine Bedürfnisse. Wie kann ich dir heute helfen?",
        "Willkommen bei deinem persönlichen Berater! Ich bin hier, um sicherzustellen, dass dein Einkaufserlebnis reibungslos verläuft. Wie kann ich dir behilflich sein?",
        "Willkommen bei deinem persönlichen Berater! Ich freue mich darauf, dir bei deiner Suche behilflich zu sein. Was darf ich für dich finden?",
        "Willkommen bei deinem persönlichen Berater! Lass mich dir dabei helfen, das Richtige für dich zu finden. Welches Produkt möchtest du entdecken?",
        "Willkommen bei deinem persönlichen Berater! Mit meiner Erfahrung und Expertise unterstütze ich dich gerne bei deiner Suche. Was für ein Produkt darf ich für dich finden?",
        "Willkommen bei deinem persönlichen Berater! Mit meiner Hilfe finden wir garantiert das, wonach du suchst. Welchen Artikel möchtest du entdecken?"
    ];

    private static readonly string[] welcomeMessagesEN =
    [
        "A friendly hello! I'm here to assist you with product searches and advice. Which products are you particularly interested in?",
        "A friendly hello! I’m here as your personal advisor to help you find the right products. What are you looking for today?",
        "A warm welcome! As your advisor, I’m happy to help fulfill your shopping needs. What are you searching for?",
        "A warm welcome! I’m here as your personal advisor to assist you with product selection. What would you like to explore?",
        "A warm welcome! I’m your personal advisor, ready to assist you with anything you need. How can I help you with your product search today?",
        "A warm welcome! With me as your personal advisor, shopping will be a breeze. What product interests you today?",
        "A warm welcome! With me as your personal advisor, your search for the perfect product will be a success. What item do you need?",
        "Good day and a warm welcome! As your advisor, I’m here to assist you with product selection. Which item interests you the most?",
        "Good day and a warm welcome! As your advisor, I’m here to ensure you get the best deals. How can I help you?",
        "Good day and a warm welcome! As your advisor, I’m here to help you make the right purchasing decisions. How can I assist you?",
        "Good day and a warm welcome! As your advisor, I look forward to helping you with your shopping. How may I serve you?",
        "Good day and a warm welcome! As your advisor, I look forward to presenting you with the best products. How can I assist you?",
        "Good day and a warm welcome! As your advisor, I want to ensure you find the best product. Which item interests you?",
        "Good day and a warm welcome! I’m here as your personal advisor to discover products for you. What can I find for you?",
        "Good day and a warm welcome! I’m your personal advisor, here to support you in your product search. What can I find for you?",
        "Good day and a warm welcome! I want to improve your shopping experience as your advisor. How can I help you?",
        "Good day and a warm welcome! My goal as your advisor is to support you with your shopping today. How can I assist you?",
        "Good day! As your personal advisor, I’m here to help you with product selection. Which products interest you the most today?",
        "Good day! As your advisor, I specialize in understanding your needs and finding the best products for you. How can I assist you?",
        "Good day! As your advisor, I want to help you find the perfect product. How can I assist you today?",
        "Good day! As your advisor, I’m here for you. Which products can I find for you?",
        "Good day! I’m here as your personal advisor to support your search. Which product are you looking for today?",
        "Good day! My goal is to assist you as your personal advisor with your online shopping. How can I help you?",
        "Good day! My goal as your personal advisor is to make shopping easier for you. How can I assist you today?",
        "Hello and welcome! As your advisor, I look forward to guiding you through the world of online shopping. Which item interests you?",
        "Hello and welcome! I’m here as your personal advisor to assist you with your shopping process. How can I help you?",
        "Hello and welcome! I’m here as your personal advisor. What are you looking for?",
        "Hello and welcome! My goal as your advisor is to enhance your shopping experience. How can I assist you?",
        "Hello and welcome! With me as your personal advisor, you’re guaranteed to find the perfect item. How can I help you?",
        "Hello and welcome! I’m here as your advisor with my expertise. How can I assist you?",
        "Hello and welcome! I’m your advisor, ready to help you select the best products. What can I discover for you?",
        "Hello and welcome! With me as your personal advisor, you’ll find the best product for your needs. What are you looking for today?",
        "Hello and welcome! With me as your advisor, we’ll surely find what you’re looking for. How can I assist you today?",
        "A warm welcome! As your advisor, I specialize in helping you find the ideal product. What can I find for you?",
        "A warm welcome! As your advisor, I’m here to provide you with the best support. What item do you need?",
        "A warm welcome! As your advisor, I’m here to ensure your shopping experience runs smoothly. What are you looking for?",
        "A warm welcome! As your advisor, I’m here to ensure your shopping experience is seamless. How can I assist you?",
        "A warm welcome! As your advisor, I’m here to ensure you get the best deals. How can I help you?",
        "A warm welcome! As your advisor, I’m here to help you make the right purchasing decisions. How can I support you?",
        "A warm welcome! As your advisor, I’m here to provide you with professional advice. How can I assist you with your shopping?",
        "A warm welcome! With me as your personal advisor, we’ll find the best products for you together. Which item interests you?",
        "Glad you’re here! As your advisor, I’m ready to help with your shopping. How can I assist you today?",
        "Glad you’re here! I’m your advisor, looking forward to helping you find the perfect product. What would you like to find?",
        "Glad you chose my support! As your advisor, I’m here to help with your shopping. How may I serve you?",
        "Glad you chose my support! As your advisor, I’m here to ensure you find the perfect product. How may I serve you?",
        "Glad you chose my support! I’m your personal advisor and available for all your shopping inquiries. How can I assist you today?",
        "Welcome to your personal advisor! Together, we’ll find the best product for your needs. How can I help you today?",
        "Welcome to your personal advisor! I’m here to ensure your shopping experience is seamless. How can I assist you?",
        "Welcome to your personal advisor! I look forward to assisting you with your search. What can I find for you?",
        "Welcome to your personal advisor! Let me help you find the right product. What would you like to discover?",
        "Welcome to your personal advisor! With my experience and expertise, I’m happy to assist you with your search. What product can I find for you?",
        "Welcome to your personal advisor! With my help, we’ll surely find what you’re looking for. Which item would you like to explore?",
    ];
}
