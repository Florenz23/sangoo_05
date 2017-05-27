import React from "react"
import { View, Text } from "react-native"

import { ConnectDetailImageBox, ConnectDetailShareBox, ConnectDetailSocialBox, ConnectDetailTagBox } from './components'

const renderImageBox = () => {
  return (
      <ConnectDetailImageBox />
  )
}
const renderSocialBox = () => {
  return (
      <ConnectDetailSocialBox />
  )
}
const renderTagBox = () => {
  return (
      <ConnectDetailTagBox />
  )
}
const renderShareBox = () => {
  return (
      <ConnectDetailShareBox />
  )
}

const ConnectDetailView = () => {
  return (
    <View>
      {renderImageBox()}
      {renderSocialBox()}
      {renderTagBox()}
      {renderShareBox()}
    </View>
  )
}
export default ConnectDetailView
