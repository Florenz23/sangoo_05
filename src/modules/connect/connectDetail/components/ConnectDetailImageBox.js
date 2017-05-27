
import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';

import styles from '../../styles/styles';

import contacts from '../../../../mock/contacts_simple'

class ConnectDetailImageBox extends Component {

  render() {
  const datas = contacts
    return (
      <Container style={styles.container}>

        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>{data.note}</Text>
                </Body>
                <Right>
                  <Text note>{data.time}</Text>
                </Right>
              </ListItem>
        }
          />
        </Content>
      </Container>
    );
  }
}

export default ConnectDetailImageBox
