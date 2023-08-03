import React from "react";
import Chat from "./chat";
import ErrorBoundary from "./ErrorBoudary";
import "./styles/index.css";

function ChatBot(props) {
  return ( 
    <ErrorBoundary chatchError={props.chatchError}>
      <Chat
        companyId={props.companyId}
        analitics={props.analitics}
        trackImpression={props.trackImpression}
      />
    </ErrorBoundary>
  )
}

export default ChatBot;