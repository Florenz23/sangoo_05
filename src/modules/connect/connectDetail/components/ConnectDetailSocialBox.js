
import React, { Component } from 'react';
import { Container,List, Header, Title, Content, Button, Icon, IconNB, Card, CardItem, Text, Left, Right, Body } from 'native-base';
import { View } from 'react-native'

import styles from '../../styles/socialBox';

import contacts from '../../../../mock/contacts'

const _getContact = (contactId) => {
  const contact = contacts.find(function(obj){return obj.get('id') === contactId})
  return contact
}

const renderData = (contactId) => {
  const datas = contacts
  const contact = _getContact(contactId)
  return (
    <List>
         <CardItem>
              <Icon active name="logo-facebook" style={{ color: '#3B579D' }} />
              <Text>facebook</Text>
              <Right>
                <Icon name="search" />
              </Right>
            </CardItem>
          <CardItem>
              <Icon active name="logo-googleplus" style={{ color: '#DD5044' }} />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="search" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-twitter" style={{ color: '#55ACEE' }} />
              <Text>Twitter</Text>
              <Right>
                <Icon name="search" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-linkedin" style={{ color: '#007BB6' }} />
              <Text>LinkedIn</Text>
              <Right>
                <Icon name="search" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-youtube" style={{ color: '#D62727' }} />
              <Text>YouTube</Text>
              <Right>
                <Icon name="search" />
              </Right>
            </CardItem>
            </List>
      )
}

const ConnectDetailSocialBox = (props) => {
  const datas = contacts
  const {children} = props
    return (
      <View>
        {renderData(children)}
        </View>
    )
}

export default ConnectDetailSocialBox
