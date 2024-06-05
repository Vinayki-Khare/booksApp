// SearchScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement search logic using the searchQuery
  };

  return (
    <View>
      <Text>Search Screen</Text>
      <TextInput placeholder="Search..." value={searchQuery} onChangeText={setSearchQuery} />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchScreen;
