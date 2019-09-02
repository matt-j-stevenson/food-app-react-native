import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '£' || '££' || '£££'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text style={styles.title}>{results.length} results found</Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("£")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("££")} title="More Pricey" />
        <ResultsList
          results={filterResultsByPrice("£££")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 5
  }
});

export default SearchScreen;
