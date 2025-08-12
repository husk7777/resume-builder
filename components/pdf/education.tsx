import { Text, View, StyleSheet } from '@react-pdf/renderer';

import { renderDates } from '@/app/lib/utils';
import { IconText } from './icons';
import { Qualification } from '@/app/lib/definitions';

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  title: {
    fontSize: 12,
    color: '#03156e',
    fontWeight: 700,
  },
  organisation: {
    fontSize: 12,
    color: '#0847c4',
    fontWeight: 700,
  },
  area: { fontStyle: 'italic', marginVertical: 4 },
  info: { flexDirection: 'row', justifyContent: 'space-between' , marginTop: 4},
});


export const Education: React.FC<Qualification> = ({
  organisation,
  name,
  location,
  commencementDate,
  completionDate,
}) => {
  return (
    <View style={styles.container} wrap={false}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.organisation}>{organisation}</Text>
      <View style={styles.info}>
        <IconText icon='location' text={location} />
        <IconText icon='calendar' text={renderDates(commencementDate, completionDate)} />
      </View>
    </View>
  );
};