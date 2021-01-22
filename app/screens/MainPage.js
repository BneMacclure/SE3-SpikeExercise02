import React, { useState } from "react";
import {ScrollView, Text, Button, TouchableOpacity, View, FlatList} from "react-native";
import {mainPageStyles} from '../config/Styles';
import {Ticket} from '../components/Ticket';
import * as firebase from 'firebase';
import {db, firebaseApp} from '../config/DatabaseConfig';


export class MainPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }
  componentWillMount = () => {
    this.listenForTickets(this.itemsRef);
  }
  navToCreateTicket = () => {navigation.navigate('Create Ticket')};
  listenForTickets = (itemsRef) => {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var tickets = [];
      snap.forEach((child) => {
        tickets.push({
          title: child.val().title,
          desc: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(tickets)
      });

    });
  }

  renderItem = (t) => {
    return (
      <Ticket title={t}/>
    )
  }
  render () {
    return (
      <View style={mainPageStyles.container}>
        <View style={{paddingTop: 50}}>
          <Text style={mainPageStyles.header}>TICKET FEED</Text>
        </View>
        <FlatList datasource={this.state.dataSource} renderrow={this.renderItem.bind(this)}></FlatList>
        <View style={{paddingBottom: 50, width: 250, alignItems: 'center'}}>
          <TouchableOpacity style={mainPageStyles.touchyBtn} onPress={navToCreateTicket}>
            <Text>Create a Ticket</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
} 