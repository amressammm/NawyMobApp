import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ApartmentCard from "../../components/apartment-card/apartmentCard";
import { getApartments } from "../../services/apartmentsServices";

const HomeScreen = ({ navigation }) => {
  const [apartments, setApartments] = useState([]);

  const getApartmentsData = () => {
    getApartments()
      .then((res) => {
        setApartments(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  useEffect(() => {
    getApartmentsData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 20 }}></View>

      <FlatList
        ListHeaderComponent={
          <Text style={styles.header}>Find your new Home</Text>
        }
        data={apartments}
        renderItem={({ item, index }) => (
          <ApartmentCard data={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    margin: 15,
    alignItems: "center",
  },
  header: { fontSize: 30, fontWeight: "bold", marginBottom: 8 },
});
