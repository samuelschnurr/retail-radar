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
        "Ein freundliches Hallo! Bei der Produktsuche und -beratung stehe ich Ihnen gerne zur Seite. Welche Produkte interessieren Sie besonders?",
        "Ein freundliches Hallo! Ich bin hier, um Ihnen als Ihr persönlicher Berater bei Ihrer Suche nach Produkten zu helfen. Welche Artikel suchen Sie heute?",
        "Ein herzliches Willkommen! Als Ihr Berater stehe ich Ihnen gerne zur Verfügung, um Ihre Einkaufswünsche zu erfüllen. Wonach suchen Sie?",
        "Ein herzliches Willkommen! Ich bin hier, um Ihnen als Ihr persönlicher Berater bei der Produktauswahl zu helfen. Was möchten Sie entdecken?",
        "Ein herzliches Willkommen! Ich bin Ihr persönlicher Berater und stehe Ihnen mit Rat und Tat zur Seite. Wie kann ich Ihnen heute bei der Produktsucht behilflich sein?",
        "Ein herzliches Willkommen! Mit mir als Ihrem persönlichen Berater wird Ihr Einkauf zum Kinderspiel. Welches Produkt interessieret Sie heute?",
        "Ein herzliches Willkommen! Mit mir als Ihrem persönlichen Berater wird Ihre Suche nach dem perfekten Produkt ein Erfolg. Welche Ware benötigen Sie?",
        "Guten Tag und herzlich willkommen! Als Ihr Berater bin ich hier, um Ihnen bei der Auswahl behilflich zu sein. Welcher Artikel interessierert Sie besonders?",
        "Guten Tag und herzlich willkommen! Als Ihr Berater bin ich hier, um sicherzustellen, dass Sie die besten Angebote erhalten. Wie kann ich Ihnen helfen?",
        "Guten Tag und herzlich willkommen! Als Ihr Berater bin ich hier, um sicherzustellen, dass Sie die richtigen Kaufentscheidungen treffen. Wie kann ich Ihnen behilflich sein?",
        "Guten Tag und herzlich willkommen! Als Ihr Berater freue ich mich darauf, Ihnen bei Ihrem Einkauf zu helfen. Wie kann ich Ihnen dienen?",
        "Guten Tag und herzlich willkommen! Als Ihr Berater freue ich mich darauf, Ihnen die besten Produkte zu präsentieren. Wie kann ich Ihnen helfen?",
        "Guten Tag und herzlich willkommen! Als Ihr Berater möchte ich sicherstellen, dass Sie das beste Produkt finden. Welcher Artikel interessiert Sie?",
        "Guten Tag und herzlich willkommen! Ich bin hier, um als Ihr persönlicher Berater Produkte für Sie zu entdecken. Was soll ich für Sie finden?",
        "Guten Tag und herzlich willkommen! Ich bin Ihr persönlicher Berater und unterstütze Sie bei der Suche nach Produkten. Was darf ich für Sie finden?",
        "Guten Tag und herzlich willkommen! Ich möchte als Ihr Berater Ihr Einkaufserlebnis verbessern. Wie kann ich Ihnen helfen?",
        "Guten Tag und herzlich willkommen! Mein Ziel als Ihr Berater ist es, Sie heute beim Einkauf zu unterstützen. Wie kann ich Ihnen behilflich sein?",
        "Guten Tag! Als Ihr persönlicher Berater bin ich hier, um Ihnen bei der Produktauswahl zu helfen. Welche Produkte interessieren Sie heute besonders?",
        "Guten Tag! Als Ihr Berater bin ich darauf spezialisiert, Ihre Bedürfnisse zu verstehen und die besten Produkte für Sie zu finden. Wie kann ich Ihnen helfen?",
        "Guten Tag! Als Ihr Berater möchte ich Ihnen helfen, das perfekte Produkt zu finden. Wie kann ich Ihnen heute helfen?",
        "Guten Tag! Als Ihr Berater stehe ich Ihnen gerne zur Verfügung. Welche Produkte darf ich für Sie finden?",
        "Guten Tag! Ich bin hier, um Sie als Ihr persönlicher Berater bei Ihrer Suche zu unterstützen. Welches Produkt suchen Sie heute?",
        "Guten Tag! Mein Ziel ist es, Ihnen als Ihr persönlicher Berater bei Ihrem Online-Einkauf behilflich zu sein. Wie kann ich Ihnen helfen?",
        "Guten Tag! Mein Ziel ist es, Ihnen als Ihr persönlicher Berater den Einkauf zu erleichtern. Wie kann ich Ihnen heute helfen?",
        "Hallo und herzlich willkommen! Als Ihr Berater freue ich mich darauf, Sie durch die Welt des Online-Shoppings zu führen. Welcher Artikel interessiert Sie?",
        "Hallo und herzlich willkommen! Ich bin hier, um Ihnen als Ihr persönlicher Berater bei Ihrem Einkaufsprozess zu helfen. Wie kann ich Ihnen behilflich sein?",
        "Hallo und herzlich willkommen! Ich stehe Ihnen als Ihr persönlicher Berater zur Seite. Wonach suchen Sie?",
        "Hallo und herzlich willkommen! Mein Ziel als Ihr Berater ist es, Ihr Shopping-Erlebnis zu verbessern. Wie kann ich Ihnen helfen?",
        "Hallo und herzlich willkommen! Mit mir als Ihrem persönlichen Berater finden Sie garantiert das Passende. Wie kann ich Ihnen helfen?",
        "Hallo und schön, dass Sie da sind! Als Ihr Berater stehe ich Ihnen mit meiner Expertise zur Verfügung. Wie kann ich Ihnen helfen?",
        "Hallo und willkommen! Ich bin Ihr Berater und freue mich darauf, Ihnen bei der Auswahl der besten Produkte zu helfen. Was darf ich für Sie entdecken?",
        "Hallo und willkommen! Mit mir als Ihrem persönlichen Berater werden Sie das beste Produkt für Ihre Bedürfnisse finden. Wonach suchen Sie heute?",
        "Hallo und willkommen! Mit mir als Ihrem Berater finden wir garantiert das, wonach Sie suchen. Wie kann ich Ihnen heute behilflich sein?",
        "Herzlich willkommen! Als Ihr Berater bin ich darauf spezialisiert, Ihnen dabei zu helfen, das ideale Produkt zu finden. Was darf ich für Sie finden?",
        "Herzlich willkommen! Als Ihr Berater bin ich darauf spezialisiert, Ihnen die bestmögliche Unterstützung zu bieten. Welchen Artikel benötigen Sie?",
        "Herzlich willkommen! Als Ihr Berater bin ich hier, um sicherzustellen, dass Ihr Einkaufserlebnis optimal verläuft. Wonach suchen Sie?",
        "Herzlich willkommen! Als Ihr Berater bin ich hier, um sicherzustellen, dass Ihr Einkaufserlebnis reibungslos verläuft. Wie kann ich Ihnen behilflich sein?",
        "Herzlich willkommen! Als Ihr Berater bin ich hier, um sicherzustellen, dass Sie die besten Angebote erhalten. Wie kann ich Ihnen helfen?",
        "Herzlich willkommen! Als Ihr Berater bin ich hier, um sicherzustellen, dass Sie die richtigen Kaufentscheidungen treffen. Wie kann ich Sie unterstützen?",
        "Herzlich willkommen! Als Ihr Berater stehe ich Ihnen mit professionellem Rat zur Seite. Wie kann ich Ihnen bei Ihrem Einkauf helfen?",
        "Herzlich willkommen! Mit mir als Ihrem persönlichen Berater finden wir gemeinsam die besten Produkte für Sie. Welcher Artikel interessiert Sie?",
        "Schön, dass Sie hier sind! Als Ihr Berater bin ich bereit, Ihnen bei Ihrem Einkauf zu helfen. Wie kann ich Ihnen heute weiterhelfen?",
        "Schön, dass Sie hier sind! Ich bin Ihr Berater und freue mich darauf, Ihnen bei der Suche nach dem perfekten Produkt zu helfen. Was möchten Sie finden?",
        "Schön, dass Sie sich für meine Unterstützung entschieden haben! Als Ihr Berater bin ich hier, um Ihnen bei Ihrem Einkauf zu helfen. Wie kann ich Ihnen dienen?",
        "Schön, dass Sie sich für meine Unterstützung entschieden haben! Als Ihr Berater bin ich hier, um sicherzustellen, dass Sie das perfekte Produkt finden. Wie kann ich Ihnen dienen?",
        "Schön, dass Sie sich für meine Unterstützung entschieden haben! Ich bin Ihr persönlicher Berater und stehe Ihnen bei allen Fragen rund um Ihren Einkauf zur Verfügung. Wie kann ich Ihnen heute weiterhelfen?",
        "Willkommen bei Ihrem persönlichen Berater! Gemeinsam finden wir das beste Produkt für Ihre Bedürfnisse. Wie kann ich Ihnen heute helfen?",
        "Willkommen bei Ihrem persönlichen Berater! Ich bin hier, um sicherzustellen, dass Ihr Einkaufserlebnis reibungslos verläuft. Wie kann ich Ihnen behilflich sein?",
        "Willkommen bei Ihrem persönlichen Berater! Ich freue mich darauf, Ihnen bei Ihrer Suche behilflich zu sein. Was darf ich für Sie finden?",
        "Willkommen bei Ihrem persönlichen Berater! Lassen Sie mich Ihnen dabei helfen, das Richtige für Sie zu finden. Welches Produkt möchten Sie entdecken?",
        "Willkommen bei Ihrem persönlichen Berater! Mit meiner Erfahrung und Expertise unterstütze ich Sie gerne bei Ihrer Suche. Was für ein Produkt darf ich für Sie finden?",
        "Willkommen bei Ihrem persönlichen Berater! Mit meiner Hilfe finden wir garantiert das, wonach Sie suchen. Welchen Artikel möchten Sie entdecken?",
    ];
}
