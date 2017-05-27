
import React, { Component } from 'react';
import { Container,List, Header, Title, Content, Button, Icon, IconNB, Card, CardItem, Text, Left, Right, Body, ListItem } from 'native-base';
import { View } from 'react-native'

import styles from '../../styles/socialBox';

import contacts from '../../../../mock/contacts'

const datas_list = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Alberto Moreno', 'Emre Can', 'Joe Allen', 'Phil Coutinho'];
const data_obj = [
  {
  tagDescription : 'Studiengang',
  tagText : 'Chemie'
  },{
  tagDescription : 'Lieblingsfarbe',
  tagText : 'Chemie'
  },{
  tagDescription : 'Interessen',
  tagText : 'Reisen'
}
]

const _getContact = (contactId) => {
  const contact = contacts.find(function(obj){return obj.get('id') === contactId})
  return contact
}

const renderData = (contactId) => {
  const datas = contacts
  const contact = _getContact(contactId)
  return (
      <View>
      <List
          dataArray={data_obj} renderRow={data =>
            <ListItem>
              <Text>{data.tagDescription}</Text>
              <Right>
                <Text>{data.tagText}</Text>
              </Right>
            </ListItem>
        }
        />
      </View>
      )
}

const ConnectDetailTagBox = (props) => {
  const datas = contacts
  const {children} = props
    return (
      <View>
        {renderData(children)}
      </View>
    )
}

export default ConnectDetailTagBox
