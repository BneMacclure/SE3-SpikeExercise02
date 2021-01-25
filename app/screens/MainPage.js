import React from "react";
import {Text, TouchableOpacity, View, FlatList, List} from "react-native";
import {mainPageStyles} from '../config/Styles';
import {db, firebaseApp} from '../config/DatabaseConfig';
import {Ticket} from '../components/Ticket';


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
    
    return (
      
      <View style={mainPageStyles.container}>
        <View style={{paddingTop: 50}}>
          <Text style={mainPageStyles.header}>TICKET FEED</Text>
        </View>
        <FlatList
          data={this.state.dataArray}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
              <Ticket
                title={item.data.title.title} 
              />
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