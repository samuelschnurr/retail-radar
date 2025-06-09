# RetailRadar

This repository provides full access to the "RetailRadar" application - a full-stack single-page application (SPA) where users can interact with the AI chatbot "Chappie." Chappie is an OpenAI-powered assistant that asks users about their preferences and product wishes, then recommends suitable products available on Amazon.

Although the application is no longer officially maintained, it can still be set up and hosted independently using the code provided in this repository.

## Build and Run

Both the frontend and backend of this application can be built and started without any additional configuration. The connection between the frontend and backend is already fully established out of the box. However, for the backend to function correctly as an AI-powered chatbot, two resources and configurations are required. These must be provided either in the `appsettings.Development.json` file or via [.NET User Secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-9.0&tabs=windows).

**OpenAI Assistant**

An `Azure OpenAI Assistant` (Microsoft.CognitiveServices) must be set up using the [linked prompt](https://github.com/samuelschnurr/retail-radar/blob/main/Docs/Prompt.txt). The assistant uses the ongoing chat history and its configured prompt to provide product suggestions in a predefined format. You will need to store the following values in `appsettings.Development.json`:

- OpenAi API Secret
- AssistantId
- BaseAddress

These credentials enable the backend to communicate with the assistant and receive structured product suggestions based on user input.

**Google Search API**

To convert the product suggestions provided by the Assistant into actual Amazon links, the `Google Programmable Search Engine API` is used. The assistant returns structured product names, which are then searched via the API. The best-matching Amazon result is extracted and linked in place of the original product name.

You’ll need to set up a [Programmable Search Engine (Paid Element)](https://console.cloud.google.com/apis/library/programmablesearchelement.googleapis.com) which is described [here](https://developers.google.com/custom-search/docs/paid_element). 

 You will need to store the following values in `appsettings.Development.json`:

- Google API Secret
- EngineId

## Demonstration

Based on the chat messages, the AI chatbot Chappie analyzes your preferences and provides personalized product recommendations.

<p align="center">
<img alt="Image of the product landing screen which shows a 'Start now' button and information for the product." src="https://github.com/samuelschnurr/retail-radar/blob/main/Docs/Landingscreen-WithLayout.png" style="width:80%" />

<img alt="Image of a the mobile and responsive view of the landingscreen. Beside there is another mobile screen which shows the easy to start mobile experience which offers the users three different predefined buttons to submit as first message to the chatbot." src="https://github.com/samuelschnurr/retail-radar/blob/main/Docs/Responsive-WithLayout.png" style="width:80%" />

<img alt="Shows two images which contain a long conversation with the chatbot Chappie. It shows messages of the user and Chappie. In the end Chappie recommends 3 different products." src="https://github.com/samuelschnurr/retail-radar/blob/main/Docs/Recommendation-WithLayout.png" style="width:80%" />

</p>

## License

This repository is under MIT license (see <a href="https://github.com/samuelschnurr/retail-radar/blob/master/LICENSE">LICENSE</a>).
