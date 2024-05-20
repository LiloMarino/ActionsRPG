import React from "react";
import { View, Text, TouchableWithoutFeedback, SectionList } from "react-native";
import styles from "./styles/styles";

import CenterMessage from "./CenterMessage";

export default class Spells extends React.Component {
  navigate = (item) => {
    this.props.navigation.navigate("Spell", { spell: item });
  };

  groupSpellsByLevel(spells) {
    const redutor = (sections, spell) => {
      const level = spell.nivel;
      if (!sections[level]) {
        sections[level] = []; // Se não existir cria a seção
      }
      sections[level].push(spell); // Adiciona a magia na seção
      return sections;
    }
    const grouped = spells.reduce(redutor, {});

    return Object.keys(grouped).map((level) => ({
      title: `Nível ${level}`,
      data: grouped[level],
    }));
  }

  render() {
    const { spells } = this.props;
    const sections = this.groupSpellsByLevel(spells);
    return (
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.nome + index}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => this.navigate(item)}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.nome}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
          </View>
        )}
        ListEmptyComponent={<CenterMessage message="Sem magias salvas!" />}
        contentContainerStyle={[!spells.length && { flex: 1 }]}
        style={styles.background}
      />
    );
  }
}
