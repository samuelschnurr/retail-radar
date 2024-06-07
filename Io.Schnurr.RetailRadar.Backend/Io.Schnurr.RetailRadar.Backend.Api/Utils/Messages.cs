using Azure.AI.OpenAI.Assistants;
using Io.Schnurr.RetailRadar.Backend.Api.Dtos;

namespace Io.Schnurr.RetailRadar.Backend.Api.Utils;

internal static class Messages
{
    internal static MessageDto GetWelcomeMessage(string threadId)
    {
        Random random = new();
        int randomIndex = random.Next(0, welcomeMessages.Length);

        var welcomeMessage = new MessageDto("0", threadId, welcomeMessages[randomIndex], MessageRole.Assistant.ToString(), null);

        return welcomeMessage;
    }

    private static readonly string[] welcomeMessages =
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
}
