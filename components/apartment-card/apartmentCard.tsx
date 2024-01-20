import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";
import { apartmentModel } from "../../models/apartmentModel";
import { apartmentsImages } from "../../constants/apartments";

const ApartmentCard = ({
  data,
  navigation,
}: {
  data: apartmentModel;
  navigation: any;
}) => {
  const image =
    apartmentsImages[Math.floor(Math.random() * apartmentsImages.length)];
  return (
    <Card
      onPress={() => {
        navigation.navigate("Details", {
          id: data._id,
          img: image,
        });
      }}
      style={styles.container}
    >
      <Card.Content>
        <Title>{data.address} </Title>
        <Paragraph>{data.description}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: image }} />
    </Card>
  );
};

export default ApartmentCard;
const styles = StyleSheet.create({
  container: { width: 350, margin: 20 },
});
