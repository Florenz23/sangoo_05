import React from "react"
import { List } from "native-base"
import { View, Text } from "react-native"

import { ConnectDetailImageBox, ConnectDetailShareBox, ConnectDetailSocialBox, ConnectDetailTagBox } from './components'

const renderImageBox = (recentContactId) => {
  return (
      <ConnectDetailImageBox>
        {recentContactId}
      </ConnectDetailImageBox>
  )
}
const renderSocialBox = (recentContactId) => {
  return (
      <ConnectDetailSocialBox>
        {recentContactId}
      </ConnectDetailSocialBox>
  )
}
const renderTagBox = (recentContactId) => {
  return (
      <ConnectDetailTagBox>
        {recentContactId}
      </ConnectDetailTagBox>
  )
}
const renderShareBox = (recentContactId) => {
  return (
      <ConnectDetailShareBox>
        {recentContactId}
      </ConnectDetailShareBox>
  )
}

const ConnectDetailView = (props) => {
  const { recentContactId } = props
  return (
    <View>
      {renderImageBox(recentContactId)}
      <List>
      {renderSocialBox(recentContactId)}
      {renderTagBox(recentContactId)}
      {renderShareBox(recentContactId)}
      </List>
    </View>
  )
}
export default ConnectDetailView
