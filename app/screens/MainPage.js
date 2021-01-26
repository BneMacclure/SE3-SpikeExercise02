import React from "react";
import {Text, TouchableOpacity, View, FlatList, List} from "react-native";
import {mainPageStyles} from '../config/Styles';
import {db, firebaseApp} from '../config/DatabaseConfig';
import {Ticket} from '../components/Ticket';
import { Alert } from "react-native";

/**
 * Screen that hold the ticket feed and button for Creating a Ticket
 */
export class MainPage extends React.Component {

  constructor(){
    super();

    this.state = {
        dataArray: null,
    }
  }

  // This is called when the component is rendered. Loads in the data for the FlatList
  componentDidMount() {
    db.ref('/tickets').on('value', (snapshot) => {
      var returnArray = [];
      
      snapshot.forEach( (snap) => {
          returnArray.push({
            key: snap.key,
            data: snap.val()
          });
      });
      
  
      this.setState({ dataArray: returnArray })
    });
  }

  render () {
    console.log(this.state.dataArray);
    const {navigation} = this.props;
    
    // Function to navigate to Create Ticket screen
    const navToCreateTicket = () => {
      navigation.navigate('Create Ticket');
    }

    // Function to close tickets
    const closeTicket = (key, title) => {
      console.log("key: "+key);
      /*
      let title = '';
      for (var i = 0; i < this.state.dataArray.length; i++) {
        if (this.state.dataArray[i].key === key) {
          title = this.state.dataArray[i].data.title.title;
        }
      }
      */
      
      db.ref('/tickets/'+key)
      .child("title")
      .update({
        title: "CLOSED:  "+title,
      });
    }

    // Function to view a ticket in the form of an alert
    const viewTicket = (key) => {
      let title = '';
      let desc = '';
      for (var i = 0; i < this.state.dataArray.length; i++) {
        console.log(this.state.dataArray[i].key);
        if (this.state.dataArray[i].key === key) {
          title = this.state.dataArray[i].data.title.title;
          desc = this.state.dataArray[i].data.description.description;
          console.log('I made it');
        }
      }

      Alert.alert(
        "Title: "+title,
        "Description: "+desc,
        [
          { text: "Ok", onPress: () => console.log("OK Pressed") },
          { text: "Close Ticket", onPress: () => closeTicket(key, title) }
        ],
        { cancelable: false }
      );
    }
    
    // Content of the screen
    return (
      
      <View style={mainPageStyles.container}>
        <View style={{paddingTop: 50}}>
          <Text style={mainPageStyles.header}>TICKET FEED</Text>
        </View>
        <FlatList
          data={this.state.dataArray}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={mainPageStyles.ticketFeedView}>
              <TouchableOpacity style={mainPageStyles.touchyBtn} onPress={() => viewTicket(item.key)}>
                <Text >{item.data.title.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={{paddingBottom: 50, width: 250, alignItems: 'center'}}>
          <TouchableOpacity style={mainPageStyles.touchyBtn} onPress={navToCreateTicket}>
            <Text>Create a Ticket</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
} 