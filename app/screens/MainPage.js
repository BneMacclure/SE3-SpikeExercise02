import React, { useState } from "react";
import {Text, TouchableOpacity, View, FlatList, List} from "react-native";
import {mainPageStyles} from '../config/Styles';
import {db, firebaseApp} from '../config/DatabaseConfig';
import Dialog from "react-native-dialog";

/**
 * Screen that hold the ticket feed and button for Creating a Ticket
 */
export class MainPage extends React.Component {

  constructor(){
    super();

    this.state = {
        dataArray: null,
        key: "",
        title: "",
        desc: "",
        ans: "",
        visible: false,
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
    const {navigation} = this.props;
    
    console.log(this.state.dataArray);
    // Function to navigate to Create Ticket screen
    const navToCreateTicket = () => {
      navigation.navigate('Create Ticket');
    }

     // Function to close tickets
     
     const closeTicket = () => { 
      db.ref('/tickets/'+this.state.key)
        .child("title")
        .update({
          title: "CLOSED:  "+this.state.title,
        });
      db.ref('/tickets/'+this.state.key)
        .child("answer")
        .update({
          answer: this.state.ans,
        });
        
      this.setState({visible: false});
    }

    // Function to view a ticket in the form of an dialog
    const viewTicket = (k, t, d, a) => {
      this.setState({
        key: k,
        title: t,
        desc: d,
        ans: a,
        visible: true,
      })
    }

    const handleOk = () => {
      this.setState({visible: false})
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
              <TouchableOpacity style={mainPageStyles.touchyBtn} onPress={() => viewTicket(item.key, item.data.title.title, item.data.description.description, item.data.answer.answer)}>
                <Text >{item.data.title.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <View style={{paddingBottom: 50, width: 250, alignItems: 'center'}}>
          <TouchableOpacity style={mainPageStyles.touchyBtn} onPress={() => navToCreateTicket}>
            <Text>Create a Ticket</Text>
          </TouchableOpacity>
        </View>

        <View>
        <Dialog.Container visible={this.state.visible}>
          <Dialog.Title>{this.state.title}</Dialog.Title>
          <Dialog.Description>{this.state.desc}</Dialog.Description>
          <Dialog.Description>{this.state.ans}</Dialog.Description>
          <Dialog.Input onChangeText={(answer) => this.setState({ans: answer})}></Dialog.Input>
          <Dialog.Button label="Ok" onPress={handleOk}></Dialog.Button>
          <Dialog.Button label="Close Ticket" onPress={closeTicket}></Dialog.Button>
        </Dialog.Container>
      </View>
      </View>
    )
  }
} 