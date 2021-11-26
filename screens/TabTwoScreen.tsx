import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const resources = [
    { name: "name1", desc: "desc1", id: "001" },
    { name: "name2", desc: "desc2", id: "002" },
    { name: "name3", desc: "desc3", id: "003" },
    { name: "name4", desc: "desc4", id: "004" },
    { name: "name5", desc: "desc5", id: "005" },
    { name: "name6", desc: "desc6", id: "006" }
  ]
  return (
    <View style={styles.container}>
      <ScrollView>
        {resources.map((resource) => {
          return (
            <View key={resource.id} style={styles.card}>
              <Text style={styles.title}>{resource.name}</Text>
              <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
              <Text style={styles.description}>{resource.desc}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  card: {
    marginTop: 30,
    padding: 20,
    backgroundColor: Colors.custom.sage,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.custom.sand,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
  description: {
    color: 'white',
  }
});
