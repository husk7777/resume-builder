import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { ConditionalLink } from './conditional-link';
import { Icon, IconText } from './icons';
import { Position } from '@/app/lib/definitions';
import { renderDates } from '@/app/lib/utils';
import { Conditional } from '../conditional';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 700,
    color:'#03156e'
  },
  row: {
    flexDirection: 'row',
  },
  infoContainer: {
    justifyContent: 'space-between',
    marginTop: 4,
    alignItems: 'center',
    marginBottom: 4
  },
  company: {
    fontSize: 14,
    fontWeight: 700,
    color: '#0847c4',
    marginRight:8
  },
  description: {
    marginTop: 4,
  },
  list: {
    marginTop: 4,
    marginBottom:6
  },
  listItem: {
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listHeading:{
    fontSize:11,
    fontWeight:600,
    color:'#03156e'
  }
});

export const Experience: React.FC<Position> = ({
  title, 
  organisation,
  location,
  startDate,
  endDate,
  responsibilities,
  accomplishments
}) => {
  return (
    <View style={{ marginBottom: 4 }} wrap={false}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.infoContainer, styles.row]}>
        <View style={styles.row}>
          <Text style={styles.company}>{organisation}</Text>
          <IconText
            icon='location'
            text={`${location}`}
          />
          <IconText icon='calendar' text={renderDates(startDate, endDate)} />
        </View>
      </View>
      <Text style={styles.listHeading}>Responsibilities:</Text>
      <View style={styles.list}>
        {responsibilities.map((r) => (
          <View key={r.id} style={styles.listItem}>
            <Icon name='dot' size={10} />
            <Text style={{ marginLeft: 4 }}>{r.description}</Text>
          </View>
        ))}
      </View>
      <Conditional showWhen={accomplishments.length > 0}>
        <Text style={styles.listHeading}>Notable Accomplishments:</Text>
      </Conditional>
      <View style={styles.list}>
        {accomplishments.map((a) => (
          <View key={a.id} style={styles.listItem}>
            <Icon name='dot' size={10} />
            <Text style={{ marginLeft: 4 }}>{a.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};