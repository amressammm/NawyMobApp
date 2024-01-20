import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { apartmentModel } from "../../models/apartmentModel";
import { getApartmentDetails } from "../../services/apartmentsServices";

const ApartmentDetailsScreen = ({ route }) => {
  const { id, img } = route.params;
  const [apartmentDetails, setApartmentDetails] = useState<apartmentModel>();
  const getApartmentsData = () => {
    getApartmentDetails(id)
      .then((res) => {
        setApartmentDetails(res.data);
      })
      .catch((er) => {});
  };
  useEffect(() => {
    getApartmentsData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: img }} style={styles.image} />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.address}>{apartmentDetails?.address}</Text>
        <Text style={styles.description}>{apartmentDetails?.description}</Text>
        <View style={styles.line} />
        <Text style={styles.info}>
          <Text style={styles.bold}>Bedrooms: </Text>
          {apartmentDetails?.bedrooms}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.bold}>Bathrooms: </Text>
          {apartmentDetails?.bathrooms}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.bold}>Size: </Text>
          {`${apartmentDetails?.size} cm2`}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.bold}>Owner: </Text>
          {apartmentDetails?.ownerName}
        </Text>
        <View style={styles.line} />
        <Text
          style={styles.price}
        >{`Price: ${apartmentDetails?.price} EGP`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  imgContainer: { alignItems: "center" },
  image: {
    width: 400,
    height: 350,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
    margin: 10,
  },
  descContainer: { alignItems: "flex-start" },
  address: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 20,
    marginBottom: 8,
  },
  info: {
    fontSize: 20,
    marginBottom: 6,
  },
  price: {
    fontSize: 20,
    color: "#2ecc71",
  },
  bold: {
    fontWeight: "bold",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#d3d3d3",
    marginVertical: 20,
  },
});

export default ApartmentDetailsScreen;
