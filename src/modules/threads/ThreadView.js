import React, {PropTypes, Component} from 'react';
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


import { PostRatingBox, PostAddButton, PostTextBox } from './components'

const reset = () => {
  this.props.counterStateActions.reset();
};

const renderPosts = (posts,ratePostUp,ratePostDown,showPostDetail,navigate) => {
  return posts.map( post => {
    console.log(post)
    return (
        <TouchableOpacity
          style={[styles.container,{backgroundColor:post.get('bgColor')}]}
          key={post.get('id')}
          onPress={() => navigate({routeName: 'ThreadDetailViewContainer'})}
          >
            <PostTextBox key="jo" >
            {post}
            </PostTextBox>
            <PostRatingBox key="nö" style={styles.postRatingContainer}
            ratePostUp={() => ratePostUp()}
            ratePostDown={() => ratePostDown()}
            >
              {post}
            </PostRatingBox>
        </TouchableOpacity>
    )
  })
}

const ThreadView = (props) => {
  const {
      ratePostUp,
      ratePostDown,
      addNewPost,
      showPostDetail,
      navigate,
      reset
    } = props
  console.log(props)
    return (
      <View>
          <ScrollView>
            {renderPosts(props.posts,ratePostUp,ratePostDown,showPostDetail,navigate)}
          </ScrollView>
          <PostAddButton
          addNewPost={() => addNewPost()}
          />
      </View>
    )
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: '#349d4a',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});
var styles = StyleSheet.create({
  container: {
    padding : 15,
    marginBottom :6,
    flexDirection : 'row'
  },
  postTextContainer : {
    flex : 4
  },
  postText : {
    fontSize: 25,
    color: 'white',
  },
  postRatingContainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  },
  postRatingButtons : {
    fontSize : 50,
    color : '#4F8EF7'
  },
  postRatingValue : {
    fontSize : 30,
    color : '#4F8EF7'
  },
  postReplyContainer : {
    flexDirection : 'column',
  },
  postReplyIcon : {
    fontSize : 10,
  },
  postReplyNumber : {
    fontSize : 10,
  }
});

export default ThreadView;
