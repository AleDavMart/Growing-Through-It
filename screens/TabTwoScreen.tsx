import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const resources = [
    { name: "FindHelp.org", desc: "Search and connect to support. Financial assistance, food pantries, medical care, and other free or reduced-cost help starts here.", id: "001" },
    { name: "2-1-1", desc: "211 is a free information and referral service that connects people to health and human services in their community 24 hours a day, 7 days a week.", id: "002" },
    { name: "Don't Call The Police", desc: "Dontcallthepolice.com was founded in June 2020 and is an online directory of local resources available as alternatives to contacting law enforcement.", id: "003" },
    { name: "Bill Wilson Center - Contact Cares", desc: "Confidential 24/7 suicide and crisis helpline offering support for people experiencing mental health difficulties. Also offers specialized hotline for youth ages 7-24, providing supportive listening, crisis intervention, information and referrals.", id: "004" },
    { name: "Black Mental Health Alliance", desc: "BMHA's mission is to develop, promote and sponsor trusted culturally-relevant educational forums, trainings and referral services that support the health and well-being of Black people and their communities.", id: "005" },
    { name: "Call Blackline", desc: "BlackLine® provides a space for peer support, counseling, witnessing and affirming the lived experiences to folxs who are most impacted by systematic oppression with an LGBTQ+ Black Femme Lens.", id: "006" }
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
