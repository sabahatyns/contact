import React from 'react';
import { View, Text, FlatList,Image, StyleSheet } from 'react-native';

const contacts = [
  { id: '1', name: 'Abbey Longton', phone: '+44 7867 123987' },
  { id: '2', name: 'Abbot Jones', phone: '+44 7867 489411' },
  { id: '3', name: 'Abdulla Suleman', phone: '987-654-3210' },
  { id: '4', name: 'Adele Parker', phone: '987-654-3210' },
  { id: '5', name: 'Adrian Thompson', phone: '987-654-3210' },
  { id: '6', name: 'Adriana', phone: '987-654-3210' },
  { id: '7', name: 'Alan Wilson', phone: '987-654-3210' },
  { id: '8', name: 'Ben Davies', phone: '987-654-3210' },
  { id: '9', name: 'Bill Lomas', phone: '987-654-3210' },
  { id: '1', name: 'Bob Dillan', phone: '987-654-3210' },
  { id: '2', name: 'Brian Swift', phone: '987-654-3210' },
];

const ContactList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Text>{item.name}</Text>
      <Text>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
         {/* <Text style={styles.text}  
            >
                </Text> */}
            <View style={{flexDirection:'row'}}>
                <Image 
                    style={styles.img}
                    source={require('./assets/woman.png')}
                    
                />
                <Text style={styles.text}>Contact List
                </Text> 
            </View>
             
      <FlatList 
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contactItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    // flexDirection: 'row',
  },
  
img: {
    // marginTop: -155,
    height: 40,
    width: 40,
    // marginLeft: 30,
    resizeMode: "contain",
    // marginBottom: 30,
},
text: {

    fontSize: 30,

    // marginTop: 5,
    marginLeft: 50,

    // padding: 50,


},
});

export default ContactList;
