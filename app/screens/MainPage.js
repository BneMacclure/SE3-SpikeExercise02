import React from "react";
import {Text, TouchableOpacity, View, FlatList, List} from "react-native";
import {mainPageStyles} from '../config/Styles';
import {db, firebaseApp} from '../config/DatabaseConfig';
import {Ticket} from '../components/Ticket';
import { Alert } from "react-native";


export class MainPage extends React.Component {

  constructor(){
    super();

    this.state = {
        dataArray: null,
    }
  }

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
    
    const navToCreateTicket = () => {
      navigation.navigate('Create Ticket');
    }

    const closeTicket = (key) => {

    }

    const viewTicket = (key) => {
      var title = '';
      var desc = '';
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
          { text: "Close Ticket", onPress: () => closeTicket({key}) }
        ],
        { cancelable: false }
      );
    }
    
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