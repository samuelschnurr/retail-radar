/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-lines-per-function */

import {
    Avatar,
    ChatContainer,
    ConversationHeader,
    InfoButton,
    Message,
    MessageInput,
    MessageList,
    MessageSeparator,
    TypingIndicator,
    VideoCallButton,
    VoiceCallButton
} from "@chatscope/chat-ui-kit-react"

import profileJames from "./assets/images/ProfileJames.jpg"

function App() {
    return (
        <ChatContainer
            style={{
                height: "100vh"
            }}>
            <ConversationHeader>
                <Avatar name="James" src={profileJames} />
                <ConversationHeader.Content info="Active 10 mins ago" userName="James" />
                <ConversationHeader.Actions>
                    <VoiceCallButton />
                    <VideoCallButton />
                    <InfoButton />
                </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList typingIndicator={<TypingIndicator content="James is typing" />}>
                <MessageSeparator content="Saturday, 30 November 2019" />
                <Message
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "single",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}>
                    <Avatar name="James" src={profileJames} />
                </Message>
                <Message
                    model={{
                        direction: "outgoing",
                        message: "Hello my friend",
                        position: "single",
                        sender: "Oliver",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    avatarSpacer
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "first",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    avatarSpacer
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "normal",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    avatarSpacer
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "normal",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "last",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}>
                    <Avatar name="James" src={profileJames} />
                </Message>
                <Message
                    model={{
                        direction: "outgoing",
                        message: "Hello my friend",
                        position: "first",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    model={{
                        direction: "outgoing",
                        message: "Hello my friend",
                        position: "normal",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    model={{
                        direction: "outgoing",
                        message: "Hello my friend",
                        position: "normal",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    model={{
                        direction: "outgoing",
                        message: "Hello my friend",
                        position: "last",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    avatarSpacer
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "first",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "last",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}>
                    <Avatar name="James" src={profileJames} />
                </Message>
                <MessageSeparator content="Saturday, 31 November 2019" />
                <Message
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "single",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}>
                    <Avatar name="James" src={profileJames} />
                </Message>
                <Message
                    model={{
                        direction: "outgoing",
                        message: "Hello my friend",
                        position: "single",
                        sender: "Oliver",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    avatarSpacer
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "first",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    avatarSpacer
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "normal",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    avatarSpacer
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "normal",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "last",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}>
                    <Avatar name="James" src={profileJames} />
                </Message>
                <Message
                    model={{
                        direction: "outgoing",
                        message: "Hello my friend",
                        position: "first",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    model={{
                        direction: "outgoing",
                        message: "Hello my friend",
                        position: "normal",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    model={{
                        direction: "outgoing",
                        message: "Hello my friend",
                        position: "normal",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    model={{
                        direction: "outgoing",
                        message: "Hello my friend",
                        position: "last",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    avatarSpacer
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "first",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}
                />
                <Message
                    model={{
                        direction: "incoming",
                        message: "Hello my friend",
                        position: "last",
                        sender: "James",
                        sentTime: "15 mins ago"
                    }}>
                    <Avatar name="James" src={profileJames} />
                </Message>
            </MessageList>
            <MessageInput placeholder="Type message here" />
        </ChatContainer>
    )
}

export default App
