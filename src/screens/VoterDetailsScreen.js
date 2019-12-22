import React from "react";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import {
  Document,
  StyleSheet,
  Text,
  View,
  Image,
  Page,
  PDFDownloadLink
} from "@react-pdf/renderer";
const backendUrl = "http://localhost:8000";

const styles = StyleSheet.create({
  root: {
    border: "1px solid rgba(0,0,0,.3)",
    padding: 20,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 600,
    height: 300
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  textView: {
    display: "flex",
    flexDirection: "column",
    width: 200,
    height: 200
  }
});

const Pdf = ({ name, address, img }) => (
  <Document>
    <Page size="A4" style={styles.root}>
      <View>
        <Image
          src={{ uri: img, method: "GET", headers: {}, body: "" }}
          style={styles.img}
        />
      </View>
      <View style={styles.textView}>
        <Text>Name : {name}</Text>
        <Text>Area : {address}</Text>
      </View>
    </Page>
  </Document>
);

const VoterDetails = props => {
  const { name, address, imgName } = props.location.state;
  const img = `${backendUrl}/${imgName}`;
  return (
    <>
      <Container maxWidth="xs">
        <Grid
          style={{
            border: "1px solid rgba(0,0,0,.3)",
            padding: 20,
            marginTop: 20
          }}
          container
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={4}>
            <img
              src={img}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography>
              <span className="b">Name : </span>
              {name}
            </Typography>
            <Typography>
              <span className="b">Address : </span>
              {address}
            </Typography>
          </Grid>
        </Grid>

        <PDFDownloadLink
          document={<Pdf name={name} address={address} img={img} />}
          fileName="voter.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  marginTop: 20
                }}
              >
                download
              </Button>
            )
          }
        </PDFDownloadLink>
      </Container>
    </>
  );
};

export default VoterDetails;
