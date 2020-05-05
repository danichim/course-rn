import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [results, searchApi, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList
        navigation={navigation}
        results={filterResultsByPrice("$")}
        title="Cheap"
      />
      <ResultsList
        navigation={navigation}
        results={filterResultsByPrice("$$")}
        title="Bit expensive"
      />
      <ResultsList
        navigation={navigation}
        results={filterResultsByPrice("$$$")}
        title="Expensive"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
