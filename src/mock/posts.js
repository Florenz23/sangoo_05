import Immutable from 'immutable';

import Reply from './Reply'
import Post from './Post'

var post1= " Kommt ein Römer in die Bar, hebt zwei Finger und sagt: 'Fünf Bier bitt' #ausilmenau"
var post2 = " Gerade hat mein Nachbar geklingelt und mich angemotzt, weil ich heute so oft auf Klo gegangen bin und eben so spät schon wieder. Ab 10 gilt Nachruhe. uNd die Spülung würde nerven"
var post3 = " Wisst ihr zufällig, ob man im Bafögamt auch mal außerhalb der Sprchzeiten was persönlich abgeben kann= Oder dann eher in Kuvert und in Briefkasten? #jhj"

const reply_message_11 = "Moin1 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_12 = "Moin2 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_13 = "Moin3 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_21 = "Tach1 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_22 = "Tach2 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_23 = "Tach3 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_31 = "Hey1 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_32 = "Hey2 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
const reply_message_33 = "Hey3 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."

const muserPost1 = {
  id : 1,
  message : post1,
  rating : 55,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_11,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_12,
      rating : 12
    },
    { id: 3 ,
      message : reply_message_13,
      rating : 13
    }
  ],
  bgColor : "#7cdbd5",
}
const muserPost2 = {
  id : 2,
  message : post2,
  rating : 45,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_21,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_22,
      rating : 12
    },
    { id: 3 ,
      message : reply_message_23,
      rating : 13
    }
  ],
  bgColor : "#f53240",
}
const muserPost3 = {
  id : 3,
  message : post3,
  rating : 35,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_31,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_32,
      rating : 12
    },
    { id: 3 ,
      message : reply_message_33,
      rating : 13
    }
  ],
  bgColor : "#f9be02",
}

posts  = [muserPost1,muserPost2,muserPost3]
const posts  = Immutable.fromJS(posts)

export default posts
