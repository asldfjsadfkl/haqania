import React from "react";
import bombay from "../../../fonts/Bombay Black.ttf";
import cairo from "../../../fonts/cairo.ttf";
import {
  Document,
  StyleSheet,
  Page,
  Text,
  Font,
} from "@react-pdf/renderer";
Font.register({
  family: "bombay",
  format: "ttf",
  src: bombay,
});
Font.register({
  family: "cairo",
  format: "ttf",
  src: cairo,
});

const currdate = new Date().toLocaleTimeString();
export const PdfFile = ({ data }) => {
  // console.log(data);
  const styles = StyleSheet.create({
    header: {
      width: "100%",
      height: "7vh",
      textAlign: "center",
      backgroundColor: "gray",
      fontFamily: "cairo",
      fontSize: "17",
      color: "white",
      marginTop: "5px",
    },
    minheader: {
      width: "100%",
      height: "7vh",
      textAlign: "center",
      backgroundColor: "gray",
      fontFamily: "bombay",
      color: "white",
      fontSize: "10",
      marginTop: "-1",
    },
    studentheader: {
      width: "100%",
      height: "5vh",
      textAlign: "center",
      fontFamily: "bombay",
      fontSize: "12",
      color: "black",
      // marginTop: "10px",
    },

    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    },
    text: {
      fontFamily: "bombay",
      fontSize: "12",
      textAlign: "right",
      direction: "rtl",
      fontWeight: "hairline",
    },
    fonts: {
      fontFamily: "bombay",
      fontSize: "13",
    },
    container: {
      paddingRight: 15,
      marginBottom: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "90%",
      height: "5vh",
      borderBottom: 1,
    },
    date: {
      width: "90%",
      fontSize: "7",
      textAlign: "left",
    },
  });

  return (
    <Document>
      <Page style={styles.page} size="A6">
        <Text style={styles.header}>{data?.admissionNumber}</Text>
        <Text style={styles.header}>دارالعلوم حقانیہ لورالائی</Text>
        <Text style={styles.minheader}>کوئٹہ روڈ لورالائی بلوچستان</Text>
        <Text style={styles.studentheader}>طالبعلمasdfasdf</Text>

        <Text style={styles.container}>
          <Text style={styles.text}>داخلہ نمبر :</Text>
          <Text style={styles.text}>{data?.admissionNumber}</Text>
        </Text>
        <Text style={styles.container}>
          <Text style={styles.text}>نام طالبعلم:</Text>
          <Text style={styles.text}>{data?.name}</Text>
        </Text>
        <Text style={styles.container}>
          <Text style={styles.text}>شناختی کارڈ نمبر :</Text>
          <Text style={styles.text}>{data?.cnicNumber}</Text>
        </Text>

        <Text style={styles.container}>
          <Text style={styles.text}>سرپرست کا نام :</Text>
          <Text style={styles.text}>{data?.guiderName}</Text>
        </Text>

        <Text style={styles.container}>
          <Text style={styles.text}> سرپرست کا شناختی کارڈ نمبر:</Text>
          <Text style={styles.text}>{data?.gCnic}</Text>
        </Text>

        <Text style={styles.container}>
          <Text style={styles.text}> سابقہ درجہ:</Text>
          <Text style={styles.text}>{data?.previosClass}</Text>
        </Text>

        <Text style={styles.container}>
          <Text style={styles.text}> مطلوبہ درجہ:</Text>
          <Text style={styles.text}>{data?.newClass}</Text>
        </Text>

        <Text style={styles.container}>
          <Text style={styles.text}> فون نمبر:</Text>
          <Text style={styles.text}>{data?.phone}</Text>
        </Text>

        <Text style={styles.container}>
          <Text style={styles.text}> کیفیت:</Text>
          <Text style={styles.text}>{data?.situation}</Text>
        </Text>
        <Text style={styles.date}>Date: {(" ", currdate)}</Text>
      </Page>
    </Document>
  );
};
